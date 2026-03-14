"use client";
import { motion } from "framer-motion";
import { Heart, Mail, Globe } from "lucide-react";
import Magnet from "./ui/Magnet";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-[var(--grid-line-strong)]">
      
      {/* 1. Header Row - More compact */}
      <div className="relative border-b border-[var(--grid-line-strong)] h-16 md:h-24">
        <header className="flex h-full items-stretch">
          {/* Logo Box */}
          <div className="w-20 md:w-32 border-r border-[var(--grid-line-strong)] flex items-center justify-center cursor-pointer hover:bg-white/[0.02] transition-colors overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12">
              <path d="M50 85 C30 70 10 50 10 30 C10 15 25 10 40 20 C45 25 50 30 50 30 C50 30 55 25 60 20 C75 10 90 15 90 30 C90 50 70 70 50 85" fill="#ff4b82" />
              <path d="M32 35 V42 C32 52 40 60 50 60 C60 60 68 52 68 42 V35 H62 V42 C62 48 56 54 50 54 C44 54 38 48 38 42 V35 H32" fill="white" />
            </svg>
          </div>
          
          {/* Main Nav */}
          <nav className="flex-1 flex justify-center items-center gap-6 md:gap-14 font-mono text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-white/90">
            <a href="#" className="hover:text-white transition-opacity hover:opacity-100 opacity-80">Why Magnets</a>
            <div className="w-1.5 h-1.5 bg-accent-green rounded-full shadow-[0_0_10px_rgba(0,177,103,1)]" />
            <a href="#" className="hover:text-white transition-opacity hover:opacity-100 opacity-80">Calculator</a>
            <div className="w-1.5 h-1.5 bg-accent-yellow rounded-full shadow-[0_0_10px_rgba(255,195,0,1)]" />
            <a href="#" className="hover:text-white transition-opacity hover:opacity-100 opacity-80">About Us</a>
          </nav>

          {/* Contact Box */}
          <div className="w-20 md:w-32 border-l border-[var(--grid-line-strong)] flex items-center justify-center cursor-pointer hover:bg-white/[0.02] transition-colors">
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-white/90" strokeWidth={1.5} />
          </div>
        </header>
      </div>

      {/* 2. Structured Accent Track */}
      <div className="relative h-10 md:h-12 border-b border-[var(--grid-line-strong)] flex">
        <div className="w-20 md:w-32 border-r border-[var(--grid-line-strong)]" />
        <div className="flex-1 flex justify-center items-center">
           <div className="w-24 md:w-32 h-full flex">
              <div className="accent-color-1 flex-1" />
              <div className="accent-color-2 flex-1" />
              <div className="accent-color-3 flex-1" />
              <div className="accent-color-4 flex-1" />
           </div>
        </div>
        <div className="w-20 md:w-32 border-l border-[var(--grid-line-strong)]" />
      </div>

      {/* 3. Hero Body Content */}
      <div className="py-24 md:py-32 flex flex-col items-center justify-center relative">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="border border-white/20 rounded-full pr-8 py-1.5 flex items-center gap-4 bg-[#0a0a0a]/60 backdrop-blur-xl mb-8 z-20 overflow-hidden"
        >
          <div className="w-14 h-14 bg-black border-r border-white/10 flex items-center justify-center relative group">
             {/* Rotating Nebula CD */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-900 via-indigo-900 to-black relative overflow-hidden flex items-center justify-center p-2 shadow-[0_0_15px_rgba(100,100,255,0.3)]"
             >
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-center" />
                <div className="w-full h-full rounded-full border border-white/20 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black border border-white/20" />
                </div>
             </motion.div>
          </div>
          <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] text-white/70 font-bold">Music Industry Merch</span>
        </motion.div>

        <h1 className="text-huge font-power text-center leading-[0.75] uppercase text-[var(--text-warm)] relative z-10 transition-transform duration-700 hover:scale-[1.02]">
          MAGNET<br />LOVER
        </h1>

        <div className="mt-12 flex flex-wrap justify-center gap-x-4 gap-y-2 z-20 max-w-xl">
           <span className="text-3xl md:text-5xl font-script text-white transform -rotate-3">Merch</span>
           <span className="text-2xl md:text-4xl font-serif italic text-accent-pink px-2">that</span>
           <span className="text-4xl md:text-6xl font-unique uppercase text-accent-yellow tracking-tighter">makes</span>
           <span className="text-2xl md:text-5xl font-script text-white transform rotate-2">more</span>
           <span className="text-4xl md:text-6xl font-power text-accent-cyan tracking-tight">SENSE</span>
        </div>

        {/* Magnets */}
        <Magnet src="/magnets/vinyl_v2.png" alt="Vinyl" initialX="15%" initialY="20%" size={250} rotation={-14} />
        <Magnet src="/magnets/heart_v2.png" alt="Heart" initialX="72%" initialY="15%" size={230} rotation={12} />
      </div>

      {/* 4. Separator Line */}
      <div className="w-full flex justify-center py-6">
          <div className="w-[1px] h-12 bg-white/30" />
      </div>

    </section>
  );
}
