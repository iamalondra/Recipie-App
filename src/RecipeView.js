import React from "react"

function RecipeView({recipe:{name, cuisine, photo, ingredients, preparation}, deleteRecipe}){
 //recipes: [{name, cuisine, photo, ingredients, preparation}, {...}]

    return(
    <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>{<img alt={name} src={photo}/>}</td>
        <td className="content_td"><p>{(ingredients)}</p></td>
        <td className="content_td"><p>{(preparation)}</p></td>
        <td><button onClick={deleteRecipe} name="delete">Delete</button></td>
    </tr>
    );
}

export default RecipeView;