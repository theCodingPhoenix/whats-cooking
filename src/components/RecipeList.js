import React from "react";
import { Link } from "react-router-dom";
import "../styles/recipes.scss";

const RecipeList = ({ recipes, ingredient }) => {
  return (
    <div className="recipes">
      <p className="recipes__info">Let's get that {ingredient} to use!</p>
      {recipes?.map((recipe) => {
        const { idMeal: id, strMeal: meal, strMealThumb: thumbnail } = recipe;

        return (
          <Link to={`/recipe/${id}`} key={id}>
            <p className="recipes__name">{meal}</p>
            <img src={thumbnail} alt={meal} />
          </Link>
        );
      })}
    </div>
  );
};

export default RecipeList;
