import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import pdf from "./resume.pdf";
import profileimg1 from "./images/profile1.jpg";
const acLogo = "https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Logo.png";
import { FaDownload, FaArrowRight, FaCode, FaPaintBrush, FaRobot, FaChartLine, FaShoppingBag } from "react-icons/fa";
import { SiPinterest, SiGumroad } from "react-icons/si";

/* ── 3D tilt card hook ── */
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

/* ── Shader‑style animated gradient background lines ── */
const ShaderLines = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(6)].map((_, i) => (
      <motion.div key={i}
        className="absolute left-0 right-0 h-[1px] opacity-[0.06]"
        style={{ top: `${15 + i * 14}%`, background: 'linear-gradient(90deg,transparent,#06b6d4,transparent)' }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 1.2 }}
      />
    ))}
    {/* radial ambient */}
    <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
      style={{ background: 'radial-gradient(circle,#7c3aed 0%,transparent 70%)', filter: 'blur(60px)' }} />
    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
      style={{ background: 'radial-gradient(circle,#06b6d4 0%,transparent 70%)', filter: 'blur(60px)' }} />
  </div>
);

/* ── Floating orbit dot ── */
const OrbitDot = ({ delay, radius, duration, color }) => (
  <motion.div className="absolute rounded-full pointer-events-none"
    style={{ width: 6, height: 6, background: color, top: '50%', left: '50%', marginLeft: -3, marginTop: -3 }}
    animate={{ x: [radius, 0, -radius, 0, radius], y: [0, radius, 0, -radius, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
  />
);

const Hero = () => {
  const profile3D = useTilt(8);
  const card3D    = useTilt(6);
  const [typed, setTyped] = useState('');
  const roles = ['Front-End Engineer', 'AI Creative Operator', 'Digital Product Builder'];
  const [roleIdx, setRoleIdx] = useState(0);

  /* typewriter effect */
  useEffect(() => {
    let i = 0, current = roles[roleIdx], forward = true;
    const tick = setInterval(() => {
      if (forward) {
        setTyped(current.slice(0, i + 1));
        i++;
        if (i === current.length) { forward = false; setTimeout(() => {}, 1200); }
      } else {
        setTyped(current.slice(0, i - 1));
        i--;
        if (i === 0) { clearInterval(tick); setTimeout(() => setRoleIdx(r => (r + 1) % roles.length), 400); }
      }
    }, forward ? 60 : 30);
    return () => clearInterval(tick);
  }, [roleIdx]);

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
      <ShaderLines />

      <div className="w-full max-w-[1400px] mx-auto pt-24 sm:pt-28 pb-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* ── LEFT ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[55%] flex flex-col items-start text-left">

          {/* Role badge with typewriter */}
          <div className="mb-7 flex items-center gap-3">
            <div className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 min-w-[200px]">
                {typed}<span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Headline with parallax chars */}
          <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-display font-black leading-[0.98] tracking-tight mb-6 sm:mb-8 text-white">
            <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="block">Building</motion.span>
            <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="block">
              Seamless <span className="text-gradient">Web</span>
            </motion.span>
            <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="block">Experiences.</motion.span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl font-body leading-relaxed max-w-lg mb-10">
            I craft vibrant, high-performance web applications — and beyond that, I build full digital products using AI tools, from generating 16K artwork to marketing and selling them online.
          </motion.p>

          {/* CTA buttons */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 w-full sm:w-auto mb-10">
            <a href="#projects"
              className="group w-full sm:w-auto text-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-display font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden">
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              See my work <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href={pdf} target="_blank" rel="noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full border border-white/20 font-display font-bold text-sm tracking-wide uppercase text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white flex items-center justify-center gap-3">
              <FaDownload /> Resume
            </a>
          </motion.div>

          {/* ══════════════════════════════════════════════════
              VENTURE CARD — tells EVERY interviewer/client
              exactly what Aurelian Canvas is
          ══════════════════════════════════════════════════ */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-full max-w-lg"
            ref={card3D.ref}
            onMouseMove={card3D.onMove}
            onMouseLeave={card3D.onLeave}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-amber-500/30" />
              <p className="text-[9px] font-black tracking-[0.35em] uppercase text-amber-500/60">
                I'm not just a developer — I also run this
              </p>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-amber-500/30" />
            </div>

            <motion.a href="/ventures/aurelian-canvas"
              className="group block rounded-2xl border border-amber-500/25 overflow-hidden relative"
              style={{ rotateX: card3D.sRotX, rotateY: card3D.sRotY, transformPerspective: 800,
                background: 'linear-gradient(135deg,rgba(212,175,55,0.07) 0%,rgba(5,5,14,0.95) 60%,rgba(180,130,10,0.05) 100%)' }}
              whileHover={{ borderColor: 'rgba(212,175,55,0.5)', boxShadow: '0 24px 80px rgba(212,175,55,0.18)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Gold shimmer line */}
              <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }} />

              <div className="p-5">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                      <img src={acLogo} alt="AC" className="w-7 h-7 object-contain relative z-10" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-white font-black text-sm leading-tight tracking-tight">Aurelian Canvas</p>
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/25">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[8px] font-black uppercase tracking-widest text-green-400">Live</span>
                        </div>
                      </div>
                      <p className="text-[10px] font-bold text-amber-300 tracking-wider uppercase mt-0.5">Founder · Solo Operator · AI Art Brand</p>
                    </div>
                  </div>
                </div>

                {/* THIS IS THE KEY — what I actually do, explained clearly */}
                <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 mb-4">
                  <p className="text-[10px] font-black text-white/85 uppercase tracking-[0.25em] mb-3">
                    What I build & run here, entirely alone:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: FaRobot,      color: '#a78bfa', text: 'AI Prompt Engineering' },
                      { icon: FaPaintBrush, color: '#D4AF37', text: '16K Digital Art Creation' },
                      { icon: FaCode,       color: '#34d399', text: 'Frame Mockup Design' },
                      { icon: FaChartLine,  color: '#f472b6', text: 'Pinterest SEO Strategy' },
                      { icon: FaShoppingBag,color: '#fb923c', text: 'Gumroad Product Sales' },
                      { icon: SiPinterest,  color: '#E60023', text: 'Video & Content Marketing' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <item.icon size={10} style={{ color: item.color, flexShrink: 0 }} />
                        <span className="text-white/95 text-[11px] font-semibold leading-tight">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['AI Generation','Prompt Eng.','16K Art','Video Marketing','Pinterest SEO','Gumroad'].map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[9px] font-black text-amber-300 tracking-wide">{tag}</span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-white/70 font-mono font-medium">7 artworks · $22 each</span>
                    <span className="flex items-center gap-1 text-[10px] text-[#E60023] font-bold">
                      <SiPinterest size={8} /> Pinterest
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-amber-400 font-bold">
                      <SiGumroad size={8} /> Gumroad
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-black tracking-[0.15em] uppercase text-amber-400 group-hover:gap-2.5 transition-all duration-300">
                    Case Study <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>

              {/* Hover shimmer sweep */}
              <motion.div className="absolute inset-0 pointer-events-none"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{ background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.06),transparent)' }}
              />
            </motion.a>
          </motion.div>

        </motion.div>

        {/* ── RIGHT — 3D Profile ── */}
        <motion.div initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
              <OrbitDot delay={0}   radius={180} duration={10} color="rgba(6,182,212,0.6)" />
              <OrbitDot delay={2.5} radius={210} duration={14} color="rgba(168,85,247,0.5)" />
              <OrbitDot delay={5}   radius={160} duration={8}  color="rgba(212,175,55,0.5)" />
            </div>

            <div className="relative w-[clamp(260px,65vw,400px)] aspect-[4/5] rounded-[2rem] p-[2px]"
              style={{ background: 'linear-gradient(135deg,#06b6d4,#7c3aed,#ec4899)' }}>
              <div className="absolute inset-0 rounded-[2rem]"
                style={{ background: 'linear-gradient(135deg,rgba(6,182,212,0.3),rgba(124,58,237,0.3))', filter: 'blur(40px)', transform: 'scale(1.1)' }} />
              <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-[#0f0f18]">
                <img src={profileimg1} alt="Imran" className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-110" />
                {/* inner shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050e]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-5 sm:-left-10 bg-[#0f0f18]/95 border border-white/10 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl">
              <div className="text-3xl sm:text-4xl font-black text-gradient mb-0.5">3+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Years Exp.</div>
            </motion.div>

            {/* Second badge */}
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-3 -right-3 sm:-right-8 bg-[#0f0f18]/95 border border-amber-500/30 px-4 py-3 rounded-xl shadow-xl backdrop-blur-xl">
              <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest">AI · Art · Code</div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;