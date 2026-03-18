import React from "react";
import { motion } from "framer-motion";
import profile2 from "./images/profile.jpg";

const About = () => {
  return (
    <div id="about" className="py-24 sm:py-32 md:py-40 px-4 md:px-12 max-w-[1400px] mx-auto z-10 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 sm:mb-24 relative z-10"
      >
        <div className="inline-block px-4 py-2 rounded-full mb-6 relative overflow-hidden border border-pink-500/30 bg-pink-500/10 backdrop-blur-md">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-pink-400 relative z-10">
            About Me
          </span>
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-extrabold tracking-tight leading-none text-white">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Am.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center relative z-10">

        {/* Profile Image - Vibrant Glowing Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/5] rounded-[2rem] p-1 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_50px_rgba(236,72,153,0.3)] group z-10">
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[#111]">
              <img
                src={profile2}
                alt="Imran Profile"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
            </div>
            {/* Ambient Background Glow matching image */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500 to-purple-600 blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <h3 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-display font-bold mb-8 sm:mb-10 leading-[1.1] text-white tracking-tight">
            Engineering Empathy <br />Through <span className="text-cyan-400">Clean Code.</span>
          </h3>

          <div className="flex flex-col gap-6 text-base sm:text-lg text-gray-400 font-medium leading-relaxed mb-10 sm:mb-12 relative z-10">
            <p>
              I am a self-taught front-end developer based in Bihar, India. I specialize in developing highly responsive, performant websites from scratch and evolving them into cutting-edge, vibrant digital experiences.
            </p>
            <p>
              Transforming complex ideas and creative logic into tangible web interfaces has been my obsessive passion. I continually strive to master the absolute newest technologies and solid architectural patterns to build products that feel effortless and alive.
            </p>
          </div>

          <div className="bg-[#0f0f16]/90 backdrop-blur-xl p-8 sm:p-12 rounded-2xl relative overflow-hidden group border border-purple-500/30 transition-all duration-500 hover:border-pink-500/60 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>

            <p className="relative z-10 text-lg sm:text-xl font-display font-medium text-gray-300 mb-8 leading-relaxed italic">
              "Building elegant, distraction-free connectivity bridges utilizing deeply modern, vibrant web layers."
            </p>
            <span className="relative z-10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-4">
              <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"></span>
              MISSION: AXIO-LINK
            </span>
          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default About;
