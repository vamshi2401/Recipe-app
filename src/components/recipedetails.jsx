import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const RecipeDetails=()=>{
  const {id}= useParams();
  const [recipe,setRecipe]=useState(null);
  const [error,setError]=useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://recipe-app-backend-1-ta9u.onrender.com/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        setError("Failed to load recipe details");
      }
    };
    fetchRecipeDetails();
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="container">
      <h2>{recipe.title}</h2>
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions</strong></p>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <img src={recipe.imageUrl} alt="" />
      <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
    </div>
  );


}

export default RecipeDetails;