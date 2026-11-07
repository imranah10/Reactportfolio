import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'framer-motion';
import {
  FiInstagram, FiYoutube, FiFacebook, FiGlobe, FiLink, FiMail, FiDownload,
  FiArrowUpRight, FiArrowRight, FiArrowLeft, FiZap, FiCalendar, FiUploadCloud,
  FiShield, FiTrendingUp, FiPenTool, FiVideo, FiCheck,
} from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';

/* ════════════════════════════════════════════════════════════════
   DATA — real ventures, real numbers, real links
════════════════════════════════════════════════════════════════ */
const VENTURES = [
  {
    id: 'toolverse',
    tag: 'AI TOOLS PLATFORM',
    name: 'ToolVerse',
    accent: '#b7ff4e',
    monogram: 'TV',
    logo: '/creator/logos/toolverse-logo.png',
    desc: 'A privacy-first AI toolkit — 57+ tools across 8 studios, 100% in-browser. Published as an npm package with 254 React components, live on Vercel, and fed by a fully automated 90-day content engine.',
    metrics: ['57+ AI tools', '8 studios', '254 npm components', '90-day auto engine'],
    profile: {
      platform: 'IG',
      handle: '@toolverse.offiicial',
      name: 'ToolVerse',
      bio: 'Discover AI tools that just work · Create · Edit · Grow',
      stat: 'daily posting',
      ring: 'linear-gradient(45deg, #b7ff4e, #4cd7f6)',
    },
    links: [
      { icon: FiGlobe, label: 'toolverse-official.vercel.app', href: 'https://toolverse-official.vercel.app/' },
      { icon: FiInstagram, label: '@toolverse.offiicial', href: 'https://www.instagram.com/toolverse.offiicial/' },
      { icon: FiFacebook, label: 'Facebook Page', href: 'https://www.facebook.com/profile.php?id=61594449973267' },
    ],
  },
  {
    id: 'aurelian',
    tag: 'AI FINE ART BRAND',
    name: 'Aurelian Canvas',
    accent: '#f6c26b',
    monogram: 'AC',
    logo: '/creator/logos/aurelian-logo.png',
    desc: 'Museum-grade 16K AI masterpieces — "Engineered for the Elite. Curated for the Visionary." A luxury digital-art label with its own gallery identity, growing across Instagram and Pinterest.',
    metrics: ['16K ultra-res art', 'luxury positioning', 'IG + Pinterest', 'Linktree funnel'],
    profile: {
      platform: 'IG',
      handle: '@aureliancanvas',
      name: 'Aurelian Canvas · 16K Digital Art',
      bio: 'Engineered for the Elite. Curated for the Visionary.',
      stat: '16K gallery',
      ring: 'conic-gradient(#f6c26b, #ff4ecd, #f6c26b)',
    },
    links: [
      { icon: FiInstagram, label: '@aureliancanvas', href: 'https://www.instagram.com/aureliancanvas/' },
      { icon: FaPinterestP, label: 'Pinterest · AurelianCanvas', href: 'https://in.pinterest.com/AurelianCanvas/' },
      { icon: FiLink, label: 'linktr.ee/aureliancanvas', href: 'https://linktr.ee/aureliancanvas' },
    ],
  },
  {
    id: 'pipsio',
    tag: '3D KIDS ANIMATION',
    name: 'Pipsio Kids',
    accent: '#4cd7f6',
    monogram: 'PK',
    logo: '/creator/logos/pipsio-logo.png',
    desc: 'A 3D nursery-rhymes universe with original characters — Roary, Mimi, Gola & Pip. Weekly songs and stories produced end-to-end with an AI pipeline: script to final render.',
    metrics: ['original characters', '3D AI pipeline', 'weekly uploads', 'YouTube + IG + FB'],
    profile: {
      platform: 'YT',
      handle: '@pipsiokidsofficial',
      name: 'Pipsio Kids',
      bio: 'Fun 3D nursery rhymes & kids songs · Roary · Mimi · Gola · Pip',
      stat: '16 videos',
      ring: 'linear-gradient(45deg, #ff4e4e, #4cd7f6)',
    },
    links: [
      { icon: FiYoutube, label: '@pipsiokidsofficial', href: 'https://www.youtube.com/@pipsiokidsofficial' },
      { icon: FiInstagram, label: '@carolina1___', href: 'https://www.instagram.com/carolina1___' },
      { icon: FiFacebook, label: 'Facebook Page', href: 'https://www.facebook.com/profile.php?id=61596286498251' },
    ],
  },
];

