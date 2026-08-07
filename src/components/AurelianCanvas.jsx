import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingBag, FaTimes, FaChevronLeft, FaChevronRight, FaImage, FaVideo } from 'react-icons/fa';
import { SiPinterest, SiGumroad } from 'react-icons/si';
import { sounds } from '../utils/sound';

const S = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas';
const acLogo = `${S}/Logo.png`;

const artPieces = [
  {
    id: 1, title: 'The Golden Lion', tagline: 'Authority. Power. Legacy.',
    cover: `${S}/The%20Golden%20Lion/original/cover.png`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/thegoldenlion', price: '$22',
    images: [
      `${S}/The%20Golden%20Lion/original/cover.png`,
      `${S}/The%20Golden%20Lion/original/pinterest/image/frame1.png`,
      `${S}/The%20Golden%20Lion/original/pinterest/image/frame2.png`,
      `${S}/The%20Golden%20Lion/original/pinterest/image/frame3.png`,
      `${S}/The%20Golden%20Lion/original/pinterest/image/frame4.png`,
      `${S}/The%20Golden%20Lion/original/pinterest/image/combine%20frame.png`,
    ],
    videos: [
      `${S}/The%20Golden%20Lion/original/pinterest/video/framevi1.mp4`,
      `${S}/The%20Golden%20Lion/original/pinterest/video/framevi2.mp4`,
      `${S}/The%20Golden%20Lion/original/pinterest/video/framevi3.mp4`,
      `${S}/The%20Golden%20Lion/original/pinterest/video/framevi4.mp4`,
      `${S}/The%20Golden%20Lion/original/pinterest/video/combine%20frame%20video.mp4`,
      `${S}/The%20Golden%20Lion/original/pinterest/video/Landscape.mp4`,
      `${S}/The%20Golden%20Lion/original/pinterest/video/micro.mp4`,
    ],
  },
  {
    id: 2, title: 'The Golden Empress', tagline: 'Art Nouveau · 24K Gold Leaf',
    cover: `${S}/The%20Golden%20Empress/original/cover.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-golden-empress', price: '$22',
    images: [
      `${S}/The%20Golden%20Empress/original/cover.jpeg`,
      `${S}/The%20Golden%20Empress/original/pinterest/image/frame1.png`,
      `${S}/The%20Golden%20Empress/original/pinterest/image/frame2.png`,
      `${S}/The%20Golden%20Empress/original/pinterest/image/frame3.png`,
      `${S}/The%20Golden%20Empress/original/pinterest/image/frame4.png`,
      `${S}/The%20Golden%20Empress/original/combine%20frames.jpeg`,
    ],
    videos: [
      `${S}/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin.mp4`,
      `${S}/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(1).mp4`,
      `${S}/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(2).mp4`,
      `${S}/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(3).mp4`,
      `${S}/The%20Golden%20Empress/original/pinterest/video/combine%20frame%20video.mp4`,
      `${S}/The%20Golden%20Empress/original/pinterest/video/landscape.mp4`,
    ],
  },
  {
    id: 3, title: 'Liquid Onyx', tagline: 'Minimalist · High Contrast',
    cover: `${S}/Liquid%20Onyx/original/cover.png`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/liquidonyx', price: '$22',
    images: [
      `${S}/Liquid%20Onyx/original/pinterest/image/frame1.png`,
      `${S}/Liquid%20Onyx/original/pinterest/image/frame2.png`,
      `${S}/Liquid%20Onyx/original/pinterest/image/frame3.png`,
      `${S}/Liquid%20Onyx/original/pinterest/image/frame4.png`,
      `${S}/Liquid%20Onyx/original/pinterest/image/combine%20frame.png`,
    ],
    videos: [
      `${S}/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p.mp4`,
      `${S}/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p%20(1).mp4`,
      `${S}/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p%20(2).mp4`,
      `${S}/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p%20(3).mp4`,
      `${S}/Liquid%20Onyx/original/pinterest/video/Macro.mp4`,
      `${S}/Liquid%20Onyx/original/pinterest/video/landscape.mp4`,
    ],
  },
  {
    id: 4, title: 'Fresco of the Gods', tagline: 'Divine · Mythological',
    cover: `${S}/Fresco%20of%20the%20Gods/original/cover.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/fresco-of-the-gods', price: '$22',
    images: [
      `${S}/Fresco%20of%20the%20Gods/original/cover.jpeg`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/image/frame1.png`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/image/frame2.png`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/image/frame3.png`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/image/frame4.png`,
      `${S}/Fresco%20of%20the%20Gods/original/combine%20frame.jpeg`,
    ],
    videos: [
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin.mp4`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(1).mp4`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(2).mp4`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(3).mp4`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/video/landscape.mp4`,
      `${S}/Fresco%20of%20the%20Gods/original/pinterest/video/micro.mp4`,
    ],
  },
  {
    id: 5, title: 'The Titanium Wealth', tagline: 'Industrial Luxury',
    cover: `${S}/The%20Titanium%20Wealth/original/cover%20image.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-titanium-wealth', price: '$22',
    images: [
      `${S}/The%20Titanium%20Wealth/original/cover%20image.jpeg`,
      `${S}/The%20Titanium%20Wealth/original/frame1.jpeg`,
      `${S}/The%20Titanium%20Wealth/original/frame2.jpeg`,
      `${S}/The%20Titanium%20Wealth/original/frame3.jpeg`,
      `${S}/The%20Titanium%20Wealth/original/frame4.jpeg`,
      `${S}/The%20Titanium%20Wealth/original/combine%20frame%20image.jpeg`,
    ],
    videos: [
      `${S}/The%20Titanium%20Wealth/original/pinterest%20pin/combine%20frame%20video.mp4`,
      `${S}/The%20Titanium%20Wealth/original/pinterest%20pin/landscape.mp4`,
      `${S}/The%20Titanium%20Wealth/original/pinterest%20pin/micro.mp4`,
    ],
  },
  {
    id: 6, title: 'She Stands at the Old Door', tagline: 'Narrative · Atmospheric',
    cover: `${S}/She%20Stands%20at%20the%20Old%20Door/original/cover%20image.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/she-stands-at-the-old-door', price: '$22',
    images: [
      `${S}/She%20Stands%20at%20the%20Old%20Door/original/cover%20image.jpeg`,
      `${S}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%201.jpeg`,
      `${S}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%202.jpeg`,
      `${S}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%203.jpeg`,
      `${S}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%204.jpeg`,
      `${S}/She%20Stands%20at%20the%20Old%20Door/original/combine%20frame%20image.jpeg`,
    ],
    videos: [
      `${S}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/combine%20frame%20video.mp4`,
    ],
  },
  {
    id: 7, title: 'The Letter', tagline: 'Intimate · Vintage',
    cover: `${S}/the%20letter/original/cover.jpg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-letter', price: '$22',
    images: [
      `${S}/the%20letter/original/cover.jpg`,
      `${S}/the%20letter/original/frame1.png`,
      `${S}/the%20letter/original/frame2.png`,
      `${S}/the%20letter/original/frame3.png`,
      `${S}/the%20letter/original/frame4.png`,
      `${S}/the%20letter/original/frame5.png`,
      `${S}/the%20letter/original/combine%20frame%20image.jpeg`,
    ],
    videos: [
      `${S}/the%20letter/original/pinterest/video/video-1067903789743522.mp4`,
      `${S}/the%20letter/original/pinterest/video/video-1067903793076855.mp4`,
      `${S}/the%20letter/original/pinterest/video/video-1067903796410188.mp4`,
      `${S}/the%20letter/original/pinterest/video/video-1067903799743521.mp4`,
      `${S}/the%20letter/original/pinterest/video/combine%20frame%20video.mp4`,
    ],
  },
];

const AurelianCanvas = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxType, setLightboxType] = useState('image');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activePiece = artPieces[activeTab];

  const openLightbox = (type, index = 0) => {
    setLightboxType(type);
    setLightboxIndex(index);
    setLightboxOpen(true);
    sounds.whoosh();
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    sounds.click();
  };

  const nextItem = () => {
    const items = lightboxType === 'image' ? activePiece.images : activePiece.videos;
    setLightboxIndex((lightboxIndex + 1) % items.length);
    sounds.ping();
  };

  const prevItem = () => {
    const items = lightboxType === 'image' ? activePiece.images : activePiece.videos;
    setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    sounds.ping();
  };

  const currentItems = lightboxType === 'image' ? activePiece.images : activePiece.videos;

  return (
    <div className="min-h-screen pt-32 pb-20 max-w-[1280px] mx-auto px-5 md:px-12 lg:px-16 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-tertiary/40 bg-tertiary/10 font-mono text-tertiary mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          VENTURE // ACTIVE
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={acLogo} alt="Aurelian Canvas" className="w-12 h-12 object-contain" />
          <h1 className="text-3xl md:text-6xl font-black text-text-primary tracking-tight">
            Aurelian <span className="amber-gradient-text">Canvas</span>
          </h1>
        </div>
        <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
          AI art brand — solo operation. 7 premium 16K digital artworks.
          Sold on Gumroad, marketed on Pinterest.
        </p>
      </motion.div>

      {/* Tab Navigation — Exhibit names */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
        {artPieces.map((piece, idx) => (
          <button
            key={piece.id}
            onClick={() => { setActiveTab(idx); sounds.click(); }}
            onMouseEnter={() => sounds.hover()}
            className={`px-3 py-2 rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === idx
                ? 'bg-tertiary text-on-tertiary shadow-[0_0_15px_rgba(255,185,95,0.3)]'
                : 'glass-panel text-on-surface-variant hover:text-tertiary hover:border-tertiary/30'
            }`}
          >
            {String(piece.id).padStart(2, '0')} · {piece.title}
          </button>
        ))}
      </div>

      {/* Active Exhibit Content — 2 grid on desktop, 1 grid on mobile/tablet */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8"
        >
          {/* Left: Cover + Info */}
          <div className="space-y-4">
            {/* Cover image */}
            <div
              onClick={() => openLightbox('image', 0)}
              className="relative w-full rounded-xl overflow-hidden glass-panel border border-tertiary/30 cursor-pointer group neon-glow-amber"
            >
              <img
                src={activePiece.cover}
                alt={activePiece.title}
                className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent opacity-60" />
              <div className="corner-bracket corner-tl" />
              <div className="corner-bracket corner-tr" />
              <div className="corner-bracket corner-bl" />
              <div className="corner-bracket corner-br" />
              <div className="absolute top-4 left-4 font-mono text-tertiary text-sm">
                EXHIBIT // {String(activePiece.id).padStart(2, '0')}
              </div>
              <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded font-mono text-sm font-bold">
                {activePiece.price}
              </div>
            </div>

            {/* Info */}
            <div className="glass-panel p-6 rounded-xl border-tertiary/20">
              <h2 className="text-2xl font-black text-text-primary">{activePiece.title}</h2>
              <p className="text-sm text-tertiary mt-1">{activePiece.tagline}</p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => openLightbox('image', 0)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  <FaImage size={12} /> {activePiece.images.length} Images
                </button>
                <button
                  onClick={() => openLightbox('video', 0)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-neon-pink border border-neon-pink/20 hover:bg-neon-pink/10 transition-colors"
                >
                  <FaVideo size={12} /> {activePiece.videos.length} Videos
                </button>
              </div>
              <a
                href={activePiece.gumroadUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-tertiary/30 bg-tertiary/5 text-tertiary text-sm font-bold uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all"
              >
                <SiGumroad size={14} /> Buy {activePiece.price} on Gumroad
              </a>
            </div>
          </div>

          {/* Right: Image thumbnails + Video thumbnails */}
          <div className="space-y-4">
            {/* Image thumbnails */}
            <div>
              <h3 className="text-sm font-bold text-primary font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
                <FaImage size={14} /> Images ({activePiece.images.length})
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {activePiece.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox('image', i)}
                    className="relative aspect-square rounded-lg overflow-hidden glass-panel border border-outline-variant/20 hover:border-primary/50 cursor-pointer group transition-all"
                  >
                    <img src={img} alt={`${activePiece.title} ${i + 1}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Video thumbnails */}
            <div>
              <h3 className="text-sm font-bold text-neon-pink font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
                <FaVideo size={14} /> Videos ({activePiece.videos.length})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {activePiece.videos.map((vid, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox('video', i)}
                    className="relative aspect-video rounded-lg overflow-hidden glass-panel border border-outline-variant/20 hover:border-neon-pink/50 cursor-pointer group transition-all"
                  >
                    <video src={vid} muted className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 to-transparent flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-neon-pink/30 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaVideo size={14} className="text-neon-pink" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Store CTAs */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <a href="https://aureliancanvas.gumroad.com/" target="_blank" rel="noreferrer"
          className="glass-panel border-tertiary text-tertiary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all neon-glow-amber flex items-center gap-3 text-sm">
          <FaShoppingBag size={14} /> Visit Gumroad Store
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"
          className="glass-panel border-outline-variant text-text-primary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:border-text-primary transition-all flex items-center gap-3 text-sm">
          <SiPinterest size={14} /> View on Pinterest
        </a>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface-dark/95 backdrop-blur-xl z-[2000] flex flex-col items-center justify-center p-4"
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 z-10"
              onClick={closeLightbox}
            >
              <FaTimes size={28} />
            </button>

            <div className="text-center mb-4 px-4">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">{activePiece.title}</h3>
              <p className="text-sm text-tertiary font-mono mt-1">
                {lightboxType === 'image' ? 'IMAGE' : 'VIDEO'} {lightboxIndex + 1} / {currentItems.length}
              </p>
            </div>

            <div className="max-w-4xl w-full flex items-center justify-center">
              {lightboxType === 'image' ? (
                <img
                  src={currentItems[lightboxIndex]}
                  alt={`${activePiece.title} ${lightboxIndex + 1}`}
                  className="max-w-full max-h-[60vh] object-contain rounded-xl border border-tertiary/20"
                />
              ) : (
                <video
                  src={currentItems[lightboxIndex]}
                  autoPlay loop controls playsInline
                  className="max-w-full max-h-[60vh] object-contain rounded-xl border border-tertiary/20"
                  onLoadedMetadata={(e) => {
                    // Unmute after user click (browser allows sound after interaction)
                    e.target.muted = false;
                    e.target.play();
                  }}
                />
              )}
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prevItem}
                className="w-12 h-12 rounded-full glass-panel border border-tertiary/30 flex items-center justify-center text-tertiary hover:bg-tertiary/10 transition-colors"
              >
                <FaChevronLeft size={20} />
              </button>

              <button
                onClick={() => { setLightboxType(lightboxType === 'image' ? 'video' : 'image'); setLightboxIndex(0); }}
                className="px-4 py-2 rounded-full glass-panel border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest hover:bg-primary/10 transition-colors"
              >
                {lightboxType === 'image' ? '🎬 Videos' : '📸 Images'}
              </button>

              <button
                onClick={nextItem}
                className="w-12 h-12 rounded-full glass-panel border border-tertiary/30 flex items-center justify-center text-tertiary hover:bg-tertiary/10 transition-colors"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AurelianCanvas;
