import React, { useState, useEffect } from "react";
import axios from "axios";


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('https://recipe-app-backend-1-ta9u.onrender.com/recipes');
      setRecipes(response.data.recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container mt-3">
      <img src="/ban.jpg" className="img-fluid w-100 pt-1" alt="..." />
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        {recipes.map(recipe => (
          <div className="col" key={recipe._id}>
            <div className="card">
              <img src="/image.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <h6>Ingredients:</h6>
                <ul>
                  {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p>{recipe.instructions}</p>

                <img src={recipe.imageUrl} alt={recipe.name} />
                <p>Cooking Time: {recipe.cookingTime} minutes</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;