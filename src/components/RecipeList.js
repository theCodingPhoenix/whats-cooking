import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes?.map((recipe) => {
        const { idMeal: id, strMeal: meal, strMealThumb: thumbnail } = recipe;

        return (
          <div key={id}>
            <img src={thumbnail} alt={meal} />
            <div>{meal}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
