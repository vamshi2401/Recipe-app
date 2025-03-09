import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchRecipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  // Handle search input
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) {
      setError("Please enter a recipe term.");
      return;
    }

    try {
      const response = await axios.get(
        `https://recipe-app-backend-1-ta9u.onrender.com/recipes/search?query=${query}`
      );

      if (response.data.recipes.length > 0) {
        setRecipes(response.data.recipes);
        setError("");
      } else {
        setError("No recipes found.");
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("An error occurred while fetching the recipes.");
    }
  };

  return (
    <div className="container">
      <h2>Search Recipes</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or ingredients"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}


      <div className="recipe-list mt-4">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.description}</p>
              <p><strong>Instructions</strong> {recipe.instructions}</p>
              <p><strong>Ingredients:</strong></p>
              <ol>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ol>
              <img src={recipe.imageUrl} />
              <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>

              <Link to={`/recipes/${recipe._id}`}
                className={`btn ${localStorage.getItem("token") ? "btn-primary" : "btn-secondary disabled"}`}>
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes;
