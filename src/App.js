import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  //recipes: [{name, cuisine, photo, ingredients, preparation}, {...}]
  const addNewRecipe = (newRecipe) => {
    setRecipes((currentRecipe) => [ ...currentRecipe, newRecipe]);
  };

  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipe) => currentRecipe.filter((recipe, index)=> index !== indexToDelete))
  }

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList deleteRecipe={deleteRecipe} recipes={recipes}/>
      <RecipeCreate addNewRecipe={addNewRecipe}/>
    </div>
  );
}

export default App;
