import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds, speakIntro } from '../utils/sound';

const IntroOverlay = ({ onComplete }) => {
  const [phase, setPhase] = useState('boot');
  const [progress, setProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const voicePlayedRef = useRef(false);

  const bootSteps = [
    "INITIALIZING NEURAL CORE...",
    "LOADING REACT MATRIX...",
    "COMPILING AI SUBSYSTEMS...",
    "DEPLOYING 3D SHADERS...",
    "CALIBRATING AUDIO ENGINE...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    if (phase !== 'boot') return;

    let currentStep = 0;
    let prog = 0;

    function updateBoot() {
      if (currentStep < bootSteps.length) {
        const line = `> ${bootSteps[currentStep]}`;
        setTerminalLines(prev => [...prev, line]);
        sounds.ping();

        const targetProgress = Math.floor(((currentStep + 1) / bootSteps.length) * 100);
        const progressInterval = setInterval(() => {
          if (prog < targetProgress) {
            prog++;
            setProgress(prog);
            if (prog % 10 === 0) sounds.type();
          } else {
            clearInterval(progressInterval);
          }
        }, 10);

        currentStep++;
        const delay = currentStep === bootSteps.length - 1 ? 800 : Math.random() * 400 + 200;
        setTimeout(updateBoot, delay);
      } else {
        setTimeout(() => {
          sounds.success();
          setPhase('ready');
        }, 1000);
      }
    }

    const timer = setTimeout(updateBoot, 500);
    return () => clearTimeout(timer);
  }, [phase]);

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

  return (
    <AnimatePresence>
      {phase !== 'entered' && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-surface-dark z-[99999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary/30 z-30" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-primary/30 z-30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-primary/30 z-30" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary/30 z-30" />

          {/* Rotating rings */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[500px] h-[500px] rounded-full border border-primary/10">
            <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_20px_#4cd7f6]" />
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[400px] h-[400px] rounded-full border border-neon-pink/10 border-dashed">
            <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-neon-pink shadow-[0_0_20px_#ec4899]" />
          </motion.div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[300px] h-[300px] rounded-full border border-tertiary/10">
            <div className="absolute top-1/2 right-0 w-2 h-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-tertiary shadow-[0_0_20px_#ffb95f]" />
          </motion.div>

          {/* Terminal Container */}
          {phase === 'boot' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 w-full max-w-2xl px-8"
            >
              {/* Terminal window */}
              <div className="glass-panel rounded-xl p-6 relative">
                <div className="corner-bracket corner-tl"></div>
                <div className="corner-bracket corner-tr"></div>
                <div className="corner-bracket corner-bl"></div>
                <div className="corner-bracket corner-br"></div>

                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/50 pb-2">
                  <div className="w-2 h-2 rounded-full bg-error"></div>
                  <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-mono text-xs text-primary/70 ml-2">sys_boot.exe</span>
                </div>

                {/* Terminal output */}
                <div className="font-mono text-sm text-primary flex flex-col gap-1 min-h-[120px]">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-primary"
                    >
                      {line}
                    </motion.div>
                  ))}
                  {phase === 'boot' && progress < 100 && (
                    <div className="text-primary animate-pulse">_</div>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">SYSTEM LOAD</span>
                  <span className="font-mono text-sm text-primary">{progress}%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-primary shadow-[0_0_10px_rgba(76,215,246,0.8)] relative transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Ready Phase: Enter button */}
          {phase === 'ready' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              {/* Pulsing rings around button */}
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.8 + i * 0.3, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
                  className="absolute w-48 h-48 rounded-full border border-primary/30"
                />
              ))}

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h1 className="text-4xl sm:text-6xl font-black text-primary text-glow mb-2 tracking-tight">
                  IMRAN AHMAD
                </h1>
                <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">
                  NEURAL INTERFACE ENGINEER
                </h2>
              </motion.div>

              {/* Enter button */}
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-transparent border border-primary text-primary font-mono tracking-widest uppercase overflow-hidden hover:bg-primary/10 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  <span className="text-lg">🔊</span>
                  INITIATE SEQUENCE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase"
              >
                🔊 Audio Enabled · Best with Sound On
              </motion.p>
            </motion.div>
          )}

          {/* Welcome flash */}
          {phase === 'entered' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5 }}
              className="fixed inset-0 bg-primary z-[99999] pointer-events-none flex items-center justify-center"
            >
              <h1 className="text-6xl sm:text-8xl font-black text-surface-dark tracking-tighter">
                WELCOME
              </h1>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
