"use client";
import { motion } from "framer-motion";
import Magnet from "./ui/Magnet";

export default function ProblemSection() {
  return (
    <section className="relative w-full bg-transparent border-b border-[var(--grid-line-strong)]">
      
      {/* Central Vertical Splitting Lines (3 lines creating 4 columns) shown in screenshot */}
      <div className="absolute w-[1px] h-full left-1/4 top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />
      <div className="absolute w-[1px] h-full left-1/2 top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />
      <div className="absolute w-[1px] h-full left-[75%] top-0 bg-[var(--grid-line-strong)] z-0 hidden md:block" />

      {/* Main Content Area */}
      <div className="w-full relative z-10 lg:px-0">
        
        <div className="flex flex-col items-center pt-24 pb-16 relative">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-10 opacity-70"
          >
             <span className="font-mono text-xs tracking-[0.2em] font-medium text-white/50">ML</span>
             <span className="w-6 h-[1px] bg-white/30" />
             <span className="font-mono text-xs tracking-[0.2em] font-medium text-white/50">001</span>
          </motion.div>
          
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl sm:text-9xl md:text-[160px] leading-[0.8] tracking-[-0.03em] uppercase text-center text-[#e8dbcc]"
            style={{ fontFamily: "'Arial Black', Impact, sans-serif", letterSpacing: "-0.02em" }}
          >
            WHY<br />MAGNETS?
          </motion.h2>

          <div className="mt-20 mb-16 border border-[var(--grid-line-strong)] px-10 py-4 bg-transparent">
             <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#e8dbcc]">THE SITUATION</p>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-5xl font-normal text-[#e8dbcc]/90 leading-[1.3] max-w-6xl text-center px-4"
            style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.02em" }}
          >
            Modern musicians, artists and festivals need merch that maximises their monetary potential, and fans want something of substance that lasts.
          </motion.p>
        </div>

        {/* Highlight Section Container - spans full grid width */}
        <div className="w-full relative overflow-hidden flex min-h-[160px] border-t border-[var(--grid-line-strong)] mt-20">
          
          {/* Left Dark Red Section aligned precisely within grid column 1 */}
          <div className="hidden lg:flex w-[25%] bg-[#2d111d] border-r border-[var(--grid-line-strong)] z-20 shrink-0" />
          
          {/* Main Diagonal Background Banner - grid columns 2, 3, 4 */}
          <div className="flex-1 w-full lg:w-[75%] bg-[#1c141a] relative flex items-center justify-center py-16 px-4">
             {/* Diagonal pattern overlay */}
             <div 
               className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_11px)]" 
             />
             
             <motion.h3 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center relative z-10 w-full"
               style={{ fontFamily: "'Arial Black', Impact, sans-serif", letterSpacing: "-0.01em", color: "#e8dbcc", lineHeight: 1.2 }}
             >
               But, only 20% of people buy merch at live shows
             </motion.h3>
          </div>
        </div>
      </div>

      {/* Narrative Paragraphs below highlight */}
      <div className="w-full relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center pt-24 pb-32">
          <p className="text-2xl md:text-[34px] font-light text-[#e8dbcc]/90 leading-[1.4] max-w-4xl text-center mb-10" style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.01em" }}>
            Traditional items like tees and hoodies are bulky, pricey and easy to pass over, while cheaper options end up forgotten in a drawer.
          </p>
          <p className="text-2xl md:text-[34px] font-light text-[#e8dbcc]/90 leading-[1.4] max-w-4xl text-center" style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.01em" }}>
            Magnets are affordable, memorable and a daily reminder of the show, all while taking up less space and delivering better margins for artists.
          </p>
        </div>
      </div>

      {/* Edge-to-Edge 4-Color Bottom Divider separated by the grid lines */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 grid grid-cols-4 bg-[var(--grid-line-strong)] gap-[1px]">
         <div className="bg-accent-pink h-full" />
         <div className="bg-accent-yellow h-full" />
         <div className="bg-accent-green h-full" />
         <div className="bg-accent-cyan h-full" />
      </div>

    </section>
  );
}
