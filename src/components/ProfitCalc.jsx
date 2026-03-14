"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DollarIcon = () => (
  <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center opacity-40">
    <span className="text-[10px] font-bold">$</span>
  </div>
);

const ItemOutline = ({ type }) => {
  if (type === "T-Shirt") return (
     <svg viewBox="0 0 100 120" className="w-full h-full" fill="none" stroke="#e8dbcc" strokeWidth="1.2">
        <path d="M25 40 L35 32 L42 32 C50 42 58 32 65 32 L75 32 L85 40 L80 65 L72 67 L68 55 L68 110 L32 110 L32 55 L28 67 L20 65 Z" />
        <path d="M35 32 Q50 42 65 32" opacity="0.4" />
     </svg>
  );
  if (type === "Sweatshirt") return (
     <svg viewBox="0 0 100 120" className="w-full h-full" fill="none" stroke="#e8dbcc" strokeWidth="1.2">
        <path d="M25 45 L35 35 L42 35 C50 45 58 35 65 35 L75 35 L85 45 L80 95 L72 97 L70 55 L68 110 L32 110 L30 55 L28 97 L20 95 Z" />
        <path d="M35 35 Q50 45 65 35" opacity="0.4" />
        <path d="M70 55 L80 95 M30 55 L20 95" opacity="0.4" />
     </svg>
  );
  // Hoodie
  return (
     <svg viewBox="0 0 100 120" className="w-full h-full" fill="none" stroke="#e8dbcc" strokeWidth="1.2">
        <path d="M25 50 L35 40 L42 40 C50 50 58 40 65 40 L75 40 L85 50 L80 100 L72 102 L70 60 L68 110 L32 110 L30 60 L28 102 L20 100 Z" />
        <path d="M35 40 Q50 50 65 40" opacity="0.4" />
        <path d="M35 40 C35 20, 45 15, 50 15 C55 15, 65 20, 65 40" />
        <path d="M42 40 L50 25 L58 40" opacity="0.6" />
        <path d="M40 90 L60 90 L60 105 L40 105 Z" opacity="0.4" />
     </svg>
  );
};

const MagnetGrid = ({ count }) => {
  const cols = count > 500 ? 24 : count > 200 ? 16 : 12;
  
  return (
    <div 
      className="grid gap-[2px] opacity-40 px-4" 
      style={{ 
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        width: count > 300 ? '280px' : '200px'
      }}
    >
      {[...Array(count)].map((_, i) => (
        <div key={i} className="aspect-square border-[0.5px] border-[#e8dbcc]" />
      ))}
    </div>
  );
};

