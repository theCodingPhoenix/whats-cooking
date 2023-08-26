import React, { createContext, useContext, useEffect, useReducer } from "react";
import { recipeReducer } from "./reducer";
import { fetchIngredients } from "./actions";

const initialState = {
  ingredients: [],
  ingredientsLoading: false,
  ingredientsError: false,
  recipes: [],
  recipesLoading: false,
  recipesError: false,
  recipe: [],
  recipeLoading: false,
  recipeError: false,
  filteredIngredients: [],
  filteredReipes: [],
};

const RecipeContext = createContext({});

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  useEffect(() => {
    fetchIngredients(dispatch);
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        dispatch,
        fetchIngredients,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
