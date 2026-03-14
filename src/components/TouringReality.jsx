"use client";
import { motion } from "framer-motion";

export default function TouringReality() {
  return (
    <section className="relative w-full bg-[#120D14] border-b border-[var(--grid-line-strong)]">
      
      {/* Central Vertical Splitting Lines (3 lines creating 4 columns) */}
      <div className="absolute w-[1px] h-full left-1/4 top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />
      <div className="absolute w-[1px] h-full left-1/2 top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />
      <div className="absolute w-[1px] h-full left-[75%] top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />

      {/* Main Content Area */}
      <div className="w-full relative z-10">
        
        {/* 1. The Pipes Section */}
        <div className="w-full h-[160px] md:h-[200px] relative border-b border-[var(--grid-line-strong)] overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[8000px] h-full">
               <svg 
                 width="8000" 
                 height="100%" 
                 viewBox="0 0 8000 200" 
                 preserveAspectRatio="xMidYMax slice"
               >
                  <g transform="translate(4000, 0)">
                   <path d="M -4000 56 L -40 56 A 16 16 0 0 1 -24 72 L -24 300" stroke="var(--accent-pink)" strokeWidth="16" fill="none" />
                   <path d="M -4000 40 L -40 40 A 32 32 0 0 1 -8 72 L -8 300" stroke="var(--accent-yellow)" strokeWidth="16" fill="none" />
                   
                   <path d="M 4000 40 L 40 40 A 32 32 0 0 0 8 72 L 8 300" stroke="var(--accent-green)" strokeWidth="16" fill="none" />
                   <path d="M 4000 56 L 40 56 A 16 16 0 0 0 24 72 L 24 300" stroke="var(--accent-cyan)" strokeWidth="16" fill="none" />
                  </g>
               </svg>
           </div>
        </div>

        {/* 2. BPM Bar */}
        <div className="w-full py-5 border-b border-[var(--grid-line-strong)] flex justify-center items-center bg-transparent backdrop-blur-sm z-20 relative">
            <span className="font-black text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#F5F5F3]" style={{ fontFamily: "Arial Black" }}>
              70 — 160 <span className="text-accent-yellow italic mx-2 font-black">//</span> BPM
            </span>
        </div>

        {/* 3. Text Section */}
        <div className="w-full flex justify-center pt-24 pb-32 px-4 relative">
           
           <div className="flex flex-col items-center max-w-4xl w-full">
              {/* THE TOURING REALITY Box */}
              <div className="border border-white/20 px-10 py-3 bg-[#120D14]/50 backdrop-blur-sm mb-20 relative">
                 <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#e8dbcc]/80">
                   THE TOURING REALITY
                 </p>
              </div>

              {/* Headings and paragraphs */}
              <h2 className="text-4xl md:text-5xl lg:text-[68px] font-black mb-16 text-center leading-[1.05] tracking-[-0.03em] text-[#F5F5F3]" style={{ fontFamily: "Arial, sans-serif" }}>
                Touring artists have limited space.
              </h2>
              
              <p className="text-xl lg:text-[26px] text-[#e8dbcc]/90 text-center leading-[1.5] mb-12 max-w-[850px]" style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.01em", fontWeight: 300 }}>
                Merch needs to compete with production gear and wardrobe, fitting into flight cases, bus bays and luggage which can get expensive.
              </p>

              <p className="text-xl lg:text-[26px] text-[#e8dbcc]/90 text-center leading-[1.5] max-w-[850px]" style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.01em", fontWeight: 300 }}>
                Because magnets take up almost no space, they deliver far greater profit density than standard merch.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
