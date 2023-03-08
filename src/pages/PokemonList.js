import { useEffect, useState } from "react";
import PokemonListItem from "../components/PokemonListItem";
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

  const listItems = pokemonArray.map((item) => {
    return <PokemonListItem key={item.name} name={item.name} />;
  });

  return (
    <div>
      <h2>List</h2>
      <ul>{listItems}</ul>
    </div>
  );
};
export default PokemonList;
