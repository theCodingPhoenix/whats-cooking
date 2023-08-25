import axios from "axios";
import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_ERROR,
  //   FETCH_INGREDIENT_MEALS_REQUEST,
  //   FETCH_INGREDIENT_MEALS_SUCCESS,
  //   FETCH_INGREDIENT_MEALS_ERROR,
  //   FETCH_MEAL_REQUEST,
  //   FETCH_MEAL_SUCCESS,
  //   FETCH_MEAL_ERROR,
} from "./actionTypes";

export const fetchIngredients = async (dispatch) => {
  try {
    dispatch({ type: FETCH_INGREDIENTS_REQUEST });
    const response = await axios.get(
      "www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: response.data.meals });
  } catch (error) {
    dispatch({ type: FETCH_INGREDIENTS_ERROR, payload: error.message });
  }
};
