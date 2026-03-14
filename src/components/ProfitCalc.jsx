"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
  </svg>
);

const DollarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v12M10 9h4a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h4"/>
  </svg>
);

const ShirtOutline = ({ type }) => {
  if (type === "T-Shirt") return (
     <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#e8dbcc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 30 L35 25 L42 25 Q50 35 58 25 L65 25 L75 30 L80 50 L72 52 L68 45 L68 85 L32 85 L32 45 L28 52 L20 50 Z" />
        <path d="M35 25 Q50 35 65 25" />
        <path d="M32 45 L28 42 M68 45 L72 42" />
     </svg>
  );
  if (type === "Sweatshirt") return (
     <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#e8dbcc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 30 L38 25 L45 25 Q50 32 55 25 L62 25 L72 30 L85 60 L78 62 L70 45 L68 85 L32 85 L30 45 L22 62 L15 60 Z" />
        <path d="M38 25 Q50 32 62 25" />
     </svg>
  );
  // Hoodie
  return (
     <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#e8dbcc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 35 L38 30 L45 30 Q50 37 55 30 L62 30 L72 35 L85 65 L78 67 L70 50 L68 85 L32 85 L30 50 L22 67 L15 65 Z" />
        <path d="M38 30 Q50 37 62 30" />
        <path d="M38 30 C38 15, 45 10, 50 10 C55 10, 62 15, 62 30" />
        <path d="M50 10 L50 35" />
        <path d="M38 25 L62 25" />
     </svg>
  );
};

