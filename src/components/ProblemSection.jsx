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
            className="text-7xl sm:text-9xl md:text-[160px] leading-[0.8] tracking-[-0.05em] uppercase text-center text-[#e8dbcc] font-power"
          >
            WHY<br />MAGNETS?
          </motion.h2>

          <div className="mt-20 mb-16 border border-[var(--grid-line-strong)] px-10 py-4 bg-transparent">
             <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#e8dbcc]">THE SITUATION</p>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-5xl text-white leading-[1.3] max-w-6xl text-center px-4"
          >
            <span className="font-serif italic text-accent-cyan">Modern</span> musicians, designers and festivals need merch that <span className="font-unique uppercase text-accent-yellow tracking-tighter">maximises</span> their monetary potential, and fans want something of <span className="font-script text-white inline-block transform rotate-2">substance</span> that lasts.
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
               className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center relative z-10 w-full font-power uppercase tracking-tight text-[#e8dbcc] leading-tight"
             >
               But, only 20% of people buy merch at live shows
             </motion.h3>
          </div>
        </div>
      </div>

      {/* Narrative Paragraphs below highlight */}
      <div className="w-full relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center pt-24 pb-32">
          <p className="text-2xl md:text-4xl text-white leading-[1.4] max-w-4xl text-center mb-10">
            <span className="font-serif italic text-accent-pink">Traditional</span> items like tees and hoodies are <span className="font-unique uppercase text-accent-yellow">bulky</span>, pricey and easy to pass over, while cheaper options end up <span className="font-script text-white inline-block transform -rotate-2">forgotten in a drawer.</span>
          </p>
          <p className="text-2xl md:text-4xl text-white leading-[1.4] max-w-4xl text-center">
            Magnets are <span className="font-unique uppercase text-accent-green neon-green">affordable</span>, memorable and a <span className="font-serif italic text-white underline decoration-accent-cyan underline-offset-8">daily reminder</span> of the show, all while taking up less space and delivering <span className="font-script text-accent-pink text-5xl">better margins</span> for artists.
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
