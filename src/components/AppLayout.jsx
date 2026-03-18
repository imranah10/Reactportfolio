import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Cursor from './Cursor';
import Background from './Background';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from './IntroOverlay';

function AppLayout() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="w-full min-h-screen text-[#f8f8f8] selection:bg-purple-500/50 selection:text-white overflow-x-hidden relative z-0">

      <Background />
      <Cursor />

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
