import React from "react";
import SearchRecipes from "./SearchRecipes";
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header header__title">What's cooking, good looking!</h1>
      {/* <SearchRecipes></SearchRecipes> */}
    </header>
  );
}

export default Header;
