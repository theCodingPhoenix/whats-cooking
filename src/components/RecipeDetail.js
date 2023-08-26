import React from "react";
import "../styles/recipe.scss";

function RecipeDetail({ recipeInfo }) {
  let recipe;
  let ingredients = [];
  let measures = [];
  let lisOfIngredients = [];

  // lets build up an array of objects that will contain
  // ingredients required for the recipe and the measures
  if (recipeInfo && recipeInfo[0]) {
    recipe = { ...recipeInfo[0] };
    for (let keyProp in recipe) {
      // build the ingredients array
      if (keyProp.includes("strIngredient")) {
        if (recipe[keyProp]) {
          ingredients.push(recipe[keyProp]);
        }
      } else if (keyProp.includes("strMeasure")) {
        // build the measurements array
        if (recipe[keyProp]) {
          measures.push(recipe[keyProp]);
        }
      }
    }

    if (ingredients.length > 0) {
      // build the list of ingredients with ingrdient and their measurement
      ingredients.forEach(function (currentIngredient, index) {
        let currentMeasure = ";";
        if (measures.length > 0 && measures[index]) {
          currentMeasure = measures[index];
        }
        lisOfIngredients.push({
          ingredient: currentIngredient,
          measure: currentMeasure,
        });
      });
    }
  }

  return (
    <>
      {recipe ? (
        <div className="recipe">
          <p>{recipe.strMeal}</p>
          <img
            src={recipe?.strMealThumb}
            alt={recipe.strMeal}
            title={recipe.strMeal}
          />
          <ul>
            {lisOfIngredients.map((requiredIngredient, index) => (
              <li key={index}>
                {requiredIngredient.measure} {requiredIngredient.ingredient}
              </li>
            ))}
          </ul>
          <div>{recipe.strInstructions}</div>
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </>
  );
}

export default RecipeDetail;
