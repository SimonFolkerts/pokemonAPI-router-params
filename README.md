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

Create a `pages` folder in `src`, and inside this new folder create two new components:

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

These will be the list/detail views that we will want to manage with React Router.
