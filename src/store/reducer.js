import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENT_MEALS_REQUEST,
  FETCH_INGREDIENT_MEALS_SUCCESS,
  FETCH_INGREDIENT_MEALS_ERROR,
} from "./actionTypes";

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsLoading: true,
      };
    }
    case FETCH_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsLoading: false,
        ingredients: action.payload,
      };
    }
    case FETCH_INGREDIENTS_ERROR: {
      return {
        ...state,
        ingredientsLoading: false,
        ingredientsError: true,
      };
    }
    case FETCH_INGREDIENT_MEALS_REQUEST: {
      return {
        ...state,
        recipesLoading: true,
      };
    }
    case FETCH_INGREDIENT_MEALS_SUCCESS: {
      return {
        ...state,
        recipesLoading: false,
        recipes: action.payload,
      };
    }
    case FETCH_INGREDIENT_MEALS_ERROR: {
      return {
        ...state,
        recipesLoading: false,
        recipesError: true,
      };
    }
    default:
      return state;
  }
};
