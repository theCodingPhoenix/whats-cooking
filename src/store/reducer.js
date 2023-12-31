import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENT_MEALS_REQUEST,
  FETCH_INGREDIENT_MEALS_SUCCESS,
  FETCH_INGREDIENT_MEALS_ERROR,
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_ERROR,
  FILTER_INGREDIENTS,
  FILTER_RECIPES,
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
        filteredIngredients: action.payload,
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
        filteredRecipes: action.payload,
      };
    }
    case FETCH_INGREDIENT_MEALS_ERROR: {
      return {
        ...state,
        recipesLoading: false,
        recipesError: true,
      };
    }
    case FETCH_RECIPE_REQUEST: {
      return {
        ...state,
        recipeLoading: true,
      };
    }
    case FETCH_RECIPE_SUCCESS: {
      return {
        ...state,
        recipeLoading: false,
        recipe: action.payload,
      };
    }
    case FETCH_RECIPE_ERROR: {
      return {
        ...state,
        recipeLoading: false,
        recipesError: true,
      };
    }
    case FILTER_INGREDIENTS: {
      return {
        ...state,
        filteredIngredients: state.ingredients.filter((ingrdient) =>
          ingrdient.strIngredient.toLowerCase().includes(action.param)
        ),
      };
    }

    case FILTER_RECIPES: {
      return {
        ...state,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.strMeal.toLowerCase().includes(action.param)
        ),
      };
    }

    default:
      return state;
  }
};
