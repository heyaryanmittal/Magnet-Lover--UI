"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUp } from "lucide-react";

const TapeReel = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center opacity-40"
  >
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      {/* Outer Rim */}
      <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="100" cy="100" r="92" stroke="white" strokeWidth="2" fill="none" opacity="0.1" />
      
      {/* Tape texture circles */}
      {[85, 80, 75, 70, 65, 60, 55].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r} stroke="white" strokeWidth="0.2" fill="none" opacity={0.05 + (i * 0.02)} />
      ))}

      {/* The 3 characteristic "R" shaped holes */}
      {[0, 120, 240].map((rotate) => (
        <g key={rotate} transform={`rotate(${rotate} 100 100)`}>
          <path
            d="M100 45 A 55 55 0 0 1 145 85 L 125 90 A 30 30 0 0 0 100 65 Z"
            fill="white"
            opacity="0.15"
          />
          <path
            d="M100 45 A 55 55 0 0 1 145 85 L 125 90 A 30 30 0 0 0 100 65 Z"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
        </g>
      ))}
      
      {/* Center cap */}
      <circle cx="100" cy="100" r="12" fill="#000" stroke="white" strokeWidth="1" opacity="0.8" />
      <circle cx="100" cy="100" r="4" fill="white" opacity="0.5" />
    </svg>
  </motion.div>
);

const Waveform = () => {
  const [heights, setHeights] = React.useState([]);
  
  React.useEffect(() => {
    setHeights([...Array(18)].map(() => ({
      h1: Math.random() * 20 + 10,
      h2: Math.random() * 60 + 30,
      h3: Math.random() * 20 + 10
    })));
  }, []);

  return (
    <div className="flex items-center justify-center gap-[2px] h-12">
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            height: heights[i] ? [
              heights[i].h1 + "%", 
              heights[i].h2 + "%", 
              heights[i].h3 + "%"
            ] : ["30%", "30%", "30%"]
          }}
          transition={{
            duration: 1 + (i % 5) * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[1.5px] bg-white opacity-60 rounded-full"
        />
      ))}
    </div>
  );
};

const ColorStrip = ({ className = "" }) => (
  <div className={`flex w-12 h-full ${className}`}>
    <div className="flex-1 bg-accent-pink" />
    <div className="flex-1 bg-accent-yellow" />
    <div className="flex-1 bg-accent-green" />
    <div className="flex-1 bg-accent-cyan" />
  </div>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0d0a0f] border-t border-[var(--grid-line-strong)] mt-20 overflow-hidden">
      
      {/* 1. Converging Accent Lines at Top - Animates drawing in */}
      <div className="relative h-20 md:h-32 w-full flex justify-center overflow-hidden">
        <div className="relative w-0 h-full"> 
          {/* Pink/Yellow (Left Entry) */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: "circOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="absolute top-0 right-[12px] w-[50vw] h-[84px] md:h-[116px] border-t-[12px] border-r-[12px] border-accent-pink rounded-tr-[36px] origin-right" 
          />
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "circOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="absolute top-0 right-[0px] w-[50vw] h-[72px] md:h-[104px] border-t-[12px] border-r-[12px] border-accent-yellow rounded-tr-[24px] origin-right" 
          />
          
          {/* Green/Cyan (Right Entry) */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "circOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="absolute top-0 left-[0px] w-[50vw] h-[72px] md:h-[104px] border-t-[12px] border-l-[12px] border-accent-green rounded-tl-[24px] origin-left" 
          />
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: "circOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="absolute top-0 left-[12px] w-[50vw] h-[84px] md:h-[116px] border-t-[12px] border-l-[12px] border-accent-cyan rounded-tl-[36px] origin-left" 
          />
        </div>
      </div>

      {/* 2. Brand Identity Column */}
      <div className="flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-[12vw] md:text-[10vw] font-power uppercase text-center leading-[0.8] tracking-tighter text-[#F5F5F3] mb-12"
        >
          MAGNET LOVER
        </motion.h2>

        <div className="w-full border-y border-[var(--grid-line-strong)] py-6 flex items-center justify-center gap-3 group cursor-pointer hover:bg-white/[0.02] transition-colors">
          <Instagram className="w-4 h-4 text-accent-yellow" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/80 font-bold">Instagram</span>
        </div>

        {/* Central vertical strip leading to main box */}
        <div className="h-20 md:h-28 overflow-hidden">
           <motion.div
             initial={{ scaleY: 0 }}
             whileInView={{ scaleY: 1 }}
             transition={{ duration: 1.4 }}
             viewport={{ once: true, amount: 0.15 }}
             className="h-full origin-top"
           >
             <ColorStrip />
           </motion.div>
        </div>
      </div>

      {/* 3. Main Footer Grid: Reel | Box | Reel */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 border-y border-[var(--grid-line-strong)]">
         {/* Left Reel Column */}
         <div className="border-b md:border-b-0 md:border-r border-[var(--grid-line-strong)] flex items-center justify-center p-12 bg-[#0a070c]">
            <TapeReel />
         </div>

         {/* Center Box Column */}
         <div className="flex items-center justify-center p-12 bg-[#0a070c] relative">
            <div className="w-full max-w-[320px] border border-white/20 p-px">
               <div className="border border-white/10 p-8 flex flex-col items-center gap-8 bg-black/40">
                  <Waveform />
                  <div className="w-full h-px bg-white/10" />
                  <button 
                    onClick={scrollToTop}
                    className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-white/90 hover:text-white transition-colors"
                  >
                    Back to Top
                  </button>
               </div>
            </div>
         </div>

         {/* Right Reel Column */}
         <div className="border-t md:border-t-0 md:border-l border-[var(--grid-line-strong)] flex items-center justify-center p-12 bg-[#0a070c]">
            <TapeReel />
         </div>
      </div>

      {/* 4. Copyright Row */}
      <div className="w-full border-b border-[var(--grid-line-strong)] py-6 bg-[#0a070c]">
         <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">
           © Copyright 2026 Magnet Lover. All rights reserved
         </p>
      </div>

      {/* 5. Bottom Logo Row */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 h-20 md:h-24 px-6 md:px-12 items-center">
         {/* Left: ML Logo */}
         <div className="flex items-center gap-3">
            <span className="font-power text-2xl tracking-tighter text-accent-pink pr-2 border-r border-white/20">ML</span>
            <span className="font-power text-lg uppercase tracking-tight text-white/90">Magnet Lover</span>
         </div>

         {/* Center: Continued Strip */}
         <div className="h-full flex justify-center">
            <ColorStrip />
         </div>

         {/* Right: Credits */}
         <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-[7px] uppercase tracking-widest text-white/30">Website by</span>
            <div className="flex items-center gap-1">
               <span className="font-mono text-[10px] font-black uppercase text-white/90">W</span>
               <span className="text-accent-yellow text-xs">*</span>
               <span className="font-mono text-[10px] font-black uppercase text-white/90">ndermake</span>
            </div>
         </div>
      </div>

    </footer>
  );
}
