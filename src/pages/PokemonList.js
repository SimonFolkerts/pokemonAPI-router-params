import { useEffect, useState } from "react";
const PokemonList = () => {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const json = await response.json();
      setPokemonArray(json.results);
      console.log(pokemonArray);
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
