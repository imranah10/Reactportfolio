import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import profileimg1 from "./images/profile1.jpg";
import { sounds } from "../utils/sound";

const useTilt = (strength = 12) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useTransform(y, [-0.5, 0.5], [strength, -strength]);
  const rotY = useTransform(x, [-0.5, 0.5], [-strength, strength]);
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 20 });
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 20 });
  const onMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { ref, onMove, onLeave, sRotX, sRotY };
};

const Hero = () => {
  const profile3D = useTilt(8);
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const roles = ['React Developer', 'AI Developer', 'Toolverse Creator', 'Creative Technologist'];

  useEffect(() => {
    let i = 0, current = roles[roleIdx], forward = true;
    const tick = setInterval(() => {
      if (forward) {
        setTyped(current.slice(0, i + 1));
        i++;
        if (i === current.length) { forward = false; setTimeout(() => {}, 1500); }
      } else {
        setTyped(current.slice(0, i - 1));
        i--;
        if (i === 0) { clearInterval(tick); setTimeout(() => setRoleIdx(r => (r + 1) % roles.length), 400); }
      }
    }, forward ? 60 : 30);
    return () => clearInterval(tick);
  }, [roleIdx]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 relative mb-32 pt-32 px-6 md:px-12 lg:px-20">
      {/* Background ornaments */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Left side */}
      <div className="flex-1 space-y-8 z-10 relative px-4 md:px-0">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 font-mono text-sm text-primary mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          SYSTEM ONLINE // STATUS: OPTIMAL
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2.5rem,7vw,5rem)] font-black text-text-primary leading-tight relative"
        >
          Crafting Digital Worlds. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-neon-pink filter drop-shadow-[0_0_10px_rgba(76,215,246,0.3)]">
            Not Just Websites.
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 font-mono text-lg text-primary"
        >
          <span className="inline-block">{typed}<span className="animate-pulse">|</span></span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          Self-taught React & AI developer with 1 year of experience. Creator of{" "}
          <span className="text-primary font-semibold">Toolverse</span> — 100+ online tools, npm package with 263 components.
          Engineering high-performance web experiences through the intersection of interactive 3D, advanced AI integrations, and relentless technical precision.
        </motion.p>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <div className="glass-panel px-4 py-2 rounded flex items-center gap-2 border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="font-mono text-xs text-primary">React / Next.js</span>
          </div>
          <div className="glass-panel px-4 py-2 rounded flex items-center gap-2 border-neon-pink/30">
            <span className="w-2 h-2 bg-neon-pink rounded-full" />
            <span className="font-mono text-xs text-neon-pink">AI & LLMs</span>
          </div>
          <div className="glass-panel px-4 py-2 rounded flex items-center gap-2 border-tertiary/30">
            <span className="w-2 h-2 bg-tertiary rounded-full" />
            <span className="font-mono text-xs text-tertiary">WebGL / Three.js</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-outline-variant/30"
        >
          <div>
            <div className="text-3xl font-bold text-primary">1</div>
            <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Year Exp</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Tools Built</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">30+</div>
            <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">263</div>
            <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">npm Components</div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="#projects"
            onClick={() => sounds.click()}
            onMouseEnter={() => sounds.hover()}
            className="group relative px-8 py-4 bg-transparent border border-primary text-primary font-mono tracking-widest uppercase overflow-hidden hover:bg-primary/10 transition-all duration-300 flex items-center gap-3"
          >
            <span className="relative z-10">Explore My Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="https://drive.google.com/file/d/1DwAcNdCOdmru6jUFx3qb_cWVInKRUHkN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.click()}
            onMouseEnter={() => sounds.hover()}
            className="px-8 py-4 border border-outline-variant text-text-muted font-mono tracking-widest uppercase hover:border-text-muted hover:text-on-surface transition-colors"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* Right side: 3D Tilt Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="flex-1 relative w-full aspect-square md:max-w-[500px] flex items-center justify-center"
        ref={profile3D.ref}
        onMouseMove={profile3D.onMove}
        onMouseLeave={profile3D.onLeave}
      >
        <motion.div
          style={{ rotateX: profile3D.sRotX, rotateY: profile3D.sRotY, transformPerspective: 1000 }}
          className="relative w-64 h-80 glass-panel rounded-xl flex items-center justify-center group tilt-card transition-transform duration-500 cursor-pointer z-10 border-primary/50 neon-glow"
        >
          {/* Corner brackets */}
          <div className="corner-bracket corner-tl" />
          <div className="corner-bracket corner-tr" />
          <div className="corner-bracket corner-bl" />
          <div className="corner-bracket corner-br" />

          {/* Profile image */}
          <div className="absolute inset-4 overflow-hidden rounded-lg">
            <div className="scanline" />
            <img
              src={profileimg1}
              alt="Imran Ahmad"
              className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* ID badge */}
          <div className="absolute bottom-4 left-4 right-4 bg-surface-dark/90 backdrop-blur border border-primary/20 p-3 rounded font-mono text-[10px]">
            <div className="text-primary mb-1">ID: IA-77X</div>
            <div className="text-on-surface-variant">ROLE: REACT · AI DEVELOPER</div>
          </div>
        </motion.div>

        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 pointer-events-none">
          <div className="orbital-ring ring-1" />
          <div className="orbital-ring ring-2" />
          <div className="orbital-ring ring-3" />
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] text-gray-600 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-3 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
