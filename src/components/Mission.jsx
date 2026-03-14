"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative py-40 border-b border-white/10 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
         <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-16">About Us</p>
         
         <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 leading-tight">
           We’re on a mission to empower artists and events with <span className="text-accent-cyan">more efficient</span> merchandise.
         </h2>

         <p className="text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto">
           Because some of our best memories are standing in a crowd watching the artists we love.
         </p>
      </div>
    </section>
  );
}
