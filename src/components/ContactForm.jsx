"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-32 px-4 border-b border-white/10 bg-transparent">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "circOut" }}
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-3xl mx-auto relative z-10 border border-white/10 p-8 md:p-16 bg-white/[0.02]"
      >
        
        {/* Horizontal Accent lines in the form box - Animates on scroll */}
        <div className="absolute top-0 left-0 w-full h-1 flex overflow-hidden">
           {['pink', 'yellow', 'green', 'cyan'].map((color, idx) => (
             <motion.div 
               key={color}
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 1.6, delay: idx * 0.1, ease: "circOut" }}
               viewport={{ once: true, amount: 0.15 }}
               className={`bg-accent-${color} flex-1 origin-left`} 
             />
           ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-power uppercase text-center mb-16 tracking-tight text-[#f5f5f5]">
          GET IN TOUCH
        </h2>

        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 font-bold">Your Name</label>
              <input type="text" className="w-full bg-transparent border border-white/10 p-4 focus:border-accent-yellow outline-none transition-colors font-medium" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 font-bold">Email Address</label>
              <input type="email" className="w-full bg-transparent border border-white/10 p-4 focus:border-accent-cyan outline-none transition-colors font-medium" placeholder="john@tours.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 font-bold">Subject</label>
            <input type="text" className="w-full bg-transparent border border-white/10 p-4 focus:border-accent-pink outline-none transition-colors font-medium" placeholder="Project Inquiry" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 font-bold">Message</label>
            <textarea className="w-full bg-transparent border border-white/10 p-4 h-40 focus:border-accent-green outline-none transition-colors font-medium" placeholder="Tell us about your tour..." />
          </div>

          <button className="w-full py-6 bg-white text-black font-power uppercase text-2xl hover:bg-accent-yellow transition-all duration-300 transform hover:scale-[1.01]">
            Send Message
          </button>
        </form>

      </motion.div>
    </section>
  );
}
