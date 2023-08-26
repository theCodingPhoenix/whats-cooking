import React from "react";
import "../styles/recipe.scss";
import Error from "../pages/Error";

function RecipeDetail({ recipeInfo }) {
  let recipe;
  let ingredients = [];
  let measures = [];
  let lisOfIngredients = [];
  let instructions = [];

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

    // this will return empty element alternately
    instructions = recipe.strInstructions.split("\r\n");
    instructions = instructions.filter((instruction) => instruction.length > 1);
  }

  return (
    <>
      {recipe ? (
        <div className="recipe">
          <h1 className="recipe__title">{recipe.strMeal}</h1>
          <img
            src={recipe?.strMealThumb}
            alt={recipe.strMeal}
            title={recipe.strMeal}
          />
          <div className="recipe__ingredient-list recipe__ingredient-list__box recipe__ingredient-list__title">
            <h2 className="recipe__title recipe__title__sub-title recipe__title__sub-title--white">
              INGREDIENTS
            </h2>
            <ul className="recipe__ingredient-list recipe__ingredient-list__items ">
              {lisOfIngredients.map((requiredIngredient, index) => (
                <li key={index}>
                  {requiredIngredient.measure} {requiredIngredient.ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe__instructions">
            <h2 className="recipe__title recipe__title__sub-title">
              HOW TO PREPARE
            </h2>

            {instructions.map((instruction, index) => (
              <p className="recipe__instruction" key={index}>
                {Number(index) + 1}. {instruction}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <Error></Error>
      )}
    </>
  );
}

export default RecipeDetail;
