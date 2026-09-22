import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }).format(new Date())
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-line bg-surface/50">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-sm tracking-tight">
            IA<span className="text-cyan">.</span> — Imran Ahmad
          </p>
          <p className="font-mono text-[9px] tracking-[0.2em] text-faint mt-1.5">
            DESIGNED &amp; BUILT BY ME · REACT · VITE · FRAMER MOTION
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-mute" aria-label="Local time India">
            IST {time}
          </span>
          <Link
            to="/ventures/aurelian-canvas"
            className="font-mono text-[10px] tracking-[0.2em] text-mute hover:text-cyan transition-colors"
          >
            VENTURES ↗
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl panel flex items-center justify-center text-mute hover:text-cyan hover:border-cyan/40 transition-colors"
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center font-mono text-[9px] tracking-[0.25em] text-faint">
        © 2026 · ALL SYSTEMS OPERATIONAL
      </div>
    </footer>
  );
};

export default Footer;
