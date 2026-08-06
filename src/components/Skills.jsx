import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds } from '../utils/sound';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    {
      title: "AI & LOGIC",
      color: "#ec4899",
      items: [
        { name: "Cursor AI", desc: "Automating massive code transformations using custom system prompts." },
        { name: "Lovable", desc: "Building beautiful glassmorphic elements in record-breaking speed." },
        { name: "Gemini", desc: "Integrating deep learning systems with multi-modal prompting arrays." },
        { name: "ChatGPT", desc: "Solving architectural puzzles and structural layouts efficiently." },
        { name: "Claude", desc: "Crafting highly structured documentation, refactors and logic flows." },
        { name: "Grok", desc: "Synthesizing real-time streams and visual logic pipelines." },
        { name: "DeepSeek", desc: "Harnessing rapid open-source deep networks for server flows." },
        { name: "Veo-3", desc: "Generating cinematic premium background footage for branding." },
        { name: "Google Flow", desc: "Orchestrating cloud pipelines and structured distribution models." },
        { name: "Ollama", desc: "Hosting and running custom-quantized language modules locally." },
        { name: "Meta AI", desc: "Building modular agents with fast conversation layers." },
        { name: "Antigravity", desc: "Operating Advanced Agentic Coding vectors with zero friction." },
        { name: "Trae", desc: "Co-piloting interactive system setups and script configurations." },
        { name: "n8n", desc: "Constructing complex workflow charts and API trigger nets." },
        { name: "Lindy AI", desc: "Creating autonomous multi-agent pipelines for digital tasking." },
        { name: "GLM 5.2", desc: "Leveraging Z.ai's GLM 5.2 for autonomous multi-step coding and complex tool orchestration." },
        { name: "Google AI Studio", desc: "Prototyping multi-modal AI applications and testing Gemini model capabilities at scale." },
        { name: "Google Stitch", desc: "Generating production-ready UI designs and component layouts from natural language prompts." },
        { name: "Google Analytics", desc: "Tracking real-time user telemetry, conversion funnels, and traffic intelligence across platforms." },
      ]
    },
    {
      title: "CORE STACK",
      color: "#4cd7f6",
      items: [
        { name: "React JS", desc: "Engineering reactive hook layers and hardware-accelerated loops." },
        { name: "Next.js", desc: "Configuring serverless routes, partial hydration, and SEO nodes." },
        { name: "Node.js", desc: "Building high-throughput asynchronous APIs and backend micro-units." },
        { name: "MongoDB", desc: "Modeling dynamic object structures and rapid document query pipelines." },
        { name: "Tailwind", desc: "Designing vibrant utilities, responsive grids, and luxury styles." },
        { name: "TypeScript", desc: "Securing codebases with robust typing matrices and dynamic interfaces." },
        { name: "Three.js", desc: "Building 3D codebase galaxy visualizations and WebGL-rendered interactive scenes." },
        { name: "npm Toolverse", desc: "Published npm package with 263 React components and 1,099 SVG icons across 7 variants." },
      ]
    },
    {
      title: "UTILITIES",
      color: "#ffb95f",
      items: [
        { name: "Cloudflare", desc: "Managing global DNS routing, serverless workers, and fast page caching." },
        { name: "Git", desc: "Handling complex atomic branching, merging, and pipeline webhooks." },
        { name: "Postman", desc: "Testing backend queries and validating API JSON payload structural limits." },
        { name: "Vercel", desc: "Deploying high-performance client panels and tracking live telemetry." },
      ]
    }
  ];

  return (
    <div className="space-y-8 glass-panel p-6 rounded-2xl border-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl pointer-events-none" />

      {categories.map((cat, ci) => (
        <div key={ci} className="relative z-10">
          <h4 className="font-mono mb-4 uppercase tracking-widest text-sm flex items-center gap-2" style={{ color: cat.color }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
            {cat.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((skill, si) => (
              <span
                key={si}
                onMouseEnter={() => { setHoveredSkill(skill); sounds.hover(); }}
                className="px-4 py-2 rounded-lg text-sm font-mono text-on-surface cursor-default transition-all hover:scale-105"
                style={{
                  backgroundColor: `${cat.color}10`,
                  border: `1px solid ${cat.color}30`,
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Hovered skill description */}
      <AnimatePresence mode="wait">
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 pt-4 border-t border-primary/20"
          >
            <p className="text-sm text-on-surface-variant">{hoveredSkill.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
