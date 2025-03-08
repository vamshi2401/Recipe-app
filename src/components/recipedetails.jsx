import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const RecipeDetails=()=>{
  const {id}= useParams();
  const [recipe,setRecipe]=useState(null);
  const [error,setError]=useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to view recipe details.");
        return navigate("/auth/login");
      }


      try {
        const response = await axios.get(`https://recipe-app-backend-1-ta9u.onrender.com/recipes/${id}`, {headers:{Authorization:token}});
        setRecipe(response.data);
      } catch (err) {
        setError("Failed to load recipe details");
      }
    };
    fetchRecipeDetails();
  }, [id,navigate]);

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
      <p><strong>Instructions</strong> {recipe.instructions.join(", ")}</p>
      <p><strong>Ingredients:</strong></p>
      <ol>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
      <img src={recipe.imageUrl} alt="" />
      <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
    </div>
  );


}

export default RecipeDetails;