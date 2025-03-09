import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://recipe-app-backend-1-ta9u.onrender.com/recipes');
        setRecipes(response.data.recipes);
      } catch (err){
        setError("Failed to load recipes")
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <h2>All Recipes</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="recipe-list mt-4">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe._id} className="card mb-3">
              <div className="card-body">
                <img src={recipe.imageUrl} alt="" />
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <Link to={`/recipes/${recipe._id}`}>Edit</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;