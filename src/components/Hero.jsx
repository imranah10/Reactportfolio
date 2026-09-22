import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiFileText, FiMail } from 'react-icons/fi';
import profile1 from './images/profile1.jpg';
import useLiveStats from './useLiveStats';

const ROLES = ['Full Stack Developer', 'AI Developer', 'Content Creator', 'Creator of Toolverse'];

/** Scramble role rotator */
const useRoleScramble = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(ROLES[0]);

  useEffect(() => {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&*';
    const target = ROLES[idx];
    let iter = 0;
    let raf;
    let holdTimer;
    const run = () => {
      setText(
        target
          .split('')
          .map((ch, i) => {
            if (i < iter) return ch;
            return ch === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iter += 0.6;
      if (iter <= target.length) raf = requestAnimationFrame(run);
      else {
        holdTimer = setTimeout(() => setIdx((i) => (i + 1) % ROLES.length), 2100);
      }
    };
    raf = requestAnimationFrame(run);
    return () => { cancelAnimationFrame(raf); clearTimeout(holdTimer); };
  }, [idx]);

  return text;
};

/** Per-letter kinetic reveal */
const KineticWord = ({ word, delay = 0, gradient = false }) => (
  <span className="inline-flex overflow-hidden pb-[0.08em] -mb-[0.08em]">
    {word.split('').map((ch, i) => (
      <motion.span
        key={`${ch}-${i}`}
        initial={{ y: '110%', rotate: 6 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ delay: delay + i * 0.045, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-block ${gradient ? 'grad-text' : ''}`}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  const role = useRoleScramble();
  const { npmMonthly, repos } = useLiveStats();

  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const srx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 18 });
  const sry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 18 });

  const onTilt = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetTilt = () => { mx.set(0); my.set(0); };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-cyan/[0.07] blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-52 -left-40 w-[620px] h-[620px] rounded-full bg-magenta/[0.06] blur-[120px]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center relative">
        {/* ── Left: copy ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-mute border border-line rounded-full px-4 py-2 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
            AVAILABLE FOR WORK · 2026
          </motion.div>

          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(3.2rem,9vw,6.5rem)]">
            <KineticWord word="IMRAN" delay={1.25} />
            <br />
            <KineticWord word="AHMAD" delay={1.45} gradient />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="mt-5 font-mono text-sm sm:text-base text-cyan h-7"
          >
            <span className="text-mute">&gt;_</span> {role}
            <span className="inline-block w-[9px] h-[1.1em] bg-cyan/80 ml-1 align-text-bottom animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.7 }}
            className="mt-6 max-w-[520px] text-mute text-[15px] sm:text-base leading-relaxed"
          >
            Full Stack &amp; AI Developer. I build fast, private, browser-first products —
            including <span className="text-ink font-medium">Toolverse</span>, a live toolkit
            published as an npm package and deployed on Vercel.
          </motion.p>

          {/* Stat chips (real, live) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.7 }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            <span className="font-mono text-[11px] px-3.5 py-2 rounded-lg border border-line bg-panel text-mute">
              <span className="text-cyan">{npmMonthly ?? '547'}</span> npm downloads / mo
            </span>
            <span className="font-mono text-[11px] px-3.5 py-2 rounded-lg border border-line bg-panel text-mute">
              <span className="text-cyan">56</span> tools · 9 studios
            </span>
            <span className="font-mono text-[11px] px-3.5 py-2 rounded-lg border border-line bg-panel text-mute">
              <span className="text-cyan">254</span> components on npm
            </span>
            <span className="font-mono text-[11px] px-3.5 py-2 rounded-lg border border-line bg-panel text-mute">
              <span className="text-cyan">{repos ?? '70'}</span> public repos
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 bg-ink text-bg font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-cyan transition-colors duration-300"
            >
              View Work
              <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" size={15} />
            </a>
            <a
              href="/Imran_Ahmad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-line-strong text-ink font-medium text-sm px-6 py-3.5 rounded-xl hover:border-cyan/50 hover:text-cyan transition-colors duration-300"
            >
              <FiFileText size={15} /> Resume
            </a>
            <a
              href="mailto:imranaha310@gmail.com"
              className="inline-flex items-center gap-2.5 text-mute hover:text-ink font-medium text-sm px-2 py-3.5 transition-colors duration-300"
            >
              <FiMail size={15} /> imranaha310@gmail.com
            </a>
          </motion.div>
        </div>

        {/* ── Right: tilt profile card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-fit"
          style={{ perspective: 900 }}
        >
          {/* orbit rings */}
          <div className="absolute -inset-10 sm:-inset-14 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border border-cyan/15 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-magenta/10" />
            <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(76,215,246,0.9)]" />
            <div className="absolute -left-1 top-1/4 w-1.5 h-1.5 rounded-full bg-magenta shadow-[0_0_10px_rgba(255,78,205,0.9)]" />
          </div>

          <motion.div
            ref={cardRef}
            onMouseMove={onTilt}
            onMouseLeave={resetTilt}
            style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
            className="relative w-[260px] sm:w-[300px] rounded-2xl panel overflow-hidden glow-cyan"
          >
            <img
              src={profile1}
              alt="Portrait of Imran Ahmad"
              className="w-full aspect-[4/4.6] object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/80 to-transparent pt-14 pb-4 px-4">
              <div className="font-mono text-[9px] tracking-[0.25em] text-cyan mb-1">ID: IA-77X</div>
              <div className="font-mono text-[10px] tracking-[0.15em] text-mute">
                DEV · AI · CONTENT CREATOR
              </div>
            </div>
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan/70" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan/70" />
          </motion.div>

          {/* floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 sm:-right-10 top-10 panel rounded-xl px-3.5 py-2.5 font-mono text-[10px] text-mute"
          >
            <span className="text-lime">●</span> live on Vercel
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -left-4 sm:-left-10 bottom-16 panel rounded-xl px-3.5 py-2.5 font-mono text-[10px] text-mute flex items-center gap-2"
          >
            <FiArrowUpRight className="text-magenta" size={12} /> npm published
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#proof"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.35em] text-faint hover:text-cyan transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          SCROLL
          <FiArrowDown size={12} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
