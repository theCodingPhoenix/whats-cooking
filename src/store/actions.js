import axios from "axios";
import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENT_MEALS_REQUEST,
  FETCH_INGREDIENT_MEALS_SUCCESS,
  FETCH_INGREDIENT_MEALS_ERROR,
} from "./actionTypes";

const axiosCall = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

const URLS = {
  ingredientList: "list.php?i=list",
  filteredIngredient: "filter.php?i=",
};

export const fetchIngredients = async (dispatch) => {
  try {
    dispatch({ type: FETCH_INGREDIENTS_REQUEST });
    const response = await axiosCall.get(`${URLS.ingredientList}`);
    dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: response.data.meals });
  } catch (error) {
    dispatch({ type: FETCH_INGREDIENTS_ERROR, payload: error.message });
  }
};

export const fetchRecipesByIngredient = async (dispatch, ingredient) => {
  try {
    dispatch({ type: FETCH_INGREDIENT_MEALS_REQUEST });

    const response = await axiosCall.get(
      `${URLS.filteredIngredient}${ingredient}`
    );

    dispatch({
      type: FETCH_INGREDIENT_MEALS_SUCCESS,
      payload: response.data.meals,
    });
  } catch (error) {
    dispatch({ type: FETCH_INGREDIENT_MEALS_ERROR, payload: error.message });
  }
};
