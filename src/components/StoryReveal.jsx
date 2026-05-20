import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryReveal = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Track scroll inside this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax translation transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const codeY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const nexusScale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1.15]);
  const nexusRotate = useTransform(scrollYProgress, [0, 1], [-10, 15]);
  
  const shiftX1 = isMobile ? -25 : -100;
  const shiftX2 = isMobile ? 25 : 100;

  const textX1 = useTransform(scrollYProgress, [0, 0.4], [shiftX1, 0]);
  const textX2 = useTransform(scrollYProgress, [0.4, 0.8], [shiftX2, 0]);
  
  const glassRotateX = useTransform(scrollYProgress, [0.4, 0.9], [25, 0]);
  const glassTranslateZ = useTransform(scrollYProgress, [0.4, 0.9], [-200, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[150vh] bg-[#020208]/90 py-16 px-4 sm:px-8 overflow-hidden z-10"
    >
      {/* ── PARALLAX CELESTIAL BACKGROUND ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-20 z-0 flex items-center justify-center"
      >
        <div className="w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/10 to-transparent blur-[120px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* ── SECTION 1: THE SPARK (THE TERMINAL) ── */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 z-10 mb-20">
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="inline-block px-4 py-2 rounded-full mb-6 border border-cyan-500/30 bg-cyan-500/10 self-start">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400">Chapter I</span>
          </div>
          <motion.h3
            style={{ x: textX1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-display font-black leading-none text-white mb-6"
          >
            The Blank <br /><span className="text-gradient">Canvas.</span>
          </motion.h3>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Every digital masterpiece begins the same way — in the quiet dimness of an empty editor, fueled only by logic, a blink of the cursor, and a vision of the infinite.
          </p>
        </div>

        <motion.div
          style={{ y: codeY }}
          className="w-full lg:w-[50%] bg-[#06060c]/90 border border-white/10 rounded-2xl p-6 shadow-2xl relative"
        >
          {/* Mac Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-[10px] text-gray-500 font-mono ml-4">imran@antigravity:~/idea</span>
          </div>

          <div className="font-mono text-xs sm:text-sm text-cyan-400/80 leading-relaxed space-y-2 select-none">
            <p className="text-gray-500">// Initiating digital experience structure</p>
            <p><span className="text-purple-400">const</span> <span className="text-white">creativeVision</span> = <span className="text-pink-400">new</span> <span className="text-amber-400">Mindset</span>(&#123;</p>
            <p className="pl-4">ambition: <span className="text-emerald-400">"extra-ultra-premium"</span>,</p>
            <p className="pl-4">limitless: <span className="text-purple-400">true</span>,</p>
            <p className="pl-4">aesthetics: <span className="text-emerald-400">"awwwards-grade"</span></p>
            <p>&#125;);</p>
            <p className="text-gray-500">// Processing full stack elements...</p>
            <p className="text-white animate-pulse">_</p>
          </div>
          
          {/* Subtle neon drop shadow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-10 blur-lg -z-10" />
        </motion.div>
      </div>

      {/* ── SECTION 2: THE NEXUS (FULL-STACK CONNECTIONS) ── */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-8 z-10 mb-20">
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="inline-block px-4 py-2 rounded-full mb-6 border border-purple-500/30 bg-purple-500/10 self-start">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple-400">Chapter II</span>
          </div>
          <motion.h3
            style={{ x: textX2 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-display font-black leading-none text-white mb-6"
          >
            The Full-Stack <br /><span className="text-gradient">Synapse.</span>
          </motion.h3>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Bridging pixel-perfect frontend layouts with secure, rapid server architectures. Creating logical networks that synchronize client interactions with fast data structures.
          </p>
        </div>

        <motion.div
          style={{ scale: nexusScale, rotate: nexusRotate }}
          className="w-full lg:w-[50%] flex justify-center items-center h-80 relative"
        >
          {/* Dynamic SVG connecting nodes grid */}
          <svg className="w-80 h-80 overflow-visible" viewBox="-35 0 270 200">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Connection Lines */}
            <line x1="100" y1="30" x2="40" y2="130" stroke="url(#lineGrad)" strokeWidth="1.5" />
            <line x1="100" y1="30" x2="160" y2="130" stroke="url(#lineGrad)" strokeWidth="1.5" />
            <line x1="40" y1="130" x2="160" y2="130" stroke="url(#lineGrad)" strokeWidth="1.5" />
            <line x1="100" y1="30" x2="100" y2="170" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="40" y1="130" x2="100" y2="170" stroke="url(#lineGrad)" strokeWidth="1" />
            <line x1="160" y1="130" x2="100" y2="170" stroke="url(#lineGrad)" strokeWidth="1" />

            {/* Glowing nodes */}
            <circle cx="100" cy="30" r="10" fill="#06b6d4" className="animate-pulse" />
            <circle cx="40" cy="130" r="8" fill="#a855f7" />
            <circle cx="160" cy="130" r="8" fill="#ec4899" />
            <circle cx="100" cy="170" r="12" fill="#22c55e" className="animate-pulse" />
            
            {/* Code labels */}
            <text x="100" y="15" fill="#06b6d4" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">FRONTEND</text>
            <text x="15" y="134" fill="#a855f7" fontSize="8" fontWeight="bold" textAnchor="end" fontFamily="monospace">API LAYER</text>
            <text x="185" y="134" fill="#ec4899" fontSize="8" fontWeight="bold" textAnchor="start" fontFamily="monospace">DATABASE</text>
            <text x="100" y="193" fill="#22c55e" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">AI LOGIC</text>
          </svg>
        </motion.div>
      </div>

      {/* ── SECTION 3: THE ASCENSION (AI CREATIVE OPERATOR) ── */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10">
        <div className="inline-block px-4 py-2 rounded-full mb-6 border border-amber-500/30 bg-amber-500/10">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400">Chapter III</span>
        </div>

        <motion.div
          style={{
            rotateX: glassRotateX,
            z: glassTranslateZ,
            transformStyle: 'preserve-3d',
            perspective: 1000
          }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 w-full shadow-3xl max-w-2xl relative"
        >
          {/* Shimmer glowing outline */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-amber-500/20 to-transparent -z-10 pointer-events-none" />

          <h3 className="text-[clamp(2rem,5vw,3.8rem)] font-display font-black leading-none text-white mb-6">
            The AI <span className="text-gradient">Ascension.</span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-medium">
            "I'm not just writing logic — I build digital empires. By fusing custom AI prompt models, generating 16K detailed artworks, and leveraging high-performance SEO marketing, I build complete premium micro-brands entirely alone."
          </p>

          {/* Metrics grid */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">16K</div>
              <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-1">Artwork Spec</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-purple-400">100%</div>
              <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-1">Solo Operated</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">60 FPS</div>
              <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-1">Optimized Speed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryReveal;
