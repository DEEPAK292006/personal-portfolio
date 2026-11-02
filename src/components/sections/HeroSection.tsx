"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2 } from "lucide-react";
import { Hero3DObject } from "@/components/ui/Hero3DObject";

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dark-900"
    >
      {/* Top Ambient Gold Radial Glow */}
      <div className="ambient-glow-top" aria-hidden="true" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 my-auto">
        {/* Left Column: Exact Required Editorial Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 self-start">
            <span className="section-badge">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
              Creative Technologist & Builder
            </span>
          </div>

          {/* EXACT Required Copy Structure */}
          <div className="space-y-1">
            <p className="font-mono text-sm sm:text-base tracking-[0.2em] uppercase text-luxury-muted">
              HELLO, I’M
            </p>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-luxury-text uppercase">
              DEEPAK M<span className="text-luxury-gold">.</span>
            </h1>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight gold-text-gradient">
            Building Digital Experiences That Matter.
          </h2>

          {/* Editorial Quote */}
          <div className="relative pl-5 border-l-2 border-luxury-gold/60 my-2">
            <blockquote className="text-sm sm:text-base md:text-lg text-luxury-muted font-normal leading-relaxed italic">
              “I’m an aspiring Full-Stack Developer passionate about building meaningful digital products through technology, creativity and thoughtful engineering.”
            </blockquote>
          </div>

          {/* Primary Quick Tags */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-luxury-dim">
            <span className="px-2.5 py-1 rounded-md bg-dark-800 border border-luxury-border flex items-center gap-1.5 text-luxury-muted">
              <Code2 className="w-3.5 h-3.5 text-luxury-gold" /> Full-Stack Engineering
            </span>
            <span className="px-2.5 py-1 rounded-md bg-dark-800 border border-luxury-border flex items-center gap-1.5 text-luxury-muted">
              <Terminal className="w-3.5 h-3.5 text-luxury-gold" /> AI & TinyML
            </span>
            <span className="px-2.5 py-1 rounded-md bg-dark-800 border border-luxury-border flex items-center gap-1.5 text-luxury-muted">
              IoT & Embedded Systems
            </span>
            <span className="px-2.5 py-1 rounded-md bg-dark-800 border border-luxury-border text-luxury-muted">
              SRMIST B.Tech CSE (2029)
            </span>
          </div>

          {/* Buttons: Explore My Work & Get In Touch */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollTo("projects")}
              className="gold-button px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="ghost-button px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Deepak's Official Portrait + 3D WebGL Metallic Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Subtle Ambient Backlight Halo behind Portrait */}
          <div className="absolute inset-0 bg-radial-amber opacity-40 blur-2xl pointer-events-none" />

          {/* Interactive 3D WebGL Layer (Positioned behind/interlocking) */}
          <div className="absolute -top-10 -right-10 w-64 h-64 sm:w-80 sm:h-80 opacity-70 lg:opacity-85 pointer-events-none z-0">
            <Hero3DObject />
          </div>

          {/* Portrait Container with Pure Dark Luxury Treatment */}
          <div className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden luxury-card border border-luxury-border group">
            {/* Cinematic Golden Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 border border-luxury-gold/20 rounded-2xl z-20 pointer-events-none group-hover:border-luxury-gold/50 transition-colors" />

            {/* Real Professional Studio Portrait of Deepak M */}
            <Image
              src="/deepak-portrait.jpg"
              alt="Deepak M. — Aspiring Full-Stack Developer & Creative Technologist"
              fill
              priority
              className="object-cover object-top filter brightness-[0.96] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
            />

            {/* Bottom Floating Identity Plaque */}
            <div className="absolute bottom-4 inset-x-4 z-20 p-3.5 rounded-xl bg-dark-900/90 border border-luxury-border backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-sm font-semibold text-luxury-text">
                    Deepak M.
                  </h3>
                  <p className="font-mono text-[10px] text-luxury-gold tracking-wide">
                    SRMIST Tiruchirappalli • CSE
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Impact
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="mt-auto pt-12 flex flex-col items-center justify-center relative z-10">
        <button
          onClick={() => scrollTo("about")}
          className="group flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-luxury-dim hover:text-luxury-gold transition-colors focus:outline-none"
          aria-label="Scroll to About Section"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 rounded-full border border-luxury-border/80 p-1 flex justify-center group-hover:border-luxury-gold transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-luxury-gold"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
