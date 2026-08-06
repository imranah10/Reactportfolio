import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { sounds } from '../utils/sound';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Work', path: 'projects' },
    { title: 'Experience', path: 'experience' },
    { title: 'About', path: 'about' },
    { title: 'Contact', path: 'contact' },
  ];
  const ventureHref = '/ventures/aurelian-canvas';

  const handleNavClick = () => sounds.click();
  const handleNavHover = () => sounds.hover();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-[1000] px-6 sm:px-12 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-[#05050e]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.6)]' 
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={handleNavClick}
          onMouseEnter={handleNavHover}
          className="text-white text-xl sm:text-2xl font-display font-bold tracking-tight flex items-center gap-2.5 group"
        >
          <span className="relative">
            <span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              <FaTerminal size={22} />
            </span>
            {/* Pulsing dot */}
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          </span>
          <span className="group-hover:text-cyan-400 transition-colors duration-500">IMRAN</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={isHomePage ? `#${item.path}` : `/#${item.path}`}
              onClick={handleNavClick}
              onMouseEnter={handleNavHover}
              className="text-[12px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em] relative group"
            >
              {item.title}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={ventureHref}
            onClick={handleNavClick}
            onMouseEnter={handleNavHover}
            className={`flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
              location.pathname.includes('/ventures')
                ? 'border-amber-400 bg-amber-500/10 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse shadow-[0_0_8px_#f59e0b]"></span>
            Ventures
          </a>
          <a 
            href={isHomePage ? '#contact' : '/#contact'}
            onClick={handleNavClick}
            onMouseEnter={handleNavHover}
            className="px-6 py-2.5 rounded-full border border-cyan-500/30 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            Available
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 focus:outline-none rounded-lg transition-colors hover:text-cyan-400"
          onClick={() => { setMobileMenuOpen(true); sounds.whoosh(); }}
          aria-label="Open Mobile Menu"
        >
          <FaBars size={24} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] bg-[#05050e]/95 backdrop-blur-3xl flex flex-col items-center justify-center min-h-screen overflow-y-auto px-6 py-12"
          >
            <button
              className="absolute top-8 right-8 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={() => { setMobileMenuOpen(false); sounds.click(); }}
            >
              <FaTimes size={32} />
            </button>

            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-md mx-auto text-center mt-6">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  key={item.path}
                  href={isHomePage ? `#${item.path}` : `/#${item.path}`}
                  onClick={() => { setMobileMenuOpen(false); sounds.click(); }}
                  className="text-2xl sm:text-3xl font-display font-medium text-white hover:text-cyan-400 transition-colors uppercase tracking-widest relative group"
                >
                  {item.title}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                href={ventureHref}
                onClick={() => { setMobileMenuOpen(false); sounds.click(); }}
                className="text-2xl sm:text-3xl font-display font-medium uppercase tracking-widest text-amber-400 hover:text-amber-300 flex items-center gap-3"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-[0_0_8px_#f59e0b] animate-pulse"></span>
                Ventures
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.08 }}
                onClick={() => { setMobileMenuOpen(false); sounds.click(); }}
                href={isHomePage ? '#contact' : '/#contact'}
                className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-semibold text-lg tracking-wide uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
