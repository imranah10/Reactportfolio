import React, { useEffect } from "react";
import "./Home.css";
import profile2 from "./images/profile.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import GithubStats from "./GithubStats";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="container"
      style={{
        padding: "4rem 1rem",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* TITLE */}
      <h2
        className="text-center section-title"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        <span style={{ borderBottom: "2px solid var(--neon-cyan)" }}>
          ABOUT US
        </span>
      </h2>

      {/* MISSION BLOCK */}
      <motion.div
        className="glass-panel"
        style={{
          marginBottom: "3rem",
          padding: "2rem",
          borderRadius: "16px",
          borderLeft: "4px solid var(--neon-green)",
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--neon-green)",
            marginBottom: "1rem",
          }}
        >
          🛡️ Mission: AXIO-LINK
        </h3>

        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.2rem",
            marginBottom: "1.5rem",
            color: "white",
          }}
        >
          "Current Objective: Building the world's most intelligent connectivity
          bridge using MERN + Generative AI."
        </p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
          }}
        >
          <span>🚀 <strong>Status:</strong> Deploying Advanced Logic</span>
          <span>🌱 <strong>Learning:</strong> Quantum React & AI-Native Architecture</span>
          <span>⚡ <strong>Activity:</strong> 366/366 Days of relentless evolution in 2025.</span>
        </div>
      </motion.div>

      {/* CONTENT + IMAGE */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* TEXT */}
        <motion.div
          className="glass-panel"
          style={{
            flex: "1 1 400px",
            padding: "2.5rem",
            borderRadius: "20px",
            lineHeight: "1.8",
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#fff" }}>
            Hello, I am{" "}
            <span
              style={{
                color: "var(--neon-cyan)",
                fontWeight: "bold",
              }}
            >
              Imran
            </span>
            !
          </p>

          <p style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
            I am a self-taught front end developer based in India, Bihar. I can
            develop responsive websites from scratch and raise them into
            modern-friendly web experiences.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            Transforming my creativity and knowledge into websites has been my
            passion for over a year. I always strive to learn about the newest
            technologies and frameworks.
          </p>
        </motion.div>

        {/* IMAGE — FULL IMAGE, NO CROP (FIXED) */}
        <motion.div
          style={{ flex: "0 0 auto" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={profile2}
            alt="profile"
            style={{
              width: "130%",
              height: "260px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "20px",
              border: "2px solid var(--neon-magenta)",
              boxShadow: "10px 10px 0 rgba(191, 0, 255, 0.2)",
              display: "block",
            }}
          />

        </motion.div>
      </div>

      {/* GITHUB STATS */}
      <GithubStats />
    </div>
  );
};

export default About;
