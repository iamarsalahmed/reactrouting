import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function NavPage() {
  return (
    <>
     <div className="NavbarCss">
     <Link  to="/">Food Recipies</Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/recpList">Recipe List</Link>
     
    </div>
    
    </>
  )
}

export default NavPage
