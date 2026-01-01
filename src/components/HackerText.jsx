import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

const HackerText = ({ text, className, style }) => {
  const [displayText, setDisplayText] = useState(text);
  
  const scramble = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= text.length) { 
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <motion.span 
      className={className}
      style={{ ...style, cursor: 'crosshair' }} 
      onMouseEnter={scramble}
      onViewportEnter={scramble}
    >
      {displayText}
    </motion.span>
  );
};

export default HackerText;
