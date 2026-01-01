import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const aiArsenal = [
    { name: "Cursor AI", img: "https://img.shields.io/badge/Cursor_AI-000000?style=for-the-badge&logo=cursor&logoColor=white" },
    { name: "Lovable", img: "https://img.shields.io/badge/Lovable-FF00FF?style=for-the-badge&logo=sparkles&logoColor=white" },
    { name: "Gemini AI", img: "https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" },
    { name: "Grok xAI", img: "https://img.shields.io/badge/Grok_xAI-000000?style=for-the-badge&logo=x&logoColor=white" },
    { name: "Perplexity", img: "https://img.shields.io/badge/Perplexity-20B2AA?style=for-the-badge&logo=perplexity&logoColor=white" },
    { name: "Prompt Eng", img: "https://img.shields.io/badge/Prompt_Eng-FFD700?style=for-the-badge&logo=ai&logoColor=black" }
  ];

  const techCore = [
    { name: "MongoDB", img: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "Express.js", img: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
    { name: "React JS", img: "https://img.shields.io/badge/React_JS-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
    { name: "Node.js", img: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
    { name: "TypeScript", img: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "JavaScript", img: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { name: "Tailwind CSS", img: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
    { name: "Bootstrap", img: "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" }
  ];

  const deepSystems = [
    { name: "Postman", img: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    { name: "Cloudflare", img: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" },
    { name: "Git Bash", img: "https://img.shields.io/badge/Git_Bash-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { name: "Antigravity", img: "https://img.shields.io/badge/Antigravity-000000?style=for-the-badge&logo=freebsd&logoColor=white" },
    { name: "VS Code", img: "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
    { name: "Vercel", img: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" }
  ];

  const renderSection = (title, items, color) => (
    <div style={{ marginBottom: '4rem', position: 'relative' }}>
      {/* Holographic Platform */}
      <div style={{
        position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%) scaleX(2)',
        width: '80%', height: '50px', background: `radial-gradient(ellipse at center, ${color}40 0%, transparent 70%)`,
        zIndex: 0, filter: 'blur(10px)'
      }}></div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2.5rem',
        color: '#fff', textAlign: 'center', textShadow: `0 0 15px ${color}`
      }}>
        {title}
      </h3>

      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center',
        perspective: '1000px'
      }}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: `0 0 20px ${color}`
            }}
            style={{
              position: 'relative',
              background: 'var(--glass-bg)',
              border: `1px solid ${color}`,
              padding: '1rem',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Orbital Ring */}
            <div style={{
              position: 'absolute', inset: '-5px', border: `1px dashed ${color}40`, borderRadius: '50%',
              animation: `spin ${5 + index}s linear infinite`
            }}></div>

            <img src={item.img} alt={item.name} style={{ height: '50px', filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' }} />
            <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '0.8rem' }}>{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 className="text-center section-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '3rem', color: '#fff' }}>
        <span style={{ borderBottom: "2px solid var(--neon-cyan)" }}>TECH ARSENAL</span>
      </h2>

      {renderSection("🧠 The AI Neural Network", aiArsenal, "var(--neon-magenta)")}
      {renderSection("💻 Full-Stack Implants", techCore, "var(--neon-cyan)")}
      {renderSection("🔧 Deep-System Utilities", deepSystems, "var(--neon-green)")}

    </div>
  );
};

export default Skills;
