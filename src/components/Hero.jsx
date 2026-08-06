import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import profileimg1 from "./images/profile1.jpg";
import { FaArrowRight, FaExternalLinkAlt, FaRocket, FaCode, FaBrain, FaPalette } from "react-icons/fa";
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

  // Mouse parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Animated background orbs */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <motion.div
        animate={{ x: -mousePos.x, y: -mousePos.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <motion.div
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
      }} />

      <div className="w-full max-w-[1400px] mx-auto pt-24 sm:pt-28 pb-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[55%] flex flex-col items-start text-left">

          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-7 flex items-center gap-3"
          >
            <div className="px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md flex items-center gap-2.5">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 min-w-[200px]">
                {typed}<span className="animate-pulse">|</span>
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(2.8rem,7.5vw,7rem)] font-display font-black leading-[0.95] tracking-tight mb-6 sm:mb-8 text-white">
            <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="block">
              Crafting
            </motion.span>
            <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                Digital
              </span>{" "}
              Worlds.
            </motion.span>
            <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="block">
              Not Just Websites.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl font-body leading-relaxed max-w-xl mb-8">
            Self-taught React & AI developer with 9 months of experience. Creator of{" "}
            <span className="text-cyan-400 font-semibold">Toolverse</span> — 100+ online tools, npm package with 263 components.
            I build products using AI tools, from code to 16K artwork to marketing.
          </motion.p>

          {/* CTA buttons */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 w-full sm:w-auto mb-10">
            <a href="#projects"
              onMouseEnter={() => sounds.hover()}
              onClick={() => sounds.click()}
              className="group w-full sm:w-auto text-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden">
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              Explore My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="https://drive.google.com/file/d/1DwAcNdCOdmru6jUFx3qb_cWVInKRUHkN/view?usp=sharing" target="_blank" rel="noreferrer"
              onMouseEnter={() => sounds.hover()}
              onClick={() => sounds.click()}
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full border border-white/20 font-display font-bold text-sm tracking-wide uppercase text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center justify-center gap-3">
              <FaExternalLinkAlt /> Resume
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-8 sm:gap-12 mb-8">
            {[
              { value: '9', label: 'Months Exp' },
              { value: '100+', label: 'Tools Built' },
              { value: '30+', label: 'Projects' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {stat.value}
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'AI Tools', 'Three.js', 'TypeScript', 'GLM 5.2'].map((tech, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-wider hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D Profile */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-8 lg:mt-0 relative"
          ref={profile3D.ref}
          onMouseMove={profile3D.onMove}
          onMouseLeave={profile3D.onLeave}
        >
          <motion.div
            style={{ rotateX: profile3D.sRotX, rotateY: profile3D.sRotY, transformPerspective: 1000 }}
            className="relative"
          >
            {/* Orbit dots */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[420px] h-[420px] rounded-full"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4]" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[480px] h-[480px] rounded-full"
              >
                <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[360px] h-[360px] rounded-full"
              >
                <div className="absolute top-1/2 right-0 w-2.5 h-2.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 shadow-[0_0_12px_#ec4899]" />
              </motion.div>
            </div>

            {/* Profile card */}
            <div className="relative w-[clamp(260px,65vw,400px)] aspect-[4/5] rounded-[2rem] p-[2px]"
              style={{ background: 'linear-gradient(135deg,#06b6d4,#7c3aed,#ec4899)' }}>
              <div className="absolute inset-0 rounded-[2rem]"
                style={{ background: 'linear-gradient(135deg,rgba(6,182,212,0.3),rgba(124,58,237,0.3))', filter: 'blur(40px)', transform: 'scale(1.1)' }} />
              <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-[#0f0f18]">
                <img src={profileimg1} alt="Imran Ahmad" className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050e]/70 via-transparent to-transparent" />
                
                {/* Floating badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#05050e]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest">Available for Work</span>
                  </div>
                  <p className="text-white text-sm font-bold">Imran Ahmad</p>
                  <p className="text-gray-400 text-[10px]">Bihar, India · Remote</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-5 sm:-left-10 bg-[#0f0f18]/95 border border-white/10 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-0.5">9</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Months Exp.</div>
            </motion.div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-3 -right-3 sm:-right-8 bg-[#0f0f18]/95 border border-amber-500/30 px-4 py-3 rounded-xl shadow-xl backdrop-blur-xl">
              <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest">React · AI · Creative</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400/50 to-transparent">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-3 bg-cyan-400"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
