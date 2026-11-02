"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const haloConfig = { damping: 35, stiffness: 180, mass: 0.8 };
  const haloX = useSpring(mouseX, haloConfig);
  const haloY = useSpring(mouseY, haloConfig);

  useEffect(() => {
    // Only show on desktop/pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("interactive-hover");
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Amber Halo */}
      <motion.div
        className="absolute rounded-full border border-luxury-gold/40 bg-luxury-gold/5 backdrop-blur-[0.5px]"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 56 : 36,
          height: isPointer ? 56 : 36,
          borderColor: isPointer ? "rgba(211, 166, 107, 0.7)" : "rgba(193, 139, 74, 0.35)",
          backgroundColor: isPointer ? "rgba(193, 139, 74, 0.12)" : "rgba(193, 139, 74, 0.04)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Inner Precision Point */}
      <motion.div
        className="absolute rounded-full bg-luxury-gold"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 8 : 4,
          height: isPointer ? 8 : 4,
          backgroundColor: isPointer ? "#D3A66B" : "#C18B4A",
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
