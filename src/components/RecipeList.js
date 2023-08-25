import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes?.map((recipe) => {
        const { idMeal: id, strMeal: meal, strMealThumb: thumbnail } = recipe;

        return (
          <Link to={`/recipe/${id}`} key={id}>
            <img src={thumbnail} alt={meal} />
            <div>{meal}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipeList;
