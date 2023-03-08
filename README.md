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

# Step 4

## Overview

Now that we have the two views ready, we need to fetch the data. The List view will render a list of Pokemon, which we will fetch from the PokeAPI:
`https://pokeapi.co/api/v2/pokemon/`

The Detail view will Render information about that pokemon fetched from that Pokemon's specific endpoint on the API:
`https://pokeapi.co/api/v2/pokemon/bulbasaur`

In order for the Detail view to know which pokemon to fetch, we will attach the name of the clicked pokemon from the list into the url path for the detail view as a dynamic segment.

Then we will program the Detail view to read the dynamic segment, attach it to the end of the fetch URL to the API
(`https://pokeapi.co/api/v2/pokemon/bulbasaur`) and fetch it that way.

## Add side effect to List View

When the list view renders, we want it to also fetch the list of pokemon as a side effect. We can use useEffect to set this up.

Import useEffect into `PokemonList.js` so that we can use it to specify a side effect.

In the component, above the template return, call useEffect and pass it a callback function, and an empty array.
The empty array will mean this logic will only run once on first render, preventing an infinite loop.

<br>

`PokemonList.js`

```javascript
import { useEffect } from "react";

const PokemonList = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <h2>List</h2>
    </div>
  );
};
export default PokemonList;
```

<br>

Inside this function, define the asynchronous data fetcher, and then immediately call it. For now it can console log the retreved data:

```javascript
useEffect(() => {
  const getPokemonList = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const json = await response.json();
    console.log(json);
  };
  getPokemonList();
}, []);
```

# Step 5

Time to render the list out rather than console.log it. First, we need to store the list somewhere.

Create a new state variable in `PokemonList.js` by importing the `useState` hook from React (add it to the existing `useEffect` import):

```javascript
import { useEffect, useState } from "react";`
```

In the `PokemonList` component itself, above the useEffect fetch, create a state variable using `useState` with an initial value set to an empty array (this allows the use of .map later even while waiting for the data to come back from the API):

```javascript
import { useEffect, useState } from "react";
const PokemonList = () => {
  const [pokemonArray, setPokemonArray] = useState([]);
  // continued...
```

FInally, modify the fetch function so that instead of console.log the data it sets the results array from the json data to the state variable and then logs that instead:

```javascript
useEffect(() => {
  const getPokemonList = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const json = await response.json();
    setPokemonArray(json.results); // <--
    console.log(pokemonArray); // <--
  };
  getPokemonList();
}, []);
```

At this stage you should see an array of pokemon in the browser console.

# Step 6

Create a folder called `components` in `src` and make a new component in it called `PokemonListItem.js`.

`PokemonListItem.js`:

```javascript
const PokemonListItem = ({ name }) => {
  return (
    <li>
      <h3>{name}</h3>
    </li>
  );
};
export default PokemonListItem;
```

This accepts a single prop called `name`.
Import this component into the `PokemonList.js` component.

```javascript
import PokemonListItem from "../components/PokemonListItem";
```

Now right above the template `return`, run `.map()` on the `pokemonArray`, using it to generate instances of the `PokemonListItem` component with the pokemon name injected in as a prop; finally place the resulting array of list items into the template itself:

```javascript
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
```

Now the pokemon are rendered into the DOM
