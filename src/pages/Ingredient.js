import React, { useEffect } from "react";
import { useRecipeContext } from "../store/context";
import { useParams } from "react-router-dom";
import { fetchRecipesByIngredient } from "../store/actions";
import RecipeList from "../components/RecipeList";

const Ingredient = () => {
  const { name } = useParams();
  const { recipes, dispatch } = useRecipeContext();

  useEffect(() => {
    // load the recipes for the selected ingredient
    fetchRecipesByIngredient(dispatch, name);
  }, [name, dispatch]);

  return <>{recipes?.length ? <RecipeList recipes={recipes} /> : null}</>;
};

export default Ingredient;
