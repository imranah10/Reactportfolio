import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglegemini, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiCloudflare, SiPostman, SiVercel } from 'react-icons/si';
import { FaGitAlt, FaRobot } from 'react-icons/fa';
import { LuSparkles, LuTerminalSquare } from 'react-icons/lu';

const Skills = () => {
  const categories = [
    {
      title: "AI & LOGIC",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:border-purple-500/50",
      items: [
        { name: "Cursor AI", icon: <LuTerminalSquare />, colorClass: "group-hover:text-blue-400" },
        { name: "Lovable", icon: <LuSparkles />, colorClass: "group-hover:text-pink-400" },
        { name: "Gemini", icon: <SiGooglegemini />, colorClass: "group-hover:text-purple-400" },
        { name: "Prompt Eng", icon: <FaRobot />, colorClass: "group-hover:text-cyan-400" }
      ]
    },
    {
      title: "CORE STACK",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:border-cyan-500/50",
      items: [
        { name: "React JS", icon: <SiReact />, colorClass: "group-hover:text-[#61DAFB]" },
        { name: "Next.js", icon: <SiNextdotjs />, colorClass: "group-hover:text-white" },
        { name: "Node.js", icon: <SiNodedotjs />, colorClass: "group-hover:text-[#339933]" },
        { name: "MongoDB", icon: <SiMongodb />, colorClass: "group-hover:text-[#47A248]" },
        { name: "Tailwind", icon: <SiTailwindcss />, colorClass: "group-hover:text-[#06B6D4]" },
        { name: "TypeScript", icon: <SiTypescript />, colorClass: "group-hover:text-[#3178C6]" }
      ]
    },
    {
      title: "UTILITIES",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:border-green-500/50",
      items: [
        { name: "Cloudflare", icon: <SiCloudflare />, colorClass: "group-hover:text-[#F38020]" },
        { name: "Git", icon: <FaGitAlt />, colorClass: "group-hover:text-[#F05032]" },
        { name: "Postman", icon: <SiPostman />, colorClass: "group-hover:text-[#FF6C37]" },
        { name: "Vercel", icon: <SiVercel />, colorClass: "group-hover:text-white" }
      ]
    }
  ];

  return (
    <div className="mt-32 relative z-10 w-full overflow-hidden pb-12 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display font-extrabold tracking-tighter leading-none mb-4 text-white">
          Tech Arsenal<span className="text-cyan-500">.</span>
        </h2>
        <p className="text-gray-400 font-body text-base max-w-xl">Deeply immersed in the elite frontend technologies required to build breathtaking modern applications.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 w-full">
        {categories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.8 }}
            className={`group p-8 sm:p-10 rounded-[1.5rem] flex flex-col bg-[#0f0f16] border border-white/5 transition-all duration-500 cursor-pointer ${category.borderGlow}`}
          >
            <h3 className="text-[12px] sm:text-[13px] text-gray-500 font-bold tracking-[0.25em] mb-10 uppercase group-hover:text-gray-300 transition-colors">
              {category.title}
            </h3>

            <div className="flex flex-col gap-5">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 transition-all duration-300 hover:translate-x-2"
                >
                  <div className={`text-2xl text-gray-600 transition-colors duration-300 ${item.colorClass}`}>
                    {item.icon}
                  </div>
                  <span className="text-base font-semibold tracking-wide text-gray-400 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
