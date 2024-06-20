import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_AIRTABLE_SERVER}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch favorites");
      }
      const data = await res.json();
      setFavorites(data.records);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const removeFromFavorites = async (id) => {
    try {
      const res = await fetch(import.meta.env.VITE_AIRTABLE_SERVER + "/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to remove favorite");
      }
      getFavorites();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="favorites">
      {/* <h2>Favorites</h2> */}
      {/* {JSON.stringify(favorites)} */}
      {favorites.map((recipe) => (
        <div key={recipe.id} className="favorite">
          <img src={recipe.fields.image} alt={recipe.fields.label} />
          <div>
            <h3>{recipe.fields.label}</h3>
            <p>
              <a href={recipe.fields.url} target="_blank" rel="dd">
                Cooking Instructions
              </a>
            </p>
            <button onClick={() => removeFromFavorites(recipe.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
