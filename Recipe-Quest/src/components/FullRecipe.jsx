import React from "react";
import "./FullRecipe.css";

const FullRecipe = (props) => {
  const addToFavorites = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_AIRTABLE_SERVER}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            label: props.recipe.label,
            image: props.recipe.image,
            url: props.recipe.url,
            ingredients: props.recipe.ingredients
              .map((ingredient) => ingredient.text)
              .join(", "),
          },
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to add favorite");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="full-recipe">
      <img src={props.recipe.image} alt={props.recipe.label} />
      <div className="details">
        <h2>{props.recipe.label}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {props.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <p>
          <a href={props.recipe.url} target="_blank" rel="noopener noreferrer">
            Cooking Instructions
          </a>
        </p>
        <div className="buttons">
          <button onClick={props.closeFullRecipe}>Close</button>
          <button className="add-to-favorites" onClick={addToFavorites}>
            ᯓᡣ𐭩
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullRecipe;
