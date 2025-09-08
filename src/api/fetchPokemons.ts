export const fetchPokemons = async ({ pageParam = 0 }) => {
  const limit = 10;
  const res = await fetch(
    `http://localhost:3000/api/pokemons?offset=${pageParam}&limit=${limit}`
  );
  const data = await res.json();
  return data;
};
