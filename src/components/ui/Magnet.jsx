"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Magnet({ src, alt, initialX = 0, initialY = 0, size = 150, rotation = 0 }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    if (distance < 400) {
      x.set(distanceX * 0.15);
      y.set(distanceY * 0.15);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        position: "absolute",
        left: initialX,
        top: initialY,
        rotate: rotation,
        zIndex: 40,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, rotate: rotation + 5 }}
      drag
      dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
      className="cursor-pointer"
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-none select-none mix-blend-screen"
        />
      </div>
    </motion.div>
  );
}
