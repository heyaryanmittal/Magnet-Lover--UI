"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ShirtIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M20 30 L40 10 L60 10 L80 30 L80 90 L20 90 Z" />
    <path d="M40 10 Q50 20 60 10" />
    <path d="M20 30 L5 40 L15 55 L20 50" />
    <path d="M80 30 L95 40 L85 55 L80 50" />
  </svg>
);

export default function ProfitCalc() {
  const [activeTab, setActiveTab] = useState("T-Shirt");

  const data = {
    "T-Shirt": { quantity: 1, profit: 28, magnetQuantity: 167, magnetProfit: 1503, increase: "+5,268%" },
    "Sweatshirt": { quantity: 1, profit: 35, magnetQuantity: 240, magnetProfit: 2160, increase: "+6,070%" },
    "Hoodie": { quantity: 1, profit: 45, magnetQuantity: 310, magnetProfit: 2790, increase: "+6,100%" }
  };

  const current = data[activeTab];

  return (
    <section className="relative py-32 border-b border-white/10 bg-black">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto border-x border-white/10 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end p-8 md:p-20 border-b border-white/10">
          <div>
            <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-8">ML — 003</p>
            <h2 className="text-6xl md:text-8xl font-power uppercase leading-[0.85] text-[#f5f5f5]">
              PROFIT<br />DENSITY<br />CALCULATOR
            </h2>
          </div>
          <div className="mt-8 md:mt-0 text-right">
             <p className="font-script text-accent-green text-3xl md:text-5xl mb-4">SPACE VS. PROFIT</p>
             <p className="text-white/40 max-w-xs text-sm ml-auto font-mono uppercase tracking-widest">
               See how much more you could be making compared to traditional merch items.*
             </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-3 border-b border-white/10 h-32 md:h-48">
          {Object.keys(data).map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`relative p-4 flex flex-col items-center justify-center gap-4 transition-all border-r border-white/10 last:border-r-0 ${
                activeTab === item ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
              }`}
            >
              {activeTab === item && (
                <div className="absolute top-0 left-0 w-full h-[6px] flex">
                   <div className="accent-color-1 flex-1" />
                   <div className="accent-color-2 flex-1" />
                   <div className="accent-color-3 flex-1" />
                   <div className="accent-color-4 flex-1" />
                </div>
              )}
              <ShirtIcon className={`w-8 h-8 md:w-12 md:h-12 ${activeTab === item ? "text-white" : "text-white/20"}`} />
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${
                activeTab === item ? "text-white" : "text-white/40"
              }`}>
                Per {item}
              </span>
            </button>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 bg-black">
          {/* Item View */}
          <div className="p-12 md:p-24 flex flex-col items-center justify-center border-r border-white/10 relative">
             <h3 className="text-4xl md:text-6xl font-serif italic mb-12 opacity-80">{activeTab}</h3>
             <div className="w-full max-w-[280px] aspect-[4/5] border border-white/10 flex items-center justify-center p-12 bg-white/[0.01]">
                <ShirtIcon className="w-full h-full text-white/20" />
             </div>
             
             {/* Info Boxes */}
             <div className="grid grid-cols-2 gap-4 mt-20 w-full max-w-sm">
                <div className="space-y-3">
                   <div className="bg-white/5 px-3 py-1 inline-block border border-white/10">
                     <p className="text-[10px] font-mono text-white/40 uppercase">Quantity</p>
                   </div>
                   <div className="border border-white/10 p-8 text-5xl font-mono bg-white/[0.02]">1</div>
                </div>
                <div className="space-y-3 text-right">
                   <div className="bg-white/5 px-3 py-1 inline-block border border-white/10">
                     <p className="text-[10px] font-mono text-white/40 uppercase">Profit</p>
                   </div>
                   <div className="border border-white/10 p-8 text-5xl text-accent-pink font-mono bg-white/[0.02]">${current.profit}</div>
                </div>
             </div>

             <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 rounded-full border border-white/10 bg-black flex items-center justify-center text-[10px] font-mono shadow-[0_0_50px_rgba(0,0,0,1)]">VS</div>
             </div>
          </div>

          {/* Magnets View */}
          <div className="p-12 md:p-24 flex flex-col items-center justify-center relative bg-white/[0.005]">
             <h3 className="text-4xl md:text-6xl font-serif italic mb-12 opacity-80">Magnets</h3>
             {/* Magnet Grid Visualization */}
             <div className="w-full max-w-[280px] aspect-[4/5] border border-white/10 p-8 bg-white/[0.01] grid grid-cols-8 gap-2">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="aspect-square border border-white/10 bg-white/5" />
                ))}
             </div>

             {/* Info Boxes */}
             <div className="grid grid-cols-2 gap-4 mt-20 w-full max-w-sm">
                <div className="space-y-3">
                   <div className="bg-white/5 px-3 py-1 inline-block border border-white/10">
                     <p className="text-[10px] font-mono text-white/40 uppercase">Quantity</p>
                   </div>
                   <div className="border border-white/10 p-8 text-5xl font-mono bg-white/[0.02]">{current.magnetQuantity}</div>
                </div>
                <div className="space-y-3 text-right">
                   <div className="bg-white/5 px-3 py-1 inline-block border border-white/10 flex justify-between gap-4">
                     <p className="text-[10px] font-mono text-white/40 uppercase">Profit</p>
                     <p className="text-[10px] font-mono text-accent-green uppercase">{current.increase}</p>
                   </div>
                   <div className="border border-white/10 p-8 text-5xl text-accent-green font-mono bg-white/[0.02] transition-all" key={current.magnetProfit}>
                     ${current.magnetProfit}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="p-16 border-t border-white/10 text-center relative overflow-hidden bg-black">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-accent-yellow/20" />
           <p className="text-white/40 font-mono text-[10px] leading-relaxed max-w-2xl mx-auto uppercase tracking-widest pt-8">
             These numbers are averages and are calculated based on actual volumetric measurements. 
             Magnet values are calculated based on an average selling price of $12. 
             Limited editions and signed magnets have much higher average profit.
           </p>
        </div>
      </div>
    </section>
  );
}
