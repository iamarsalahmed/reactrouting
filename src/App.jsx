import './App.css'
import {createBrowserRouter,RouterProvider, Link} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/NavbarPage';
import NavPage from './Components/NavPage';
import React, {useEffect} from 'react';
import RecpList from './Components/RecpList';
import RecpDetl from './Components/RecpDetl';

function App() {
  
  const router= createBrowserRouter([
    {
      path: '/',
      element: <><NavPage/><Home/></>,
  
    },
    {
      path: '/about',
      element:<><NavPage/><About /></>,

    },
    {
      path: '/contact',
      element: <><NavPage/><Contact /></>, 

    },
    {
      path: '/recpList',
      element: <><NavPage/><RecpList /></>, 

    },
    {
      path: '/recpList/:id',
      element: <><NavPage/><RecpDetl /></>, 

    }
  ])
 
  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