const STATS = [
  { n: 3, suffix: '', label: 'brands built & running' },
  { n: 57, suffix: '', label: 'AI tools shipped' },
  { n: 60, suffix: '+', label: 'AI videos produced' },
  { n: 90, suffix: '', label: 'days of hands-free content' },
];

const PIPELINE = [
  { icon: FiCalendar, step: '01', title: 'SCHEDULE', desc: '90-day content calendar in JSON — every post, caption & slot planned before a single frame is made.' },
  { icon: FiZap, step: '02', title: 'CREATE', desc: 'AI-generated 4K visuals & motion reels rendered in batches — one master asset per brand, per day.' },
  { icon: FiUploadCloud, step: '03', title: 'PUBLISH', desc: 'A Node.js engine on GitHub Actions posts to Instagram, Facebook, LinkedIn & Pinterest on prime-time clocks.' },
  { icon: FiShield, step: '04', title: 'PROTECT', desc: 'Per-day caps, duplicate-proof locks, retry with backoff, honest failure alerts. Self-healing by design.' },
  { icon: FiTrendingUp, step: '05', title: 'SCALE', desc: 'Geo-targeted delivery to US · UK · CA · AU · DE · NL and analytics feedback loops back into the schedule.' },
];

const SERVICES = [
  {
    icon: FiPenTool,
    title: 'Content Creation',
    desc: 'Scroll-stopping visuals and words engineered for each platform — not recycled templates.',
    items: ['Brand kits & visual identity', 'Posts, carousels & story sets', 'Captions, hooks & hashtags', 'Thumbnails that get clicks', 'Content calendars (30–90 days)'],
  },
  {
    icon: FiTrendingUp,
    title: 'Social Media Management',
    desc: 'I run accounts like systems — automated engines that post on time, every time, in the right timezone.',
    items: ['Multi-platform handling (IG · FB · LinkedIn · Pinterest · YouTube)', 'Automated posting pipelines', 'Growth loops & engagement playbooks', 'Prime-time geo-targeting', 'Monthly growth reports'],
  },
  {
    icon: FiVideo,
    title: 'AI Video Creation',
    desc: 'From 3D kids universes to luxury art reels — video produced end-to-end with an AI-assisted pipeline.',
    items: ['Reels & Shorts (script to render)', '3D animation & original characters', 'AI voice, music & captions', 'Motion graphics & product demos', 'Weekly upload systems'],
  },
];

const MARQUEE_ITEMS = [
  'CONTENT CREATION', 'SOCIAL MEDIA MANAGEMENT', 'AI VIDEO', '3D ANIMATION',
  'BRAND BUILDING', 'AUTOMATION ENGINES', 'REELS & SHORTS', 'GROWTH SYSTEMS',
];

/* ════════════════════════════════════════════════════════════════
   PRIMITIVES
════════════════════════════════════════════════════════════════ */
const EASE = [0.16, 1, 0.3, 1];

const KineticWord = ({ word, delay = 0, gold = false }) => (
  <span className="inline-flex overflow-hidden pb-[0.08em] -mb-[0.08em]">
    {word.split('').map((ch, i) => (
      <motion.span
        key={`${ch}-${i}`}
        initial={{ y: '110%', rotate: 6 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ delay: delay + i * 0.045, duration: 0.9, ease: EASE }}
        className={`inline-block ${gold ? 'grad-text-gold' : ''}`}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

const Counter = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
};

const SectionHead = ({ num, kicker, title }) => (
  <div className="relative mb-12 sm:mb-16">
    <span
      className="absolute -top-10 sm:-top-16 -left-2 font-display font-extrabold text-[clamp(5rem,14vw,11rem)] leading-none text-stroke select-none pointer-events-none"
      aria-hidden="true"
    >
      {num}
    </span>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative"
    >
      <p className="font-mono text-[10px] tracking-[0.3em] text-[#f6c26b] mb-3">{kicker}</p>
      <h2 className="font-display font-extrabold text-[clamp(2.2rem,6vw,4rem)] tracking-tight leading-none">{title}</h2>
    </motion.div>
  </div>
);

/** Mouse-tracked 3D tilt card with shine sweep */
const Tilt = ({ children, className = '', glow = 'glow-gold' }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 180, damping: 18 });
  const shineX = useTransform(mx, [-0.5, 0.5], ['20%', '80%']);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 900 }}
      className={`group relative ${className}`}
    >
      <div className={`absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${glow}`} />
      {children}
      <motion.div
        style={{ left: shineX }}
        className="pointer-events-none absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:animate-shine"
        aria-hidden="true"
      />
    </motion.div>
  );
};

