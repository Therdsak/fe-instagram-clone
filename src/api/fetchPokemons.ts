export const fetchPokemons = async () => {
  const res = await fetch("http://localhost:3000/api/pokemons"); // ชี้ไปที่ backend Node.js
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};
