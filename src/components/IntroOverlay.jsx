import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { speakIntro, sounds } from '../utils/sound';

const IntroOverlay = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const voicePlayedRef = useRef(false);

  const steps = [
    "INITIALIZING NEURAL CORE...",
    "LOADING REACT MATRIX...",
    "COMPILING AI SUBSYSTEMS...",
    "DEPLOYING 3D SHADERS...",
    "CALIBRATING AUDIO ENGINE...",
    "WELCOME, IMRAN AHMAD."
  ];

  useEffect(() => {
    // Play voice intro when boot reaches 100%
    if (progress >= 100 && !voicePlayedRef.current) {
      voicePlayedRef.current = true;
      sounds.success();
      speakIntro();
      
      // Wait for voice to start, then begin exit
      setTimeout(() => {
        sounds.whoosh();
        onComplete();
      }, 3500);
    }
  }, [progress, onComplete]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        // Play type sound on each progress tick
        if (prev % 10 === 0) sounds.type();
        return prev + 2;
      });
    }, 30);

    const stepsInterval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < steps.length - 1) {
          sounds.ping();
          return prev + 1;
        }
        clearInterval(stepsInterval);
        return prev;
      });
    }, 500);

    // Random glitch effect
    const glitchTimer = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 2000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepsInterval);
      clearInterval(glitchTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-[#020207] text-[#f8f8f8] z-[99999] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] z-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] z-40 pointer-events-none" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
        }} />
      </div>

      {/* Rotating rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 z-0"
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#06b6d4]" />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/10 border-dashed z-0"
      >
        <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
      </motion.div>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[300px] h-[300px] rounded-full border border-pink-500/10 z-0"
      >
        <div className="absolute top-1/2 right-0 w-2 h-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 shadow-[0_0_20px_#ec4899]" />
      </motion.div>

      {/* Core Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center select-none"
      >
        <div className={`relative ${glitch ? 'animate-pulse' : ''}`}>
          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-[0.15em] text-white">
            IMRAN<span className="text-cyan-400">.</span>
          </h1>
          {glitch && (
            <>
              <h1 className="absolute inset-0 text-5xl sm:text-7xl font-display font-black tracking-[0.15em] text-cyan-400 opacity-50" style={{ transform: 'translate(2px, 0)' }}>
                IMRAN.
              </h1>
              <h1 className="absolute inset-0 text-5xl sm:text-7xl font-display font-black tracking-[0.15em] text-pink-400 opacity-50" style={{ transform: 'translate(-2px, 0)' }}>
                IMRAN.
              </h1>
            </>
          )}
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] sm:text-xs font-black tracking-[0.5em] uppercase text-gray-500 mt-3 pl-[0.5em]"
        >
          REACT · AI · CREATIVE DEV
        </motion.p>
      </motion.div>

      {/* Loader */}
      <div className="mt-16 w-72 sm:w-96 relative z-10 flex flex-col items-center">
        {/* Bar */}
        <div className="w-full h-[3px] bg-[#0c0c16] rounded-full overflow-hidden border border-white/5 shadow-[0_0_15px_rgba(6,182,212,0.2)] relative">
          <motion.div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_#06b6d4]"
          />
          {/* Glow tip */}
          {progress < 100 && (
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-400/30 blur-md"
              style={{ left: `calc(${progress}% - 16px)` }}
            />
          )}
        </div>

        {/* Boot log */}
        <div className="h-8 mt-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={bootStep}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-cyan-400 font-bold uppercase"
            >
              {steps[bootStep]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Percentage */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm font-mono text-gray-400 font-bold tracking-widest">
            {String(progress).padStart(3, '0')}%
          </span>
          {progress >= 100 && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-emerald-400 text-xs font-mono"
            >
              ✓ READY
            </motion.span>
          )}
        </div>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[100px] -z-10" />
      
      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 z-30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30 z-30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-500/30 z-30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 z-30" />

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 50 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-10"
      >
        <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em]">
          🔊 Audio Experience Enabled
        </p>
      </motion.div>
    </motion.div>
  );
};

export default IntroOverlay;
