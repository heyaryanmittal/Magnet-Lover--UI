"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MagnetBoard() {
  const [magnets, setMagnets] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Generate 20 magnets with random positions and rotations
    const newMagnets = Array.from({ length: 20 }, (_, i) => {
      return {
        id: i + 1,
        src: `/magnets/${i + 1}.avif`,
        initialX: Math.random() * 80 + 5, // 5% to 85%
        initialY: Math.random() * 95 + 2, // 2% to 97% of total page height
        rotate: Math.random() * 60 - 30,
      };
    });
    setMagnets(newMagnets);
  }, []);

  if (magnets.length === 0) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-[100]"
      style={{ minHeight: '100%', width: '100%' }}
    >
      {magnets.map((magnet) => (
        <Magnet key={magnet.id} magnet={magnet} containerRef={containerRef} />
      ))}
    </div>
  );
}

function Magnet({ magnet, containerRef }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      dragElastic={0}
      initial={{ 
        left: `${magnet.initialX}%`, 
        top: `${magnet.initialY}%`, 
        rotate: magnet.rotate,
        scale: 0.1,
        opacity: 0
      }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { 
          type: "spring", 
          stiffness: 150, 
          damping: 15,
          delay: Math.random() * 0.8 
        }
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: magnet.rotate + (Math.random() * 10 - 5),
        zIndex: 200,
        transition: { duration: 0.2 }
      }}
      whileDrag={{ 
        scale: 1.15,
        rotate: magnet.rotate * 0.5,
        zIndex: 3000, 
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      className="absolute pointer-events-auto cursor-grab active:cursor-grabbing touch-none select-none"
      style={{ width: 'clamp(50px, 7vw, 100px)' }}
    >
      <div className="relative group">
        <img
          src={magnet.src}
          alt={`Magnet ${magnet.id}`}
          draggable={false}
          className="w-full h-auto drop-shadow-2xl transition-transform duration-300 pointer-events-none"
          style={{ 
            filter: isDragging 
              ? "drop-shadow(0 25px 40px rgba(0,0,0,0.8))" 
              : "drop-shadow(0 15px 25px rgba(0,0,0,0.6))" 
          }}
        />
        {/* Subtle highlight effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white/10 rounded-full blur-xl transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
}
