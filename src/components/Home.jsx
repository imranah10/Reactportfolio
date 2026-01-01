import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Experience from './Experience';

const Home = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default Home;

