import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiNodedotjs, SiTailwindcss, SiPrisma, SiPlaywright } from 'react-icons/si';
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
    skills: [
      ['React 18', 'Toolverse — 254 components published'],
      ['Next.js 16', 'Toolverse + client sites'],
      ['TypeScript', 'Typed across production code'],
      ['JavaScript (ES6+)', 'Daily driver since 2022'],
      ['Tailwind CSS 4', 'This page — zero UI kit'],
      ['Framer Motion', 'Every animation here'],
      ['Three.js / WebGL', '3D scenes & particles'],
      ['Vite', 'Instant HMR pipelines'],
    ],
  },
  {
    id: 'ai',
    label: 'AI & LLM',
    skills: [
      ['GLM 5.2', 'Shipped Toolverse with AI-assisted dev'],
      ['ChatGPT / Claude / Gemini', 'Product workflows & pairing'],
      ['Ollama', 'Local model experiments'],
      ['n8n', 'Automation pipelines'],
      ['Veo-3 / Google Flow', 'AI video generation'],
      ['Google AI Studio', 'Rapid API prototyping'],
      ['Cursor / Lovable / Trae', 'AI-native tooling'],
      ['Prompt Engineering', 'PromptForge — live app'],
    ],
  },
  {
    id: 'core',
    label: 'CORE & TOOLS',
    skills: [
      ['Git / GitHub', '70 public repos'],
      ['Vercel', 'Every project deployed'],
      ['npm publishing', 'toolverse package live'],
      ['Playwright', 'Automated E2E testing'],
      ['Lighthouse / SEO', 'Perf budgets & meta systems'],
      ['Web3Forms', 'Serverless form layer'],
      ['Prisma / SQLite', 'Data layers when needed'],
      ['PWA basics', 'Installable web apps'],
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
        <div className="flex gap-2 mb-8" role="tablist" aria-label="Skill categories">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={tab === g.id}
              onClick={() => setTab(g.id)}
              className={`font-mono text-[10px] sm:text-[11px] tracking-[0.2em] px-4 sm:px-5 py-2.5 rounded-xl border transition-all duration-300 ${
                tab === g.id
                  ? 'border-cyan/60 text-cyan bg-cyan/10 glow-cyan'
                  : 'border-line text-mute hover:text-ink hover:border-line-strong'
              }`}
            >
              {g.label}
            </button>
          ))}
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
            {active.skills.map(([name, proof]) => (
              <div
                key={name}
                className="group panel rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-cyan/30 transition-colors duration-300"
              >
                <span className="font-medium text-[14px] text-ink whitespace-nowrap">{name}</span>
                <span className="font-mono text-[9px] tracking-[0.08em] text-faint group-hover:text-mute text-right transition-colors">
                  {proof}
                </span>
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
