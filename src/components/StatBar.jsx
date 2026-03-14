"use client";
import React from "react";
import { Globe } from "lucide-react";

// Top Left Interlocking Rings Icon
const ThreeCircles = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7 opacity-40" stroke="currentColor" strokeWidth="3" fill="none">
    <circle cx="35" cy="50" r="16" />
    <circle cx="50" cy="50" r="16" />
    <circle cx="65" cy="50" r="16" />
  </svg>
);

const PencilIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 opacity-20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="15" y="25" width="45" height="45" strokeDasharray="3 3" />
    <circle cx="37" cy="47" r="5" fill="currentColor" opacity="0.3" />
    <path d="M45 75 L95 25 L85 15 L35 65 L25 75 Z" strokeWidth="2" />
    <path d="M85 15 L90 20" strokeWidth="1" />
    <path d="M40 60 L45 65" strokeWidth="1" opacity="0.5" />
    <path d="M25 75 L35 75 L35 65" strokeWidth="2" />
  </svg>
);

const BadgeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 opacity-20" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Ribbon */}
    <path d="M50 45 L95 45 L95 65 L50 65" opacity="0.4" />
    <path d="M50 35 L90 35 L90 55 L50 55" opacity="0.4" />
    {/* Badge */}
    <path d="M50 15 L62 22 L75 25 L75 42 L68 55 L50 65 L32 55 L25 42 L25 25 L38 22 Z" strokeWidth="2" />
    <circle cx="50" cy="40" r="14" opacity="0.3" />
    {/* Inner Crown */}
    <path d="M40 45 L43 32 L50 42 L57 32 L60 45 Z" strokeWidth="1.5" />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 opacity-20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="10" y="30" width="80" height="40" strokeWidth="2" />
    <path d="M10 40 H90 M10 50 H90 M10 60 H90" opacity="0.5" />
    <rect x="10" y="30" width="35" height="20" fill="currentColor" opacity="0.05" />
    {/* Stars */}
    <circle cx="15" cy="35" r="0.8" fill="currentColor" />
    <circle cx="21" cy="35" r="0.8" fill="currentColor" />
    <circle cx="27" cy="35" r="0.8" fill="currentColor" />
    <circle cx="33" cy="35" r="0.8" fill="currentColor" />
    <circle cx="39" cy="35" r="0.8" fill="currentColor" />

    <circle cx="18" cy="40" r="0.8" fill="currentColor" />
    <circle cx="24" cy="40" r="0.8" fill="currentColor" />
    <circle cx="30" cy="40" r="0.8" fill="currentColor" />
    <circle cx="36" cy="40" r="0.8" fill="currentColor" />

    <circle cx="15" cy="45" r="0.8" fill="currentColor" />
    <circle cx="21" cy="45" r="0.8" fill="currentColor" />
    <circle cx="27" cy="45" r="0.8" fill="currentColor" />
    <circle cx="33" cy="45" r="0.8" fill="currentColor" />
    <circle cx="39" cy="45" r="0.8" fill="currentColor" />
  </svg>
);

