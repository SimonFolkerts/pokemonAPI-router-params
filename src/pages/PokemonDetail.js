import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);

  const name = useParams().name;

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const json = await response.json();
      setPokemon(json);
    };
    getPokemon();
  }, []);

  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
};
export default PokemonDetail;
