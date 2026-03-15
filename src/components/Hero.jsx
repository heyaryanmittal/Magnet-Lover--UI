"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-[var(--grid-line-strong)]">
      
      {/* 1. Header Row - More compact */}
      <div className="relative border-b border-[var(--grid-line-strong)] h-16 md:h-24">
        <header className="flex h-full items-stretch">
          {/* Logo Box - Heart Removed */}
          <div className="w-20 md:w-32 border-r border-[var(--grid-line-strong)] flex items-center justify-center cursor-pointer hover:bg-white/[0.02] transition-colors overflow-hidden">
            <span className="font-power text-2xl tracking-tighter text-accent-pink">ML</span>
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

      {/* 2. Structured Accent Track - Animates expanding */}
      <div className="relative h-10 md:h-12 border-b border-[var(--grid-line-strong)] flex overflow-hidden">
        <div className="w-20 md:w-32 border-r border-[var(--grid-line-strong)]" />
        <div className="flex-1 flex justify-center items-center">
           <div className="w-24 md:w-32 h-full flex">
              {['pink', 'yellow', 'green', 'cyan'].map((color, idx) => (
                <motion.div 
                  key={color}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.4, delay: idx * 0.1, ease: "circOut" }}
                  viewport={{ once: true, amount: 0.15 }}
                  className={`bg-accent-${color} flex-1 origin-top`} 
                />
              ))}
           </div>
        </div>
        <div className="w-20 md:w-32 border-l border-[var(--grid-line-strong)]" />
      </div>

      {/* 3. Hero Body Content */}
      <div className="py-24 md:py-32 flex flex-col items-center justify-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-huge font-power text-center leading-[0.75] uppercase text-[var(--text-warm)] relative z-10 transition-transform duration-700 hover:scale-[1.02]"
        >
          MAGNET<br />LOVER
        </motion.h1>
      </div>

      {/* 4. Separator Line */}
      <div className="w-full flex justify-center py-6">
          <div className="w-[1px] h-12 bg-white/30" />
      </div>

    </section>
  );
}
