import React from 'react';
import { IoCall } from "react-icons/io5";

const Call = () => {
  const iconstyle = {
    position: "fixed",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    zIndex: 999,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "var(--glass-bg)",
    border: "2px solid var(--neon-cyan)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(5px)",
    boxShadow: "0 0 15px rgba(0, 243, 255, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease"
  };

  return (
    <a href='Tel:+91946141526' style={iconstyle} className="cyber-call-btn">
       <IoCall style={{ fontSize: '1.5rem', color: 'var(--neon-cyan)' }} />
    </a>
  );
};

export default Call;
