import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};
export default App;
