import axios from "axios";
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

const axiosCall = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

const URLS = {
  ingredientList: "list.php?i=list",
  filteredIngredient: "filter.php?i=",
  recipeLookup: "lookup.php?i=",
};

export const fetchIngredients = async (dispatch) => {
  try {
    dispatch({ type: FETCH_INGREDIENTS_REQUEST });
    const response = await axiosCall.get(`${URLS.ingredientList}`);
    dispatch({
      type: FETCH_INGREDIENTS_SUCCESS,
      payload: response.data.meals,
    });
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

export const fetchRecipeById = async (dispatch, id) => {
  try {
    dispatch({
      type: FETCH_RECIPE_REQUEST,
    });

    const response = await axiosCall.get(`${URLS.recipeLookup}${id}`);
    dispatch({
      type: FETCH_RECIPE_SUCCESS,
      payload: response.data.meals,
    });
  } catch (error) {
    dispatch({
      type: FETCH_RECIPE_ERROR,
      payload: error.message,
    });
  }
};

export const getFilteredIngredients = (dispatch, search) => {
  console.log(search.toLowerCase());
  dispatch({
    type: FILTER_INGREDIENTS,
    param: search.toLowerCase(),
  });
};

export const getFilteredRecipes = (dispatch, search) => {
  dispatch({
    type: FILTER_RECIPES,
    param: search.toLowerCase(),
  });
};