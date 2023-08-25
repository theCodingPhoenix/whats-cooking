import React from "react";

const IngredientsList = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => {
        const { strIngredient: name } = ingredient;
        return (
          <p className="text-white fs-11 fw-6 ls-1 text-uppercase">{name}</p>
        );
      })}
    </div>
  );
};

export default IngredientsList;
