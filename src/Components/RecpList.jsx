// Components/RecipeList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const RecpList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes') // Replace with your API URL
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="card-container">
      {recipes.map(recipe => (
        <div className="card" key={recipe.id}>
          <img className="card-img-top" src={recipe.image} alt={recipe.name} />
          <div className="card-body">
            <h5 className="card-title">{recipe.name}</h5>
            <p className="card-text">Cuisine Type: {recipe.cuisine} Calories: {recipe.caloriesPerServing}</p>
            <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecpList;