export default function ProfitCalc() {
  const [activeTab, setActiveTab] = useState("T-Shirt");

  const data = {
    "T-Shirt": { quantity: 1, profit: "28", magnetQuantity: 167, magnetProfit: "1,503", increase: "+5,268%", color: "accent-pink" },
    "Sweatshirt": { quantity: 1, profit: "39", magnetQuantity: 333, magnetProfit: "2,997", increase: "+7,585%", color: "accent-yellow" },
    "Hoodie": { quantity: 1, profit: "52", magnetQuantity: 647, magnetProfit: "5,823", increase: "+11,104%", color: "accent-green" }
  };

  const current = data[activeTab];

  return (
    <section className="relative w-full bg-[#120D14] border-b border-[var(--grid-line-strong)] py-20 overflow-hidden">
      
      {/* 1. Module ID Row */}
      <div className="flex items-center gap-8 px-12 mb-12">
         <div className="flex gap-4">
            <ExpandIcon />
            <DollarIcon />
         </div>
         <span className="font-mono text-xs tracking-[0.4em] text-white/40 font-bold uppercase">ML — 003</span>
      </div>

      {/* 2. Main Heading and Subtitle - Staggered Reveal */}
      <div className="px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
         <motion.h2 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true, amount: 0.15 }}
           className="text-6xl md:text-[100px] font-power leading-[0.85] tracking-tight uppercase text-[#F5F5F3]"
         >
           PROFIT<br />DENSITY<br />CALCULATOR
         </motion.h2>

         <div className="max-w-[420px] pb-4">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.15 }}
              className="font-script text-white text-[42px] block mb-2 origin-left"
            >
               Space vs. Profit
            </motion.span>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.15 }}
              className="text-xl md:text-2xl text-white leading-relaxed"
            >
               <span className="font-serif italic text-accent-green">See how much</span> more you could be <span className="font-unique uppercase text-accent-pink neon-pink">making</span> compared to traditional merch items.<span className="text-accent-yellow font-script text-3xl">*</span>
            </motion.p>
         </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[var(--grid-line-strong)]">
         {Object.keys(data).map((item) => (
           <button
             key={item}
             onClick={() => setActiveTab(item)}
             className={`relative p-10 md:p-14 flex items-center justify-center gap-6 transition-all border-b md:border-b-0 md:border-r border-[var(--grid-line-strong)] group ${activeTab === item ? 'bg-[#1c141a]/30' : 'bg-transparent hover:bg-white/[0.01]'}`}
           >
             {activeTab === item && (
               <div className="absolute top-0 left-0 w-full h-1.5 flex">
                  <div className="flex-1 bg-accent-pink" />
                  <div className="flex-1 bg-accent-yellow" />
                  <div className="flex-1 bg-accent-green" />
                  <div className="flex-1 bg-accent-cyan" />
               </div>
             )}
             <ItemOutline type={item} />
             <span className={`font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] ${activeTab === item ? 'text-white' : 'text-white/30'}`}>
                Per {item}
             </span>
           </button>
         ))}
      </div>

      {/* 4. Comparison Body */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
         
         {/* Vertical Split Line */}
         <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[1px] border-l border-dashed border-white/10 z-0" />
         <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#120D14] items-center justify-center z-10 font-mono text-[10px] font-black uppercase text-white/40">
            vs
         </div>

         {/* Left: Traditional Item */}
         <div className="p-12 md:p-20 flex flex-col items-center justify-between border-b md:border-b-0 border-[var(--grid-line-strong)]">
            <h3 className="text-5xl md:text-7xl font-power italic text-[#F5F5F3] opacity-90 mb-16">{activeTab}</h3>
            
            <div className="w-full max-w-[280px] h-64 flex items-center justify-center mb-16">
               <AnimatePresence mode="wait">
                 <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
                    <ItemOutline type={activeTab} />
                 </motion.div>
               </AnimatePresence>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 max-w-[440px]">
               <div className="border border-white/10 bg-black/20">
                  <div className="px-4 py-2 border-b border-white/10 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-white/40 bg-white/[0.02]">Quantity</div>
                  <div className="p-8 text-center text-5xl font-mono text-[#F5F5F3]">{current.quantity}</div>
               </div>
               <div className="border border-white/10 bg-black/20">
                  <div className="px-4 py-2 border-b border-white/10 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-white/40 bg-white/[0.02]">Profit</div>
                  <div className="p-8 text-center text-5xl font-mono text-accent-pink tracking-tighter">${current.profit}</div>
               </div>
            </div>
         </div>

         {/* Right: Magnets */}
         <div className="p-12 md:p-20 flex flex-col items-center justify-between">
            <h3 className="text-5xl md:text-7xl font-power italic text-[#F5F5F3] opacity-90 mb-16">Magnets</h3>
            
            <div className="flex-1 flex items-center justify-center mb-16 px-4">
               <AnimatePresence mode="wait">
                 <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <MagnetGrid count={current.magnetQuantity} />
                 </motion.div>
               </AnimatePresence>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 max-w-[440px]">
               <div className="border border-white/10 bg-black/20">
                  <div className="px-4 py-2 border-b border-white/10 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-white/40 bg-white/[0.02]">Quantity</div>
                  <div className="p-8 text-center text-5xl font-mono text-[#F5F5F3]">{current.magnetQuantity}</div>
               </div>
               <div className="border border-white/10 bg-black/20 relative">
                  <div className="px-4 py-2 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                     <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Profit</span>
                     <span className="bg-accent-yellow text-black font-mono text-[8.5px] font-black px-1.5 py-0.5 tracking-tighter">{current.increase}</span>
                  </div>
                  <div className="p-8 text-center text-5xl font-mono text-accent-green tracking-tighter">${current.magnetProfit}</div>
               </div>
            </div>
         </div>
      </div>

      {/* 5. Disclaimer Column */}
      <div className="mt-20 flex flex-col items-center gap-2 opacity-30 px-12 text-center relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+40px)] w-5 h-5 border border-white/20 bg-[#120D14] flex items-center justify-center">
            <span className="text-accent-yellow font-black text-xs">*</span>
         </div>
         <p className="font-medium text-[10px] md:text-xs text-[#e8dbcc] tracking-wide">These numbers are averages and are calculated based on actual volumetric measurements.</p>
         <p className="font-medium text-[10px] md:text-xs text-[#e8dbcc] tracking-wide">Magnet values are calculated based on an average selling price of $12.</p>
         <p className="font-medium text-[10px] md:text-xs text-[#e8dbcc] tracking-wide">Limited editions and signed magnets have much higher average profit.</p>
      </div>

    </section>
  );
}