export default function ProfitCalc() {
  const [activeTab, setActiveTab] = useState("T-Shirt");

  const data = {
    "T-Shirt": { quantity: 1, profit: "28", magnetQuantity: 167, magnetProfit: "1,503", increase: "+5,268%" },
    "Sweatshirt": { quantity: 1, profit: "35", magnetQuantity: 240, magnetProfit: "2,160", increase: "+6,070%" },
    "Hoodie": { quantity: 1, profit: "45", magnetQuantity: 310, magnetProfit: "2,790", increase: "+6,100%" }
  };

  const current = data[activeTab];

  return (
    <section className="relative w-full bg-[#120D14] border-b border-[var(--grid-line-strong)]">
      
      {/* Top central colored vertical lines connecting from TouringReality */}
      <div className="w-full flex justify-center h-20 border-b border-[var(--grid-line-strong)] relative z-10">
         <div className="h-full w-[48px] flex">
           <div className="flex-1 bg-accent-pink" />
           <div className="flex-1 bg-accent-yellow" />
           <div className="flex-1 bg-accent-green" />
           <div className="flex-1 bg-accent-cyan" />
         </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] mx-auto relative z-10 border-x border-[var(--grid-line-strong)] border-b border-[var(--grid-line-strong)] pb-12 mb-12">
         
         {/* Internal Grid Lines (matching problem section) */}
         <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-[var(--grid-line-strong)] z-0 hidden lg:block" />
         <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[var(--grid-line-strong)] z-0 hidden lg:block" />
         <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-[var(--grid-line-strong)] z-0 hidden lg:block" />

         {/* Title Section */}
         <div className="p-12 md:p-24 lg:pb-16 flex flex-col xl:flex-row xl:items-end justify-between border-b border-[var(--grid-line-strong)] relative z-10 bg-[#120D14]">
            
            <div className="relative z-10">
               <div className="flex items-center gap-4 mb-10 text-[#7a7c86]">
                 <ExpandIcon />
                 <DollarIcon />
                 <span className="font-mono text-xs tracking-[0.2em] font-medium ml-4">ML — 003</span>
               </div>
               
               <h2 
                 className="text-6xl sm:text-7xl md:text-[100px] leading-[0.85] tracking-[-0.03em] uppercase text-[#e8dbcc]"
                 style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
               >
                 PROFIT<br />DENSITY<br />CALCULATOR
               </h2>
            </div>

            <div className="relative z-10 mt-16 xl:mt-0 max-w-[360px] pb-4">
               <p className="font-script text-accent-green text-[42px] mb-4 transform -rotate-3" style={{ fontFamily: 'Caveat, cursive, auto' }}>
                 SPACE VS PROFIT
               </p>
               <p className="text-[#e8dbcc]/90 font-bold leading-[1.6] text-[15px] lg:text-base tracking-[0.02em]" style={{ fontFamily: "Arial, sans-serif" }}>
                 See how much more you could be making compared to traditional merch items.<span className="text-accent-yellow">*</span>
               </p>
            </div>
         </div>

         {/* Tabs Section */}
         <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[var(--grid-line-strong)] relative z-10 bg-[#120D14]">
            {Object.keys(data).map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative p-8 md:p-12 flex items-center justify-center gap-6 transition-all border-b md:border-b-0 md:border-r border-[var(--grid-line-strong)] hover:bg-white/[0.02] ${item === 'Hoodie' ? 'border-r-0' : ''}`}
                style={{ backgroundColor: activeTab === item ? '#120D14' : '#1c141a' }}
              >
                {activeTab === item && (
                  <div className="absolute top-[-1px] left-0 w-full h-1.5 grid grid-cols-4 bg-[var(--grid-line-strong)] gap-[1px]">
                     <div className="bg-accent-pink h-full" />
                     <div className="bg-accent-yellow h-full" />
                     <div className="bg-accent-green h-full" />
                     <div className="bg-accent-cyan h-full" />
                  </div>
                )}
                <div className="w-10 h-10 opacity-70">
                  <ShirtOutline type={item} />
                </div>
                <span className={`text-xs font-black uppercase tracking-[0.15em] ${activeTab === item ? "text-[#e8dbcc]" : "text-[#e8dbcc]/40"}`} style={{ fontFamily: "'Arial Black', sans-serif" }}>
                  PER {item.toUpperCase()}
                </span>
              </button>
            ))}
         </div>

         {/* VS Comparison Area */}
         <div className="relative w-full flex flex-col md:flex-row bg-[#120D14] z-10 border-b border-[var(--grid-line-strong)]">
            
            {/* Center Dashed Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] border-l border-dashed border-[#e8dbcc]/30 z-0" />
            
            {/* VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[var(--grid-line-strong)] bg-[#120D14] items-center justify-center z-10">
               <span className="font-black text-[#e8dbcc]/70 text-[10px]" style={{fontFamily:"Arial Black"}}>VS</span>
            </div>
            
            {/* Left Box (Traditional) */}
            <div className="flex-1 p-10 lg:p-20 flex flex-col items-center justify-between min-h-[650px] relative z-0">
               <AnimatePresence mode="wait">
                 <motion.h3 
                   key={`title-${activeTab}`}
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   className="text-5xl lg:text-[64px] text-[#e8dbcc] mb-16"
                   style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "-0.02em" }}
                 >
                   {activeTab}
                 </motion.h3>
               </AnimatePresence>
               
               <div className="flex-1 w-full max-w-[280px] mb-20 flex items-center justify-center opacity-60">
                 <AnimatePresence mode="wait">
                   <motion.div key={`img-${activeTab}`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
                     <ShirtOutline type={activeTab} />
                   </motion.div>
                 </AnimatePresence>
               </div>

               {/* Quantity & Profit Stats */}
               <div className="w-full flex justify-between gap-6 max-w-[360px] mt-auto">
                  <div className="flex-1 border border-[var(--grid-line-strong)] flex flex-col bg-transparent">
                     <div className="px-4 py-1.5 border-b border-[var(--grid-line-strong)] bg-[#120D14]">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#e8dbcc]" style={{fontFamily:'Arial Black'}}>QUANTITY</span>
                     </div>
                     <div className="p-8 flex items-center justify-center">
                        <span className="text-4xl lg:text-5xl text-[#e8dbcc]/90" style={{fontFamily: "Arial, sans-serif"}}>{current.quantity}</span>
                     </div>
                  </div>
                  
                  <div className="flex-[1.2] border border-[var(--grid-line-strong)] flex flex-col bg-transparent">
                     <div className="px-4 py-1.5 border-b border-[var(--grid-line-strong)] bg-[#120D14]">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#e8dbcc]" style={{fontFamily:'Arial Black'}}>PROFIT</span>
                     </div>
                     <div className="p-8 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.span 
                            key={`profit-${activeTab}`} 
                            initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:10 }}
                            className="text-4xl lg:text-[42px] text-accent-pink tracking-tight" 
                            style={{fontFamily: "Arial, sans-serif", fontWeight: 300}}
                          >
                            ${current.profit}
                          </motion.span>
                        </AnimatePresence>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Box (Magnets) */}
            <div className="flex-1 p-10 lg:p-20 flex flex-col items-center justify-between min-h-[650px] relative z-0">
               <h3 className="text-5xl lg:text-[64px] text-[#e8dbcc] mb-16" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "-0.02em" }}>
                 Magnets
               </h3>
               
               <div className="flex-1 w-full max-w-[200px] mb-20 flex items-center justify-center opacity-60">
                 {/* Magnet grid visual */}
                 <div className="w-full grid grid-cols-10 gap-1 mt-auto" style={{ aspectRatio: '4/4' }}>
                   {[...Array(68)].map((_, i) => (
                      <div key={i} className="border border-[#e8dbcc]/40 bg-transparent w-full h-full aspect-square" />
                   ))}
                 </div>
               </div>

               {/* Quantity & Profit Stats */}
               <div className="w-full flex justify-between gap-6 max-w-[420px] mt-auto">
                  <div className="flex-1 border border-[var(--grid-line-strong)] flex flex-col bg-transparent">
                     <div className="px-4 py-1.5 border-b border-[var(--grid-line-strong)] bg-[#120D14]">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#e8dbcc]" style={{fontFamily:'Arial Black'}}>QUANTITY</span>
                     </div>
                     <div className="p-8 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.span 
                            key={`m-qty-${activeTab}`}
                            initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                            className="text-4xl lg:text-5xl text-[#e8dbcc]/90" 
                            style={{fontFamily: "Arial, sans-serif"}}
                          >
                            {current.magnetQuantity}
                          </motion.span>
                        </AnimatePresence>
                     </div>
                  </div>
                  
                  <div className="flex-[1.4] border border-[var(--grid-line-strong)] flex flex-col bg-transparent">
                     <div className="px-2 py-1.5 border-b border-[var(--grid-line-strong)] bg-[#120D14] flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#e8dbcc]" style={{fontFamily:'Arial Black'}}>PROFIT</span>
                        <AnimatePresence mode="wait">
                          <motion.span 
                            key={`m-inc-${activeTab}`}
                            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                            className="bg-accent-yellow text-[#120D14] font-black text-[9px] px-1.5 py-0.5 tracking-wider"
                            style={{fontFamily: "Arial Black"}}
                          >
                            {current.increase}
                          </motion.span>
                        </AnimatePresence>
                     </div>
                     <div className="p-8 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.span 
                            key={`m-profit-${activeTab}`} 
                            initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:10 }}
                            className="text-4xl lg:text-[42px] text-accent-green tracking-tight" 
                            style={{fontFamily: "Arial, sans-serif", fontWeight: 300}}
                          >
                            ${current.magnetProfit}
                          </motion.span>
                        </AnimatePresence>
                     </div>
                  </div>
               </div>
            </div>

         </div>

         {/* Footer text area */}
         <div className="w-full pt-10 pb-8 flex justify-center relative z-10">
            {/* Asterisk Badge precisely placed on the bottom line intercept */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border border-[var(--grid-line-strong)] bg-[#120D14] flex items-center justify-center z-10">
               <span className="font-black text-accent-yellow text-xs transform mt-0.5">*</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center text-[#e8dbcc]">
               <p className="font-bold text-[10px] lg:text-xs tracking-wide" style={{fontFamily: "Arial, sans-serif"}}>
                 These numbers are averages and are calculated based on actual volumetric measurements.
               </p>
               <p className="font-bold text-[10px] lg:text-xs tracking-wide" style={{fontFamily: "Arial, sans-serif"}}>
                 Magnet values are calculated based on an average selling price of $12.
               </p>
               <p className="font-bold text-[10px] lg:text-xs tracking-wide" style={{fontFamily: "Arial, sans-serif"}}>
                 Limited editions and signed magnets have much higher average profit.
               </p>
            </div>
         </div>

      </div>

    </section>
  );
}
