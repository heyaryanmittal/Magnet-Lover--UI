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
      <div>
        {accentStrip}
        <header className="max-w-7xl mx-auto border border-white/10 mt-0 flex items-stretch">
          <div className="p-6 border-r border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white/5">
            <div className="bg-accent-pink p-2 rounded-sm transition-transform group-hover:scale-110">
              <Heart className="w-6 h-6 text-black fill-current" />
            </div>
          </div>
          
          <nav className="flex-1 flex justify-center items-center gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
            <a href="#" className="hover:text-white transition-colors">Why Magnets</a>
            <div className="w-1 h-1 bg-accent-green rounded-full pulse-accent" />
            <a href="#" className="text-white">Calculator</a>
            <div className="w-1 h-1 bg-accent-yellow rounded-full pulse-accent" />
            <a href="#" className="hover:text-white transition-colors">About Us</a>
          </nav>

          <div className="p-6 border-l border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">
            <Mail className="w-6 h-6" />
          </div>
        </header>
        {accentStrip}
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
