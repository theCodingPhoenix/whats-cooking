import axios from "axios";
import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_ERROR,
} from "./actionTypes";

const baseURL = "https://www.themealdb.com/api/json/v1/1/";
const ingredientListURL = "list.php?i=list";

export const fetchIngredients = async (dispatch) => {
  try {
    dispatch({ type: FETCH_INGREDIENTS_REQUEST });
    const response = await axios.get(baseURL + ingredientListURL);
    dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: response.data.meals });
  } catch (error) {
    dispatch({ type: FETCH_INGREDIENTS_ERROR, payload: error.message });
  }
};
