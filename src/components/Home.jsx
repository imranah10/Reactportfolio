import React from 'react';
import Hero from './Hero';
import ModernProjects3D from './ModernProjects3D';
import Contact from './Contact';
import About from './About';
import Experience from './Experience';
import StoryReveal from './StoryReveal';
import WorkflowExplosion from './WorkflowExplosion';

const Home = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Hero />
      <StoryReveal />
      <ModernProjects3D />
      <WorkflowExplosion />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
