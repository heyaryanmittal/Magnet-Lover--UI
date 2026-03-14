"use client";
import { motion } from "framer-motion";
import Magnet from "./ui/Magnet";

export default function TouringReality() {
  return (
    <section className="relative border-b border-white/10 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="grid md:grid-cols-2">
        {/* BPM Column */}
        <div className="p-16 border-r border-white/10 flex flex-col items-center justify-center min-h-[500px]">
           <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-12">ML — 002</p>
           <h3 className="text-8xl font-black uppercase text-center leading-[0.8] tracking-tighter">
             70 — 160<br />
             <span className="text-accent-pink italic">// BPM</span>
           </h3>
           <p className="mt-8 text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">The Touring Tempo</p>
        </div>

        {/* Text Column */}
        <div className="p-16 flex flex-col justify-center">
           <div className="border border-white/10 inline-block px-4 py-2 mb-8">
             <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">The Touring Reality</p>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight">
             Touring artists have limited space.
           </h2>
           
           <p className="text-xl text-white/60 leading-relaxed max-w-lg mb-8">
             Merch needs to compete with production gear and wardrobe, fitting into flight cases, bus bays and luggage which can get expensive.
           </p>

           <p className="text-xl text-white italic">
             Because magnets take up almost no space, they deliver far greater profit density than standard merch.
           </p>
        </div>
      </div>

      <Magnet 
        src="/magnets/vinyl_v2.png" 
        alt="Small Record" 
        initialX="45%" 
        initialY="20%" 
        size={120} 
        rotation={25} 
      />
    </section>
  );
}
