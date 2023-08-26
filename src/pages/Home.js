import React, { useState, useEffect } from "react";
import { useRecipeContext } from "../store/context";
import IngredientsList from "../components/IngredientsList";
// import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import { getFilteredIngredients, fetchIngredients } from "../store/actions";

const Home = () => {
  const { ingredients, ingredientsLoading, filteredIngredients, dispatch } =
    useRecipeContext();
  const [searchIngredient, setSearchIngredient] = useState("");

  const handleOnSearchChange = (search) => {
    setSearchIngredient(search);
  };

  useEffect(() => {
    // if the searchbox is empty load all ingredients
    if (searchIngredient.length < 1) {
      fetchIngredients(dispatch);
    } else {
      // load ingredients based on the search team
      getFilteredIngredients(dispatch, searchIngredient);
    }
  }, [dispatch, searchIngredient]);

  return (
    <>
      <SearchBar
        handleOnSearchChange={handleOnSearchChange}
        placeholderText="Ingredients"
      ></SearchBar>
      <div>
        {ingredientsLoading ? (
          "Loading"
        ) : (
          <IngredientsList ingredients={filteredIngredients}> </IngredientsList>
        )}
      </div>
    </>
  );
};

export default Home;
