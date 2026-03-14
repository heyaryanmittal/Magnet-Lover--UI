"use client";
import { motion } from "framer-motion";
import Magnet from "./ui/Magnet";

export default function ProblemSection() {
  return (
    <section className="relative py-40 px-4 border-b border-white/10 bg-black">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto border-x border-white/10 relative z-10">
        
        <div className="flex flex-col items-center py-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase mb-12"
          >
            ML — 001
          </motion.p>
          
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-huge font-power uppercase text-center text-[#f5f5f5]"
          >
            Why<br />Magnets?
          </motion.h2>

          <div className="mt-12 mb-20 border border-white/10 px-6 py-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">The Situation</p>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl text-white/80 leading-tight max-w-3xl text-center px-4"
          >
            Modern musicians, artists and festivals need merch that <span className="text-white">maximises their monetary potential</span>, and fans want something of substance that lasts.
          </motion.p>
        </div>

        {/* Highlight Section */}
        <div className="border-t border-white/10 p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full flex flex-col opacity-50">
             <div className="bg-accent-pink flex-1" />
             <div className="bg-accent-yellow flex-1" />
             <div className="bg-accent-green flex-1" />
             <div className="bg-accent-blue flex-1" />
          </div>

          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold uppercase mb-16 max-w-2xl"
          >
            But, only <span className="font-script text-accent-pink text-5xl md:text-7xl">20%</span> of people buy merch at live shows
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="p-12 md:p-16 bg-black">
              <p className="text-white/40 leading-relaxed text-lg">
                Traditional items like tees and hoodies are bulky, pricey and easy to pass over, while cheaper options end up forgotten in a drawer.
              </p>
            </div>
            <div className="p-12 md:p-16 bg-black">
              <p className="text-white/60 leading-relaxed text-lg italic">
                Magnets are affordable, memorable and a daily reminder of the show, all while taking up less space and delivering better margins for artists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scatterned Magnets in this section */}
      <Magnet 
        src="/magnets/vinyl_v2.png" 
        alt="Small Vinyl" 
        initialX="80%" 
        initialY="20%" 
        size={140} 
        rotation={20} 
      />
      <Magnet 
        src="/magnets/heart_v2.png" 
        alt="Small Heart" 
        initialX="15%" 
        initialY="70%" 
        size={160} 
        rotation={-10} 
      />
    </section>
  );
}
