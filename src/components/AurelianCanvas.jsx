import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight, FaShoppingCart, FaPlay, FaImage, FaVideo, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPinterest, SiGumroad } from 'react-icons/si';

// ── Brand assets ──────────────────────────────────────────────────────────────
const acLogo = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Logo.png';
const pinterestMain = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/pinterest_main.png';

// ── The Golden Lion ───────────────────────────────────────────────────────────
const lionThumb = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/thumbnail.png';
const lionCover = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/cover.png';
const lionCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/combine%20frame.png';
const lionF1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/frame1.png';
const lionF2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/frame2.png';
const lionF3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/frame3.png';
const lionF4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/frame4.png';
const lionLandscape = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/landscape.png';
const lionBefore = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/The%20Before%20%26%20After.png';
const lionPalette = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/image/The%20Color%20Palette.png';
const lionVid1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/video/framevi1.mp4';
const lionVid2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/video/framevi2.mp4';
const lionVid3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/video/framevi3.mp4';
const lionVid4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/video/framevi4.mp4';
const lionVidCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/video/combine%20frame%20video.mp4';
const lionVidLand = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/video/Landscape.mp4';
const lionVidMicro = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Lion/original/pinterest/video/micro.mp4';

// ── The Golden Empress ────────────────────────────────────────────────────────
const empressThumb = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/thumbnail.jpeg';
const empressCover = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/cover.jpeg';
const empressCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/combine%20frames.jpeg';
const empressF1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/image/frame1.png';
const empressF2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/image/frame2.png';
const empressF3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/image/frame3.png';
const empressF4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/image/frame4.png';
const empressLandscape = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/landcsape%20image.jpeg';
const empressVid1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin.mp4';
const empressVid2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(1).mp4';
const empressVid3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(2).mp4';
const empressVid4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(3).mp4';
const empressVidCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/video/combine%20frame%20video.mp4';
const empressVidLand = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Golden%20Empress/original/pinterest/video/landscape.mp4';

// ── Liquid Onyx ───────────────────────────────────────────────────────────────
const onyxThumb = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/thumbnail.png';
const onyxCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/combine%20frame.png';
const onyxF1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/frame1.png';
const onyxF2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/frame2.png';
const onyxF3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/frame3.png';
const onyxF4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/frame4.png';
const onyxLandscape = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/landscape.png';
const onyxBefore = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/The%20Before%20%26%20After.png';
const onyxPalette = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/image/The%20Color%20Palette.png';
const onyxVid1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p.mp4';
const onyxVid2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p%20(1).mp4';
const onyxVid3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p%20(2).mp4';
const onyxVid4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/video/ultra-luxury-cinematic-interior-showcase-of-four-p%20(3).mp4';
const onyxVidMacro = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/video/Macro.mp4';
const onyxVidLand = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/video/landscape.mp4';
const onyxVidUntitled = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/pinterest/video/Untitled%20design.mp4';

// ── Fresco of the Gods ────────────────────────────────────────────────────────
const frescoThumb = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/Thumbnail.jpeg';
const frescoCover = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/cover.jpeg';
const frescoCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/combine%20frame.jpeg';
const frescoF1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/image/frame1.png';
const frescoF2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/image/frame2.png';
const frescoF3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/image/frame3.png';
const frescoF4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/image/frame4.png';
const frescoLandscape = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/landscape.jpeg';
const frescoBefore = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/image/Before%20%26%20After.png';
const frescoPalette = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/image/Color%20Palette.png';
const frescoVid1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin.mp4';
const frescoVid2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(1).mp4';
const frescoVid3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(2).mp4';
const frescoVid4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/video/create-a-cinematic-luxury-advertisement-video-usin%20(3).mp4';
const frescoVidDown = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/video/download%20(1).mp4';
const frescoVidLand = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/video/landscape.mp4';
const frescoVidMicro = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Fresco%20of%20the%20Gods/original/pinterest/video/micro.mp4';

// ── The Titanium Wealth ───────────────────────────────────────────────────────
const titanThumb = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/thumbnail.jpeg';
const titanCover = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/cover%20image.jpeg';
const titanCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/combine%20frame%20image.jpeg';
const titanF1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/frame1.jpeg';
const titanF2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/frame2.jpeg';
const titanF3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/frame3.jpeg';
const titanF4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/frame4.jpeg';
const titanLandscape = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/landscape%20image.jpeg';
const titanBefore = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/pinterest%20pin/before%20after.png';
const titanPalette = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/pinterest%20pin/Color%20Palette.png';
const titanVidCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/pinterest%20pin/combine%20frame%20video.mp4';
const titanVidLand = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/pinterest%20pin/landscape.mp4';
const titanVidMicro = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/The%20Titanium%20Wealth/original/pinterest%20pin/micro.mp4';

// ── She Stands at the Old Door ────────────────────────────────────────────────
const doorThumb = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/thumbnail.jpeg';
const doorCover = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/cover%20image.jpeg';
const doorCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/combine%20frame%20image.jpeg';
const doorF1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%201.jpeg';
const doorF2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%202.jpeg';
const doorF3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%203.jpeg';
const doorF4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/frame%204.jpeg';
const doorLandscape = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/landscape%20%20image.png';
const doorVidCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/She%20Stands%20at%20the%20Old%20Door/original/pinterest%20pins/combine%20frame%20video.mp4';

