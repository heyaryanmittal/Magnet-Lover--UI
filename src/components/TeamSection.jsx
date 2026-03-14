"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamCard = ({ name, role, photo, rotate, delay = 0 }) => {
  return (
    <motion.div
      initial={{ 
        y: -400, 
        opacity: 0, 
        rotate: rotate - 20, 
        scale: 0.2, 
        z: -500 
      }}
      whileInView={{ 
        y: 0, 
        opacity: 1, 
        rotate: rotate, 
        scale: 1, 
        z: 0 
      }}
      whileHover={{ 
        scale: 1.15,
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ 
        duration: 1.8, 
        delay: delay, 
        type: "spring", 
        stiffness: 80, 
        damping: 12 
      }}
      className="relative w-[280px] h-[420px] md:w-[310px] md:h-[460px] shrink-0 pointer-events-auto group perspective-1000"
      style={{ zIndex: 10 }}
    >
      {/* 1. Plastic Lanyard Holder Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/20 shadow-2xl overflow-hidden magnet-shadow">
        
        {/* Top Slot */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-14 h-4 bg-black/60 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-8 h-1 bg-white/10 rounded-full" />
        </div>

        {/* 2. Interior Badge Content */}
        <div className="absolute inset-4 top-14 bg-[#120D14] rounded-[24px] overflow-hidden flex flex-col items-center">
            
            {/* Header Icons & Straps */}
            <div className="w-full flex justify-between p-4 relative z-10">
               <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50 85 C30 70 10 50 10 30 C10 15 25 10 40 20 C45 25 50 30 50 30 C50 30 55 25 60 20 C75 10 90 15 90 30 C90 50 70 70 50 85" fill="#ff4b82" />
                  </svg>
               </div>
               <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center border border-white/10">
                  <div className="w-3 h-2 bg-white/40 rounded-sm" />
               </div>
            </div>

            {/* Vertical Accent Strip */}
            <div className="absolute top-0 w-8 h-[160px] flex">
                <div className="flex-1 bg-accent-pink" />
                <div className="flex-1 bg-accent-yellow" />
                <div className="flex-1 bg-accent-green" />
                <div className="flex-1 bg-accent-cyan" />
            </div>

            {/* Profile Picture */}
            <div className="mt-8 relative z-20">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-[3px] border-white/30 overflow-hidden bg-black shadow-xl ring-8 ring-black/20">
                    <Image 
                      src={photo} 
                      alt={name} 
                      width={300} 
                      height={300} 
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                </div>
            </div>

            {/* Name and Role Box */}
            <div className="mt-auto bg-black/90 w-full py-6 px-4 flex flex-col items-center border-t border-white/10 relative z-10">
                <h3 className="text-3xl md:text-4xl font-power uppercase text-[#f5f5f5] tracking-tight leading-none mb-1">
                   {name}
                </h3>
                <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
                   {role}
                </p>
            </div>

            {/* AAA Background Text */}
            <div className="absolute bottom-16 w-full flex justify-center opacity-10">
                <span className="text-[80px] font-power uppercase text-white tracking-widest select-none">
                    AAA
                </span>
            </div>

        </div>

      </div>

      {/* Glossy Overlay Reflection */}
      <div className="absolute inset-0 pointer-events-none rounded-[32px] bg-gradient-to-tr from-white/0 via-white/[0.1] to-white/0 opacity-60" />
    </motion.div>
  );
};

export default function TeamSection() {
  const team = [
    { 
        name: "JAMES", 
        role: "MANAGING DIRECTOR", 
        photo: "/team/james.png",
        rotate: -6,
        delay: 0
    },
    { 
        name: "SHARON", 
        role: "CREATIVE DIRECTOR", 
        photo: "/team/sharon.png",
        rotate: 4,
        delay: 0.2
    }
  ];

  return (
    <section className="relative w-full py-40 pb-80 flex flex-col items-center bg-[#120D14] overflow-visible preserve-3d">
      
      {/* Decorative Title background - Perfectly spaced */}
      <div className="absolute top-[68%] left-1/2 -translate-x-1/2 opacity-[0.05] pointer-events-none z-0">
         <h2 className="text-[12vw] font-power uppercase leading-none text-white whitespace-nowrap tracking-tighter">
           FOUNDERS
         </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-12 md:gap-24 px-8 relative z-20">
        {team.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>

      {/* Authorized line - positioned clearly beneath FOUNDERS */}
      <div className="absolute top-[92%] left-1/2 -translate-x-1/2 z-10 text-center w-full">
         <div className="inline-block border border-white/10 px-6 py-2 bg-black/40 backdrop-blur-sm">
            <p className="font-mono text-[9px] md:text-xs uppercase tracking-[0.5em] text-white/40 font-bold">
               Authorized Personnel Only <span className="text-accent-pink ml-2">//</span> Access Level 03
            </p>
         </div>
      </div>

    </section>
  );
}
