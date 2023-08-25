import React, { useState } from "react";
import { useRecipeContext } from "../store/context";
import { fetchRecipesByIngredient } from "../store/actions";

function SearchRecipes() {
  const [search, setSearch] = useState("");
  const { dispatch } = useRecipeContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipesByIngredient(dispatch, search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search recipes with..."
        onChange={handleSearch}
      ></input>
      <button type="submit"></button>
    </form>
  );
}

export default SearchRecipes;