// ── The Letter ────────────────────────────────────────────────────────────────
const letterThumb = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/thumbnail.jpg';
const letterCover = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/cover.jpg';
const letterCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/combine%20frame%20image.jpeg';
const letterF1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/frame1.png';
const letterF2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/frame2.png';
const letterF3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/frame3.png';
const letterF4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/frame4.png';
const letterF5 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/frame5.png';
const letterVid1 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/pinterest/video/video-1067903789743522.mp4';
const letterVid2 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/pinterest/video/video-1067903793076855.mp4';
const letterVid3 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/pinterest/video/video-1067903796410188.mp4';
const letterVid4 = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/pinterest/video/video-1067903799743521.mp4';
const letterVidCombine = 'https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/the%20letter/original/pinterest/video/combine%20frame%20video.mp4';

// ─────────────────────────────────────────────────────────────────────────────
// DATA — each piece has images[] and videos[] fully mapped
// ─────────────────────────────────────────────────────────────────────────────
const artPieces = [
  {
    id: 1,
    title: 'The Golden Lion',
    tagline: 'Authority. Power. Legacy.',
    style: 'Abstract Impasto · Metallic Gold',
    desc: 'A monumental lion portrait rendered in metallic gold and antique bronze. Heavy palette knife impasto strokes create extreme texture — liquid 24K gold drips from the mane. The dark eyes hold absolute authority. Every pixel engineered at 16K resolution for museum-grade printing.',
    accentColor: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.3)',
    thumbnail: lionThumb,
    cover: lionCover,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/thegoldenlion',
    price: '$22',
    images: [
      { src: lionCover,     label: 'Cover Art',       desc: 'Master artwork — 16K ultra-resolution original' },
      { src: lionF1,        label: 'Frame 1',         desc: 'Small portrait frame — dark luxury interior' },
      { src: lionF2,        label: 'Frame 2',         desc: 'Medium portrait frame — living room context' },
      { src: lionF3,        label: 'Frame 3',         desc: 'Large portrait frame — gallery wall' },
      { src: lionF4,        label: 'Frame 4',         desc: 'Extra large frame — statement wall' },
      { src: lionCombine,   label: 'All Frames',      desc: 'Combined mockup — 6 interior sizes at a glance' },
      { src: lionLandscape, label: 'Landscape View',  desc: '16:9 horizontal format — ideal for wide walls' },
      { src: lionBefore,    label: 'Before & After',  desc: 'Bare wall vs. transformed space — the impact' },
      { src: lionPalette,   label: 'Colour Palette',  desc: 'Exact HEX codes — metallic gold, bronze, onyx' },
    ],
    videos: [
      { src: lionVid1,       label: 'Frame Reveal 1',   desc: 'Cinematic frame reveal — intimate close-up' },
      { src: lionVid2,       label: 'Frame Reveal 2',   desc: 'Frame reveal — ambient luxury lighting' },
      { src: lionVid3,       label: 'Frame Reveal 3',   desc: 'Frame reveal — wide room perspective' },
      { src: lionVid4,       label: 'Frame Reveal 4',   desc: 'Frame reveal — penthouse setting' },
      { src: lionVidCombine, label: 'All Frames Video', desc: 'All 4 frames in one cinematic sequence' },
      { src: lionVidLand,    label: 'Landscape Video',  desc: 'Landscape orientation — cinematic pan' },
      { src: lionVidMicro,   label: 'Macro Detail',     desc: 'Extreme macro shot — gold texture detail' },
    ],
  },
  {
    id: 2,
    title: 'The Golden Empress',
    tagline: 'Art Nouveau · 24K Gold Leaf',
    style: 'Art Nouveau · Gold Impasto',
    desc: 'A profile portrait of a woman layered in 24K gold leaf, copper, and sapphire blue. Thick impasto technique where gold physically leaps off the surface. Engineered at 16K for physical printing — each strand of hair is a brushstroke in gold.',
    accentColor: '#C9A227',
    glowColor: 'rgba(201,162,39,0.3)',
    thumbnail: empressThumb,
    cover: empressCover,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-golden-empress',
    price: '$22',
    images: [
      { src: empressCover,    label: 'Cover Art',      desc: 'Master artwork — 16K ultra-resolution original' },
      { src: empressF1,       label: 'Frame 1',        desc: 'Small portrait frame — bedroom context' },
      { src: empressF2,       label: 'Frame 2',        desc: 'Medium portrait frame — study room' },
      { src: empressF3,       label: 'Frame 3',        desc: 'Large portrait frame — living room' },
      { src: empressF4,       label: 'Frame 4',        desc: 'Extra large — statement piece' },
      { src: empressCombine,  label: 'All Frames',     desc: 'Combined mockup — all sizes in luxury setting' },
      { src: empressLandscape,label: 'Landscape View', desc: 'Horizontal format — boardroom and office walls' },
    ],
    videos: [
      { src: empressVid1,       label: 'Frame Reveal 1',   desc: 'Cinematic frame reveal — soft gold light' },
      { src: empressVid2,       label: 'Frame Reveal 2',   desc: 'Frame reveal — art deco interior' },
      { src: empressVid3,       label: 'Frame Reveal 3',   desc: 'Frame reveal — wide luxury room' },
      { src: empressVid4,       label: 'Frame Reveal 4',   desc: 'Frame reveal — penthouse perspective' },
      { src: empressVidCombine, label: 'All Frames Video', desc: 'All frames — seamless cinematic sequence' },
      { src: empressVidLand,    label: 'Landscape Video',  desc: 'Landscape orientation — wide cinematic sweep' },
    ],
  },
  {
    id: 3,
    title: 'Liquid Onyx',
    tagline: 'Minimalist · High Contrast',
    style: 'Contemporary Minimalist',
    desc: 'A study in pure contrast — glossy jet-black onyx meets matte charcoal, split by a razor fissure of diamond-white and crushed silver. Ultra-glossy resin texture beside ultra-matte charcoal. At 16K, every crystalline grain is visible.',
    accentColor: '#C0C0C0',
    glowColor: 'rgba(192,192,192,0.25)',
    thumbnail: onyxThumb,
    cover: "https://cgomxsxsvfgvivnyhhvu.supabase.co/storage/v1/object/public/aurelian-canvas/AurelianCanvas/Liquid%20Onyx/original/cover.png",
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/liquidonyx',
    price: '$22',
    images: [
      { src: onyxThumb,     label: 'Cover Art',      desc: 'Master artwork — 16K ultra-resolution original' },
      { src: onyxF1,        label: 'Frame 1',        desc: 'Small portrait frame — minimalist interior' },
      { src: onyxF2,        label: 'Frame 2',        desc: 'Medium frame — modern living room' },
      { src: onyxF3,        label: 'Frame 3',        desc: 'Large frame — executive office' },
      { src: onyxF4,        label: 'Frame 4',        desc: 'Extra large — floor-to-ceiling impact' },
      { src: onyxCombine,   label: 'All Frames',     desc: 'All 4 frames combined in one luxury setting' },
      { src: onyxLandscape, label: 'Landscape View', desc: 'Horizontal format — ultra-wide display' },
      { src: onyxBefore,    label: 'Before & After', desc: 'Empty wall vs. transformed — the contrast' },
      { src: onyxPalette,   label: 'Colour Palette', desc: 'Pure onyx, matte charcoal, diamond white' },
    ],
    videos: [
      { src: onyxVid1,      label: 'Frame Reveal 1',  desc: 'Cinematic reveal — stark lighting' },
      { src: onyxVid2,      label: 'Frame Reveal 2',  desc: 'Frame reveal — modern dark interior' },
      { src: onyxVid3,      label: 'Frame Reveal 3',  desc: 'Frame reveal — gallery style' },
      { src: onyxVid4,      label: 'Frame Reveal 4',  desc: 'Frame reveal — executive suite' },
      { src: onyxVidMacro,  label: 'Macro Detail',    desc: 'Extreme close-up — crystal texture detail' },
      { src: onyxVidLand,   label: 'Landscape Video', desc: 'Cinematic landscape pan — ultra-wide' },
      { src: onyxVidUntitled,label:'Ambient Loop',    desc: 'Atmospheric ambient motion loop' },
    ],
  },
  {
    id: 4,
    title: 'Fresco of the Gods',
    tagline: 'Italian Renaissance · Lost Fragment',
    style: 'Renaissance Fresco',
    desc: 'A lost fragment of an Italian Renaissance ceiling fresco. Angelic figures reach through swirling clouds on cracked ancient plaster — craquelure texture with vibrant lapis lazuli and real gold halos. 16K resolution captures every crack in the ancient surface.',
    accentColor: '#B8860B',
    glowColor: 'rgba(184,134,11,0.3)',
    thumbnail: frescoThumb,
    cover: frescoCover,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/fresco-of-the-gods',
    price: '$22',
    images: [
      { src: frescoCover,     label: 'Cover Art',      desc: 'Master artwork — 16K ultra-resolution original' },
      { src: frescoF1,        label: 'Frame 1',        desc: 'Small portrait frame — classical interior' },
      { src: frescoF2,        label: 'Frame 2',        desc: 'Medium frame — study or library wall' },
      { src: frescoF3,        label: 'Frame 3',        desc: 'Large frame — grand living room' },
      { src: frescoF4,        label: 'Frame 4',        desc: 'Extra large — statement ceiling piece' },
      { src: frescoCombine,   label: 'All Frames',     desc: 'Combined mockup — all sizes in heritage interior' },
      { src: frescoLandscape, label: 'Landscape View', desc: 'Horizontal format — panoramic fresco feel' },
      { src: frescoBefore,    label: 'Before & After', desc: 'Bare wall vs. Renaissance masterpiece' },
      { src: frescoPalette,   label: 'Colour Palette', desc: 'Lapis lazuli, plaster cream, halo gold' },
    ],
    videos: [
      { src: frescoVid1,    label: 'Frame Reveal 1',   desc: 'Cinematic reveal — warm candlelight' },
      { src: frescoVid2,    label: 'Frame Reveal 2',   desc: 'Frame reveal — classical study' },
      { src: frescoVid3,    label: 'Frame Reveal 3',   desc: 'Frame reveal — grand hallway' },
      { src: frescoVid4,    label: 'Frame Reveal 4',   desc: 'Frame reveal — museum setting' },
      { src: frescoVidDown, label: 'Ad Video',         desc: 'Full luxury advertisement production' },
      { src: frescoVidLand, label: 'Landscape Video',  desc: 'Landscape orientation — cinematic sweep' },
      { src: frescoVidMicro,label: 'Macro Detail',     desc: 'Extreme macro — ancient plaster texture' },
    ],
  },
  {
    id: 5,
    title: 'The Titanium Wealth',
    tagline: 'Abstract Expressionist · Bold',
    style: 'Abstract Expressionism',
    desc: 'Violently thick strokes of midnight blue, stark black, and massive sweeping streaks of glowing metallic gold. The heavy chunks of textured oil paint leap off the canvas. Raw power and unapologetic wealth — at 16K, the impasto texture is physically tangible.',
    accentColor: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.25)',
    thumbnail: titanThumb,
    cover: titanCover,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-titanium-wealth',
    price: '$22',
    images: [
      { src: titanCover,     label: 'Cover Art',      desc: 'Master artwork — 16K ultra-resolution original' },
      { src: titanF1,        label: 'Frame 1',        desc: 'Small portrait frame — executive office' },
      { src: titanF2,        label: 'Frame 2',        desc: 'Medium frame — modern penthouse' },
      { src: titanF3,        label: 'Frame 3',        desc: 'Large frame — boardroom statement' },
      { src: titanF4,        label: 'Frame 4',        desc: 'Extra large — floor to ceiling dominance' },
      { src: titanCombine,   label: 'All Frames',     desc: 'Combined mockup — all sizes in luxury context' },
      { src: titanLandscape, label: 'Landscape View', desc: 'Horizontal format — wide panoramic impact' },
      { src: titanBefore,    label: 'Before & After', desc: 'Transformation — bare wall to power statement' },
      { src: titanPalette,   label: 'Colour Palette', desc: 'Midnight blue, jet black, liquid gold' },
    ],
    videos: [
      { src: titanVidCombine,label: 'All Frames Video',desc: 'All frames in cinematic luxury sequence' },
      { src: titanVidLand,   label: 'Landscape Video', desc: 'Landscape orientation — cinematic sweep' },
      { src: titanVidMicro,  label: 'Macro Detail',    desc: 'Extreme macro — impasto gold texture' },
    ],
  },
  {
    id: 6,
    title: 'She Stands at the Old Door',
    tagline: 'Watercolour · Emotional Narrative',
    style: 'Expressive Watercolour',
    desc: 'A woman at an old stone farmhouse doorway, seen from inside looking into blazing golden countryside. Cool interior shadow vs blazing golden amber exterior. Loose expressive washes in 16K — every wet-on-wet bloom of colour preserved at full resolution.',
    accentColor: '#D4A017',
    glowColor: 'rgba(212,160,23,0.25)',
    thumbnail: doorThumb,
    cover: doorCover,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/she-stands-at-the-old-door',
    price: '$22',
    images: [
      { src: doorCover,     label: 'Cover Art',      desc: 'Master artwork — 16K ultra-resolution original' },
      { src: doorF1,        label: 'Frame 1',        desc: 'Small portrait frame — cottage interior' },
      { src: doorF2,        label: 'Frame 2',        desc: 'Medium frame — warm living room' },
      { src: doorF3,        label: 'Frame 3',        desc: 'Large frame — hallway or entrance' },
      { src: doorF4,        label: 'Frame 4',        desc: 'Extra large — full wall impression' },
      { src: doorCombine,   label: 'All Frames',     desc: 'Combined mockup — all sizes together' },
      { src: doorLandscape, label: 'Landscape View', desc: 'Wide horizontal — panoramic countryside feel' },
    ],
    videos: [
      { src: doorVidCombine, label: 'All Frames Video', desc: 'All 4 frames in ambient cinematic sequence' },
    ],
  },
  {
    id: 7,
    title: 'The Letter',
    tagline: 'Watercolour · Quiet Intimacy',
    style: 'Expressive Watercolour',
    desc: 'A woman at an antique writing desk beside a rain-streaked window, mid-letter — eyes distant, lost in thought. Amber candlelight vs cool grey-blue window light. Wet-on-wet bleeding edges on cream watercolour paper, preserved at 16K for archival-grade prints.',
    accentColor: '#D4810A',
    glowColor: 'rgba(212,129,10,0.25)',
    thumbnail: letterThumb,
    cover: letterCover,
    gumroadUrl: 'https://aureliancanvas.gumroad.com/l/the-letter',
    price: '$22',
    images: [
      { src: letterCover,   label: 'Cover Art',    desc: 'Master artwork — 16K ultra-resolution original' },
      { src: letterF1,      label: 'Frame 1',      desc: 'Small portrait frame — study or bedroom' },
      { src: letterF2,      label: 'Frame 2',      desc: 'Medium frame — living room warmth' },
      { src: letterF3,      label: 'Frame 3',      desc: 'Large frame — reading room statement' },
      { src: letterF4,      label: 'Frame 4',      desc: 'Extra large — full wall intimacy' },
      { src: letterF5,      label: 'Frame 5',      desc: 'Gallery style — museum frame context' },
      { src: letterCombine, label: 'All Frames',   desc: 'Combined — all frames in one candlelit setting' },
    ],
    videos: [
      { src: letterVid1,       label: 'Frame Reveal 1',   desc: 'Cinematic reveal — amber candlelight' },
      { src: letterVid2,       label: 'Frame Reveal 2',   desc: 'Frame reveal — study room setting' },
      { src: letterVid3,       label: 'Frame Reveal 3',   desc: 'Frame reveal — full room context' },
      { src: letterVid4,       label: 'Frame Reveal 4',   desc: 'Frame reveal — close atmospheric' },
      { src: letterVidCombine, label: 'All Frames Video', desc: 'All frames in one flowing cinematic cut' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO CARD (autoplay on hover)
// ─────────────────────────────────────────────────────────────────────────────
const VideoCard = ({ src, label, desc, accentColor, onClick }) => {
  const ref = useRef(null);
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-black"
      onClick={onClick}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => { if(ref.current){ ref.current.pause(); ref.current.currentTime=0; }}}
    >
      <video ref={ref} src={`${src}#t=0.001`} muted playsInline loop preload="metadata"
        className="w-full aspect-[9/16] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-0 transition-opacity">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <FaPlay size={16} className="text-white ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-0.5" style={{ color: accentColor }}>{label}</p>
        <p className="text-white/60 text-[10px] leading-tight">{desc}</p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────
const Lightbox = ({ items, startIdx, onClose, accentColor, isVideo }) => {
  const [current, setCurrent] = useState(startIdx);
  const vidRef = useRef(null);
  const prev = () => setCurrent(i => (i - 1 + items.length) % items.length);
  const next = () => setCurrent(i => (i + 1) % items.length);
  const cur = items[current];
  const curIsVideo = isVideo || cur?.src?.endsWith('.mp4');

  useEffect(() => { if(vidRef.current) vidRef.current.play(); }, [current]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/96 backdrop-blur-2xl flex flex-col items-center justify-center"
      onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"><FaTimes size={22} /></button>
      <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-3 md:left-8 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all z-10"><FaChevronLeft size={20} /></button>

      <div className="flex flex-col items-center gap-4 max-w-5xl w-full px-4 sm:px-16" onClick={e => e.stopPropagation()}>
        {curIsVideo ? (
          <video ref={vidRef} src={cur.src} controls autoPlay loop muted playsInline
            className="max-h-[75vh] max-w-full rounded-xl shadow-2xl object-contain" />
        ) : (
          <motion.img key={current} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }}
            src={cur.src} alt={cur.label}
            className="max-h-[75vh] max-w-full rounded-xl shadow-2xl object-contain" />
        )}
        <div className="text-center">
          <p className="font-bold text-base text-white mb-1" style={{ color: accentColor }}>{cur.label}</p>
          <p className="text-white/50 text-sm">{cur.desc}</p>
        </div>
      </div>

      <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-3 md:right-8 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all z-10"><FaChevronRight size={20} /></button>
      <div className="absolute bottom-5 text-white/30 text-xs font-mono">{current + 1} / {items.length}</div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ART DETAIL MODAL — full piece page
// ─────────────────────────────────────────────────────────────────────────────
const ArtDetail = ({ piece, onClose }) => {
  const [tab, setTab] = useState('images');
  const [lightbox, setLightbox] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] overflow-y-auto"
      style={{ background: '#05050e' }}
    >
      {/* Top accent line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-10" style={{ background: `linear-gradient(90deg, transparent, ${piece.accentColor}, transparent)` }} />

      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl border-b border-white/8 px-4 sm:px-8 py-4 flex items-center justify-between" style={{ background: 'rgba(5,5,14,0.9)' }}>
        <button onClick={onClose} className="flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors group">
          <FaArrowLeft size={11} className="group-hover:-translate-x-1 transition-transform" /> Back to Collection
        </button>
        <div className="flex items-center gap-3">
          <img src={acLogo} alt="AC" className="w-7 h-7 object-contain opacity-70" />
          <span className="text-white/40 text-xs font-mono tracking-widest hidden sm:block">AURELIAN CANVAS</span>
        </div>
        <a href={piece.gumroadUrl} target="_blank" rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[10px] tracking-[0.15em] uppercase transition-all hover:-translate-y-0.5"
          style={{ background: `linear-gradient(135deg,${piece.accentColor},${piece.accentColor}99)`, color: '#000' }}>
          <FaShoppingCart size={10} /> View on Gumroad
        </a>
      </div>

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12">

         {/* Cover — full width landscape */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-10" style={{ boxShadow: `0 0 60px ${piece.glowColor}` }}>
          <img src={piece.cover} alt={piece.title}
            className="w-full object-contain max-h-[85vh] bg-black transition-transform duration-[1.5s] hover:scale-[1.02]" />
        </div>

        {/* Info + process grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

          {/* Left — title, desc, CTA */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-5 text-[10px] font-bold tracking-[0.25em] uppercase"
              style={{ color: piece.accentColor, borderColor: `${piece.accentColor}40`, background: `${piece.accentColor}10` }}>
              {piece.style}
            </div>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-black text-white leading-tight tracking-tight mb-3">{piece.title}</h2>
            <p className="text-lg font-semibold mb-5" style={{ color: piece.accentColor }}>{piece.tagline}</p>
            <p className="text-gray-400 leading-relaxed text-base mb-8">{piece.desc}</p>
            <div className="flex flex-wrap gap-3">
              <a href={piece.gumroadUrl} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs tracking-[0.15em] uppercase transition-all hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg,${piece.accentColor},${piece.accentColor}bb)`, color: '#000', boxShadow: `0 0 24px ${piece.glowColor}` }}>
                <FaShoppingCart size={12} /> View on Gumroad
              </a>
              <a href="https://in.pinterest.com/AurelianCanvas/" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs tracking-[0.15em] uppercase border border-[#E60023]/40 text-[#E60023] hover:bg-[#E60023]/10 transition-all hover:-translate-y-1">
                <SiPinterest size={12} /> Pinterest
              </a>
            </div>
          </div>

          {/* Right — what you get */}
          <div className="rounded-2xl border border-white/8 bg-white/3 p-6 self-start">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">Content Created Per Artwork</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "🖼️", text: "Cover Art — 16K master file" },
                { icon: "📐", text: "4 interior frame mockups (S / M / L / XL)" },
                { icon: "🏞️", text: "Landscape & portrait formats" },
                { icon: "🎨", text: "Colour palette breakdown" },
                { icon: "↔️",  text: "Before & after transformation" },
                { icon: "🔬", text: "Macro detail close-up video" },
                { icon: "🎬", text: "Cinematic reveal video per frame" },
                { icon: "📹", text: "Combined frames video" },
                { icon: "🌄", text: "Landscape cinematic video" },
                { icon: "✍️", text: "SEO copy, title & hashtags for Pinterest" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  <span className="text-white/60 text-[13px]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 border-b border-white/8">
          {[
            { key: 'images', label: 'Images', icon: FaImage, count: piece.images.length },
            { key: 'videos', label: 'Videos', icon: FaVideo, count: piece.videos.length },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className="flex items-center gap-2 px-5 py-3 font-bold text-xs tracking-[0.2em] uppercase border-b-2 transition-all -mb-[1px]"
              style={{ borderColor: tab === t.key ? piece.accentColor : 'transparent', color: tab === t.key ? piece.accentColor : 'rgba(255,255,255,0.3)' }}>
              <t.icon size={11} /> {t.label} <span className="opacity-50">({t.count})</span>
            </button>
          ))}
        </div>

        {/* Images tab */}
        {tab === 'images' && (
          <div className="flex flex-col gap-5">
            {/* Wide images — Cover Art, Landscape, All Frames — shown full width, natural height */}
            {piece.images.filter(img => ['Cover Art','Landscape View','All Frames'].includes(img.label)).map((img, i) => (
              <motion.div key={img.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="group cursor-zoom-in rounded-2xl overflow-hidden border border-white/8 hover:border-white/25 transition-all duration-400 relative bg-black w-full"
                onClick={() => setLightbox({ items: piece.images, start: piece.images.findIndex(x=>x.label===img.label), isVid: false })}>
                <img src={img.src} alt={img.label}
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{ maxHeight: '72vh', background: '#000' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-0.5" style={{ color: piece.accentColor }}>{img.label}</p>
                  <p className="text-white/60 text-[11px]">{img.desc}</p>
                </div>
              </motion.div>
            ))}
            {/* Portrait grid — frames, before/after, palette */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {piece.images.filter(img => !['Cover Art','Landscape View','All Frames'].includes(img.label)).map((img, i) => (
                <motion.div key={img.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="group cursor-zoom-in rounded-xl overflow-hidden border border-white/8 hover:border-white/25 transition-all duration-300 relative bg-black"
                  onClick={() => setLightbox({ items: piece.images, start: piece.images.findIndex(x=>x.label===img.label), isVid: false })}>
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: '3/4', background:'#0a0a10' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:translate-y-full sm:group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: piece.accentColor }}>{img.label}</p>
                    <p className="text-white/60 text-[8px] sm:text-[9px] leading-tight mt-0.5">{img.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Videos tab */}
        {tab === 'videos' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {piece.videos.map((vid, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <VideoCard src={vid.src} label={vid.label} desc={vid.desc} accentColor={piece.accentColor}
                  onClick={() => setLightbox({ items: piece.videos, start: i, isVid: true })} />
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox items={lightbox.items} startIdx={lightbox.start} accentColor={piece.accentColor}
          isVideo={lightbox.isVid} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
const AurelianCanvas = () => {
  const [selectedPiece, setSelectedPiece] = useState(null);

  useEffect(() => {
    const existing = document.getElementById('pinterest-widget-js');
    if (!existing) {
      const s = document.createElement('script');
      s.id = 'pinterest-widget-js';
      s.async = true; s.defer = true;
      s.src = '//assets.pinterest.com/js/pinit.js';
      document.body.appendChild(s);
    }
  }, []);

  return (
    <>
      {/* ART DETAIL OVERLAY */}
      <AnimatePresence>
        {selectedPiece && <ArtDetail piece={selectedPiece} onClose={() => setSelectedPiece(null)} />}
      </AnimatePresence>

      <div className="min-h-screen text-[#f8f8f8] overflow-x-hidden relative" style={{ background: '#05050e' }}>

        {/* Ambient orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle,#D4AF37 0%,transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle,#B8860B 0%,transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        {/* ── BACK NAV ── */}
        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 pt-8">
          <a href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors group">
            <FaArrowLeft size={11} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </a>
        </div>

        {/* ── PINTEREST HERO BANNER ── */}
        <section className="relative z-10 mt-8">
          <div className="relative w-full overflow-hidden h-[50vh] min-h-[460px] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
            <img src={pinterestMain} alt="Aurelian Canvas — Engineered for the Elite"
              className="absolute inset-0 w-full h-full object-cover object-center" />
            {/* overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,5,14,0.2) 0%, rgba(5,5,14,0.1) 50%, rgba(5,5,14,0.85) 100%)' }} />

            {/* Hero text overlay */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className="absolute bottom-0 left-0 right-0 px-4 sm:px-12 md:px-20 lg:px-28 pb-8 sm:pb-16 bg-gradient-to-t from-[#05050e] via-[#05050e]/40 to-transparent">
              <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img src={acLogo} alt="AC" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-amber-400">Case Study · Founder & Creative Technologist</p>
                      <h1 className="text-[clamp(1.8rem,4.5vw,4.5rem)] font-display font-black text-white leading-tight tracking-tight">Aurelian Canvas</h1>
                    </div>
                  </div>
                  <p className="text-white/60 text-xs sm:text-base max-w-xl leading-relaxed">
                    A luxury AI art brand built from zero — 7 museum-grade 16K digital masterpieces, end-to-end creative pipeline, Pinterest distribution & Gumroad sales infrastructure.
                  </p>
                </div>
                <div className="flex flex-row flex-wrap gap-2.5 sm:gap-3 items-center justify-start w-full sm:w-auto flex-shrink-0">
                  <a href="https://aureliancanvas.gumroad.com/" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase transition-all hover:-translate-y-1"
                    style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)', color: '#000', boxShadow: '0 0 24px rgba(212,175,55,0.4)' }}>
                    <SiGumroad size={12} /> Gumroad Store
                  </a>
                  <a href="https://in.pinterest.com/AurelianCanvas/" target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase transition-all hover:-translate-y-1"
                    style={{ background: '#E60023', color: '#fff', boxShadow: '0 0 20px rgba(230,0,35,0.4)' }}>
                    <SiPinterest size={12} /> Pinterest
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="relative z-10 border-y border-white/8 py-6 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { val: '7', label: 'Original Artworks' },
              { val: '16K', label: 'Resolution' },
              { val: '$22', label: 'Per Digital Download' },
              { val: '∞', label: 'More Art Coming Soon' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[clamp(1.8rem,4vw,3rem)] font-display font-black leading-none mb-1" style={{ color: '#D4AF37' }}>{s.val}</div>
                <div className="text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7 THUMBNAIL GALLERY ── */}
        <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14">
              <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/8 mb-5">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400">The Collection</span>
              </div>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-black text-white leading-tight tracking-tight mb-3">
                7 Original <span style={{ WebkitTextStroke: '1px #D4AF37', color: 'transparent' }}>Masterpieces.</span>
              </h2>
              <p className="text-gray-400 text-base max-w-lg">Click any artwork to explore all frames, videos, before & after, colour palettes, and more.</p>
            </motion.div>

            {/* 7 thumbnail grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {artPieces.map((piece, i) => (
                <motion.div key={piece.id}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: i * 0.07 }}
                  className="group cursor-pointer relative rounded-2xl overflow-hidden border border-white/8 hover:border-white/25 transition-all duration-500"
                  style={{ boxShadow: '0 0 0 0 transparent' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px ${piece.glowColor}`}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0 transparent'}
                  onClick={() => setSelectedPiece(piece)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-black">
                    <img src={piece.thumbnail} alt={piece.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-400" />
                  {/* top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(90deg, transparent, ${piece.accentColor}, transparent)` }} />
                  {/* piece number */}
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-white/30 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
                    #{String(i + 1).padStart(2, '0')}
                  </div>
                  {/* bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-400 sm:opacity-0 sm:group-hover:opacity-100">
                    <p className="text-[9px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: piece.accentColor }}>{piece.style}</p>
                    <p className="text-white font-display font-bold text-[14px] sm:text-base leading-tight mb-1">{piece.title}</p>
                    <p className="text-white/50 text-[9px] sm:text-[10px] mb-2 sm:mb-3">{piece.images.length} images · {piece.videos.length} videos</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">Explore →</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Coming Soon card */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 7 * 0.07 }}
                className="relative rounded-2xl overflow-hidden border border-dashed border-amber-500/20 aspect-[3/4] flex flex-col items-center justify-center gap-4 bg-amber-500/3">
                <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center">
                  <span className="text-amber-400 text-xl font-bold">+</span>
                </div>
                <div className="text-center px-4">
                  <p className="text-amber-400 font-bold text-sm mb-1">More Coming Soon</p>
                  <p className="text-white/30 text-[11px] leading-relaxed">New masterpieces are continuously being added to the collection</p>
                </div>
                <a href="https://in.pinterest.com/AurelianCanvas/" target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-[#E60023]/70 hover:text-[#E60023] transition-colors">
                  <SiPinterest size={10} /> Follow on Pinterest
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ROLE / PROCESS ── */}
        <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-white/6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/8 mb-5">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400">The Role</span>
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display font-black text-white leading-tight mb-4">
                Founder & Creative <span style={{ WebkitTextStroke: '1px #D4AF37', color: 'transparent' }}>Technologist</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Not just a developer — a complete creative operator. I own the full pipeline from concept to cash, using AI tools that most people don't even know exist.
              </p>
            </motion.div>

            {/* AI Tools used */}
            <div className="mb-16">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/25 text-center mb-6">AI Tools & Platforms Used</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Google Flow', 'AI Studio', 'Anthropic Claude', 'Google Gemini', 'Meta AI', 'ChatGPT', 'Veo 3', 'Whisk AI', 'Grok', 'Midjourney', 'Gumroad', 'Pinterest'].map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-[11px] font-bold tracking-wide bg-white/3">{tool}</span>
                ))}
              </div>
            </div>

            {/* Process steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { num: '01', title: 'Prompt Engineering', desc: 'Multi-ratio prompts — 3:4 portrait, 16:9 landscape — with precise style, texture, palette, and mood directives for each piece.' },
                { num: '02', title: 'AI Generation', desc: 'High-fidelity 16K images using Midjourney, Gemini, and advanced diffusion models — iterating until museum-quality output.' },
                { num: '03', title: 'Frame Mockups', desc: '6 interior lifestyle mockups per piece: Small, Medium, Large, Landscape, Leaning — styled for ultra-luxury interiors.' },
                { num: '04', title: 'Pinterest Growth', desc: 'Keyword-optimized image and video pins. Before/After, Colour Palette, Macro — Pinterest used as a visual search engine.' },
                { num: '05', title: 'Gumroad Sales', desc: 'Digital product at $22 with instant download. Full conversion funnel from Pinterest discovery to Gumroad checkout.' },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="p-6 rounded-2xl border border-white/8 bg-[#0a0a10]/60 backdrop-blur-md hover:border-amber-500/30 transition-all group">
                  <div className="text-[2.5rem] font-display font-black mb-3 leading-none"
                    style={{ WebkitTextStroke: '1px rgba(212,175,55,0.3)', color: 'transparent' }}>{step.num}</div>
                  <h4 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">{step.title}</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PINTEREST LIVE ── */}
        <section className="relative z-10 py-20 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-white/6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/8 mb-5">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400">Live on Pinterest</span>
                </div>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-black text-white leading-tight mb-4">
                  Real Audience.<br /><span style={{ WebkitTextStroke: '1px #E60023', color: 'transparent' }}>Real Growth.</span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Monthly viewers growing organically through SEO-optimized pins — image, video, before/after, colour palette, macro detail. Every pin engineered to rank on Pinterest search.
                </p>
                <a href="https://in.pinterest.com/AurelianCanvas/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-[0.15em] uppercase transition-all hover:-translate-y-1"
                  style={{ background: '#E60023', color: '#fff', boxShadow: '0 0 20px rgba(230,0,35,0.35)' }}>
                  <SiPinterest size={13} /> View Live Pinterest Profile
                </a>
              </div>

              <div className="rounded-2xl border border-[#E60023]/20 bg-[#E60023]/4 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#E60023]/15">
                  <div className="flex items-center gap-2">
                    <SiPinterest size={14} className="text-[#E60023]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">AurelianCanvas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-bold tracking-wider uppercase">Live</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {/* Live stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { val: '7', label: 'Art Pieces' },
                      { val: '80+', label: 'Pins Created' },
                      { val: '16K', label: 'Resolution' },
                      { val: '↑', label: 'Growing Monthly' },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl border border-[#E60023]/15 bg-[#E60023]/5 p-3 text-center">
                        <div className="text-2xl font-display font-black text-white mb-0.5">{s.val}</div>
                        <div className="text-[9px] text-white/40 font-bold tracking-wider uppercase">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Explanation */}
                  <div className="rounded-xl bg-white/3 border border-white/6 p-3 text-center">
                    <p className="text-[11px] text-white/50 leading-relaxed">
                      Pinterest doesn't allow embedding monthly views externally.<br/>
                      <span className="text-white/30">Click below to see the live count on our profile.</span>
                    </p>
                  </div>
                  <a href="https://in.pinterest.com/AurelianCanvas/" target="_blank" rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm tracking-[0.15em] uppercase transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(230,0,35,0.4)]"
                    style={{ background: 'linear-gradient(135deg,#E60023,#c4001b)', color: '#fff' }}>
                    <SiPinterest size={15} /> View Live Profile & Monthly Views →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-white/6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-amber-500/20 p-10 sm:p-16 lg:p-20 text-center"
              style={{ background: 'linear-gradient(135deg,rgba(212,175,55,0.06) 0%,rgba(10,10,16,0.9) 50%,rgba(184,134,11,0.06) 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(212,175,55,0.08) 0%,transparent 70%)' }} />
              <div className="relative z-10">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-6">What This Demonstrates</p>
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-black text-white leading-tight mb-6">
                  Full-Lifecycle Thinking.<br /><span style={{ WebkitTextStroke: '1px #D4AF37', color: 'transparent' }}>Zero to Revenue.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  I don't just write code. I build complete products — from AI prompt engineering and 16K image generation to social media strategy and digital distribution. One person. Zero team. Full stack creative operator.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                  {[
                    { label: 'Full Lifecycle', sub: 'Concept → AI → Art → Frames → Sales' },
                    { label: 'UI/UX Sense', sub: 'Aesthetic design across every touchpoint' },
                    { label: 'Entrepreneurial', sub: 'Zero to brand — solo, from scratch' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl border border-amber-500/15 bg-amber-500/5">
                      <p className="font-bold text-white text-sm mb-1">{item.label}</p>
                      <p className="text-white/40 text-[11px]">{item.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://aureliancanvas.gumroad.com/" target="_blank" rel="noreferrer"
                    className="px-8 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-2 hover:-translate-y-1 transition-all"
                    style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)', color: '#000', boxShadow: '0 0 24px rgba(212,175,55,0.3)' }}>
                    <SiGumroad size={13} /> Visit Gumroad Store
                  </a>
                  <a href="https://in.pinterest.com/AurelianCanvas/" target="_blank" rel="noreferrer"
                    className="px-8 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-2 hover:-translate-y-1 transition-all"
                    style={{ background: '#E60023', color: '#fff', boxShadow: '0 0 20px rgba(230,0,35,0.3)' }}>
                    <SiPinterest size={13} /> Pinterest Profile
                  </a>
                  <a href="/" className="px-8 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-2 border border-amber-500/30 hover:-translate-y-1 transition-all"
                    style={{ color: '#D4AF37' }}>
                    <FaArrowLeft size={11} /> Back to Portfolio
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AurelianCanvas;