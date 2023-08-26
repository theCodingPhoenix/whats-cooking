import React from "react";
import { Link } from "react-router-dom";
import "../styles/ingredient-list.scss";
import "../styles/global.scss";

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="wrapper ingredient-list">
      {ingredients.map((ingredient) => {
        const { idIngredient: id, strIngredient: name } = ingredient;
        const imgSrc = `https:/www.themealdb.com/images/ingredients/${name}-Small.png`;
        return (
          <div className="ingredient-list__ingredient" key={id}>
            <p className="ingredient-list__name">{name}</p>
            <Link to={`/recipe/ingredient/${name}`} key={id}>
              <img src={imgSrc} title={name} alt={name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IngredientsList;
