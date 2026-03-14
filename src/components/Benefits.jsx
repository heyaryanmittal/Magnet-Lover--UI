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
    <section className="py-40 px-4 relative overflow-hidden bg-black border-b border-white/10">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto border-x border-white/10 relative z-10 flex flex-col items-center">
        
        <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-16">ML — 002</p>

        <h2 className="text-6xl md:text-8xl font-power uppercase text-center mb-16 leading-[0.8]">
          PRACTICAL<br />BENEFITS
        </h2>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-20">
          {Object.keys(content).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-12 py-3 rounded-full font-power uppercase text-xl transition-all ${
                activeTab === tab ? "bg-white text-black" : "border border-white/20 text-white/40 hover:border-white/60"
              }`}
            >
              FOR {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="w-full max-w-5xl border border-white/10 p-12 md:p-24 bg-white/[0.02] relative">
           {/* Top Accent line */}
           <div className="absolute top-0 left-0 w-full h-[6px] flex">
              <div className="accent-color-1 flex-1" />
              <div className="accent-color-2 flex-1" />
              <div className="accent-color-3 flex-1" />
              <div className="accent-color-4 flex-1" />
           </div>

           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -30 }}
               transition={{ duration: 0.5, ease: "circOut" }}
             >
               <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight max-w-2xl">{active.title}</h3>
               <p className="text-white/60 text-xl leading-relaxed mb-16 max-w-2xl">{active.description}</p>
               
               <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                 {active.features.map((f, i) => (
                   <div key={i} className="group">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4 text-accent-cyan flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan pulse-accent" />
                        {f.title}
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                   </div>
                 ))}
               </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
