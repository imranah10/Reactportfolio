import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { sounds } from '../utils/sound';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Work', path: 'projects' },
    { title: 'Experience', path: 'experience' },
    { title: 'About', path: 'about' },
    { title: 'Contact', path: 'contact' },
  ];

  return (
    <>
      {/* Floating pill navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] rounded-full border border-outline-variant/30 bg-surface/60 backdrop-blur-xl shadow-[0_0_20px_rgba(76,215,246,0.15)] flex justify-between items-center px-6 py-3 z-50 transition-all duration-500 ${scrolled ? 'bg-surface-dark/90 shadow-[0_0_30px_rgba(76,215,246,0.2)]' : ''}`}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={() => sounds.click()}
          onMouseEnter={() => sounds.hover()}
          className="text-primary animate-pulse drop-shadow-[0_0_10px_rgba(76,215,246,0.5)] text-2xl md:text-3xl font-black tracking-tighter cursor-pointer"
        >
          IMRAN
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={isHomePage ? `#${item.path}` : `/#${item.path}`}
              onClick={() => sounds.click()}
              onMouseEnter={() => sounds.hover()}
              className="text-on-surface-variant font-medium text-sm tracking-tighter hover:text-primary transition-all duration-300 scale-95 active:scale-90"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/ventures/aurelian-canvas"
            onClick={() => sounds.click()}
            onMouseEnter={() => sounds.hover()}
            className={`hidden sm:flex px-4 py-2 rounded-full border border-tertiary text-tertiary text-sm hover:bg-tertiary/10 transition-colors items-center gap-2 group ${location.pathname.includes('/ventures') ? 'bg-tertiary/10' : ''}`}
          >
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse group-hover:bg-primary transition-colors" />
            Ventures
          </a>
          <a
            href={isHomePage ? '#contact' : '/#contact'}
            onClick={() => sounds.click()}
            onMouseEnter={() => sounds.hover()}
            className="hidden sm:flex px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Available
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => { setMobileMenuOpen(true); sounds.whoosh(); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[2000] bg-surface-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-8 right-8 text-primary p-2"
              onClick={() => { setMobileMenuOpen(false); sounds.click(); }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {navItems.map((item, i) => (
              <motion.a
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                href={isHomePage ? `#${item.path}` : `/#${item.path}`}
                onClick={() => { setMobileMenuOpen(false); sounds.click(); }}
                className="text-2xl font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
              >
                {item.title}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.08 }}
              href="/ventures/aurelian-canvas"
              onClick={() => { setMobileMenuOpen(false); sounds.click(); }}
              className="text-2xl font-bold text-tertiary hover:text-tertiary-container transition-colors uppercase tracking-widest flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
              Ventures
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
