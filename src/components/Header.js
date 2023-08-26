import React from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header header__title">What's cooking, good looking!</h1>
      </Link>
      {/* <SearchRecipes></SearchRecipes> */}
    </header>
  );
}

export default Header;
