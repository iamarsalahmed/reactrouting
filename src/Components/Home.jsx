import React, { useEffect, useState } from 'react';
import "./Navbar.css"
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
        console.log("api fetch")
        const apidata = response.data.recipes
        console.log(apidata)
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
        console.log("war gae")
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1 className='mainHead'>Welcome to Home Page</h1>
</>
);
}

export default Home;
