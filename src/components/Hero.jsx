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
            <a href="#why-magnets" className="hover:text-white transition-opacity hover:opacity-100 opacity-80">Why Magnets</a>
            <div className="w-1.5 h-1.5 bg-accent-green rounded-full shadow-[0_0_10px_rgba(0,177,103,1)]" />
            <a href="#calculator" className="hover:text-white transition-opacity hover:opacity-100 opacity-80">Calculator</a>
            <div className="w-1.5 h-1.5 bg-accent-yellow rounded-full shadow-[0_0_10px_rgba(255,195,0,1)]" />
            <a href="#about-us" className="hover:text-white transition-opacity hover:opacity-100 opacity-80">About Us</a>
          </nav>

          {/* Contact Box */}
          <a href="#contact" className="w-20 md:w-32 border-l border-[var(--grid-line-strong)] flex items-center justify-center cursor-pointer hover:bg-white/[0.02] transition-colors">
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-white/90" strokeWidth={1.5} />
          </a>
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
      <div className="pt-4 md:pt-6 pb-12 flex flex-col items-center justify-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true, amount: 0.15 }}
          className="border border-white/20 rounded-full pr-8 py-1.5 flex items-center gap-4 bg-[#0a0a0a]/60 backdrop-blur-xl mb-6 z-20 overflow-hidden"
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

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-huge font-power text-center leading-[0.75] uppercase text-[var(--text-warm)] relative z-10"
        >
          MAGNET<br />LOVER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-6 font-mono text-xs md:text-sm uppercase tracking-[0.6em] text-white/60 font-medium"
        >
          MERCH THAT MAKES MORE SENSE
        </motion.p>
      </div>

      {/* 4. Separator Line */}
      <div className="w-full flex justify-center py-6">
          <div className="w-[1px] h-12 bg-white/30" />
      </div>

    </section>
  );
}
