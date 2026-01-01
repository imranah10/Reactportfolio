import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileimg1 from "./images/profile1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import pdf from "./resume.pdf";

const Hero = () => {
  const roles = [
    "Front-end Developer",
    "React Developer",
    "MERN Stack Engineer",
    "AI Interface Architect",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setRoleIndex((p) => (p + 1) % roles.length);
    }, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center text-center">

        {/* IMAGE SECTION */}
        <div className="col-12 mb-5 d-flex justify-content-center ">
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{
              width: "clamp(300px, 60vw, 360px)",
              height: "clamp(300px, 60vw, 360px)",
              padding: "10px", // image–box gap
              borderRadius: "50%",
              position: "relative",
              marginTop: "4rem",

              /* 🔥 ATTRACTIVE BOX BORDER */
              background:
                "linear-gradient(135deg, rgba(0,255,255,0.35), rgba(255,0,255,0.35))",
              boxShadow:
                "0 0 35px rgba(0,255,255,0.6), inset 0 0 25px rgba(255,0,255,0.5)",
            }}
          >
            {/* animated dashed ring */}
            <div
              style={{
                position: "absolute",
                inset: "-10px",
                borderRadius: "50%",
                border: "2px dashed rgba(0,255,153,0.8)",
                animation: "spin 12s linear infinite",
              }}
            />

            <img
              src={profileimg1}
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                backgroundColor: "#000",
              }}
            />
          </motion.div>
        </div>

        {/* TEXT SECTION */}
        <div className="col-12">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              fontWeight: "900",
              marginBottom: "1rem",
              textShadow: "0 0 20px cyan",
            }}
          >
            I AM <span style={{ color: "#00ffff" }}>IMRAN</span>
          </motion.h1>

          <div style={{ height: "40px", marginBottom: "2rem" }}>
            <motion.div
              key={roleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                background: "linear-gradient(to right, #00F260, #0575E6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "2px",
              }}
            >
              {roles[roleIndex]}
            </motion.div>
          </div>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "700px",
              fontSize: "1.1rem",
              borderLeft: "3px solid magenta",
              paddingLeft: "1rem",
              color: "#fff", // Forced white for visibility
            }}
          >
            EXECUTING CREATIVE PROTOCOLS: Crafting high-fidelity web experiences
            where quantum logic meets artistic chaos.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href={pdf} download className="btn btn-outline-info px-4 py-2">
              <i className="bi bi-download me-2"></i>
              ACCESS RESUME
            </a>

            <a href="#projects" className="btn btn-outline-success px-4 py-2">
              VIEW PROJECTS
            </a>
          </div>
        </div>

      </div>

      {/* spin animation inline */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
