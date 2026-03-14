"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function Benefits() {
  const [activeTab, setActiveTab] = useState("artists");

  const content = {
    artists: {
      accent: "ARTISTS",
      title: "A profitable, practical addition for artists.",
      description: "Magnets give artists a high-margin, low-complexity merch item that travels easily, sells in volume, and strengthens the fan relationship. They use almost no cargo space, spark repeat purchases across a tour, and elevate the overall merch offering without cannibalizing apparel.",
      features: [
        { 
          label: "PROFIT DENSITY", 
          title: "EXCEPTIONAL PROFIT DENSITY", 
          desc: "Magnets generate dramatically more profit per cubic inch than apparel. The space taken by a single hoodie can hold hundreds of magnets, turning a forty-dollar payoff into thousands. This lets artists maximize revenue even with tight touring space.",
          color: "bg-accent-yellow"
        },
        { 
          label: "PRACTICALITY", 
          title: "STREAMLINED LOGISTICS", 
          desc: "Small, lightweight, and indestructible. Magnets don't need folding, sorting by size, or climate-controlled storage. They are the easiest item to count, inventory, and sell during a high-speed tour environment.",
          color: "bg-accent-green"
        },
        { 
          label: "ADDITIVE REVENUE", 
          title: "NON-CANNIBALIZING SALES", 
          desc: "Because they occupy a lower price point and different use-case than apparel, magnets don't compete with hoodie or shirt sales. They serve as an additional purchase for big spenders and a primary purchase for budget-conscious fans.",
          color: "bg-accent-cyan"
        }
      ]
    },
    fans: {
      accent: "FANS",
      title: "A collectible, affordable keepsake fans love.",
      description: "Magnets fit perfectly into what fans want today: meaningful, bite-sized purchases that commemorate their experience. They're accessible at any budget, easy to carry, visually appealing, and built to last, turning a moment into a memory.",
      features: [
        { 
          label: "BUDGET FRIENDLY", 
          title: "APPEAL AT EVERY PRICE POINT", 
          desc: "Fans of every age and budget can buy one. Magnets are impulse-friendly, pocket-sized, and free of sizing stress, which is why they consistently outsell other accessories and broaden the merch table's reach.",
          color: "bg-accent-yellow"
        },
        { 
          label: "COLLECTIBLE", 
          title: "SERIES & VARIANTS", 
          desc: "With low production costs, artists can offer specific designs for every city or leg of the tour. This encourages 'super-fans' to collect the set, turning a one-time customer into a repeat buyer across multiple dates.",
          color: "bg-accent-green"
        },
        { 
          label: "LONGEVITY", 
          title: "A PERMANENT KEEPSAKE", 
          desc: "Unlike a shirt that wears out or a poster that needs framing, a magnet lives on the fridge—the most high-traffic area of a fan's home. It's a daily visual reminder of their affinity for the artist that lasts forever.",
          color: "bg-accent-cyan"
        }
      ]
    }
  };

  const active = content[activeTab];
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#120D14] border-b border-[var(--grid-line-strong)]">
      
      {/* Structural side gutters - Animates on scroll */}
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: "circOut" }}
        viewport={{ once: true, amount: 0.15 }}
        className="hidden lg:block absolute left-0 top-0 w-20 xl:w-32 h-full border-r border-[var(--grid-line-strong)] z-0 origin-top" 
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: "circOut" }}
        viewport={{ once: true, amount: 0.15 }}
        className="hidden lg:block absolute right-0 top-0 w-20 xl:w-32 h-full border-l border-[var(--grid-line-strong)] z-0 origin-top" 
      />

      {/* Main Content Area */}
      <div className="w-full relative z-10 px-6 lg:px-0">
      
        {/* Vertical Grid Lines - Animates on scroll */}
        {[0.25, 0.5, 0.75].map((pos, idx) => (
          <motion.div 
            key={idx}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.6, delay: idx * 0.1, ease: "circOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="absolute w-[1px] h-full top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block origin-top"
            style={{ left: `${pos * 100}%` }}
          />
        ))}
        
        <div className="flex flex-col items-center pt-24 pb-16 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex items-center gap-4 mb-16 opacity-70"
          >
             <span className="font-mono text-xs tracking-[0.2em] font-medium text-[#7a7c86]">ML</span>
             <span className="w-6 h-[1px] bg-[#7a7c86]/50" />
             <span className="font-mono text-xs tracking-[0.2em] font-medium text-[#7a7c86]">002</span>
          </motion.div>

          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-6xl sm:text-8xl md:text-[140px] leading-[0.8] tracking-[-0.03em] uppercase text-center text-[#e8dbcc] font-power mb-20"
          >
            PRACTICAL<br />BENEFITS
          </motion.h2>

          {/* Toggle Buttons - Animated */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex bg-[#0d0a0f] p-1.5 rounded-full border border-white/10 gap-1"
          >
             <button
               onClick={() => { setActiveTab("artists"); setExpandedIndex(0); }}
               className={`px-8 md:px-12 py-3 rounded-full font-bold uppercase text-[11px] md:text-xs tracking-[0.15em] transition-all duration-300 ${
                 activeTab === "artists" ? "bg-[#e8dbcc] text-[#120D14]" : "text-white/40 hover:text-white"
               }`}
             >
               FOR ARTISTS
             </button>
             <button
               onClick={() => { setActiveTab("fans"); setExpandedIndex(0); }}
               className={`px-8 md:px-12 py-3 rounded-full font-bold uppercase text-[11px] md:text-xs tracking-[0.15em] transition-all duration-300 ${
                 activeTab === "fans" ? "bg-[#e8dbcc] text-[#120D14]" : "text-white/40 hover:text-white"
               }`}
             >
               FOR FANS
             </button>
          </motion.div>
        </div>
        
        <div className="w-full border-t border-b border-[var(--grid-line-strong)] mt-16 relative z-20 grid grid-cols-1 md:grid-cols-2">
            
            {/* Left side: Main Description */}
            <div className="p-12 lg:p-20 flex flex-col justify-center border-r border-[var(--grid-line-strong)] bg-[#0d0a0f]/50">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   transition={{ duration: 0.9 }}
                 >
                   <span className={`font-script text-5xl mb-12 block transform -rotate-6 ${activeTab === 'artists' ? 'neon-pink' : 'neon-yellow'}`}>
                     {active.accent}
                   </span>
                   
                   <h3 className="text-4xl md:text-5xl lg:text-5xl font-power mb-10 leading-[1.05] text-[#F5F5F3] tracking-[-0.01em]">
                     {active.title}
                   </h3>
                   
                   <p className="text-white leading-[1.4] text-xl lg:text-2xl max-w-lg mb-16 font-script">
                     {active.description}
                   </p>
                   
                   <button className="px-10 py-4 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] border border-white/20 text-[#e8dbcc] hover:border-white/60 hover:bg-white/[0.05] transition-all">
                     GET IN TOUCH
                   </button>
                 </motion.div>
               </AnimatePresence>
            </div>

            {/* Right side: Accordion Features */}
            <div className="flex flex-col min-h-[600px]">
               {active.features.map((feature, idx) => (
                 <div 
                   key={idx} 
                   onClick={() => setExpandedIndex(idx)}
                   className={`flex-1 flex flex-col justify-center p-8 lg:p-16 border-b border-[var(--grid-line-strong)] relative cursor-pointer transition-all duration-500 overflow-hidden ${
                     expandedIndex === idx ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                   }`}
                 >
                    {/* Active Accent Bar */}
                    <AnimatePresence>
                      {expandedIndex === idx && (
                        <motion.div 
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                          className="absolute left-0 top-0 bottom-0 w-1 bg-accent-yellow origin-top"
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Header Row */}
                    <div className="flex items-center gap-4 mb-8">
                       <div className={`w-6 h-0.5 ${feature.color} opacity-80`} />
                       <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-[#e8dbcc] opacity-60">
                         {feature.label}
                       </span>
                    </div>

                    <div className="relative">
                       <h4 className={`text-2xl lg:text-3xl font-power uppercase text-[#F5F5F3] tracking-tight transition-all duration-500 ${
                         expandedIndex === idx ? "mb-6" : "mb-0"
                       }`}>
                         {feature.title}
                       </h4>

                       <motion.div
                         initial={false}
                         animate={{ height: expandedIndex === idx ? "auto" : 0, opacity: expandedIndex === idx ? 1 : 0 }}
                         transition={{ duration: 0.4, ease: "easeInOut" }}
                         className="overflow-hidden"
                       >
                          <p className="text-[#e8dbcc]/60 leading-[1.6] text-[15px] lg:text-base max-w-md font-medium">
                            {feature.desc}
                          </p>
                       </motion.div>
                    </div>

                    {/* Plus icon for collapsed state */}
                    {expandedIndex !== idx && (
                      <div className="absolute right-12 top-1/2 -translate-y-1/2">
                         <div className="relative w-4 h-4 opacity-40">
                            <div className={`absolute inset-0 m-auto w-full h-[1.5px] ${feature.color}`} />
                            <div className={`absolute inset-0 m-auto h-full w-[1.5px] ${feature.color}`} />
                         </div>
                      </div>
                    )}
                 </div>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
}
