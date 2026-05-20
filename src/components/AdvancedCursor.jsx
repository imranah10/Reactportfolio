import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AdvancedCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [magneticElement, setMagneticElement] = useState(null);

  // Position coordinates using motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring settings for elegant lag-follow effect
  const springConfig = { stiffness: 220, damping: 24, mass: 0.6 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const target = e.target;

      if (!target) return;

      // 1. Check for custom magnetic element snap
      const magneticTarget = target.closest('[data-magnetic]');
      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Lock cursor exactly to the center, or do a partial snap (magnetic pull)
        cursorX.set(centerX + (clientX - centerX) * 0.2);
        cursorY.set(centerY + (clientY - centerY) * 0.2);
        setMagneticElement(magneticTarget);
        setIsHovering(true);
        return;
      } else {
        setMagneticElement(null);
      }

      // 2. Regular mouse track
      cursorX.set(clientX);
      cursorY.set(clientY);

      // 3. Detect hover elements & active tags
      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.clickable') ||
        window.getComputedStyle(target).cursor === 'pointer';

      // Read custom cursor commands
      const cursorTagElement = target.closest('[data-cursor]');
      if (cursorTagElement) {
        const tag = cursorTagElement.getAttribute('data-cursor');
        setCursorText(tag.toUpperCase());
        setIsHovering(true);
      } else if (isClickable) {
        setCursorText("");
        setIsHovering(true);
      } else {
        setCursorText("");
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Hide custom cursor on touch devices for accessibility
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* 1. Precision Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#06b6d4] rounded-full pointer-events-none z-[99999] mix-blend-screen"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0.4 : 1,
          backgroundColor: isHovering ? '#a855f7' : '#06b6d4'
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. Advanced Spring Morph Ring */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[99998] flex items-center justify-center pointer-events-none"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 90 : (magneticElement ? 64 : (isHovering ? 48 : 32)),
          height: cursorText ? 90 : (magneticElement ? 64 : (isHovering ? 48 : 32)),
          backgroundColor: isHovering && !cursorText ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255,255,255,0)',
          borderColor: cursorText ? 'rgba(168, 85, 247, 0.7)' : (magneticElement ? 'rgba(6, 182, 212, 0.8)' : 'rgba(255,255,255,0.25)'),
          borderWidth: cursorText ? '2px' : '1px',
          boxShadow: cursorText
            ? '0 0 20px rgba(168, 85, 247, 0.4)'
            : (magneticElement ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none'),
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.5 }}
      >
        {/* Dynamic Context Tag Text */}
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Tiny aesthetic circle inside */}
            <span className="text-[10px] font-black text-white tracking-[0.25em] pl-[0.25em] uppercase font-display leading-none">
              {cursorText}
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* 3. High-End Micro Particle Trail on click */}
      <style>{`
        [data-cursor], [data-magnetic] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default AdvancedCursor;
