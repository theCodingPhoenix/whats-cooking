import React from "react";
import { useRecipeContext } from "../store/context";
import IngredientsList from "../components/IngredientsList";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const { ingredients, ingredientsLoading, recipes, recipesLoading } =
    useRecipeContext();

  return (
    <div>
      <Header></Header>
      {recipesLoading ? (
        "Loading"
      ) : (
        <RecipeList recipes={recipes}> </RecipeList>
      )}
      {ingredientsLoading ? (
        "Loading"
      ) : (
        <IngredientsList ingredients={ingredients}> </IngredientsList>
      )}
    </div>
  );
};

export default Home;
