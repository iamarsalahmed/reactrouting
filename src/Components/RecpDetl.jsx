// Components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const RecpDetl = () => {
  const { id } = useParams(); // Get the dynamic 'id' from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Use Axios to fetch the recipe details
    axios.get(`https://dummyjson.com/recipes/${id}`) // Replace with your API URL
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>Cuisine Type: {recipe.cuisine}</p>
      <p>Calories: {recipe.caloriesPerServing}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecpDetl;
