import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over a clickable element
      const target = e.target;
      const isLink = (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.onclick ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
      setLinkHovered(isLink);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
    mixBlendMode: 'difference',
    backgroundColor: linkHovered ? 'var(--neon-green)' : 'var(--neon-cyan)',
    border: '2px solid white',
    transition: 'transform 0.1s ease-out, background-color 0.2s',
  };

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <>
      <div 
        className="cursor-dot"
        style={{
          position: 'fixed', left: 0, top: 0,
          width: '8px', height: '8px', background: 'white', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9999,
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          mixBlendMode: 'difference'
        }}
      />
      <div 
        className="cursor-ring"
        style={{
           position: 'fixed', left: 0, top: 0,
           width: '40px', height: '40px', 
           border: '2px solid var(--neon-cyan)', borderRadius: '50%',
           pointerEvents: 'none', zIndex: 9999,
           transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${clicked ? 0.8 : (linkHovered ? 1.5 : 1)})`,
           transition: 'transform 0.1s ease-out',
           mixBlendMode: 'difference',
           boxShadow: linkHovered ? '0 0 15px var(--neon-cyan)' : 'none'
        }}
      >
         {/* Crosshair Lines */}
         <div style={{ position: 'absolute', top: '50%', left: '-10px', width: '60px', height: '1px', background: 'rgba(0,255,255,0.3)', transform: 'translateY(-50%)' }}></div>
         <div style={{ position: 'absolute', left: '50%', top: '-10px', width: '1px', height: '60px', background: 'rgba(0,255,255,0.3)', transform: 'translateX(-50%)' }}></div>
      </div>
    </>
  );
};

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

export default Cursor;
