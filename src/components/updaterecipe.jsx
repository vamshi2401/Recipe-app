import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // To get the recipe ID from the URL

  useEffect(() => {
    // Fetch the recipe data by its ID
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/recipes/${id}`);
        const recipe = response.data;
        setTitle(recipe.title);
        setDescription(recipe.description);
        setIngredients(recipe.ingredients);
        setInstructions(recipe.instructions);
        setImageUrl(recipe.imageUrl);
        setCookingTime(recipe.cookingTime);
      } catch (error) {
        console.error("Error fetching recipe data", error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:3000/recipes/${id}`,
        {
          title,
          description,
          ingredients,
          instructions,
          imageUrl,
          cookingTime,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
      navigate("/home"); // Redirect back to home after successful update
    } catch (error) {
      console.error("Error updating recipe", error);
    }
  };

  return (
    <div className="container">
      <h2>Update Recipe</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Cooking Time (in minutes)"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Recipe</button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
