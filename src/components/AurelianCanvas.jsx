import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingBag, FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiPinterest, SiGumroad } from 'react-icons/si';
import { sounds } from '../utils/sound';

// ── Supabase asset URLs from old portfolio ──
const supaBase = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas';
const acLogo = `${supaBase}/Logo.png`;

const artPieces = [
  {
    id: 1, title: 'The Golden Lion', tagline: 'Authority. Power. Legacy.',
    cover: `${supaBase}/The%20Golden%20Lion/original/cover.png`,
    thumbnail: `${supaBase}/The%20Golden%20Lion/original/thumbnail.png`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/thegoldenlion', price: '$22',
    accentColor: '#D4AF37',
    images: [
      `${supaBase}/The%20Golden%20Lion/original/cover.png`,
      `${supaBase}/The%20Golden%20Lion/original/pinterest/image/frame1.png`,
      `${supaBase}/The%20Golden%20Lion/original/pinterest/image/frame2.png`,
      `${supaBase}/The%20Golden%20Lion/original/pinterest/image/frame3.png`,
      `${supaBase}/The%20Golden%20Lion/original/pinterest/image/frame4.png`,
      `${supaBase}/The%20Golden%20Lion/original/pinterest/image/combine%20frame.png`,
    ],
    videos: [
      `${supaBase}/The%20Golden%20Lion/original/pinterest/video/framevi1.mp4`,
      `${supaBase}/The%20Golden%20Lion/original/pinterest/video/framevi2.mp4`,
      `${supaBase}/The%20Golden%20Lion/original/pinterest/video/combine%20frame%20video.mp4`,
    ],
  },
  {
    id: 2, title: 'The Golden Empress', tagline: 'Art Nouveau · 24K Gold Leaf',
    cover: `${supaBase}/The%20Golden%20Empress/original/cover.jpeg`,
    thumbnail: `${supaBase}/The%20Golden%20Empress/original/thumbnail.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-golden-empress', price: '$22',
    accentColor: '#C9A227',
    images: [
      `${supaBase}/The%20Golden%20Empress/original/cover.jpeg`,
      `${supaBase}/The%20Golden%20Empress/original/pinterest/image/frame1.png`,
      `${supaBase}/The%20Golden%20Empress/original/pinterest/image/frame2.png`,
      `${supaBase}/The%20Golden%20Empress/original/pinterest/image/frame3.png`,
      `${supaBase}/The%20Golden%20Empress/original/pinterest/image/frame4.png`,
    ],
    videos: [
      `${supaBase}/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin.mp4`,
      `${supaBase}/The%20Golden%20Empress/original/pinterest/video/combine%20frame%20video.mp4`,
    ],
  },
  {
    id: 3, title: 'Liquid Onyx', tagline: 'Minimalist · High Contrast',
    cover: `${supaBase}/Liquid%20Onyx/original/cover.png`,
    thumbnail: `${supaBase}/Liquid%20Onyx/original/thumbnail.png`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/liquidonyx', price: '$22',
    accentColor: '#C0C0C0',
    images: [
      `${supaBase}/Liquid%20Onyx/original/pinterest/image/frame1.png`,
      `${supaBase}/Liquid%20Onyx/original/pinterest/image/frame2.png`,
      `${supaBase}/Liquid%20Onyx/original/pinterest/image/frame3.png`,
      `${supaBase}/Liquid%20Onyx/original/pinterest/image/frame4.png`,
      `${supaBase}/Liquid%20Onyx/original/pinterest/image/combine%20frame.png`,
    ],
    videos: [
      `${supaBase}/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p.mp4`,
      `${supaBase}/Liquid%20Onyx/original/pinterest/video/combine%20frame%20video.mp4`,
    ],
  },
  {
    id: 4, title: 'Fresco of the Gods', tagline: 'Divine · Mythological',
    cover: `${supaBase}/Fresco%20of%20the%20Gods/original/cover.jpeg`,
    thumbnail: `${supaBase}/Fresco%20of%20the%20Gods/original/Thumbnail.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/fresco-of-the-gods', price: '$22',
    accentColor: '#FFD700',
    images: [
      `${supaBase}/Fresco%20of%20the%20Gods/original/cover.jpeg`,
      `${supaBase}/Fresco%20of%20the%20Gods/original/pinterest/image/frame1.png`,
      `${supaBase}/Fresco%20of%20the%20Gods/original/pinterest/image/frame2.png`,
      `${supaBase}/Fresco%20of%20the%20Gods/original/pinterest/image/frame3.png`,
      `${supaBase}/Fresco%20of%20the%20Gods/original/pinterest/image/frame4.png`,
    ],
    videos: [
      `${supaBase}/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin.mp4`,
      `${supaBase}/Fresco%20of%20the%20Gods/original/pinterest/video/landscape.mp4`,
    ],
  },
  {
    id: 5, title: 'The Titanium Wealth', tagline: 'Industrial Luxury',
    cover: `${supaBase}/The%20Titanium%20Wealth/original/cover%20image.jpeg`,
    thumbnail: `${supaBase}/The%20Titanium%20Wealth/original/thumbnail.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-titanium-wealth', price: '$22',
    accentColor: '#87868D',
    images: [
      `${supaBase}/The%20Titanium%20Wealth/original/cover%20image.jpeg`,
      `${supaBase}/The%20Titanium%20Wealth/original/frame1.jpeg`,
      `${supaBase}/The%20Titanium%20Wealth/original/frame2.jpeg`,
      `${supaBase}/The%20Titanium%20Wealth/original/frame3.jpeg`,
      `${supaBase}/The%20Titanium%20Wealth/original/frame4.jpeg`,
    ],
    videos: [
      `${supaBase}/The%20Titanium%20Wealth/original/pinterest%20pin/combine%20frame%20video.mp4`,
    ],
  },
  {
    id: 6, title: 'She Stands at the Old Door', tagline: 'Narrative · Atmospheric',
    cover: `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/cover%20image.jpeg`,
    thumbnail: `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/thumbnail.jpeg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/she-stands-at-the-old-door', price: '$22',
    accentColor: '#B8860B',
    images: [
      `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/cover%20image.jpeg`,
      `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%201.jpeg`,
      `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%202.jpeg`,
      `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%203.jpeg`,
      `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%204.jpeg`,
    ],
    videos: [
      `${supaBase}/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/combine%20frame%20video.mp4`,
    ],
  },
  {
    id: 7, title: 'The Letter', tagline: 'Intimate · Vintage',
    cover: `${supaBase}/the%20letter/original/cover.jpg`,
    thumbnail: `${supaBase}/the%20letter/original/thumbnail.jpg`,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-letter', price: '$22',
    accentColor: '#CD853F',
    images: [
      `${supaBase}/the%20letter/original/cover.jpg`,
      `${supaBase}/the%20letter/original/frame1.png`,
      `${supaBase}/the%20letter/original/frame2.png`,
      `${supaBase}/the%20letter/original/frame3.png`,
      `${supaBase}/the%20letter/original/frame4.png`,
    ],
    videos: [
      `${supaBase}/the%20letter/original/pinterest/video/combine%20frame%20video.mp4`,
    ],
  },
];

