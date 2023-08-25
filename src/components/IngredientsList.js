import React from "react";
import { Link } from "react-router-dom";

const IngredientsList = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => {
        const { idIngredient: id, strIngredient: name } = ingredient;
        return (
          <Link to={`/recipe/ingredient/${name}`} key={id}>
            <p>{name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default IngredientsList;
