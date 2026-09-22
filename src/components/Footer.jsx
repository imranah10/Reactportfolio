import { useEffect, useState } from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import { SiX } from 'react-icons/si';
import { Link } from 'react-router-dom';

const NAV = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

const SOCIALS = [
  { icon: <FiGithub size={16} />, href: 'https://github.com/imranah10', label: 'GitHub' },
  { icon: <SiX size={14} />, href: 'https://x.com/ImranAhama49612', label: 'X (Twitter)' },
  { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/imran-ahmad-aa257520b', label: 'LinkedIn' },
  { icon: <FiArrowUpRight size={16} />, href: 'https://toolverse-official.vercel.app', label: 'Toolverse' },
];

const Footer = () => {
  const [time, setTime] = useState({ clock: '--:--:--', date: '' });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime({
        clock: new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata',
        }).format(now),
        date: new Intl.DateTimeFormat('en-GB', {
          weekday: 'short', day: '2-digit', month: 'short', timeZone: 'Asia/Kolkata',
        }).format(now).toUpperCase(),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative border-t border-line bg-surface/50 overflow-hidden">
      {/* top gradient hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" aria-hidden="true" />
      {/* aurora glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[720px] h-[300px] rounded-full bg-cyan/[0.06] blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden="true" />

      {/* giant watermark */}
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 pt-14 pb-4 select-none" aria-hidden="true">
        <p className="font-display font-extrabold tracking-tight leading-none text-center text-[clamp(3rem,11.5vw,9rem)] whitespace-nowrap bg-gradient-to-b from-[#3A4B63]/50 via-[#232B3D]/35 to-transparent bg-clip-text text-transparent">
          IMRAN AHMAD
        </p>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 pb-8 grid md:grid-cols-[1.3fr_0.7fr_1fr] gap-10 md:gap-8">
        {/* brand */}
        <div>
          <p className="font-display font-extrabold text-2xl tracking-tight">
            IA<span className="text-cyan">.</span>
          </p>
          <p className="text-mute text-[13px] leading-relaxed mt-3 max-w-[300px]">
            Full Stack &amp; AI Developer · Content Creator. Building fast, private,
            browser-first products — and documenting the journey.
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-faint mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
            NAVI MUMBAI · INDIA
          </p>
        </div>

        {/* navigate */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] text-faint mb-4">NAVIGATE //</p>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="text-mute hover:text-cyan text-sm transition-colors duration-300 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-cyan transition-all duration-300" aria-hidden="true" />
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/ventures/aurelian-canvas"
                className="text-mute hover:text-cyan text-sm transition-colors duration-300 inline-flex items-center gap-1.5 group"
              >
                <span className="w-0 group-hover:w-3 h-px bg-cyan transition-all duration-300" aria-hidden="true" />
                Ventures — Aurelian Canvas
              </Link>
            </li>
          </ul>
        </div>

        {/* connect + clock */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] text-faint mb-4">CONNECT //</p>
          <div className="flex items-center gap-3 mb-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="w-10 h-10 rounded-xl panel flex items-center justify-center text-mute hover:text-cyan hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="panel rounded-xl px-4 py-3.5 inline-flex items-center gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-faint">LOCAL TIME (IST)</p>
              <p className="font-mono text-xl text-cyan tabular-nums tracking-wider mt-0.5">
                {time.clock}
              </p>
            </div>
            <div className="h-8 w-px bg-line" aria-hidden="true" />
            <p className="font-mono text-[10px] tracking-[0.15em] text-mute">{time.date}</p>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.22em] text-faint text-center sm:text-left">
            © 2026 IMRAN AHMAD · DESIGNED &amp; BUILT FROM SCRATCH · REACT · VITE · TAILWIND · FRAMER MOTION
          </p>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[9px] tracking-[0.22em] text-faint flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
              ALL SYSTEMS OPERATIONAL
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl panel flex items-center justify-center text-mute hover:text-cyan hover:border-cyan/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
