import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroOverlay = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    "INITIALIZING NEURAL LINK...",
    "DECRYPTING SECURE PORTFOLIO...",
    "LOADING REACT MODULES...",
    "ESTABLISHING CONNECTION TO SERVER...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[lineIndex]]);
        lineIndex++;
        setProgress(prev => prev + 20);
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800); 
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Courier New', monospace",
        color: '#0f0'
      }}
    >
      <div style={{ width: '300px' }}>
        {lines.map((line, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ marginBottom: '5px', fontSize: '14px', textShadow: '0 0 5px #0f0' }}
          >
            {`> ${line}`}
          </motion.div>
        ))}
        <motion.div 
          style={{ 
            marginTop: '20px', 
            height: '4px', 
            background: '#111', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}
        >
          <motion.div 
            style={{ 
              height: '100%', 
              background: '#0f0', 
              boxShadow: '0 0 10px #0f0' 
            }}
            animate={{ width: `${progress}%` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroOverlay;
