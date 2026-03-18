import React from 'react';
import premiumBg from '../assets/ultra_premium_dark_bg.png';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#05050a]">

      {/* Massive Vibrant Animated Glow Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/20 blur-[120px] mix-blend-screen animate-orb1 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen animate-orb2 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[50vw] rounded-full bg-pink-600/15 blur-[120px] mix-blend-screen animate-orb1 pointer-events-none" style={{ animationDelay: '-5s' }}></div>

      {/* Ultra-Premium Dark Aesthetic Image Overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${premiumBg})` }}
      ></div>

      {/* Noise Texture Overlay for grain depth */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Deep Space Base gradient to anchor bottom borders */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent pointer-events-none opacity-90"></div>
    </div>
  );
};

export default Background;