/* ════════════════════════════════════════════════════════════════
   SECTIONS
════════════════════════════════════════════════════════════════ */
const ROLES = ['Content Creator', 'Social Media Manager', 'AI Video Creator', 'Brand Builder'];

const useRoleScramble = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(ROLES[0]);
  useEffect(() => {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&*';
    const target = ROLES[idx];
    let iter = 0;
    let raf;
    let hold;
    const run = () => {
      setText(target.split('').map((ch, i) => (i < iter ? ch : ch === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)])).join(''));
      iter += 0.6;
      if (iter <= target.length) raf = requestAnimationFrame(run);
      else hold = setTimeout(() => setIdx((i) => (i + 1) % ROLES.length), 2100);
    };
    raf = requestAnimationFrame(run);
    return () => { cancelAnimationFrame(raf); clearTimeout(hold); };
  }, [idx]);
  return text;
};

const CreatorHero = () => {
  const role = useRoleScramble();
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="absolute -top-44 left-[8%] w-[560px] h-[560px] rounded-full bg-[#ff4ecd]/[0.09] blur-[130px] animate-aurora-a" />
        <div className="absolute top-[30%] -right-44 w-[600px] h-[600px] rounded-full bg-[#f6c26b]/[0.08] blur-[140px] animate-aurora-b" />
        <div className="absolute -bottom-56 left-[30%] w-[520px] h-[520px] rounded-full bg-cyan/[0.07] blur-[130px] animate-aurora-a" />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="inline-flex items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-mute border border-line rounded-full px-4 py-2 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f6c26b] animate-pulse-dot" />
          3 BRANDS · 1 OPERATOR · OPEN FOR HIRE
        </motion.div>

        <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.9rem,8vw,6rem)]">
          <KineticWord word="I" delay={1.2} /> <KineticWord word="BUILD" delay={1.28} />
          <br />
          <KineticWord word="BRANDS" delay={1.45} gold />
          <br />
          <KineticWord word="THAT" delay={1.7} /> <KineticWord word="BLOW" delay={1.8} /> <KineticWord word="UP." delay={1.9} gold />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          className="mt-5 font-mono text-sm sm:text-base text-[#f6c26b] h-7"
        >
          <span className="text-mute">&gt;_</span> {role}
          <span className="inline-block w-[9px] h-[1.1em] bg-[#f6c26b]/80 ml-1 align-text-bottom animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.7 }}
          className="mt-6 max-w-[560px] text-mute text-[15px] sm:text-base leading-relaxed"
        >
          I'm <span className="text-ink font-medium">Imran Ahmad</span> — a developer-turned-creator who
          doesn't just post content, he <span className="text-ink font-medium">builds machines that grow brands</span>.
          Three live ventures. One automation engine. Zero missed posts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-3.5"
        >
          <a
            href="mailto:imranaha310@gmail.com?subject=Hiring%20—%20Content%20/%20Social%20Media%20/%20AI%20Video"
            className="group inline-flex items-center gap-2.5 bg-[#f6c26b] text-bg font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-[#ffde9e] transition-colors duration-300"
          >
            Hire Me
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={15} />
          </a>
          <a
            href="/Imran_Ahmad_Creator_Resume.pdf"
            download="Imran-Ahmad-Creator-Resume.pdf"
            className="inline-flex items-center gap-2.5 border border-line-strong text-ink font-medium text-sm px-6 py-3.5 rounded-xl hover:border-[#f6c26b]/60 hover:text-[#f6c26b] transition-colors duration-300"
          >
            <FiDownload size={15} /> Creator Resume
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-mute hover:text-cyan font-mono text-[11px] tracking-[0.18em] px-2 py-3.5 transition-colors"
          >
            <FiArrowLeft size={13} /> SWITCH TO DEV MODE
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#ventures"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.35em] text-faint hover:text-[#f6c26b] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-2">
          EXPLORE
          <FiArrowRight size={12} className="rotate-90" />
        </motion.div>
      </motion.a>
    </section>
  );
};

const CreatorMarquee = () => (
  <div className="relative py-8 border-y border-line bg-surface/40">
    <div className="flex overflow-hidden mask-fade-x" aria-hidden="true">
      <div className="flex shrink-0 items-center gap-10 pr-10 animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-stroke whitespace-nowrap">{item}</span>
            <span className={`w-2 h-2 rotate-45 ${i % 2 ? 'bg-[#f6c26b]/60' : 'bg-[#ff4ecd]/60'}`} />
          </span>
        ))}
      </div>
    </div>
  </div>
);

