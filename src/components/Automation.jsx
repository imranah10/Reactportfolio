import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiGithub, FiExternalLink, FiZap, FiShield, FiRefreshCw, FiCrop,
  FiDatabase, FiTrendingUp, FiGitBranch, FiCpu, FiPlay, FiCheckCircle,
} from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const EASE = [0.16, 1, 0.3, 1];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: EASE },
});

/* ── tiny building blocks ─────────────────────────────────────── */

const Stat = ({ v, l }) => (
  <div className="panel rounded-xl px-3 py-3.5 sm:px-4 text-center">
    <div className="font-display font-extrabold text-lg sm:text-2xl grad-text leading-none">{v}</div>
    <div className="font-mono text-[8.5px] sm:text-[9px] tracking-[0.18em] text-mute mt-1.5 uppercase">{l}</div>
  </div>
);

const Chip = ({ children }) => (
  <span className="font-mono text-[9.5px] sm:text-[10px] tracking-wide px-2.5 py-1 rounded-md border border-line bg-surface/70 text-ink/80 whitespace-nowrap">
    {children}
  </span>
);

const LiveBadge = ({ tone = 'lime', children }) => {
  const c = tone === 'lime' ? 'text-lime border-lime/30 bg-lime/10' : 'text-cyan border-cyan/30 bg-cyan/10';
  const dot = tone === 'lime' ? 'bg-lime' : 'bg-cyan';
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.22em] px-2.5 py-1 rounded-full border ${c}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse-dot`} />
      {children}
    </span>
  );
};

/* ── n8n canvas mock (data-driven, pure CSS) ──────────────────── */

const NODE_TONE = {
  trigger: { ring: 'border-lime/40', dot: 'bg-lime', label: 'text-lime' },
  code: { ring: 'border-magenta/40', dot: 'bg-magenta', label: 'text-magenta' },
  http: { ring: 'border-cyan/40', dot: 'bg-cyan', label: 'text-cyan' },
  router: { ring: 'border-white/30', dot: 'bg-white', label: 'text-ink' },
  wait: { ring: 'border-line-strong', dot: 'bg-mute', label: 'text-mute' },
  platform: { ring: 'border-cyan/25', dot: 'bg-cyan/70', label: 'text-ink/90' },
};

const FlowNode = ({ tone, title, sub }) => {
  const t = NODE_TONE[tone] || NODE_TONE.http;
  return (
    <div className={`shrink-0 rounded-lg border ${t.ring} bg-panel/90 px-3 py-2 shadow-[0_6px_24px_rgba(0,0,0,0.35)]`}>
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
        <span className="font-mono text-[10px] sm:text-[11px] text-ink/90 whitespace-nowrap">{title}</span>
      </div>
      {sub && <div className={`font-mono text-[8.5px] tracking-[0.14em] uppercase mt-1 pl-3.5 ${t.label}`}>{sub}</div>}
    </div>
  );
};

const FlowArrow = () => (
  <span className="shrink-0 hidden sm:flex items-center" aria-hidden="true">
    <span className="w-6 h-px bg-gradient-to-r from-cyan/60 via-magenta/40 to-cyan/60 relative">
      <span className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-t border-r border-cyan/70 rotate-45" />
    </span>
  </span>
);

const Branch = ({ label, tone = 'cyan', children }) => {
  const c = tone === 'lime' ? 'text-lime' : tone === 'magenta' ? 'text-magenta' : 'text-cyan';
  return (
    <div className="flex items-stretch">
      <div className="ml-4 sm:ml-6 w-5 sm:w-7 border-l-2 border-b-2 border-line-strong rounded-bl-xl shrink-0" />
      <div className="pl-2.5 sm:pl-3 py-1 flex flex-wrap items-center gap-2">
        <span className={`font-mono text-[9px] tracking-[0.2em] uppercase ${c} mr-1`}>{label}</span>
        {children}
      </div>
    </div>
  );
};

const FlowCanvas = ({ title, children, badge }) => (
  <div className="rounded-xl border border-line-strong bg-[#07090d] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
    {/* n8n-style chrome bar */}
    <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-line bg-surface/80">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 font-mono text-[10px] text-mute truncate">{title}</span>
      <span className="ml-auto hidden sm:flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-lime">
        <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />{badge || 'ACTIVE'}
      </span>
    </div>
    {/* canvas grid */}
    <div className="p-3.5 sm:p-4 bg-[radial-gradient(rgba(76,215,246,0.07)_1px,transparent_1px)] [background-size:18px_18px] overflow-x-auto">
      {children}
    </div>
  </div>
);

/* ── terminal mock: GitHub Actions crons ──────────────────────── */

const TerminalCrons = ({ file, lines }) => (
  <div className="rounded-xl border border-line-strong bg-[#07090d] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.45)] h-full flex flex-col">
    <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-line bg-surface/80">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 font-mono text-[10px] text-mute truncate">{file}</span>
    </div>
    <div className="p-4 font-mono text-[10.5px] sm:text-[11px] leading-[1.85] overflow-x-auto flex-1">
      {lines.map((l, i) => (
        <div key={i} className="whitespace-pre">{l}</div>
      ))}
    </div>
  </div>
);

/* ── terminal text helpers ────────────────────────────────────── */
const F = ({ children }) => <span className="text-faint">{children}</span>;
const C = ({ children }) => <span className="text-cyan">{children}</span>;
const Y = ({ children }) => <span className="text-lime">{children}</span>;
const M = ({ children }) => <span className="text-magenta">{children}</span>;
const W = ({ children }) => <span className="text-ink/90">{children}</span>;

/* ── project 1: TOOLVERSE ─────────────────────────────────────── */

const TV_LINES = [
  <><F># .github/workflows/toolverse_daily_publish.yml</F></>,
  <>{'on:'} <M>schedule:</M></>,
  <>{'  - '}<C>cron:</C> <Y>'30 13 * * *'</Y>{'  '}<F># 7:00 PM IST · image slot</F></>,
  <>{'  - '}<C>cron:</C> <Y>'30 17 * * *'</Y>{'  '}<F># 11:00 PM IST · viral reel</F></>,
  <>{'  '}<M>workflow_dispatch:</M>{'  '}<F># manual: slot / day / dry-run</F>{'  '}<Y>✓</Y></>,
  <>{' '}</>,
  <><F># publish_engine.js — every run:</F></>,
  <>{'→ '}<W>loads</W> <C>schedule_90_days.json</C>{'  '}<F>(90/90 days planned)</F></>,
  <>{'→ '}<W>picks</W> today's post via <C>state.json</C>{'  '}<F>(idempotent)</F></>,
  <>{'→ '}<W>resolves media →</W> <Y>60-video Releases CDN</Y>{'  '}<F>(0 skips)</F></>,
  <>{'→ '}<W>posts</W> <M>IG Graph API</M> <F>(feed · reel)</F> <W>+</W> <M>FB Page</M></>,
  <>{'→ '}<W>logs outcome →</W> <Y>retries</Y><W>,</W> <Y>anti-stuck auto-advance</Y></>,
];

const ToolverseCard = () => (
  <motion.article {...rise()} className="panel rounded-2xl p-5 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
    <header className="flex flex-wrap items-start gap-3 justify-between mb-4">
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl border border-cyan/30 bg-cyan/10 flex items-center justify-center text-cyan shrink-0"><FiCpu size={20} /></div>
        <div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl leading-tight">Toolverse <span className="grad-text">Autopilot</span></h3>
          <p className="font-mono text-[9.5px] tracking-[0.2em] text-mute uppercase mt-0.5">90-day self-driving social machine</p>
        </div>
      </div>
      <LiveBadge tone="lime">LIVE · RUNNING DAILY</LiveBadge>
    </header>

    <p className="text-mute text-sm sm:text-[15px] leading-relaxed">
      The marketing engine behind <span className="text-ink">Toolverse</span> — my privacy-first toolkit with
      100+ tools. A <span className="text-ink">90-day pre-planned schedule</span> publishes a daily image
      (7 PM IST) + viral reel (11 PM IST) to Instagram & Facebook. Every post resolves to real media —
      <span className="text-ink"> 60 AI-generated demo videos</span> on a GitHub Releases CDN — through an
      anti-stuck engine with idempotent state and auto-advance. Shipped <span className="text-ink">twice</span>:
      a production GitHub Actions pipeline and a self-hosted n8n workflow sharing the same JSON source of truth.
    </p>

    <div className="grid lg:grid-cols-2 gap-5 mt-6">
      <div>
        <div className="flex items-center gap-2 mb-2.5 font-mono text-[9.5px] tracking-[0.2em] text-cyan">
          <FiGitBranch size={13} /> RUNTIME A — GITHUB ACTIONS <span className="text-lime">· PRODUCTION</span>
        </div>
        <TerminalCrons file="toolverse_daily_publish.yml" lines={TV_LINES} />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2.5 font-mono text-[9.5px] tracking-[0.2em] text-magenta">
          <FiZap size={13} /> RUNTIME B — n8n <span className="text-cyan">· SELF-HOSTED</span>
        </div>
        <FlowCanvas title="n8n — toolverse-autopost · 10 nodes">
          <div className="flex items-center gap-2">
            <FlowNode tone="trigger" title="Schedule" sub="9AM · 1PM" />
            <FlowArrow />
            <FlowNode tone="code" title="Content Engine" sub="code node" />
            <FlowArrow />
            <FlowNode tone="http" title="Fetch Image" sub="https binary" />
            <FlowArrow />
            <FlowNode tone="router" title="Route" sub="switch" />
          </div>
          <div className="mt-1 space-y-1">
            <Branch label="IG">
              <FlowNode tone="http" title="Create Container" />
              <FlowArrow />
              <FlowNode tone="wait" title="Wait 5s" />
              <FlowArrow />
              <FlowNode tone="platform" title="Publish" sub="graph api" />
            </Branch>
            <Branch label="FB" tone="lime">
              <FlowNode tone="platform" title="Page: Photo + Post" sub="toolverseofficial" />
            </Branch>
            <Branch label="LinkedIn" tone="magenta">
              <FlowNode tone="platform" title="Profile Post" sub="imran ahmad" />
              <FlowNode tone="platform" title="Page Post" sub="toolverse official" />
            </Branch>
          </div>
        </FlowCanvas>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5 mt-6">
      <Stat v="90" l="day plan" />
      <Stat v="180+" l="posts auto" />
      <Stat v="60" l="AI videos" />
      <Stat v="6" l="crons / day" />
      <Stat v="0" l="skips ever" />
    </div>

    <div className="flex flex-wrap gap-2 mt-5">
      <Chip>Node.js</Chip><Chip>GitHub Actions</Chip><Chip>Meta Graph API</Chip>
      <Chip>Releases CDN</Chip><Chip>n8n</Chip><Chip>JSON Pipeline</Chip>
    </div>

    <div className="flex flex-wrap gap-2.5 mt-6">
      <a href="https://github.com/imranah10/toolverse_automation" target="_blank" rel="noreferrer"
         className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide px-4 py-2.5 rounded-lg border border-line-strong bg-surface/70 hover:border-cyan/50 hover:text-cyan transition-colors">
        <FiGithub size={14} /> SOURCE — PIPELINE REPO
      </a>
      <a href="https://toolverse-official.vercel.app" target="_blank" rel="noreferrer"
         className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide px-4 py-2.5 rounded-lg border border-cyan/40 bg-cyan/10 text-cyan hover:bg-cyan/20 transition-colors">
        <FiExternalLink size={14} /> LIVE — 100+ TOOLS
      </a>
    </div>
  </motion.article>
);

/* ── project 2: AURELIAN CANVAS ───────────────────────────────── */

const AC_LINES = [
  <><F># auto-post.yml — 2× daily · 9:30 AM & 8:00 PM IST</F></>,
  <>{'→ '}<W>poster.py picks due posts from</W> <C>schedule.json</C>{'  '}<F>(450 posts)</F></>,
  <>{'→ '}<W>plan:</W> <Y>360 Pinterest pins</Y> <W>+</W> <M>90 Instagram posts</M> <F>(42 reels)</F></>,
  <>{'→ '}<W>resolve_asset():</W> <Y>slot-cycling</Y><W> — nothing ever skips</W></>,
  <>{'→ '}<W>ig_api:</W> <Y>4:5 auto-crop</Y> <W>→ container → publish</W></>,
  <>{'→ '}<W>pinterest_api</W> <C>v5</C><W>: pins incl.</W> <Y>video pin upload</Y></>,
  <>{'→ '}<W>state/posted.json →</W> <Y>idempotent</Y><W>,</W> <Y>catch-up safe</Y></>,
];

const AC_FEATURES = [
  { icon: FiShield, t: 'Idempotent state guard', d: 'Every outcome logged — re-runs never double-post.' },
  { icon: FiRefreshCw, t: 'Catch-up safe', d: 'Missed days auto-post on the next run. No gaps.' },
  { icon: FiCrop, t: 'Auto 4:5 + video pins', d: '67 media files managed, IG-cropped, cached.' },
  { icon: FiDatabase, t: 'Token rotation', d: 'Never-expiring FB Page token; Pinterest refresh auto-minted.' },
];

const AurelianCard = () => (
  <motion.article {...rise(0.05)} className="panel rounded-2xl p-5 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-magenta/60 to-transparent" />
    <header className="flex flex-wrap items-start gap-3 justify-between mb-4">
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl border border-magenta/30 bg-magenta/10 flex items-center justify-center text-magenta shrink-0"><FiPlay size={20} /></div>
        <div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl leading-tight">Aurelian Canvas <span className="grad-text">Auto-Poster</span></h3>
          <p className="font-mono text-[9.5px] tracking-[0.2em] text-mute uppercase mt-0.5">450-post hands-free marketing engine</p>
        </div>
      </div>
      <LiveBadge tone="cyan">LIVE FROM OCT 9, 2026</LiveBadge>
    </header>

    <p className="text-mute text-sm sm:text-[15px] leading-relaxed">
      Fully automated social marketing for my <span className="text-ink">digital art storefront</span>
      (7 products + 4 bundles) — <span className="text-ink">90 days without touching it</span>.
      A Python engine runs 2× daily on GitHub Actions: picks due posts from a pre-generated
      schedule, resolves media with slot-cycling, auto-crops images to Instagram's
      <span className="text-ink"> 4:5</span>, publishes reels via the
      <span className="text-ink"> Instagram Graph API</span> (container → publish) and pins via
      <span className="text-ink"> Pinterest API v5</span> — every pin deep-linked to its
      <span className="text-ink"> Gumroad product</span>. An 8-node n8n workflow mirrors the
      same pipeline — one JSON schedule, switchable runtimes.
    </p>

    <div className="grid sm:grid-cols-2 gap-4 mt-6">
      <div>
        <div className="flex items-center gap-2 mb-2.5 font-mono text-[9.5px] tracking-[0.2em] text-cyan">
          <FiGitBranch size={13} /> GITHUB ACTIONS <span className="text-lime">· PRODUCTION</span>
        </div>
        <TerminalCrons file="auto-post.yml" lines={AC_LINES} />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2.5 font-mono text-[9.5px] tracking-[0.2em] text-magenta">
          <FiZap size={13} /> n8n <span className="text-cyan">· 8-NODE ALTERNATIVE</span>
        </div>
        <FlowCanvas title="n8n — aurelian-autopost · 8 nodes">
          <div className="flex items-center gap-2">
            <FlowNode tone="trigger" title="Schedule" sub="2× daily" />
            <FlowArrow />
            <FlowNode tone="http" title="Fetch Schedule" />
            <FlowArrow />
            <FlowNode tone="code" title="Filter Today" sub="code node" />
            <FlowArrow />
            <FlowNode tone="router" title="IF" sub="router" />
          </div>
          <div className="mt-1 space-y-1">
            <Branch label="Pinterest" tone="magenta">
              <FlowNode tone="platform" title="Create Pin" sub="api v5 · video too" />
            </Branch>
            <Branch label="Instagram" tone="cyan">
              <FlowNode tone="http" title="Create Container" />
              <FlowArrow />
              <FlowNode tone="wait" title="Wait 20s" />
              <FlowArrow />
              <FlowNode tone="platform" title="Publish" />
            </Branch>
          </div>
          <div className="mt-3 flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-faint">
            <FiCheckCircle size={11} className="text-lime" /> SAME schedule.json — SWITCH RUNTIME ANYTIME
          </div>
        </FlowCanvas>
      </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mt-6">
      {AC_FEATURES.map((f) => {
        const Ic = f.icon;
        return (
          <div key={f.t} className="rounded-xl border border-line bg-surface/50 p-3.5">
            <Ic size={15} className="text-cyan mb-2" />
            <div className="font-display font-bold text-[13px] leading-tight">{f.t}</div>
            <div className="text-mute text-[11.5px] leading-snug mt-1">{f.d}</div>
          </div>
        );
      })}
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5 mt-6">
      <Stat v="450" l="posts planned" />
      <Stat v="360" l="pinterest pins" />
      <Stat v="90" l="IG posts" />
      <Stat v="22" l="auto boards" />
      <Stat v="₹0" l="cost" />
    </div>

    <div className="flex flex-wrap gap-2 mt-5">
      <Chip>Python</Chip><Chip>GitHub Actions</Chip><Chip>Pinterest API v5</Chip>
      <Chip>Meta Graph API</Chip><Chip>OAuth 2.0</Chip><Chip>n8n</Chip><Chip>Git</Chip>
    </div>

    <div className="flex flex-wrap gap-2.5 mt-6">
      <a href="https://github.com/imranah10/AurelianCanvas_Auto_Poster" target="_blank" rel="noreferrer"
         className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide px-4 py-2.5 rounded-lg border border-line-strong bg-surface/70 hover:border-magenta/50 hover:text-magenta transition-colors">
        <FiGithub size={14} /> SOURCE — AUTO-POSTER
      </a>
      <Link to="/ventures/aurelian-canvas"
         className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide px-4 py-2.5 rounded-lg border border-magenta/40 bg-magenta/10 text-magenta hover:bg-magenta/20 transition-colors">
        <FiExternalLink size={14} /> FULL CASE STUDY
      </Link>
    </div>
  </motion.article>
);

/* ── pillars + section ────────────────────────────────────────── */

const PILLARS = [
  { icon: FiShield, t: 'Idempotent by design', d: 'State files + dedupe guards across 720+ scheduled outcomes — zero double posts, ever.' },
  { icon: FiZap, t: 'Self-healing runs', d: 'Retries, catch-up windows and anti-stuck slot advance. A bad day never breaks the streak.' },
  { icon: FiTrendingUp, t: '₹0 forever', d: 'No SaaS subscriptions. Free runners + platform APIs work 24/7 — I build, robots post.' },
];

const Automation = () => (
  <section id="automation" className="relative py-24 sm:py-32 border-t border-line overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-cyan/5 blur-3xl pointer-events-none" />
    <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] rounded-full bg-magenta/5 blur-3xl pointer-events-none" />

    <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHeading
        num="02"
        kicker="AI AUTOMATION // POSTS WHILE I SLEEP"
        title={<>Machines that <span className="grad-text">market for me</span>.</>}
      />

      <motion.p {...rise(0.05)} className="text-mute text-sm sm:text-base leading-relaxed max-w-3xl -mt-4 sm:-mt-8">
        I don't manage social media — <span className="text-ink">robots do.</span> Every product I ship
        gets its own publishing engine: pre-planned content, real media resolution, platform APIs,
        idempotent state and self-healing retries. Two production systems, each running on
        <span className="text-ink"> two interchangeable runtimes</span> — GitHub Actions and
        self-hosted n8n — sharing one JSON source of truth.
      </motion.p>

      <motion.div {...rise(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-8">
        <Stat v="720+" l="posts planned" />
        <Stat v="4" l="platforms" />
        <Stat v="2 × 2" l="systems × runtimes" />
        <Stat v="₹0" l="infra cost" />
      </motion.div>

      <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-10">
        <ToolverseCard />
        <AurelianCard />
      </div>

      <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {PILLARS.map((p, i) => {
          const Ic = p.icon;
          return (
            <motion.div key={p.t} {...rise(i * 0.06)} className="panel rounded-xl p-5">
              <Ic size={18} className="text-lime mb-3" />
              <div className="font-display font-bold text-[15px] mb-1.5">{p.t}</div>
              <div className="text-mute text-[12.5px] leading-relaxed">{p.d}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Automation;
