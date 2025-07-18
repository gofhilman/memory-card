const REVEAL_NUMBER = 12;

export default function revealPokemon(data, catchedIds) {
  const revealedIds = [];
  // Randomize pokemon picks without duplication
  for (let iter = 0; iter < REVEAL_NUMBER - 1; iter++) {
    let randomId = randomizeId(data.length);
    while (revealedIds.includes(randomId)) {
      randomId = randomizeId(data.length);
    }
    revealedIds.push(randomId);
  }
  // At least one pokemon hasn't been catched yet
  let unpickedId = randomizeId(data.length);
  while (revealedIds.includes(unpickedId) || catchedIds.includes(unpickedId)) {
    unpickedId = randomizeId(data.length);
  }
  revealedIds.splice(Math.floor(Math.random() * REVEAL_NUMBER), 0, unpickedId);
  return revealedIds.map((id) => {
    return data.find((item) => item.id === id);
  });
}

function randomizeId(number) {
  return Math.floor(Math.random() * number) + 1;
}
