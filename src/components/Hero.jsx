"use client";
import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import Magnet from "./ui/Magnet";

export default function Hero() {
  const accentStrip = (
    <div className="accent-strip flex justify-center">
      <div className="w-48 h-full flex">
          <div className="accent-color-1 flex-1" />
          <div className="accent-color-2 flex-1" />
          <div className="accent-color-3 flex-1" />
          <div className="accent-color-4 flex-1" />
      </div>
    </div>
  );

  return (
    <section className="relative w-full border-b border-white/10">
      
      {/* Top Header Layout */}
      <div className="relative border-b border-white/10">
        <header className="w-full flex items-stretch h-20 md:h-24">
          {/* Logo Box */}
          <div className="w-20 md:w-32 border-r border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white/[0.03] transition-colors">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,75,130,0.5)]">
                <path d="M50 85 C30 70 10 50 10 30 C10 15 25 10 40 20 C45 25 50 30 50 30 C50 30 55 25 60 20 C75 10 90 15 90 30 C90 50 70 70 50 85" fill="#ff4b82" />
                <path d="M35 35 V45 C35 53 42 60 50 60 C58 60 65 53 65 45 V35 H58 V45 C58 49 54 53 50 53 C46 53 42 49 42 45 V35 H35" fill="#F5F5F3" />
              </svg>
            </div>
          </div>
          
          {/* Main Nav */}
          <nav className="flex-1 flex justify-center items-center gap-6 md:gap-12 font-mono text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#F5F5F3]/80">
            <a href="#" className="hover:text-white transition-colors">Why Magnets</a>
            <div className="w-1 h-1 bg-accent-green rounded-full shadow-[0_0_8px_var(--accent-green)]" />
            <a href="#" className="text-white hover:text-white transition-colors">Calculator</a>
            <div className="w-1 h-1 bg-accent-yellow rounded-full shadow-[0_0_8px_var(--accent-yellow)]" />
            <a href="#" className="hover:text-white transition-colors">About Us</a>
          </nav>

          {/* Contact Box */}
          <div className="w-20 md:w-32 border-l border-white/10 flex items-center justify-center hover:bg-white/[0.03] transition-colors cursor-pointer group">
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 text-[#F5F5F3]/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M3 8L12 13L21 8V17H3V8Z" />
              <rect x="3" y="5" width="18" height="14" rx="1" />
            </svg>
          </div>

          {/* Bottom Centered Accent Strip */}
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-32 md:w-48 h-2 md:h-3 flex">
            <div className="accent-color-1 flex-1 h-full" />
            <div className="accent-color-2 flex-1 h-full" />
            <div className="accent-color-3 flex-1 h-full" />
            <div className="accent-color-4 flex-1 h-full" />
          </div>
        </header>
      </div>

      {/* Hero Body */}
      <div className="py-40 flex flex-col items-center justify-center relative bg-grid-internal bg-fixed">
        
        {/* Badge Center */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="border border-white/20 rounded-full px-6 py-2 flex items-center gap-3 backdrop-blur-md mb-12 bg-black/40 z-20"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-accent-blue to-accent-pink animate-spin-slow" />
          <span className="text-[10px] font-mono uppercase tracking-[0.34em]">Music Industry Merch</span>
        </motion.div>

        <h1 className="text-huge font-power text-center leading-[0.75] uppercase relative z-10 select-none">
          MAGNET<br />LOVER
        </h1>

        <p className="mt-12 text-[10px] font-mono uppercase tracking-[0.6em] text-white/40 z-20">
          Merch that makes more sense
        </p>

        {/* Hero Magnets - According to Screenshot */}
        <Magnet 
          src="/magnets/vinyl_v2.png" 
          alt="Purple Record" 
          initialX="10%" 
          initialY="20%" 
          size={260} 
          rotation={-15} 
        />
        <Magnet 
          src="/magnets/heart_v2.png" 
          alt="White Square ML" 
          initialX="72%" 
          initialY="15%" 
          size={240} 
          rotation={15} 
        />
        <Magnet 
          src="/magnets/patch_v2.png" 
          alt="World Tour" 
          initialX="5%" 
          initialY="65%" 
          size={200} 
          rotation={10} 
        />
        <Magnet 
          src="/magnets/patch_v2.png" 
          alt="Bass/Tape" 
          initialX="75%" 
          initialY="80%" 
          size={240} 
          rotation={-5} 
        />
      </div>

      {/* Section Separator seen in screenshot */}
      <div className="w-full flex justify-center py-12">
          <div className="w-32 h-16 border-x border-white/10 flex items-center justify-center">
             <div className="flex flex-col gap-1 w-2">
                <div className="w-1 h-1 bg-white/20" />
                <div className="w-1 h-1 bg-white/20" />
                <div className="w-1 h-1 bg-white/20" />
             </div>
          </div>
      </div>

    </section>
  );
}
