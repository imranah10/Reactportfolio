import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds, speakIntro } from '../utils/sound';

const IntroOverlay = ({ onComplete }) => {
  const [phase, setPhase] = useState('boot'); // 'boot' -> 'ready' -> 'entered'
  const [progress, setProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);
  const voicePlayedRef = useRef(false);

  const steps = [
    "INITIALIZING NEURAL CORE...",
    "LOADING REACT MATRIX...",
    "COMPILING AI SUBSYSTEMS...",
    "DEPLOYING 3D SHADERS...",
    "CALIBRATING AUDIO ENGINE...",
    "SYSTEM READY."
  ];

  // Boot sequence
  useEffect(() => {
    if (phase !== 'boot') return;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setPhase('ready');
          sounds.success();
          return 100;
        }
        if (prev % 10 === 0) sounds.type();
        return prev + 3;
      });
    }, 25);

    const stepsInterval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < steps.length - 1) {
          sounds.ping();
          return prev + 1;
        }
        clearInterval(stepsInterval);
        return prev;
      });
    }, 450);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepsInterval);
    };
  }, [phase]);

  // Handle "Click to Enter"
  const handleEnter = () => {
    if (voicePlayedRef.current) return;
    voicePlayedRef.current = true;

    sounds.whoosh();
    speakIntro();

    setPhase('entered');
    setTimeout(() => {
      sounds.reveal();
      onComplete();
    }, 2000);
  };

  // ─── BOOT PHASE ───
  if (phase === 'boot') {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#020207] text-[#f8f8f8] z-[99999] flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] z-50" />

        {/* Rotating rings */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10">
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#06b6d4]" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/10 border-dashed">
          <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-[0.15em] text-white">
            IMRAN<span className="text-cyan-400">.</span>
          </h1>
          <p className="text-[10px] sm:text-xs font-black tracking-[0.5em] uppercase text-gray-500 mt-3">
            REACT · AI · CREATIVE DEV
          </p>
        </motion.div>

        {/* Loader */}
        <div className="mt-16 w-72 sm:w-96 relative z-10 flex flex-col items-center">
          <div className="w-full h-[3px] bg-[#0c0c16] rounded-full overflow-hidden border border-white/5">
            <div style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_#06b6d4]" />
          </div>
          <div className="h-8 mt-5 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p key={bootStep}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="text-xs font-mono tracking-[0.2em] text-cyan-400 font-bold uppercase">
                {steps[bootStep]}
              </motion.p>
            </AnimatePresence>
          </div>
          <span className="text-sm font-mono text-gray-400 font-bold tracking-widest mt-2">
            {String(progress).padStart(3, '0')}%
          </span>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 z-30" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30 z-30" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-500/30 z-30" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 z-30" />
      </motion.div>
    );
  }

  // ─── READY PHASE: Click to Enter ───
  if (phase === 'ready') {
    return (
      <motion.div
        exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-[#020207] text-[#f8f8f8] z-[99999] flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[120px]" />

        {/* Pulsing rings */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.5 + i * 0.3, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
            className="absolute w-40 h-40 rounded-full border border-cyan-400/30"
          />
        ))}

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl font-display font-black tracking-[0.15em] text-white">
              IMRAN<span className="text-cyan-400">.</span>
            </h1>
            <p className="text-xs sm:text-sm font-black tracking-[0.4em] uppercase text-gray-400 mt-4">
              REACT DEVELOPER · AI DEVELOPER
            </p>
            <p className="text-[10px] font-mono text-gray-600 mt-2 tracking-widest">
              9 MONTHS OF EXPERIENCE
            </p>
          </motion.div>

          {/* Click to Enter button */}
          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 rounded-full overflow-hidden cursor-pointer"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity" />
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 text-white font-display font-black text-base sm:text-lg tracking-[0.2em] uppercase flex items-center gap-3">
              <span className="text-xl">🔊</span>
              Click to Enter
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[10px] font-mono text-gray-500 mt-6 tracking-[0.3em] uppercase"
          >
            🔊 Audio Enabled · Best with Sound On
          </motion.p>
        </motion.div>

        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-500/30" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30" />
      </motion.div>
    );
  }

  // ─── ENTERED PHASE: Transition flash ───
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 bg-cyan-500/20 z-[99999] pointer-events-none flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-widest">
          WELCOME
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default IntroOverlay;
