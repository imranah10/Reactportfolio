
// import {createBrowserRouter,RouterProvider} from "react-router-dom"
import React from 'react';
import Hero from './Hero'
import Projects from './Projects'
import Contact from './Contact';
import About from './About';
import Experience from './Experience';

// import Skills from './Skills';
const Home = () => {
 
  return (
    <div className='container-fluid  mx-2'>
      
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
     
    
      
      
    </div>

  )
}

export default Home;

