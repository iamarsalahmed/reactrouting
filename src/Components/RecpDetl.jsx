// Components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import "./Navbar.css"
const RecpDetl = () => {
  const { id } = useParams(); // Get the dynamic 'id' from the URL
  const [recipe, setRecipe] = useState(null);
 
  useEffect(() => {
    // Use Axios to fetch the recipe details
    axios.get(`https://dummyjson.com/recipes/`) // Replace with your API URL
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe:', error));
      
  }, [id ]);

  if (!recipe) {
    return <p>Loading...</p>;
  }
  console.log(recipe.recipes[{id}])
  
  return (
    
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={recipe.recipes[id].image} alt={recipe.name} className='dyImg' />
      <div className='right-text'>
      <h1 className='dyHead'>{recipe.recipes[id].name}</h1>
      <p><b>Cuisine Type:</b>  {recipe.recipes[id].cuisine}</p>
      <p><b>Meal Type:</b>  {recipe.recipes[id].mealType}</p>
      <p><b>Calories: </b> {recipe.recipes[id].caloriesPerServing}</p>
      <p><b>Rating:</b>  {recipe.recipes[id].rating}</p>
      <p > <b>Serving : </b> {recipe.recipes[id].servings}</p>




      <p className='tags'> <h6>Tags: </h6>
  <ul>
   
    {recipe.recipes[id].tags.map((tag, index) => (
      <li key={index}> {tag } </li>
    ))} <br />
    
  </ul>
</p>
<p className='ingdr'> <b>Ingredients:</b> 
 <ul>
        {recipe.recipes[id].ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
</p>

      <p className='instr'> <b> Instructions: </b>
      <ul>
        {recipe.recipes[id].instructions.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> </p>
      </div>
     
    </div>
    // <div>
    //   <h1> {id}</h1>
    // </div>
  );
};

export default RecpDetl;
