import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=be6b3fa1&app_key=55a574ba3ac2a36b747eb18c83756699&q=${search}`
      );
      const data = await response.json();
      props.setRecipes(data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search recipes..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
