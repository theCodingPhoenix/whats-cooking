import React from "react";
import { Link } from "react-router-dom";
import "../styles/recipes.scss";

const RecipeList = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="recipes">
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
