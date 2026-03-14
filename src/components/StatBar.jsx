"use client";
import { motion } from "framer-motion";
import { Globe, PenTool, Award } from "lucide-react";

export default function StatBar() {
  const stats = [
    { icon: Globe, label: "PROUDLY MADE IN", value: "INDIA" },
    { icon: PenTool, label: "BESPOKE DESIGN", value: "CUSTOM SERVICES" },
    { icon: Award, label: "PREMIUM QUALITY", value: "PREMIUM & DURABLE" },
  ];

  return (
    <div className="grid md:grid-cols-3 border-b border-white/10">
      {stats.map((stat, i) => (
        <div key={i} className="p-8 md:p-12 border-r last:border-r-0 border-white/10 group flex flex-col gap-6">
          <div className="flex items-center gap-4 text-white/20 group-hover:text-white transition-colors">
            <stat.icon className="w-5 h-5" />
            <span className="text-[10px] font-mono tracking-widest uppercase">{stat.label}</span>
          </div>
          <h4 className="text-xl md:text-2xl font-bold uppercase leading-tight group-hover:text-accent-yellow transition-colors">
            {stat.value}
          </h4>
        </div>
      ))}
    </div>
  );
}
