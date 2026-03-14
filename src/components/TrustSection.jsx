"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TrustSection() {
  const cards = [
    {
      label: "PREMIUM QUALITY",
      title: "Premium quality that matches the artist's brand",
      desc: "Magnets are produced with photo-quality printing, Mylar gloss, and rigid cores for a substantial feel. They look professional on the merch table and reflect the same level of polish as the artist's music and visuals.",
      fullWidth: true
    },
    {
      label: "COLLABORATION",
      title: "Creative flexibility with real collaboration",
      desc: "Magnets are produced with photo-quality printing, Mylar gloss, and rigid cores for a substantial feel. They look professional on the merch table and reflect the same level of polish as the artist's music and visuals."
    },
    {
      label: "TOUR-FRIENDLY",
      title: "A touring-friendly, scalable partner",
      desc: "With fast turnaround, easy scaling, US-based production, and an understanding of touring constraints, Magnet Lover supports artists through entire cycles. Their long-term partnership mindset ensures sustained quality, reliability, and growth."
    }
  ];

  return (
    <section className="relative w-full bg-[#120D14] border-b border-[var(--grid-line-strong)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        
        {/* Top full-width item */}
        <div className="col-span-1 md:col-span-2 border-b border-[var(--grid-line-strong)] p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block">{cards[0].label}</span>
              <h3 className="text-4xl md:text-5xl font-power uppercase text-[#F5F5F3] leading-[1.1] tracking-tight max-w-xl">
                 {cards[0].title}
              </h3>
           </div>
           <p className="text-[#e8dbcc]/60 leading-relaxed text-lg max-w-lg lg:ml-auto">
              {cards[0].desc}
           </p>
        </div>

        {/* Bottom Left item */}
        <div className="p-12 lg:p-20 border-r border-[var(--grid-line-strong)] border-b md:border-b-0">
           <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block">{cards[1].label}</span>
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-power uppercase text-[#F5F5F3] leading-[1.1] tracking-tight mb-10 max-w-md">
              {cards[1].title}
           </h3>
           <p className="text-[#e8dbcc]/60 leading-relaxed text-lg max-w-md">
              {cards[1].desc}
           </p>
        </div>

        {/* Bottom Right item */}
        <div className="p-12 lg:p-20">
           <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block">{cards[2].label}</span>
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-power uppercase text-[#F5F5F3] leading-[1.1] tracking-tight mb-10 max-w-md">
              {cards[2].title}
           </h3>
           <p className="text-[#e8dbcc]/60 leading-relaxed text-lg max-w-md">
              {cards[2].desc}
           </p>
        </div>

      </div>
    </section>
  );
}
