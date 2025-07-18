import { useEffect, useState } from "react";
import revealPokemon from "../lib/reveal-pokemon";
import pokemonData from "../services/pokemon-data";

export default function Card({
  pokemon,
  catchedIds,
  setCatchedIds,
  setRevealedPokemon,
  scoreboard,
  setScoreboard,
}) {
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(pokemon.url, { mode: "cors" });
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);
        const data = await response.json();
        setImageUrl(data.sprites.other["official-artwork"].front_default);
      } catch (error) {
        console.error("Fetch pokemon image failed:", error.message);
      }
    })();
  });
  const handleCardPick = async () => {
    if (catchedIds.includes(pokemon.id)) {
      if (scoreboard.score >= scoreboard.bestScore) {
        setScoreboard({ score: 0, bestScore: scoreboard.score });
      } else {
        setScoreboard({ score: 0, bestScore: scoreboard.bestScore });
      }
      setCatchedIds([]);
    } else {
      setScoreboard({
        score: scoreboard.score + 1,
        bestScore: scoreboard.bestScore,
      });
      setCatchedIds([...catchedIds, pokemon.id]);
    }
    setRevealedPokemon(revealPokemon(await pokemonData, catchedIds));
  };
  return (
    <div
      onClick={handleCardPick}
      className="flex flex-col items-center bg-gray-200 p-4"
    >
      <h2>{pokemon.name}</h2>
      <img src={imageUrl} alt="Pokemon image" className="w-40" />
    </div>
  );
}
