import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const LINKS = [
  { label: 'Work', hash: '#work' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Skills', hash: '#skills' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' },
];

/** Scramble-on-hover decode effect (mono label) */
function useScramble(label) {
  const [text, setText] = useState(label);
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&';
  let frame;
  const onEnter = () => {
    let iter = 0;
    cancelAnimationFrame(frame);
    const run = () => {
      setText(
        label
          .split('')
          .map((ch, i) => {
            if (i < iter) return ch;
            return ch === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iter += 0.5;
      if (iter <= label.length) frame = requestAnimationFrame(run);
      else setText(label);
    };
    frame = requestAnimationFrame(run);
  };
  const onLeave = () => {
    cancelAnimationFrame(frame);
    setText(label);
  };
  useEffect(() => () => cancelAnimationFrame(frame), []);
  return { text, onEnter, onLeave };
}

function NavLink({ item, onClick }) {
  const { text, onEnter, onLeave } = useScramble(item.label);
  return (
    <a
      href={item.hash}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="font-mono text-[11px] tracking-[0.22em] text-mute hover:text-ink transition-colors duration-300"
    >
      {text.toUpperCase()}
    </a>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-500 ${
          scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-display font-extrabold text-lg tracking-tight group">
            IA<span className="text-cyan">.</span>
            <span className="hidden sm:inline text-mute font-body font-medium text-xs ml-3 group-hover:text-ink transition-colors">
              IMRAN AHMAD
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              LINKS.map((l) => <NavLink key={l.hash} item={l} />)
            ) : (
              <a
                href="/#work"
                className="font-mono text-[11px] tracking-[0.22em] text-mute hover:text-ink transition-colors"
              >
                ← BACK TO PORTFOLIO
              </a>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-lime border border-lime/25 bg-lime/5 rounded-full px-3.5 py-1.5 hover:bg-lime/10 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
              OPEN TO WORK
            </a>
            <Link
              to="/ventures/aurelian-canvas"
              className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] text-mute border border-line rounded-full px-3.5 py-1.5 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              VENTURES <FiArrowUpRight size={11} />
            </Link>
          </div>

          <button
            className="md:hidden text-ink p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9800] bg-bg/97 backdrop-blur-2xl flex flex-col"
          >
            <div className="h-16 px-5 flex items-center justify-between">
              <span className="font-display font-extrabold text-lg">IA<span className="text-cyan">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <FiX size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.hash}
                  href={l.hash}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="font-display font-bold text-4xl py-3 text-ink hover:text-cyan transition-colors border-b border-line"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 flex flex-col gap-4"
              >
                <a
                  href="mailto:imranaha310@gmail.com"
                  className="font-mono text-xs tracking-[0.2em] text-cyan"
                >
                  IMRANAHA310@GMAIL.COM
                </a>
                <div className="flex items-center gap-5">
                  <a
                    href="/Imran_Ahmad_Resume_India.pdf"
                    download="Imran-Ahmad-Resume-India.pdf"
                    className="font-mono text-xs tracking-[0.2em] text-mute hover:text-cyan transition-colors"
                  >
                    RESUME · INDIA ⬇
                  </a>
                  <a
                    href="/Imran_Ahmad_Resume_International.pdf"
                    download="Imran-Ahmad-Resume-International.pdf"
                    className="font-mono text-xs tracking-[0.2em] text-mute hover:text-cyan transition-colors"
                  >
                    RESUME · INTL ⬇
                  </a>
                </div>
                <Link
                  to="/ventures/aurelian-canvas"
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs tracking-[0.2em] text-mute"
                >
                  VENTURES →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
