import { useEffect, useState } from "react";
import pokemonData from "../services/pokemon-data";
import revealPokemon from "../lib/reveal-pokemon";
import Card from "./Card";

export default function Game(props) {
  const [catchedIds, setCatchedIds] = useState([]);
  const [revealedPokemon, setRevealedPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      setRevealedPokemon(revealPokemon(await pokemonData, catchedIds));
    })();
  }, [catchedIds]);

  return (
    <div>
      {revealedPokemon.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            catchedIds={catchedIds}
            setCatchedIds={setCatchedIds}
            setRevealedPokemon={setRevealedPokemon}
            {...props}
          />
        );
      })}
    </div>
  );
}
