import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiNodedotjs, SiTailwindcss, SiPrisma, SiPlaywright,
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiFramer, SiThreedotjs, SiVite,
  SiGooglegemini, SiVercel, SiNpm,
} from 'react-icons/si';
import {
  FiLayout, FiCpu, FiTerminal, FiBox, FiGitMerge, FiVideo, FiMessageSquare,
  FiMousePointer, FiZap, FiGithub, FiTrendingUp, FiSend, FiSmartphone,
} from 'react-icons/fi';
import SectionHeading from './SectionHeading';

/** Live stack — brand-colored, exactly what this portfolio + Toolverse run on */
const STACK = [
  {
    icon: SiNodedotjs,
    name: 'Node.js',
    color: '#5FA04E',
    use: 'APIs, CLIs & the Toolverse build pipeline',
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind CSS 4',
    color: '#38BDF8',
    use: 'This entire page — zero UI kit, pure tokens',
  },
  {
    icon: SiPrisma,
    name: 'Prisma',
    color: '#8B9CF9',
    use: 'Type-safe data layers & schemas',
  },
  {
    icon: SiPlaywright,
    name: 'Playwright',
    color: '#2EAD33',
    use: 'E2E tests that gate every deploy',
  },
];

const GROUPS = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    icon: FiLayout,
    skills: [
      ['React 18', 'Toolverse — 254 components published', SiReact, '#61DAFB'],
      ['Next.js 16', 'Toolverse + client sites', SiNextdotjs, '#FFFFFF'],
      ['TypeScript', 'Typed across production code', SiTypescript, '#3178C6'],
      ['JavaScript (ES6+)', 'Daily driver since 2022', SiJavascript, '#F7DF1E'],
      ['Tailwind CSS 4', 'This page — zero UI kit', SiTailwindcss, '#38BDF8'],
      ['Framer Motion', 'Every animation here', SiFramer, '#E8E8E8'],
      ['Three.js / WebGL', '3D scenes & particles', SiThreedotjs, '#FFFFFF'],
      ['Vite', 'Instant HMR pipelines', SiVite, '#9D7CFF'],
    ],
  },
  {
    id: 'ai',
    label: 'AI & LLM',
    icon: FiCpu,
    skills: [
      ['GLM 5.2', 'Shipped Toolverse with AI-assisted dev', FiCpu, '#4CD7F6'],
      ['ChatGPT / Claude / Gemini', 'Product workflows & pairing', FiMessageSquare, '#10A37F'],
      ['Ollama', 'Local model experiments', FiBox, '#DCDDE0'],
      ['n8n', 'Automation pipelines', FiGitMerge, '#EA4B71'],
      ['Veo-3 / Google Flow', 'AI video generation', FiVideo, '#EA4335'],
      ['Google AI Studio', 'Rapid API prototyping', SiGooglegemini, '#4285F4'],
      ['Cursor / Lovable / Trae', 'AI-native tooling', FiMousePointer, '#E5E5E5'],
      ['Prompt Engineering', 'PromptForge — live app', FiZap, '#FF4ECD'],
    ],
  },
  {
    id: 'core',
    label: 'CORE & TOOLS',
    icon: FiTerminal,
    skills: [
      ['Git / GitHub', '70 public repos', FiGithub, '#FFFFFF'],
      ['Vercel', 'Every project deployed', SiVercel, '#FFFFFF'],
      ['npm publishing', 'toolverse package live', SiNpm, '#CB3837'],
      ['Playwright', 'Automated E2E testing', SiPlaywright, '#2EAD33'],
      ['Lighthouse / SEO', 'Perf budgets & meta systems', FiTrendingUp, '#F9AB00'],
      ['Web3Forms', 'Serverless form layer', FiSend, '#4CD7F6'],
      ['Prisma / SQLite', 'Data layers when needed', SiPrisma, '#8B9CF9'],
      ['PWA basics', 'Installable web apps', FiSmartphone, '#9B6CFF'],
    ],
  },
];

const Skills = () => {
  const [tab, setTab] = useState('frontend');
  const active = GROUPS.find((g) => g.id === tab);

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-line overflow-hidden">
      {/* subtle constellation bg */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(76,215,246,0.14) 1px, transparent 1px), radial-gradient(rgba(255,78,205,0.10) 1px, transparent 1px)',
          backgroundSize: '90px 90px, 140px 140px',
          backgroundPosition: '0 0, 45px 60px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative">
        <SectionHeading num="03" kicker="ARSENAL" title={<>What I <span className="grad-text">wield</span>.</>} />

        {/* tabs */}
        <div className="flex gap-2 mb-8 flex-wrap" role="tablist" aria-label="Skill categories">
          {GROUPS.map((g) => {
            const Icon = g.icon;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={tab === g.id}
                onClick={() => setTab(g.id)}
                className={`inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] px-4 sm:px-5 py-2.5 rounded-xl border transition-all duration-300 ${
                  tab === g.id
                    ? 'border-cyan/60 text-cyan bg-cyan/10 glow-cyan'
                    : 'border-line text-mute hover:text-ink hover:border-line-strong'
                }`}
              >
                <Icon size={13} className={tab === g.id ? 'text-cyan' : 'text-faint'} />
                {g.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid sm:grid-cols-2 gap-3"
            role="tabpanel"
          >
            {active.skills.map(([name, proof, Icon, color]) => (
              <div
                key={name}
                className="group panel rounded-xl pl-3.5 pr-4 py-3 flex items-center gap-3.5 hover:border-cyan/30 transition-colors duration-300"
              >
                {/* brand icon chip */}
                <span
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border border-line transition-all duration-300 group-hover:scale-105"
                  style={{ background: `${color}14`, borderColor: `${color}2e` }}
                  aria-hidden="true"
                >
                  <Icon size={17} style={{ color, filter: `drop-shadow(0 0 6px ${color}44)` }} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-[13.5px] text-ink truncate">{name}</span>
                  <span className="block font-mono text-[8.5px] tracking-[0.06em] text-faint group-hover:text-mute transition-colors truncate mt-0.5">
                    {proof}
                  </span>
                </span>
                {/* brand accent bar on hover */}
                <span
                  className="shrink-0 w-[3px] h-7 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: color }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Currently shipping with — brand colors ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.3em] text-cyan">currently shipping with</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {STACK.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.55 }}
                  whileHover={{ y: -4 }}
                  className="group relative panel rounded-2xl p-5 overflow-hidden transition-colors duration-300"
                  style={{ '--brand': t.color }}
                >
                  {/* brand glow */}
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-[36px] opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                    style={{ background: t.color }}
                    aria-hidden="true"
                  />
                  <Icon
                    size={30}
                    className="mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: t.color, filter: `drop-shadow(0 0 10px ${t.color}55)` }}
                  />
                  <p className="font-semibold text-[14px] text-ink mb-1">{t.name}</p>
                  <p className="font-mono text-[9px] leading-relaxed tracking-[0.04em] text-faint group-hover:text-mute transition-colors">
                    {t.use}
                  </p>
                  {/* bottom brand line */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
                    aria-hidden="true"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-7 font-mono text-[10px] tracking-[0.15em] text-faint"
        >
          // EVERY SKILL IS BACKED BY SHIPPED WORK — HOVER ANY ROW TO SEE WHERE IT WAS USED.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
