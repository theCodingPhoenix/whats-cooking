import React from "react";
import { Link } from "react-router-dom";
import "../styles/ingredient-list.scss";

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="ingredient-list">
      {ingredients.map((ingredient) => {
        const { idIngredient: id, strIngredient: name } = ingredient;
        const imgSrc = `https:/www.themealdb.com/images/ingredients/${name}-Small.png`;
        return (
          <Link to={`/recipe/ingredient/${name}`} key={id}>
            <div className="ingredient-list__ingredient">
              <img src={imgSrc} title={name} alt={name} />
              <p className="ingredient-list__name">{name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default IngredientsList;