const StatsBar = () => (
  <section className="relative py-16 sm:py-20">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
            className="panel rounded-2xl p-6 sm:p-7 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c26b]/50 to-transparent" />
            <div className="font-display font-extrabold text-[clamp(2.4rem,5vw,3.6rem)] leading-none grad-text-gold">
              <Counter to={s.n} suffix={s.suffix} />
            </div>
            <div className="font-mono text-[10px] tracking-[0.18em] text-mute mt-3 uppercase">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const VentureCard = ({ v, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay: i * 0.12, duration: 0.8, ease: EASE }}
  >
    <Tilt className="panel rounded-3xl p-6 sm:p-8 h-full">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] mb-2" style={{ color: v.accent }}>{v.tag}</p>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">{v.name}</h3>
        </div>
        {/* monogram with brand ring */}
        <div className="relative shrink-0" style={{ perspective: 600 }}>
          <div className="absolute -inset-1 rounded-2xl blur-md opacity-40" style={{ background: v.ring }} />
          <div className="relative w-16 h-16 rounded-2xl bg-bg border border-line-strong flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
            <img src={v.logo} alt={`${v.name} logo`} className="w-full h-full object-contain p-1.5" loading="lazy" />
          </div>
        </div>
      </div>

      <p className="text-mute text-sm leading-relaxed mb-6">{v.desc}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {v.metrics.map((m) => (
          <span key={m} className="font-mono text-[10px] px-2.5 py-1.5 rounded-lg border border-line bg-panel text-mute">{m}</span>
        ))}
      </div>

      {/* mock social profile strip */}
      <div className="rounded-2xl border border-line bg-bg/60 p-4 mb-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full p-[2.5px] shrink-0" style={{ background: v.profile.ring }}>
          <div className="w-full h-full rounded-full bg-bg flex items-center justify-center overflow-hidden">
            <img src={v.logo} alt="" className="w-9 h-9 object-contain" loading="lazy" />
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[13px] text-ink truncate">{v.profile.name}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#4cd7f6" aria-hidden="true">
              <path d="M12 2l2.4 2.4 3.3-.5 1 3.2 3 1.5-1.2 3.2 1.2 3.2-3 1.5-1 3.2-3.3-.5L12 22l-2.4-2.4-3.3.5-1-3.2-3-1.5L3.5 12 2.3 8.8l3-1.5 1-3.2 3.3.5L12 2zm-1.2 13.3l5-5-1.4-1.4-3.6 3.6-1.8-1.8-1.4 1.4 3.2 3.2z" />
            </svg>
          </div>
          <div className="font-mono text-[10px] text-cyan truncate">{v.profile.handle}</div>
          <div className="font-body text-[11px] text-mute truncate">{v.profile.bio}</div>
          <div className="font-mono text-[9px] tracking-[0.18em] text-faint mt-1">{v.profile.stat.toUpperCase()}</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {v.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group/link flex items-center gap-3 font-mono text-[11px] text-mute hover:text-ink transition-colors"
          >
            <l.icon size={14} style={{ color: v.accent }} />
            <span className="truncate">{l.label}</span>
            <FiArrowUpRight size={11} className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0" />
          </a>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const OperatorStrip = () => (
  <section className="relative pb-2 sm:pb-6">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: EASE }}
        className="panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff4ecd]/50 to-transparent" />
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-3xl blur-md opacity-40 bg-gradient-to-br from-[#f6c26b] via-[#ff4ecd] to-cyan" />
          <img
            src="/creator/work/imran-portrait.jpg"
            alt="Imran Ahmad — the creator behind the three brands"
            loading="lazy"
            className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-3xl object-cover object-top"
          />
        </div>
        <div className="min-w-0 text-center sm:text-left">
          <p className="font-mono text-[9px] tracking-[0.3em] text-[#f6c26b] mb-2">THE OPERATOR</p>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight mb-2">One human. Three brands. Zero missed posts.</h3>
          <p className="text-mute text-sm leading-relaxed max-w-[560px] mx-auto sm:mx-0">
            I'm <span className="text-ink font-medium">Imran Ahmad</span> — a developer-turned-creator from Bihar, India. I design the visuals,
            write the hooks, render the videos and code the engines that publish them. AI-assisted, human-directed — shipped on time, every time.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
            {['Developer-turned-creator', 'AI-native stack', 'Bihar, India', 'Open for hire'].map((c) => (
              <span key={c} className="font-mono text-[10px] px-2.5 py-1.5 rounded-lg border border-line bg-panel text-mute">{c}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const BRAND_TAG = {
  toolverse: { label: 'ToolVerse', color: '#b7ff4e' },
  aurelian: { label: 'Aurelian Canvas', color: '#f6c26b' },
  pipsio: { label: 'Pipsio Kids', color: '#4cd7f6' },
};

const SHOWCASE = [
  { brand: 'toolverse', src: '/creator/work/tv-photo3d.jpg', title: 'Photo → 3D with depth & parallax · Image Studio', kind: 'IG 4:5' },
  { brand: 'aurelian', src: '/creator/work/ac-royal.jpg', title: 'Royal Luxe — 16K gallery drop', kind: 'IG · Pinterest' },
  { brand: 'pipsio', src: '/creator/work/pk-stars.jpg', title: 'Who Stole the Stars? — original story', kind: 'YouTube' },
  { brand: 'toolverse', src: '/creator/work/tv-flipbook.jpg', title: 'PDF → 3D interactive flipbook · PDF Studio', kind: 'IG 4:5' },
  { brand: 'pipsio', src: '/creator/work/pk-bus.jpg', title: 'Wheels on the Bus — 3D sing-along', kind: 'YouTube' },
  { brand: 'toolverse', src: '/creator/work/tv-architect.jpg', title: 'Sketch → interior render · AI Pro Studio', kind: 'IG 4:5' },
  { brand: 'aurelian', src: '/creator/work/ac-gallery.jpg', title: 'Museum-grade gallery identity', kind: 'Brand film' },
  { brand: 'toolverse', src: '/creator/work/tv-npmxray.jpg', title: 'X-ray your npm dependencies · Developer Studio', kind: 'IG 4:5' },
  { brand: 'pipsio', src: '/creator/work/pk-colors.jpg', title: "Let's Learn Colors — nursery episode", kind: 'YouTube' },
  { brand: 'toolverse', src: '/creator/work/tv-shadow.jpg', title: 'Browser fingerprint audit · Shield Studio', kind: 'IG 4:5' },
];

const ShowcaseSection = () => (
  <section id="work" className="relative py-20 sm:py-28 border-t border-line">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHead num="02" kicker="THE OUTPUT" title={<>Real posts,<br /><span className="grad-text-gold">shipped by the engine</span></>} />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-[680px] text-mute text-[15px] leading-relaxed mb-10"
      >
        No stock mockups — every visual below was generated, branded and published by my content engine:
        ToolVerse tool drops, Aurelian Canvas gallery pieces and Pipsio Kids episodes.
      </motion.p>
      <div className="columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {SHOWCASE.map((w, i) => {
          const b = BRAND_TAG[w.brand];
          return (
            <motion.figure
              key={w.src}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.7, ease: EASE }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-line bg-panel"
            >
              <img
                src={w.src}
                alt={`${b.label} — ${w.title}`}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3.5 pt-8 bg-gradient-to-t from-black/85 via-black/45 to-transparent">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: b.color }} />
                  <span className="font-mono text-[9px] tracking-[0.22em]" style={{ color: b.color }}>{b.label.toUpperCase()} · {w.kind}</span>
                </div>
                <div className="font-display font-bold text-[13px] leading-snug text-white/95">{w.title}</div>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </div>
  </section>
);

const MachineSection = () => (
  <section id="machine" className="relative py-20 sm:py-28 border-t border-line">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHead num="03" kicker="WHY I'M DIFFERENT" title={<>I don't post content.<br /><span className="grad-text-gold">I build engines</span> that post it.</>} />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-[680px] text-mute text-[15px] leading-relaxed mb-12"
      >
        Most creators make posts. I shipped a <span className="text-ink font-medium">self-running content factory</span>:
        a Node.js engine on GitHub Actions that has executed a 90-day calendar across four platforms — with duplicate locks,
        prime-time geo-targeting and honest failure alerts. While others sleep, my brands still publish.
      </motion.p>

      {/* pipeline */}
      <div className="relative">
        <div className="hidden lg:block absolute top-[64px] left-[4%] right-[4%] h-[3px] rounded-full pipeline-flow opacity-70" aria-hidden="true" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PIPELINE.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
              className="panel rounded-2xl p-5 relative z-10"
            >
              <div className="w-10 h-10 rounded-xl bg-bg border border-line-strong flex items-center justify-center mb-4">
                <p.icon size={16} className="text-[#f6c26b]" />
              </div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-faint mb-1.5">{p.step}</div>
              <div className="font-display font-bold text-lg tracking-tight mb-2">{p.title}</div>
              <p className="text-mute text-[12.5px] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mt-8 panel rounded-2xl p-5 sm:p-6 flex flex-wrap items-center gap-x-8 gap-y-3"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#f6c26b]">LIVE ENGINE PROOF</span>
        {['90-day schedule', '4 platforms automated', '2 slots/day', 'geo-targeted 6 countries', 'duplicate-proof state machine'].map((t) => (
          <span key={t} className="flex items-center gap-2 text-mute text-[12.5px]">
            <FiCheck size={13} className="text-lime" /> {t}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="relative py-20 sm:py-28 border-t border-line">
    <div className="max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHead num="04" kicker="HIRE ME FOR" title={<>What I can run<br /><span className="grad-text-gold">for your brand</span></>} />

      <div className="grid md:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.8, ease: EASE }}
          >
            <Tilt className="panel rounded-3xl p-7 h-full">
              <div className="w-12 h-12 rounded-2xl bg-bg border border-line-strong flex items-center justify-center mb-6">
                <s.icon size={20} className="text-[#f6c26b]" />
              </div>
              <h3 className="font-display font-extrabold text-2xl tracking-tight mb-3">{s.title}</h3>
              <p className="text-mute text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[13px] text-mute">
                    <FiCheck size={14} className="text-lime mt-0.5 shrink-0" /> {it}
                  </li>
                ))}
              </ul>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HireSection = () => (
  <section id="hire" className="relative py-24 sm:py-32 border-t border-line overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4ecd]/[0.05] blur-[120px] animate-aurora-c" />
    </div>
    <div className="max-w-[900px] mx-auto px-5 md:px-8 text-center relative">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="font-mono text-[10px] tracking-[0.3em] text-[#f6c26b] mb-5"
      >
        READY WHEN YOU ARE
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display font-extrabold text-[clamp(2.4rem,7vw,4.6rem)] leading-[1.02] tracking-tight mb-6"
      >
        Let's make your brand<br /><span className="grad-text-gold">impossible to ignore.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
        className="text-mute max-w-[540px] mx-auto mb-10"
      >
        Content creation, social media management or AI video — tell me what you're building,
        and I'll show you the engine that runs it.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
        className="flex flex-wrap items-center justify-center gap-3.5"
      >
        <a
          href="mailto:imranaha310@gmail.com?subject=Hiring%20—%20Content%20/%20Social%20Media%20/%20AI%20Video"
          className="group inline-flex items-center gap-2.5 bg-[#f6c26b] text-bg font-semibold text-sm px-7 py-4 rounded-xl hover:bg-[#ffde9e] transition-colors duration-300"
        >
          <FiMail size={15} /> imranaha310@gmail.com
        </a>
        <a
          href="/Imran_Ahmad_Creator_Resume.pdf"
          download="Imran-Ahmad-Creator-Resume.pdf"
          className="inline-flex items-center gap-2.5 border border-line-strong text-ink font-medium text-sm px-7 py-4 rounded-xl hover:border-[#f6c26b]/60 hover:text-[#f6c26b] transition-colors duration-300"
        >
          <FiDownload size={15} /> Download Resume
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
      >
        {[
          { icon: FiInstagram, label: 'Aurelian Canvas', href: 'https://www.instagram.com/aureliancanvas/' },
          { icon: FiYoutube, label: 'Pipsio Kids', href: 'https://www.youtube.com/@pipsiokidsofficial' },
          { icon: FiGlobe, label: 'ToolVerse', href: 'https://toolverse-official.vercel.app/' },
          { icon: FaPinterestP, label: 'Pinterest', href: 'https://in.pinterest.com/AurelianCanvas/' },
        ].map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-mute hover:text-[#f6c26b] transition-colors">
            <l.icon size={14} /> {l.label}
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════════ */
const CreatorMode = () => (
  <div className="relative overflow-x-clip">
    <CreatorHero />
    <CreatorMarquee />
    <StatsBar />
    <OperatorStrip />

    <section id="ventures" className="relative py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHead num="01" kicker="PROOF OF WORK" title={<>Three brands,<br /><span className="grad-text-gold">built from zero</span></>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VENTURES.map((v, i) => (
            <VentureCard key={v.id} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>

    <ShowcaseSection />
    <MachineSection />
    <ServicesSection />
    <HireSection />
  </div>
);

export default CreatorMode;
