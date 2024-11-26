// import React, { useEffect, useState } from 'react';
// import "./Navbar.css"
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// function Home() {
//   // Define state variables
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//      axios.get('https://dummyjson.com/recipes')
//       .then(response => {
//         setUsers(response.data.recipes);
//         setLoading(false);
//         console.log("api fetch")
//         const apidata = response.data.recipes
//         console.log(apidata)
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//         console.log("war gae")
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       <h1 className='mainHead'>Welcome to Home Page</h1>
// </>
// );
// }

// export default Home;
import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  // Define state variables
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        setUsers(response.data.recipes);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="home-container">
      <h1 className="mainHead">Welcome to Recipe Haven</h1>
      <p className="intro-text">
        Discover a variety of delicious recipes from around the world. Whether you're a beginner or an expert, we have something for everyone!
      </p>

      <div className="recipe-list">
        {users.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="recipe-image" 
            />
            <div className="recipe-details">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recpList/${recipe.id}`} className="view-recipe-link">View Recipe</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
