# React Router - Pokemon API Example

To view this readme rendered out, use `Ctrl Shift V` or `Cmd Shift V` in VSCode to open a markdown previewer

This project showcases using React Router to create a list/detail model
Each step is on its own branch, switch through to see them:
<br>
`git checkout step_01`
<br>
`git checkout step_02`
<br>
`git checkout step_03`
<br>
etc

# Step 1

Create a new React app and empty out the unnecessary files, and then install the react browser router:
`npm install react-router-dom`

# Step 2

Create a `pages` folder in `src`, and inside this new folder create three new components:

`PokemonList.js`

```javascript
const PokemonList = () => {
  return (
    <div>
      <h2>List</h2>
    </div>
  );
};
export default PokemonList;
```

and

`PokemonDetail.js`

```javascript
const PokemonDetail = () => {
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
};
export default PokemonDetail;
```

and a 404 page

`NotFound.js`

```javascript
const NotFound = () => {
  return (
    <div>
      <h2>404 Page not Found</h2>
    </div>
  );
};
export default NotFound;
```

These will be the list/detail views, plus a catchall 404, that we will want to manage with React Router.
<br>
These will be the list/detail views that we will want to manage with React Router.

# Step 3

Now create a `Routes.js` file in the `src` folder.
Here we will assign the new page components to routes with paths that allow the router to manage them.

`Routes.js`

```javascript
import { Routes, Route } from "react-router-dom";

import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/:name" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
```

<br>

Import the `AppRoutes` component from the `Routes.js` file into `App.js`. Here we can use the `<BrowserRouter>` component to add routing to the app by wrapping it around the app.

Finally, mount the `AppRoutes` component in App.js

<br>

`App.js`

```javascript
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
```