export default function StatBar() {
  const stats = [
    { 
      label: "BESPOKE DESIGN", 
      value: "CUSTOM\nSERVICES", 
      icon: PencilIcon,
    },
    { 
      label: "PREMIUM QUALITY", 
      value: "PREMIUM\n& DURABLE", 
      icon: BadgeIcon,
    },
    { 
      label: "PROUDLY MADE IN THE", 
      value: "INDIA", 
      icon: FlagIcon,
    }
  ];

  const [waveHeights, setWaveHeights] = React.useState([]);

  React.useEffect(() => {
     setWaveHeights([...Array(24)].map(() => Math.random() * 60 + 20));
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center bg-transparent mt-8">
      
      {/* 1. Marquee Row aligned perfectly with hero headers and 3-column grid */}
      <div className="w-full relative border-y border-[var(--grid-line-strong)] h-14 md:h-16 grid grid-cols-1 md:grid-cols-3 bg-[#0d0a0f]">
         
         {/* Left Column */}
         <div className="h-full border-b md:border-b-0 md:border-r border-[var(--grid-line-strong)] flex items-center justify-start">
            <div className="w-16 md:w-20 border-r border-[var(--grid-line-strong)] h-full flex items-center justify-center">
               <ThreeCircles />
            </div>
         </div>
         
         {/* Center Column - Marquee */}
         <div className="h-full flex items-center overflow-hidden font-mono text-[9px] uppercase tracking-[0.5em] text-white/70 font-bold z-10">
            <div className="flex whitespace-nowrap animate-marquee items-center opacity-80">
               {[...Array(15)].map((_, i) => (
                 <span key={i} className="mx-8 flex items-center gap-4">
                   SCROLL <span className="text-accent-pink">//</span> 
                   SCROLL <span className="text-accent-yellow">//</span> 
                   SCROLL <span className="text-accent-green">//</span> 
                   SCROLL <span className="text-accent-cyan">//</span> 
                 </span>
               ))}
            </div>
         </div>
         
         {/* Right Column */}
         <div className="h-full border-t md:border-t-0 md:border-l border-[var(--grid-line-strong)] flex items-center justify-end">
            <div className="w-16 md:w-20 border-l border-[var(--grid-line-strong)] h-full flex items-center justify-center">
               <Globe className="w-5 h-5 opacity-40" strokeWidth={1} />
            </div>
         </div>
      </div>

      {/* 2. Top Vertical Color Dropper */}
      <div className="relative h-20 md:h-32 w-full flex justify-center border-b border-[var(--grid-line-strong)]">
         <div className="w-[48px] h-full flex z-10">
            <div className="flex-1 bg-accent-pink" />
            <div className="flex-1 bg-accent-yellow" />
            <div className="flex-1 bg-accent-green" />
            <div className="flex-1 bg-accent-cyan" />
         </div>
      </div>

      {/* 3. Structural Information Cards (Animated Marquee) */}
      <div className="w-full border-b border-[var(--grid-line-strong)] relative z-20 overflow-hidden bg-transparent">
        
        {/* The Marquee */}
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: '25s' }}>
          {[...Array(10)].map((_, arrayIdx) => (
            <div key={arrayIdx} className="flex">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="h-48 md:h-64 w-[100vw] md:w-[33.333333vw] p-8 lg:p-12 border-r border-[var(--grid-line-strong)] flex flex-col justify-center shrink-0 bg-[#0a070c]"
                >
                  <div className="flex gap-6 items-center justify-center w-full whitespace-normal">
                     <div className="flex-shrink-0">
                        <stat.icon />
                     </div>
                     <div className="flex flex-col">
                       <p className="text-[10px] md:text-xs font-mono tracking-[0.25em] font-bold uppercase text-white/70 mb-2">{stat.label}</p>
                       <h4 className="text-3xl md:text-5xl font-power uppercase leading-[0.85] whitespace-pre-line text-[#F5F5F3]">
                         {stat.value}
                       </h4>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Splitting Concentric Accent Lines */}
      {/* 4 colors split nicely: Pink & Yellow curve left, Green & Cyan curve right */}
      <div className="relative h-24 md:h-40 w-full flex justify-center border-b border-[var(--grid-line-strong)] overflow-hidden">
        <div className="relative w-0 h-full"> 
          {/* Pink (Outer Left) */}
          <div className="absolute top-0 right-[12px] w-[50vw] h-[84px] md:h-[116px] border-b-[12px] border-r-[12px] border-accent-pink rounded-br-[36px]" />
          {/* Yellow (Inner Left) */}
          <div className="absolute top-0 right-[0px] w-[50vw] h-[72px] md:h-[104px] border-b-[12px] border-r-[12px] border-accent-yellow rounded-br-[24px]" />
          
          {/* Green (Inner Right) */}
          <div className="absolute top-0 left-[0px] w-[50vw] h-[72px] md:h-[104px] border-b-[12px] border-l-[12px] border-accent-green rounded-bl-[24px]" />
          {/* Cyan (Outer Right) */}
          <div className="absolute top-0 left-[12px] w-[50vw] h-[84px] md:h-[116px] border-b-[12px] border-l-[12px] border-accent-cyan rounded-bl-[36px]" />
        </div>
      </div>

      {/* 5. Bottom "EST." Audio Wave Footer Bar */}
      <div className="w-full h-16 flex items-center justify-between border-b border-[var(--grid-line-strong)] px-6 md:px-12">
         {/* ML // EST. */}
         <div className="font-mono text-[8px] md:text-[9.5px] font-bold uppercase tracking-[0.3em] flex gap-3 text-white/50 w-1/3">
            <span className="text-white">ML</span> <span className="text-accent-yellow"> // </span> <span>EST. MMXXV</span>
         </div>
         
         {/* Waveform Box (Centered perfectly) */}
         <div className="w-[140px] md:w-[220px] border-x border-[var(--grid-line-strong)] h-full flex items-center justify-center gap-[4px] py-4 opacity-70">
            {[...Array(24)].map((_, i) => (
               <div 
                 key={i} 
                 className="w-[1px] bg-white rounded-full bg-white/70 transition-all duration-500" 
                 style={{ height: waveHeights[i] ? `${waveHeights[i]}%` : '40%' }} 
               />
            ))}
         </div>
         
         {/* MUSIC // MEMORIES // MERCH */}
         <div className="font-mono text-[8px] md:text-[9.5px] font-bold uppercase tracking-[0.3em] flex gap-3 text-white/50 w-1/3 justify-end">
            <span className="text-white">MUSIC</span> <span className="text-accent-yellow"> // </span> 
            <span className="text-white hidden lg:inline">MEMORIES</span> <span className="text-accent-yellow hidden lg:inline"> // </span> 
            <span className="text-white">MERCH</span>
         </div>
      </div>

    </div>
  );
}
