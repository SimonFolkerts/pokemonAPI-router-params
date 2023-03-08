import { useEffect } from "react";
const PokemonList = () => {
  useEffect(() => {
    const getPokemonList = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const json = await response.json();
      console.log(json);
    };
    getPokemonList();
  }, []);

  return (
    <div>
      <h2>List</h2>
    </div>
  );
};
export default PokemonList;
