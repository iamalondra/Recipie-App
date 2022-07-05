import React, { useState } from "react";

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers

function RecipeCreate({addNewRecipe}) {
  //recipes: [{name, cuisine, photo, ingredients, preparation}, {...}]

  //create an initial state
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const value = target.value;

    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...initialState })
    addNewRecipe(formData)
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  name="photo"
                  type="URL"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  name="preparation"
                  type="text"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
