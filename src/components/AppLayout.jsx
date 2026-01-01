import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Call from './Call';
import Footer from './Footer';
import Cursor from './Cursor';
import Background from './Background';
import IntroOverlay from './IntroOverlay';
import { AnimatePresence, motion } from 'framer-motion';

function AppLayout() {
  const [showIntro, setShowIntro] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();

  const handleMouseMove = (e) => {
    // Disable tilt on mobile for better UX
    if (window.innerWidth < 768) return;

    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <div
      className="layout-wrapper"
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#000'
      }}
    >
      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <>
          {/* HUD LAYER - Fixed Elements (No Tilt) */}
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Background />
          </div>

          <div style={{ position: 'fixed', zIndex: 9999, pointerEvents: 'none' }}>
            <Cursor />
          </div>

          {/* Fixed Call Button (Clickable) */}
          <div style={{ position: 'fixed', zIndex: 10001, top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              <Call />
            </div>
          </div>

          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%',
            zIndex: 10000, display: 'flex', justifyContent: 'center', padding: '20px'
          }}>
            <Navbar />
          </div>

          {/* REALITY LAYER - Tilted Content with scoped perspective */}
          <div style={{ perspective: '1500px', height: '100vh', width: '100%' }}>
            <motion.div
              style={{
                transformStyle: 'preserve-3d',
                rotateX: mousePos.y * 2, // Subtle tilt
                rotateY: mousePos.x * -2, // Subtle tilt
                paddingTop: '80px', // Space for fixed navbar
                height: '100vh',
                overflowY: 'auto',
                overflowX: 'hidden', // PREVENT HORIZONTAL SCROLL
                scrollBehavior: 'smooth',
                width: '100vw' // Ensure full width
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {/* Content Container with Key for Route Transitions */}
              <div style={{ transform: 'translateZ(30px)', minHeight: '100vh' }}>
                <Outlet />
                <Footer />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}

export default AppLayout;
