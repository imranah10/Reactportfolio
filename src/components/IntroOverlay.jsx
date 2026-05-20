import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroOverlay = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);

  const steps = [
    "INITIALIZING CORE SYSTEM...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "COMPILING BEZIER WAVE SHADERS...",
    "DEPLOYING INTERACTIVE EXPLOSION CORE...",
    "DEAL CARD VELOCITIES LOADED...",
    "SYSTEM STABLE. ENTERING PORTFOLIO."
  ];

  useEffect(() => {
    // Dynamic progress bar load
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 24);

    // Boot logs steps simulation
    const stepsInterval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(stepsInterval);
        return prev;
      });
    }, 450);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepsInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-[#020207] text-[#f8f8f8] z-[99999] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* 21st.dev style scanline overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] z-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] z-40 pointer-events-none" />

      {/* Cybernetic glowing circle matrix behind loader */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-80 h-80 rounded-full border border-cyan-500/10 border-dashed z-0 flex items-center justify-center"
      >
        <div className="w-64 h-64 rounded-full border border-purple-500/5" />
      </motion.div>

      {/* ── CORE LOGO ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center select-none"
      >
        {/* Neon text glow styling */}
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-[0.3em] text-white pl-[0.3em]">
          IMRAN<span className="text-cyan-400 animate-pulse">.</span>
        </h1>
        <p className="text-[9px] font-black tracking-[0.4em] uppercase text-gray-500 mt-2 pl-[0.4em]">
          CREATIVE PRODUCTION HUB v3.0
        </p>
      </motion.div>

      {/* ── LOADER MODULE ── */}
      <div className="mt-14 w-60 sm:w-80 relative z-10 flex flex-col items-center">
        
        {/* Loader Bar */}
        <div className="w-full h-[2px] bg-[#0c0c16] rounded-full overflow-hidden border border-white/5 shadow-[0_0_10px_rgba(6,182,212,0.15)] relative">
          <motion.div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_#06b6d4]"
          />
        </div>

        {/* Dynamic Boot Sequence Log Messages */}
        <div className="h-6 mt-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={bootStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold uppercase"
            >
              {steps[bootStep]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Percentage Tracker */}
        <span className="text-[11px] font-mono text-gray-500 mt-2 font-bold tracking-widest pl-[0.1em]">
          {progress}% COMPLETED
        </span>
      </div>

      {/* Radial overlay glow card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[90px] -z-10" />
    </motion.div>
  );
};

export default IntroOverlay;
