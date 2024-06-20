import React from "react";
import "./Recipe.css";

const Recipe = (props) => {
  return (
    <div className="recipe">
      <div className="image-container">
        <img
          src={props.recipe.image}
          alt={props.recipe.label}
          className="recipe-image"
        />
      </div>
      <div className="recipe-label">{props.recipe.label}</div>
      <button onClick={() => props.openFullRecipe(props.recipe)}>
        View Recipe
      </button>
    </div>
  );
};

export default Recipe;
