import { useEffect, useState } from "react";
import pokemonData from "../data/pokemon-data";

const REVEAL_NUMBER = 12;

export default function Game({ setScoreboard }) {
  const [catchedPokemon, setCatchedPokemon] = useState([]);

  return <div></div>;
}

function revealPokemon(data, catchedData) {
  // At least one pokemon hasn't been catched yet
  let unpickedId = randomizeInt(data.length);
  while (catchedData.some((item) => item.id === unpickedId)) {
    unpickedId = randomizeInt(data.length);
  }
  const revealedIds = [unpickedId];
  // The rest is not cared about as long as no duplication exists
  for (let iter = 0; iter < REVEAL_NUMBER - 1; iter++) {
    let randomId = randomizeInt(data.length);
    while (revealedIds.includes(randomId)) {
      randomId = randomizeInt(data.length);
    }
    revealedIds.push(randomId);
  }
  return revealedIds.map((id) => {
    return data.find((item) => item.id === id);
  });
}

function randomizeInt(number) {
  return Math.floor(Math.random() * number);
}
