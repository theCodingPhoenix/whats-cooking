import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../store/context";
import RecipeDetail from "../components/RecipeDetail";
import { fetchRecipeById } from "../store/actions";

function Recipe() {
  const { id } = useParams();
  const { recipe, recipeLoading, dispatch } = useRecipeContext();

  useEffect(() => {
    // load the recipes for the selected ingredient
    fetchRecipeById(dispatch, id);
  }, [id, dispatch]);

  return (
    <>
      <h1>{recipe[0].strMeal}</h1>
      {!recipeLoading ? <RecipeDetail recipeInfo={recipe[0]} /> : null}
    </>
  );
}

export default Recipe;
