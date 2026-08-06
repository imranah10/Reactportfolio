import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import AdvancedCursor from './AdvancedCursor';
import ShaderBackground from './ShaderBackground';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from './IntroOverlay';
import { sounds, toggleSound, isSoundEnabled } from '../utils/sound';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function AppLayout() {
  const [showIntro, setShowIntro] = useState(true);
  const [muted, setMuted] = useState(false);
  const soundToggleRef = useRef(null);

  // Add global click sound listener
  useEffect(() => {
    const handleClick = (e) => {
      // Don't play sound on the sound toggle itself
      if (soundToggleRef.current?.contains(e.target)) return;
      sounds.click();
    };

    const handleHover = (e) => {
      // Only play hover sound on interactive elements
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('a') || target.closest('button')) {
        sounds.hover();
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleHover);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  // Handle sound toggle
  const handleToggleSound = () => {
    const enabled = toggleSound();
    setMuted(!enabled);
  };

  return (
    <div className="w-full min-h-screen text-[#f8f8f8] selection:bg-purple-500/50 selection:text-white overflow-x-hidden relative z-0">
      <ShaderBackground />
      <AdvancedCursor />

      {/* Sound Toggle Button */}
      {!showIntro && (
        <button
          ref={soundToggleRef}
          onClick={handleToggleSound}
          className="fixed bottom-6 right-6 z-[10000] w-12 h-12 rounded-full bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <FaVolumeMute className="text-gray-400 group-hover:text-red-400 transition-colors" size={16} />
          ) : (
            <FaVolumeUp className="text-cyan-400 group-hover:text-cyan-300 transition-colors animate-pulse" size={16} />
          )}
          {/* Pulsing ring when sound is on */}
          {!muted && (
            <span className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" />
          )}
        </button>
      )}

      <AnimatePresence>
        {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-1 w-full pt-32">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AppLayout;
