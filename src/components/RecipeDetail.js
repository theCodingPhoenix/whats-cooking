import React from "react";

function RecipeDetail({ recipeInfo }) {
  console.log(recipeInfo);
  return <div>{recipeInfo.strInstructions} </div>;
}

export default RecipeDetail;
