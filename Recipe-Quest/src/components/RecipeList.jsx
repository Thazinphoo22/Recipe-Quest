import React from "react";
import Recipe from "./Recipe";
import "./RecipeList.css";

const RecipeList = (props) => {
  return (
    <div className="recipe-list">
      {props.recipes.map((recipe, index) => (
        <Recipe
          key={index}
          recipe={recipe.recipe}
          openFullRecipe={props.openFullRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;
