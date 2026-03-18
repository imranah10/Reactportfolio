import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroOverlay = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-primary)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-4xl)',
          fontWeight: 600,
          letterSpacing: '-0.02em'
        }}
      >
        IMRAN<span style={{ color: '#555' }}>.</span>
      </motion.div>
      <motion.div
        style={{
          marginTop: '2rem',
          width: '200px',
          height: '2px',
          backgroundColor: '#222',
          overflow: 'hidden'
        }}
      >
        <motion.div
          style={{
            height: '100%',
            backgroundColor: '#fff',
            width: `${progress}%`
          }}
          transition={{ ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroOverlay;
