import { Link } from "react-router-dom";
const PokemonListItem = ({ name }) => {
  return (
    <Link to={"/" + name}>
      <li>
        <h3>{name}</h3>
      </li>
    </Link>
  );
};
export default PokemonListItem;