const AurelianCanvas = () => {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxType, setLightboxType] = useState('image');

  const openLightbox = (piece, type, index) => {
    setSelectedPiece(piece);
    setLightboxType(type);
    setLightboxIndex(index);
    sounds.whoosh();
  };

  const closeLightbox = () => {
    setSelectedPiece(null);
    sounds.click();
  };

  const nextItem = () => {
    const items = lightboxType === 'image' ? selectedPiece.images : selectedPiece.videos;
    setLightboxIndex((lightboxIndex + 1) % items.length);
    sounds.ping();
  };

  const prevItem = () => {
    const items = lightboxType === 'image' ? selectedPiece.images : selectedPiece.videos;
    setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    sounds.ping();
  };

  return (
    <div className="min-h-screen pt-32 pb-20 max-w-[1280px] mx-auto px-5 md:px-16 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-tertiary/40 bg-tertiary/10 font-mono text-tertiary mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          VENTURE // ACTIVE
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={acLogo} alt="Aurelian Canvas" className="w-12 h-12 object-contain" />
          <h1 className="text-4xl md:text-7xl font-black text-text-primary tracking-tight">
            Aurelian <span className="amber-gradient-text">Canvas</span>
          </h1>
        </div>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          AI art brand — solo operation. 7 premium 16K digital artworks created using AI prompt engineering.
          Sold on Gumroad, marketed on Pinterest.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {['AI Generation', 'Prompt Eng.', '16K Art', 'Video Marketing', 'Pinterest SEO', 'Gumroad Sales'].map((tag, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full border border-tertiary/30 bg-tertiary/10 text-[9px] font-bold text-tertiary tracking-wide">{tag}</span>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16">
        {[
          { label: "Artworks", value: "07", desc: "Premium pieces · All 16K" },
          { label: "Price", value: "$22", desc: "Per piece on Gumroad" },
          { label: "Resolution", value: "16K", desc: "Ultra-High Definition" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="glass-panel p-6 rounded-xl relative overflow-hidden neon-glow-amber text-center"
          >
            <div className="corner-bracket corner-tl" />
            <div className="corner-bracket corner-br" />
            <div className="font-mono text-tertiary/70 mb-2 uppercase text-xs">{stat.label}</div>
            <div className="text-4xl font-black text-tertiary">{stat.value}</div>
            <div className="text-xs text-on-surface-variant mt-2">{stat.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Art Gallery */}
      <div className="mb-16">
        <div className="flex justify-between items-end border-b border-tertiary/20 pb-4 mb-8">
          <h2 className="text-xl md:text-2xl font-bold amber-gradient-text">Curated Exhibits</h2>
          <div className="font-mono text-on-surface-variant text-sm">07 Active Pieces</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {artPieces.map((piece, idx) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-xl relative overflow-hidden group cursor-pointer border border-outline-variant/30 hover:border-tertiary/50 transition-all"
              onMouseEnter={() => sounds.hover()}
              onClick={() => sounds.click()}
            >
              {/* Cover image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={piece.cover}
                  alt={piece.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/30 to-transparent" />
                <div className="corner-bracket corner-tl" />
                <div className="corner-bracket corner-tr" />
                <div className="corner-bracket corner-bl" />
                <div className="corner-bracket corner-br" />

                {/* Exhibit number */}
                <div className="absolute top-3 left-3 font-mono text-tertiary text-xs">
                  EXHIBIT // {String(piece.id).padStart(2, '0')}
                </div>

                {/* Price */}
                <div className="absolute top-3 right-3 bg-tertiary text-on-tertiary px-2 py-0.5 rounded font-mono text-xs font-bold">
                  {piece.price}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-text-primary group-hover:text-tertiary transition-colors">{piece.title}</h3>
                <p className="text-xs text-on-surface-variant mt-1">{piece.tagline}</p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
                  <button
                    onClick={(e) => { e.stopPropagation(); openLightbox(piece, 'image', 0); }}
                    className="text-xs font-mono text-primary hover:text-tertiary transition-colors"
                  >
                    📸 {piece.images.length} Images
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); openLightbox(piece, 'video', 0); }}
                    className="text-xs font-mono text-neon-pink hover:text-tertiary transition-colors"
                  >
                    🎬 {piece.videos.length} Videos
                  </button>
                </div>
                {/* Gumroad link */}
                <a
                  href={piece.gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => { e.stopPropagation(); sounds.click(); }}
                  className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-tertiary/30 bg-tertiary/5 text-tertiary text-xs font-bold uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all"
                >
                  <SiGumroad size={12} /> Buy on Gumroad
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <a href="https://aureliancanvas.gumroad.com/" target="_blank" rel="noreferrer"
          onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
          className="glass-panel border-tertiary text-tertiary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-all neon-glow-amber flex items-center gap-3 text-sm">
          <FaShoppingBag size={14} /> Visit Gumroad Store
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"
          onClick={() => sounds.click()} onMouseEnter={() => sounds.hover()}
          className="glass-panel border-outline-variant text-text-primary px-8 py-4 rounded-lg font-mono uppercase tracking-widest hover:border-text-primary transition-all flex items-center gap-3 text-sm">
          <SiPinterest size={14} /> View on Pinterest
        </a>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPiece && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface-dark/95 backdrop-blur-xl z-[2000] flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <FaTimes size={28} />
            </button>

            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary">{selectedPiece.title}</h3>
              <p className="text-sm text-tertiary font-mono mt-1">
                {lightboxType === 'image' ? 'IMAGE' : 'VIDEO'} {lightboxIndex + 1} / {lightboxType === 'image' ? selectedPiece.images.length : selectedPiece.videos.length}
              </p>
            </div>

            {/* Media */}
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {lightboxType === 'image' ? (
                <img
                  src={selectedPiece.images[lightboxIndex]}
                  alt={selectedPiece.title}
                  className="w-full max-h-[60vh] object-contain rounded-xl border border-tertiary/20"
                />
              ) : (
                <video
                  src={selectedPiece.videos[lightboxIndex]}
                  autoPlay loop controls
                  className="w-full max-h-[60vh] object-contain rounded-xl border border-tertiary/20"
                />
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={(e) => { e.stopPropagation(); prevItem(); }}
                className="w-12 h-12 rounded-full glass-panel border border-tertiary/30 flex items-center justify-center text-tertiary hover:bg-tertiary/10 transition-colors"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextItem(); }}
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
