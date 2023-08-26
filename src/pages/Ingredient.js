import React, { useEffect, useState } from "react";
import { useRecipeContext } from "../store/context";
import { useParams } from "react-router-dom";
import { fetchRecipesByIngredient, getFilteredRecipes } from "../store/actions";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const Ingredient = () => {
  const { name } = useParams();
  const { filteredRecipes, dispatch } = useRecipeContext();
  const [searchRecipe, setSearchRecipe] = useState("");

  const handleOnSearchChange = (search) => {
    setSearchRecipe(search);
  };

  useEffect(() => {
    if (searchRecipe.length < 1) {
      // load the recipes for the selected ingredient
      fetchRecipesByIngredient(dispatch, name);
    } else {
      getFilteredRecipes(dispatch, searchRecipe);
    }
  }, [searchRecipe, name, dispatch]);

  return (
    <>
      <SearchBar
        handleOnSearchChange={handleOnSearchChange}
        placeholderText="Search Recipes..."
      ></SearchBar>
      {filteredRecipes?.length ? (
        <RecipeList recipes={filteredRecipes} />
      ) : null}
    </>
  );
};

export default Ingredient;
