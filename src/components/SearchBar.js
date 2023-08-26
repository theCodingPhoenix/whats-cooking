import React, { useState } from "react";
import "../styles/search.scss";

function SearchBar(props) {
  const handleSearch = (e) => {
    e.preventDefault();
    props.handleOnSearchChange(e.target.value);
  };

  return (
    <input
      className="search"
      type="text"
      placeholder={props.placeholderText}
      onChange={handleSearch}
    ></input>
  );
}

export default SearchBar;
