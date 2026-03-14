"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function Benefits() {
  const [activeTab, setActiveTab] = useState("artists");

  const content = {
    artists: {
      title: "A profitable, practical addition for artists.",
      description: "Magnets give artists a high-margin, low-complexity merch item that travels easily, sells in volume, and strengthens the fan relationship.",
      features: [
        { title: "Profit Density", desc: "Exceptional profit per cubic inch compared to apparel." },
        { title: "Practicality", desc: "Operationally effortless, simplifies touring logistics." },
        { title: "Additive Revenue", desc: "Complements existing merch rather than replacing it." }
      ]
    },
    fans: {
      title: "A memorable, pocket-sized keepsake for fans.",
      description: "Fans want something that lasts. Magnets are the perfect impulse-buy that lives on their fridge forever, not in a drawer.",
      features: [
        { title: "Budget Friendly", desc: "Appeal at every price point, perfect impulse buy." },
        { title: "Collectible", desc: "Variants encourage loyalty across tour dates." },
        { title: "Longevity", desc: "A premium keepsake that stays visible every day." }
      ]
    }
  };

  const active = content[activeTab];

  return (
    <section className="relative w-full bg-[#120D14] border-b border-[var(--grid-line-strong)]">
      
      {/* Structural side gutters (continuation of the main grid) */}
      <div className="hidden lg:block absolute left-0 top-0 w-20 xl:w-32 h-full border-r border-[var(--grid-line-strong)] z-0" />
      <div className="hidden lg:block absolute right-0 top-0 w-20 xl:w-32 h-full border-l border-[var(--grid-line-strong)] z-0" />

      {/* Main Content Area */}
      <div className="w-full relative z-10 px-6 lg:px-0 mix-blend-plus-lighter">
      
      {/* Central Vertical Splitting Lines (3 lines creating 4 columns) shown in screenshot */}
      <div className="absolute w-[1px] h-full left-1/4 top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />
      <div className="absolute w-[1px] h-full left-1/2 top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />
      <div className="absolute w-[1px] h-full left-[75%] top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />
        
        <div className="flex flex-col items-center pt-24 pb-16 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-16 opacity-70"
          >
             <span className="font-mono text-xs tracking-[0.2em] font-medium text-[#7a7c86]">ML</span>
             <span className="w-6 h-[1px] bg-[#7a7c86]/50" />
             <span className="font-mono text-xs tracking-[0.2em] font-medium text-[#7a7c86]">002</span>
          </motion.div>

          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-8xl md:text-[140px] leading-[0.8] tracking-[-0.03em] uppercase text-center text-[#e8dbcc]"
            style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
          >
            PRACTICAL<br />BENEFITS
          </motion.h2>

          {/* Tab Buttons matching exact screenshot layout and colors */}
          <div className="w-full relative mt-20">
             {/* Left Column Button (Center aligned in the left 50%) */}
             <div className="absolute top-0 right-1/2 left-0 flex justify-center mt-12 pr-4 md:pr-0">
                <button
                  className={`px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-[0.15em] transition-all border border-white/20 text-[#e8dbcc] hover:border-[#e8dbcc]/60 bg-transparent`}
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  FOR ARTISTS
                </button>
             </div>
             
             {/* Right Column Button (Center aligned in the right 50%) */}
             <div className="absolute top-0 left-1/2 right-0 flex justify-center mt-12 pl-4 md:pl-0">
                <button
                  className={`px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-[0.15em] transition-all bg-[#e8dbcc] text-[#120D14]`}
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  FOR FANS
                </button>
             </div>
             <div className="h-32" /> {/* Spacer for absolute buttons */}
          </div>
        </div>
        
        <div className="w-full border-t border-b border-[var(--grid-line-strong)] mt-16 relative z-20 grid grid-cols-1 md:grid-cols-2">
           {/* Left side: Fans description */}
           <div className="p-12 lg:p-20 flex flex-col justify-center border-r border-[var(--grid-line-strong)]">
              <span className="font-script text-accent-pink text-5xl mb-12 block transform -rotate-6" style={{ fontFamily: 'Caveat, cursive, auto' }}>FANS</span>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.05] text-[#F5F5F3] tracking-[-0.03em]" style={{ fontFamily: "Arial, sans-serif" }}>
                A collectible, affordable<br />keepsake fans love
              </h3>
              
              <p className="text-[#e8dbcc]/90 font-normal leading-[1.6] text-lg lg:text-xl max-w-lg mb-16" style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.01em" }}>
                Magnets fit perfectly into what fans want today: meaningful, bite-sized purchases that commemorate their experience. They're accessible at any budget, easy to carry, visually appealing, and built to last, turning a moment into a memory.
              </p>
              
              <div>
                <button className="px-10 py-4 lg:py-4 rounded-full font-black uppercase text-[11px] lg:text-xs tracking-[0.15em] border border-white/30 text-[#e8dbcc] hover:border-white/60 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  GET IN TOUCH
                </button>
              </div>
           </div>

           {/* Right side: Accordion */}
           <div className="flex flex-col">
              {/* Active Row */}
              <div className="p-12 lg:p-16 border-b border-[var(--grid-line-strong)] relative flex flex-col justify-center h-full min-h-[50%]">
                 <div className="absolute left-0 top-12 bottom-12 w-1 bg-accent-yellow" />
                 
                 <div className="flex items-center gap-4 mb-8">
                    <span className="w-6 h-0.5 bg-accent-yellow block"></span>
                    <span className="font-black text-[10px] tracking-widest uppercase text-[#e8dbcc]" style={{fontFamily: 'Arial Black'}}>BUDGET FRIENDLY</span>
                 </div>
                 
                 <h4 className="text-2xl lg:text-3xl font-black uppercase text-[#F5F5F3] mb-6 tracking-tight" style={{fontFamily: 'Arial Black'}}>APPEAL AT EVERY PRICE POINT</h4>
                 
                 <p className="text-[#e8dbcc]/80 font-normal leading-[1.6] text-[15px] lg:text-base max-w-md" style={{fontFamily: 'Arial, sans-serif', letterSpacing: "0.01em"}}>
                   Fans of every age and budget can buy one. Magnets are impulse-friendly, pocket-sized, and free of sizing stress, which is why they consistently outsell other accessories and broaden the merch table's reach beyond the 20 percent who normally buy merch.
                 </p>
              </div>

              {/* Inactive Row 1 */}
              <div className="px-12 lg:px-16 py-10 flex items-center border-b border-[var(--grid-line-strong)] gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
                 <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className="absolute w-full h-[2px] bg-accent-green" />
                    <div className="absolute h-full w-[2px] bg-accent-green" />
                 </div>
                 <span className="font-black text-xs tracking-[0.15em] uppercase text-[#e8dbcc]/80 mt-0.5" style={{fontFamily: 'Arial Black'}}>COLLECTIBLE</span>
              </div>

              {/* Inactive Row 2 */}
              <div className="px-12 lg:px-16 py-10 flex items-center gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
                 <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className="absolute w-full h-[2px] bg-accent-cyan" />
                    <div className="absolute h-full w-[2px] bg-accent-cyan" />
                 </div>
                 <span className="font-black text-xs tracking-[0.15em] uppercase text-[#e8dbcc]/80 mt-0.5" style={{fontFamily: 'Arial Black'}}>LONGEVITY</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
