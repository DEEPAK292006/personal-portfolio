"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Fast, elegant asset readiness progress simulation with zero artificial lag
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        const increment = Math.floor(Math.random() * 22) + 12;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark-900"
        >
          {/* Subtle Ambient Radial Gold Glow */}
          <div className="absolute inset-0 bg-radial-amber opacity-60 pointer-events-none" />

          {/* DM Monogram Vector Animation */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-28 h-28 mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_25px_rgba(193,139,74,0.35)]">
                <defs>
                  <linearGradient id="preloaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D3A66B" />
                    <stop offset="50%" stopColor="#C18B4A" />
                    <stop offset="100%" stopColor="#8E6533" />
                  </linearGradient>
                </defs>

                {/* Subtle boundary frame */}
                <rect
                  width="100"
                  height="100"
                  rx="24"
                  fill="#0D0D0D"
                  stroke="#C18B4A"
                  strokeWidth="1.2"
                  strokeOpacity="0.25"
                />

                {/* Animated Monogram Lines */}
                <motion.path
                  d="M 24 24 L 24 76 M 24 24 L 42 24 C 54 24 60 34 60 50 C 60 66 54 76 42 76 L 24 76"
                  fill="none"
                  stroke="url(#preloaderGold)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <motion.path
                  d="M 44 76 L 44 42 L 58 58 L 72 42 L 72 76"
                  fill="none"
                  stroke="#F5F2ED"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.95"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
                />

                <motion.circle
                  cx="58"
                  cy="58"
                  r="2.5"
                  fill="#D3A66B"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                />
              </svg>
            </div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="font-display text-xl tracking-[0.25em] font-medium text-luxury-text uppercase">
                Deepak M.
              </h2>
              <p className="font-mono text-xs tracking-widest text-luxury-gold mt-1 uppercase">
                Creative Technologist
              </p>
            </motion.div>

            {/* Progress Bar & Numeric Counter */}
            <div className="w-56 mt-8 flex flex-col items-center">
              <div className="w-full h-[2px] bg-dark-750 overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gold-gradient shadow-[0_0_12px_rgba(211,166,107,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="flex justify-between w-full mt-2 font-mono text-[10px] tracking-widest text-luxury-dim">
                <span>INITIALIZING ENGINE</span>
                <span className="text-luxury-gold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
