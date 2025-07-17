// HOW TO USE
// const jsonObj = {results: [{ id: pokemonId, name: pokemonName, url: pokemonUrl }, ...]};

const CARD_VARIATION = 100;
const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon?limit=${CARD_VARIATION}&offset=0`;

async function fetchPokemonList(listUrl) {
  const response = await fetch(listUrl, { mode: "cors" });
  if (!response.ok) throw new Error(`Response status: ${response.status}`);
  const data = await response.json();
  return data.results.map((item, index) => {
    item.id = index;
    return item;
  });
}

let pokemonData;
try {
  pokemonData = await fetchPokemonList(pokemonListUrl);
} catch(error) {
  console.error("Fetch pokemon list failed:", error.message);
}

// console.log(pokemonData);

export default pokemonData;

