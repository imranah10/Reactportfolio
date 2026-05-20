import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const InlineHoverReveal = ({ children, mediaSrc, isVideo = false, alt = "Preview" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Motion values to keep tracking simple and highly fluid
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 18, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Float slightly above and to the right of the mouse pointer
    mouseX.set(e.clientX - rect.left + 20);
    mouseY.set(e.clientY - rect.top - 160);
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative inline-block cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 border-b border-dashed border-cyan-400/50 hover:border-pink-500/80 transition-all duration-300"
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6, y: 15, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            style={{
              x: smoothX,
              y: smoothY,
              position: 'absolute',
              zIndex: 100,
              pointerEvents: 'none',
              transformPerspective: 800,
            }}
            className="block w-48 h-32 rounded-2xl border border-white/20 bg-[#0f0f18] shadow-[0_15px_40px_rgba(6,182,212,0.4)] overflow-hidden"
          >
            {/* Shimmer glowing line on top of visual card */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
            
            {isVideo ? (
              <video
                src={mediaSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
            ) : (
              <img
                src={mediaSrc}
                alt={alt}
                className="w-full h-full object-cover opacity-90"
              />
            )}
            {/* Glow sweep layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default InlineHoverReveal;
