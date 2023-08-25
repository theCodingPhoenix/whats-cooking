import React from "react";
import { useRecipeContext } from "../store/context";
import IngredientsList from "../components/IngredientsList";

const Home = () => {
  const { ingredients, ingredientsLoading } = useRecipeContext();

  return (
    <div>
      {ingredientsLoading ? (
        "Loading"
      ) : (
        <IngredientsList ingredients={ingredients}> </IngredientsList>
      )}
    </div>
  );
};

export default Home;
