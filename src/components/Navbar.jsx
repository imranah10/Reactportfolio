import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { title: 'Contact', path: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-[1000] px-6 sm:px-12 transition-all duration-500 ${scrolled ? 'py-4 bg-[#0a0a0f]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 xs:py-8 bg-transparent'
          }`}
      >
        <a
          href="/"
          className="text-white text-xl sm:text-2xl font-display font-bold tracking-tight flex items-center gap-2 group"
        >
          <span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-500 shadow-cyan-500/50 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            <FaTerminal size={22} />
          </span>
          IMRAN
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              className="text-[12px] font-semibold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em] relative group"
            >
              {item.title}
              {/* Vibrant active hover underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop Available Button */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="px-6 py-2.5 rounded-full border border-cyan-500/30 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
            Available
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg transition-colors hover:text-cyan-400"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Mobile Menu"
        >
          <FaBars size={24} />
        </button>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] bg-[#05050e]/95 backdrop-blur-3xl flex flex-col items-center justify-center min-h-screen"
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes size={32} />
            </button>

            <div className="flex flex-col items-center justify-center gap-10 w-full px-8">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.path}
                  href={`#${item.path}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl sm:text-4xl font-display font-medium text-white hover:text-cyan-400 transition-colors uppercase tracking-widest relative group"
                >
                  {item.title}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                href="#contact"
                className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-semibold text-lg tracking-wide uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)]"
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