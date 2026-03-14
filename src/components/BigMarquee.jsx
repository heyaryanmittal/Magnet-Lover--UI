"use client";
import React from "react";

export default function BigMarquee() {
  const items = [
    { text: "MEMORIES", color: "text-[#EDE8E0]" },
    { text: "//", color: "text-accent-green" },
    { text: "MERCH", color: "text-[#EDE8E0]" },
    { text: "//", color: "text-accent-cyan" },
    { text: "MUSIC", color: "text-[#EDE8E0]" },
    { text: "//", color: "text-accent-yellow" },
  ];

  return (
    <section className="relative w-full bg-[#120D14] py-24 flex items-center justify-center overflow-hidden">
      
      {/* Container Box */}
      <div className="relative w-full max-w-[1300px] border border-white/10 mx-4 lg:mx-0 py-10 lg:py-14 overflow-hidden bg-black/20">
        
        {/* "MAGNET LOVER" tag overlapping border */}
        <div className="absolute -top-[13px] left-10 z-30">
          <div className="border border-white/20 px-3 py-1 bg-[#120D14]">
             <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#EDE8E0]">
               MAGNET LOVER
             </span>
          </div>
        </div>

        {/* Marquee movement container */}
        <div className="flex whitespace-nowrap will-change-transform animate-marquee-slow">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, idx) => (
                <span 
                  key={idx} 
                  className={`text-[80px] md:text-[120px] lg:text-[140px] leading-none font-power uppercase tracking-[-0.03em] mx-6 md:mx-10 selection:bg-transparent ${item.color}`}
                >
                  {item.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Grid background lines for continuity */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-5">
         <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
         }} />
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
