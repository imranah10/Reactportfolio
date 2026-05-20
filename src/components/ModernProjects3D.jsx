import React, { useState, useRef, useEffect } from 'react';
import projects from './data/projects.json';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaSlidersH, FaLayerGroup } from 'react-icons/fa';

// Procedural Audio Synthesizer for high-end swipe
const playSwipeSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle'; // Smooth, warm synth wave
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.35); // Downward pitch sweep
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35); // Smooth decay
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (e) {
    // Fail silently if browser audio policies block context
  }
};

const ModernProjects3D = () => {
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'deck'
  const [activeIndex, setActiveIndex] = useState(0);
  const [deck, setDeck] = useState(projects || []);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalProjects = deck.length;

  const handleNext = () => {
    playSwipeSound();
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    playSwipeSound();
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Deck Shuffle Mechanics
  const handleShuffleDeck = () => {
    playSwipeSound();
    setDeck((prevDeck) => {
      const nextDeck = [...prevDeck];
      const topCard = nextDeck.shift(); // Remove top
      if (topCard) nextDeck.push(topCard); // Throw to bottom
      return nextDeck;
    });
  };

  // Safe stack color mapper
  const getTechColor = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('react') || t.includes('tailwind')) return 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5';
    if (t.includes('node') || t.includes('mongo')) return 'text-green-400 border-green-500/20 bg-green-500/5';
    if (t.includes('next') || t.includes('three')) return 'text-white border-white/20 bg-white/5';
    if (t.includes('framer') || t.includes('lovable')) return 'text-pink-400 border-pink-500/20 bg-pink-500/5';
    return 'text-purple-400 border-purple-500/20 bg-purple-500/5';
  };

  return (
    <div id="projects" className="py-10 sm:py-14 px-4 sm:px-8 max-w-[1400px] mx-auto z-10 relative overflow-hidden">
      
      {/* ── SECTION HEADER ── */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
        <div>
          <div className="inline-block px-4 py-2 rounded-full mb-4 border border-purple-500/30 bg-purple-500/10">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-purple-400">
              Interactive Showroom
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-extrabold tracking-tight leading-none text-white">
            Elite <span className="text-gradient">Projects.</span>
          </h2>
        </div>

        {/* View Mode Toggle */}
        <div className="flex bg-[#0f0f18] border border-white/10 rounded-full p-1.5 gap-2 relative z-30">
          <button
            onClick={() => { playSwipeSound(); setViewMode('carousel'); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase cursor-pointer transition-all duration-300 ${
              viewMode === 'carousel' 
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FaSlidersH /> 3D Carousel
          </button>
          <button
            onClick={() => { playSwipeSound(); setViewMode('deck'); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase cursor-pointer transition-all duration-300 ${
              viewMode === 'deck' 
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FaLayerGroup /> Cyber Deck
          </button>
        </div>
      </div>

      {/* ── VIEW MODE 1: 3D CYLINDRICAL CAROUSEL ── */}
      {viewMode === 'carousel' && (
        <div className="relative min-h-[600px] flex flex-col justify-center items-center py-10 z-10">
          
          <div 
            className="relative w-full max-w-[900px] h-[460px] flex justify-center items-center"
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          >
            {deck.map((project, idx) => {
              // Calculate rotational index offset
              let offset = idx - activeIndex;
              
              // Handle wrap-around offsets elegantly so slider moves smoothly
              if (offset < -totalProjects / 2) offset += totalProjects;
              if (offset > totalProjects / 2) offset -= totalProjects;

              // Calculate active state
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);

              // Reworked 3D Curved space calculations with horizontal translations
              const rotateY = -offset * (screenSize === 'mobile' ? 18 : screenSize === 'tablet' ? 24 : 32);
              const translateX = offset * (screenSize === 'mobile' ? 140 : screenSize === 'tablet' ? 200 : 280);
              const translateZ = -absOffset * (screenSize === 'mobile' ? 100 : screenSize === 'tablet' ? 120 : 150);
              const scale = 1 - (absOffset * (screenSize === 'mobile' ? 0.2 : 0.15));
              const opacity = 1 - (absOffset * (screenSize === 'mobile' ? 0.6 : 0.45));

              if (opacity <= 0) return null; // Avoid rendering invisible side items

              return (
                <motion.div
                  key={project.title}
                  animate={{
                    rotateY: rotateY,
                    x: translateX,
                    z: translateZ,
                    scale: scale,
                    opacity: opacity
                  }}
                  transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                  style={{
                    position: 'absolute',
                    zIndex: 100 - absOffset,
                    transformStyle: 'preserve-3d',
                  }}
                  className={`w-[clamp(280px,85vw,460px)] bg-[#0f0f18]/90 border rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300 ${
                    isActive 
                      ? 'border-cyan-500/40 shadow-[0_15px_40px_rgba(6,182,212,0.25)]' 
                      : 'border-white/10'
                  }`}
                >
                  {/* Click Overlay Intercept */}
                  {isActive ? (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="absolute inset-0 z-20 cursor-pointer pointer-events-auto block"
                    />
                  ) : (
                    <button 
                      onClick={() => setActiveIndex(idx)}
                      className="absolute inset-0 z-20 cursor-pointer pointer-events-auto block w-full h-full bg-transparent border-0"
                    />
                  )}

                  {/* Media Visual Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                      />
                    ) : (
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                    )}
                    
                    {/* Inner glowing top sweep */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f18] via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Information Row */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
                        Project Index 0{idx + 1}
                      </span>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        <FaExternalLinkAlt size={12} />
                      </a>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2.5 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-xs sm:text-sm font-medium mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Stacks */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.stack.map((tech, i) => (
                        <span key={i} className={`px-2.5 py-1 rounded-md border text-[9px] font-black uppercase tracking-wider ${getTechColor(tech)}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controllers */}
          <div className="flex items-center gap-6 mt-12 relative z-30">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-[#0f0f18] hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
            >
              <FaChevronLeft size={16} />
            </button>
            <span className="text-xs font-mono text-gray-500 tracking-[0.25em] pl-[0.25em]">
              0{activeIndex + 1} / 0{totalProjects}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-[#0f0f18] hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

        </div>
      )}

      {/* ── VIEW MODE 2: INTERACTIVE DECK SHUFFLE & SPREAD ── */}
      {viewMode === 'deck' && (
        <div className="relative min-h-[580px] flex flex-col justify-center items-center py-10 z-10">
          
          {/* Card Spread Container */}
          <div className="relative w-full max-w-[460px] h-[400px] flex justify-center items-center">
            
            <AnimatePresence mode="popLayout">
              {deck.map((project, idx) => {
                // We show only the top 4 cards in the stack to preserve DOM speed
                if (idx > 3) return null;

                // Card fanning values when hovered
                const rotation = idx === 0 ? 0 : (idx === 1 ? -4 : (idx === 2 ? 4 : -8));
                const transX = idx === 0 ? 0 : (idx === 1 ? -25 : (idx === 2 ? 25 : -40));
                const transY = idx * 10;
                const scale = 1 - (idx * 0.04);
                
                const isTopCard = idx === 0;

                return (
                  <motion.div
                    key={project.title}
                    initial={{ scale: 0.8, y: 50, opacity: 0 }}
                    animate={{
                      scale: scale,
                      rotate: rotation,
                      x: transX,
                      y: transY,
                      opacity: 1
                    }}
                    exit={{
                      x: 350,
                      rotate: 45,
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                    }}
                    style={{
                      position: 'absolute',
                      zIndex: 100 - idx,
                    }}
                    className={`w-[clamp(280px,85vw,420px)] bg-[#0c0c14] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-[1px]`}
                  >
                    <div className="w-full h-full bg-[#0a0a0f] rounded-[23px] overflow-hidden relative">
                      {/* Top Card click intercept overlay */}
                      {isTopCard && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="absolute inset-0 z-20 cursor-pointer pointer-events-auto block"
                        />
                      )}
                      {/* Visual Header */}
                      <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                        {project.videoSrc ? (
                          <video
                            src={project.videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-80"
                          />
                        ) : (
                          <img
                            src={project.imageSrc}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-95" />
                      </div>

                      {/* Info Panel */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
                            Deck Deck Stack Item
                          </span>
                          {isTopCard && (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20">
                              <span className="text-[8px] font-black uppercase text-pink-400 tracking-wider">Top Card</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mb-2 tracking-tight">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 text-xs font-medium mb-4 leading-relaxed line-clamp-2">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 3).map((tech, i) => (
                            <span key={i} className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${getTechColor(tech)}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

          {/* Shuffle action controls */}
          <div className="mt-8 flex flex-col items-center gap-3 relative z-30">
            <button
              onClick={handleShuffleDeck}
              data-cursor="shuffle"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 cursor-pointer"
            >
              Shuffle Card Deck
            </button>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Hover over deck to view natural spring stack spreads
            </span>
          </div>

        </div>
      )}

    </div>
  );
};

export default ModernProjects3D;
