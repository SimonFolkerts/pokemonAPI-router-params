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

  if (!pokemon) {
    return (
      <div>
        <h2>Detail</h2>
      </div>
    );
  } else {
    return (
      <div className="pokemon-detail">
        <img
          className="pokemon-detail__image"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={`${pokemon.name} official artwork`}
        />
        <div className="pokemon-detail__not-image">
          <h2>
            #{pokemon.id} {pokemon.name}
          </h2>

          <ul className="pokemon-detail__types">
            {pokemon.types.map((type) => (
              <li className="pokemon-detail__type" key={type.type.name}>
                {type.type.name}
              </li>
            ))}
          </ul>
          <div className="pokemon__info">
            <h3>Info</h3>
            <ul>
              <li>Height: {pokemon.height}</li>
              <li>Weight: {pokemon.weight}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
export default PokemonDetail;
