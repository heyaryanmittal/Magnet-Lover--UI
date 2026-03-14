"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.5 }}
      >
        <div className="custom-cursor-dot" />
      </motion.div>
    </>
  );
}
