"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative py-40 border-b border-white/10 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
         <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-16">About Us</p>
         
         <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.4 }}
           viewport={{ once: true, amount: 0.15 }}
           className="text-4xl md:text-5xl font-power uppercase mb-12 leading-[1.1] tracking-[-0.03em] max-w-3xl mx-auto"
         >
           We’re on a <span className="font-serif italic text-white normal-case">mission</span> to <span className="font-unique text-accent-yellow">empower</span> artists and events with <span className="text-accent-cyan neon-cyan">more efficient</span> <span className="font-script text-white normal-case text-4xl transform rotate-3 inline-block ml-2">merchandise.</span>
         </motion.h2>

         <div className="text-2xl md:text-4xl text-white leading-relaxed max-w-2xl mx-auto">
           {[
             { text: "Because some of our best memories", class: "font-script block mb-4 transform -rotate-2" },
             { text: "are standing in a crowd", class: "font-serif italic text-accent-pink px-2" },
             { text: "watching the artists", class: "font-unique uppercase text-accent-green tracking-tighter" },
             { text: "we love.", class: "font-script text-white text-3xl" }
           ].map((line, i) => (
             <motion.span 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.0, delay: 0.2 + (i * 0.1) }}
               viewport={{ once: true, amount: 0.15 }}
               className={`block md:inline ${line.class}`}
             >
               {line.text}
             </motion.span>
           ))}
         </div>
      </div>
    </section>
  );
}
