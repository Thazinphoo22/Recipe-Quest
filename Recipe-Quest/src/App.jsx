import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Favorites from "./components/Favorites";
import RecipeList from "./components/RecipeList";
import FullRecipe from "./components/FullRecipe";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const navigate = useNavigate();

  const openFullRecipe = (recipe) => {
    console.log(recipe);
    setSelectedRecipe(recipe);
    navigate("/full-recipe");
  };

  const closeFullRecipe = () => {
    setSelectedRecipe(null);
    navigate("/");
  };

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/"
          element={
            <>
              <h1>Recipe Quest</h1>
              <SearchBar setRecipes={setRecipes} />
              <RecipeList recipes={recipes} openFullRecipe={openFullRecipe} />
            </>
          }
        />
        <Route
          path="/full-recipe"
          element={
            selectedRecipe && (
              <FullRecipe
                closeFullRecipe={closeFullRecipe}
                recipe={selectedRecipe}
              />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
