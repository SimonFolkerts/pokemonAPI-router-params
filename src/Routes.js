import { Routes, Route } from "react-router-dom";

import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* if we visit localhost:3000/pokemon we see the list view */}
      <Route path="/" element={<PokemonList />} />

      {/*  if we visit localhost:300/pokemon/<param> we get the detail view*/}
      <Route path="/:name" element={<PokemonDetail />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
