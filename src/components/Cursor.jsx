import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target;

      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      const viewTarget = target.closest('.data-cursor-view');

      if (viewTarget) {
        setIsHovering(true);
        setCursorText("VIEW");
      } else if (isClickable) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Hide on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Tiny dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />

      {/* Main Ring & Text Container */}
      <motion.div
        className="fixed top-0 left-0 border border-white/50 rounded-full pointer-events-none z-[99998] mix-blend-difference flex items-center justify-center overflow-hidden"
        initial={{ width: 40, height: 40 }}
        animate={{
          x: cursorText ? mousePosition.x - 40 : mousePosition.x - 20,
          y: cursorText ? mousePosition.y - 40 : mousePosition.y - 20,
          width: cursorText ? 80 : 40,
          height: cursorText ? 80 : 40,
          scale: isHovering && !cursorText ? 1.5 : 1,
          backgroundColor: isHovering ? '#fff' : 'transparent',
          borderWidth: isHovering ? '0px' : '1px'
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
      >
        <span className="text-black font-display font-bold text-xs tracking-wider" style={{ opacity: cursorText ? 1 : 0, transition: 'opacity 0.2s' }}>
          {cursorText}
        </span>
      </motion.div>
    </>
  );
};

export default Cursor;
