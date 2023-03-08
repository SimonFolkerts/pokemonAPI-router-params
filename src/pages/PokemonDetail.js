import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const name = useParams().name;
  console.log(name);
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
};
export default PokemonDetail;
