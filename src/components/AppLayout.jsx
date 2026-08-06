import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import AdvancedCursor from './AdvancedCursor';
import ShaderBackground from './ShaderBackground';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from './IntroOverlay';
import { sounds, toggleSound } from '../utils/sound';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function AppLayout() {
  const [showIntro, setShowIntro] = useState(true);
  const [muted, setMuted] = useState(false);
  const soundToggleRef = useRef(null);
  const location = useLocation();

  // Only show intro overlay on home page
  const isHomePage = location.pathname === '/';
  const [introSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (soundToggleRef.current?.contains(e.target)) return;
      sounds.click();
    };

    const handleHover = (e) => {
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

  const handleToggleSound = () => {
    const enabled = toggleSound();
    setMuted(!enabled);
  };

  // Only show intro on home page AND only once
  const shouldShowIntro = isHomePage && !introSeen;

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroSeen(true);
  };

  // If not home page, skip intro entirely
  useEffect(() => {
    if (!isHomePage && showIntro) {
      setShowIntro(false);
      setIntroSeen(true);
    }
  }, [isHomePage]);

  return (
    <div className="w-full min-h-screen text-on-surface selection:bg-primary/30 text-white overflow-x-hidden relative z-0">
      <ShaderBackground />
      <AdvancedCursor />

      {/* Sound Toggle Button */}
      {!shouldShowIntro && (
        <button
          ref={soundToggleRef}
          onClick={handleToggleSound}
          className="fixed bottom-6 right-6 z-[10000] w-12 h-12 rounded-full bg-surface-dark/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:border-primary/50 hover:shadow-[0_0_20px_rgba(76,215,246,0.3)] transition-all duration-300 group"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <FaVolumeMute className="text-gray-400 group-hover:text-red-400 transition-colors" size={16} />
          ) : (
            <FaVolumeUp className="text-primary group-hover:text-primary transition-colors animate-pulse" size={16} />
          )}
          {!muted && (
            <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
          )}
        </button>
      )}

      <AnimatePresence>
        {shouldShowIntro && <IntroOverlay onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!shouldShowIntro && (
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-1 w-full pt-32 pb-20">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AppLayout;
