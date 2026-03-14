"use client";
export default function Marquee({ text = "SCROLL // ", speed = 30 }) {
  return (
    <div className="relative border-y border-white/10 bg-transparent py-4 overflow-hidden select-none z-20">
      <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: `${speed}s` }}>
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-4xl md:text-5xl font-power uppercase text-white/10 mx-6 flex items-center justify-center tracking-tighter">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
