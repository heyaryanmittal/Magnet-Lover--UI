"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const tapeReel = (
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/10 relative flex items-center justify-center"
    >
       <div className="w-1/2 h-[2px] bg-white/10 absolute rotate-0" />
       <div className="w-1/2 h-[2px] bg-white/10 absolute rotate-60" />
       <div className="w-1/2 h-[2px] bg-white/10 absolute rotate-120" />
       <div className="w-4 h-4 bg-white/20 rounded-full z-10" />
    </motion.div>
  );

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto border-x border-white/10 relative z-10 flex flex-col items-center py-40 px-4">
        
        {/* Large Brand Text */}
        <h2 className="text-huge font-power uppercase text-center mb-32 tracking-tighter text-white opacity-90">
          MAGNET<br />LOVER
        </h2>

        {/* Interactive Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-20">
           {tapeReel}

           <div className="flex flex-col items-center gap-8">
              {/* Sound Bars */}
              <div className="flex items-end gap-1 h-12">
                {[...Array(15)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="w-1 bg-accent-yellow"
                  />
                ))}
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40">
                Music // Memories // Merch
              </p>
           </div>

           {tapeReel}
        </div>

        {/* Small Bottom Copyright */}
        <div className="mt-40 w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10 opacity-40">
           <p className="font-mono text-[10px] uppercase tracking-widest">ML // EST. MMXXV</p>
           <div className="flex items-center gap-4">
              <Heart className="w-4 h-4" />
              <p className="font-mono text-[10px] uppercase tracking-widest">Proudly made in INDIA</p>
           </div>
           <p className="font-mono text-[10px] uppercase tracking-widest">© 2026 Magnet Lover</p>
        </div>
      </div>

      {/* Multicolored Accent Bar at the very bottom */}
      <div className="w-full flex h-3">
         <div className="accent-color-1 flex-1" />
         <div className="accent-color-2 flex-1" />
         <div className="accent-color-3 flex-1" />
         <div className="accent-color-4 flex-1" />
      </div>

    </footer>
  );
}
