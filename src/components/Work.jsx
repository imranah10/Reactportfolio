import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiPackage, FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const SHOTS = [
  { src: '/shots/toolverse-hero.webp', label: 'HOME — EVERY TOOL, 100% PRIVATE' },
  { src: '/shots/toolverse-studio.webp', label: 'STUDIOS — ALL-IN-ONE WORKSPACES' },
  { src: '/shots/toolverse-deep.webp', label: 'AI-POWERED FEATURES' },
  { src: '/shots/toolverse-extra.webp', label: 'DEVELOPER SURFACE' },
];

const BrowserFrame = () => {
  const [active, setActive] = useState(0);
  const wrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % SHOTS.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={wrapRef} className="lg:sticky lg:top-24">
      <motion.div style={{ scale, rotate }} className="origin-top">
        <div className="rounded-2xl border border-line-strong bg-panel overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          {/* chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface/80">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-4 flex-1 max-w-[320px] font-mono text-[10px] text-mute bg-bg/70 border border-line rounded-md px-3 py-1.5 truncate">
              https://toolverse-official.vercel.app
            </div>
            <span className="ml-auto hidden sm:flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" /> LIVE
            </span>
          </div>

          {/* screenshot carousel */}
          <div className="relative aspect-[16/10] bg-bg" data-cursor="view">
            {SHOTS.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={`Toolverse screenshot — ${s.label}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                  i === active ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.2em] text-ink/90 bg-bg/70 backdrop-blur px-3 py-1.5 rounded-md border border-line">
              {SHOTS[active].label}
            </div>
            <div className="absolute bottom-3 right-3 flex gap-1.5">
              {SHOTS.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setActive(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-cyan' : 'w-1.5 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ToolverseFlagship = () => (
  <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
    {/* copy */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="lg:pt-6 order-2 lg:order-1"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[9px] tracking-[0.25em] text-bg bg-cyan px-2.5 py-1 rounded">
          FLAGSHIP
        </span>
        <span className="font-mono text-[9px] tracking-[0.25em] text-mute border border-line px-2.5 py-1 rounded">
          2025 — PRESENT
        </span>
      </div>

      <h3 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-5">
        Tool<span className="grad-text">verse</span>
      </h3>

      <p className="text-mute leading-relaxed text-[15px] mb-6">
        A privacy-first toolkit with <span className="text-ink">56 tools across 9 studios</span> —
        PDF, Image, Text, Calculator, Generator, Developer, AI Pro and Shield. Everything runs
        100% in the browser: no uploads, no signups, no tracking. Published as an npm package
        with <span className="text-ink">254 React components</span> and{' '}
        <span className="text-ink">1,052 icons in 7 variants</span>.
      </p>

      {/* metrics */}
      <div className="grid grid-cols-3 gap-3 mb-7">
        {[
          { v: '547', l: 'DL / MO' },
          { v: '1,377', l: 'DL / YEAR' },
          { v: 'v1.5.2', l: 'RELEASED' },
        ].map((m) => (
          <div key={m.l} className="panel rounded-xl px-3.5 py-3.5 text-center">
            <div className="font-display font-bold text-lg sm:text-xl text-cyan">{m.v}</div>
            <div className="font-mono text-[8px] tracking-[0.2em] text-faint mt-1">{m.l}</div>
          </div>
        ))}
      </div>

      {/* stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Babel AST', 'TensorFlow.js', 'Vercel'].map(
          (t) => (
            <span
              key={t}
              className="font-mono text-[10px] text-mute border border-line rounded-md px-2.5 py-1.5"
            >
              {t}
            </span>
          )
        )}
      </div>

      {/* links */}
      <div className="flex flex-wrap gap-3">
        <a
          href="https://toolverse-official.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink text-bg font-semibold text-sm px-5 py-3 rounded-xl hover:bg-cyan transition-colors duration-300"
        >
          <FiExternalLink size={14} /> Live Demo
        </a>
        <a
          href="https://www.npmjs.com/package/toolverse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-line-strong text-ink text-sm px-5 py-3 rounded-xl hover:border-cyan/50 hover:text-cyan transition-colors duration-300"
        >
          <FiPackage size={14} /> npm Package
        </a>
        <span
          title="Source code is private — live product speaks for itself"
          className="inline-flex items-center gap-2 border border-line text-faint text-sm px-5 py-3 rounded-xl cursor-help"
        >
          <FiGithub size={14} /> Private Source
        </span>
      </div>
    </motion.div>

    {/* mockup */}
    <div className="order-1 lg:order-2">
      <BrowserFrame />
    </div>
  </div>
);

export { ToolverseFlagship };

const Work = () => (
  <section id="work" className="relative py-24 sm:py-32">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHeading num="01" kicker="SELECTED WORK" title={<>Things I've <span className="grad-text">shipped</span>.</>} />

      {/* Flagship case study */}
      <div className="mb-24 sm:mb-32">
        <ToolverseFlagship />
      </div>

      {/* Featured grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            title: 'MyVirtualMate',
            type: 'AI COMPANION · CLIENT',
            desc: 'AI-powered virtual companion for emotional support — production product for an Australian company.',
            img: 'https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/presentmyvirt_du9pfo.png',
            demo: 'https://myvirtualmate.com.au/',
            stack: ['Next.js', 'AI / LLM', 'Product'],
          },
          {
            title: 'Approkure',
            type: 'WEB PLATFORM · CLIENT',
            desc: 'Full marketing and product platform — responsive, SEO-ready, deployed in production.',
            img: 'https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/appprokure_jsvhtk.png',
            demo: 'https://approkure.com/',
            stack: ['React', 'SEO', 'Vercel'],
          },
          {
            title: 'Etheria (UI/UX)',
            type: 'Awwwards-style portfolio · UI/UX',
            desc: 'Premium portfolio focused on fluid motion, magnetic interactions and scroll choreography.',
            video: 'https://res.cloudinary.com/dzhtnwfg0/video/upload/v1/Etheria___UI_UX_Portfolio_k0ohf9.mp4',
            demo: 'https://ui-ux-designer-port.vercel.app/',
            stack: ['Next.js', 'Framer Motion', 'Lenis'],
          },
          {
            title: 'Dev (Portfolio)',
            type: '3D EXPERIENCE',
            desc: 'Futuristic 3D portfolio with particle systems and electric physics borders.',
            video: 'https://res.cloudinary.com/dzhtnwfg0/video/upload/v1/Dev_Portfolio___Void_Neon_yep88m.mp4',
            demo: 'https://modern-portfolio-eight-topaz.vercel.app/',
            stack: ['Next.js', 'Three.js', 'WebGL'],
          },
          {
            title: 'SmartEDU',
            type: 'ED-TECH FRONTEND',
            desc: 'Clean education platform interface — early build, shipped and live.',
            img: 'https://res.cloudinary.com/dzhtnwfg0/image/upload/v1767181736/SmartEDU_uzgbba.png',
            demo: 'https://imranah10.github.io/SmartEDU/',
            source: 'https://github.com/imranah10/SmartEDU',
            stack: ['React', 'Bootstrap'],
          },
        ].map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      {/* More builds */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="mt-14"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
          <p className="font-mono text-[10px] tracking-[0.3em] text-mute">
            MORE BUILDS — <span className="text-lime">ALL LINKS REAL, ALL LIVE</span>
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent" aria-hidden="true" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ['PromptForge', 'AI WORKBENCH', 'https://promptforge-navy-psi.vercel.app/'],
            ['PresentMyVirtualMate', 'COMPANY PRESENTATION', 'https://present.myvirtualmate.com.au/'],
            ['Outsource Guide', 'SEO CONTENT HUB', 'https://benefits-of-outsourcing-with-mvm.myvirtualmate.com.au/'],
            ['Trendzz', 'TRENDS UI', 'https://imranah10.github.io/Trendzz/'],
            ['Techyy', 'TECH MAG UI', 'https://imranah10.github.io/Techy/'],
            ['I-Folio', 'PORTFOLIO UI', 'https://imranah10.github.io/Portfolio-bootstrap-sample/'],
          ].map(([name, type, url], i) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="group panel rounded-xl px-4 py-4 flex items-center justify-between gap-3 hover:border-cyan/40 transition-colors duration-300"
            >
              <span>
                <span className="block font-medium text-[13.5px] text-ink group-hover:text-cyan transition-colors">
                  {name}
                </span>
                <span className="block font-mono text-[8px] tracking-[0.2em] text-faint mt-1 group-hover:text-mute transition-colors">
                  {type}
                </span>
              </span>
              <span className="shrink-0 w-8 h-8 rounded-lg border border-line flex items-center justify-center text-faint group-hover:text-cyan group-hover:border-cyan/40 transition-colors">
                <FiArrowUpRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const ProjectCard = ({ p, i }) => {
  const vidRef = useRef(null);

  const onEnter = () => { if (p.video && vidRef.current) vidRef.current.play().catch(() => {}); };
  const onLeave = () => { if (p.video && vidRef.current) vidRef.current.pause(); };

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (i % 3) * 0.09, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group panel rounded-2xl overflow-hidden hover:border-cyan/30 transition-colors duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface" data-cursor="view">
        {p.video ? (
          <video
            ref={vidRef}
            src={p.video}
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={p.img}
            alt={`${p.title} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-3 left-3 font-mono text-[8px] tracking-[0.2em] text-ink/80 bg-bg/60 backdrop-blur px-2.5 py-1 rounded border border-line">
          {p.type}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl tracking-tight mb-2 group-hover:text-cyan transition-colors">
          {p.title}
        </h3>
        <p className="text-[13px] text-mute leading-relaxed mb-4 flex-1">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[9px] text-faint border border-line rounded px-2 py-1">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.18em] text-cyan hover:underline underline-offset-4"
          >
            LIVE ↗
          </a>
          {p.source ? (
            <a
              href={p.source}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.18em] text-mute hover:text-ink"
            >
              SOURCE ↗
            </a>
          ) : (
            <span className="font-mono text-[10px] tracking-[0.18em] text-faint">
              PRIVATE SOURCE
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Work;
