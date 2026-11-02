"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/skillsData";
import { Sparkles, CheckCircle2, Terminal, Code2, Database, Brain, Cpu, Wrench, Palette } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("languages");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCategoryData = skillsData.find((c) => c.id === selectedCategory) || skillsData[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Terminal className="w-4 h-4" />;
      case "frontend":
        return <Code2 className="w-4 h-4" />;
      case "backend-cloud":
        return <Database className="w-4 h-4" />;
      case "databases":
        return <Database className="w-4 h-4" />;
      case "ai-ml":
        return <Brain className="w-4 h-4" />;
      case "embedded-iot":
        return <Cpu className="w-4 h-4" />;
      case "enterprise-tools":
        return <Wrench className="w-4 h-4" />;
      case "uiux-design":
        return <Palette className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-dark-900 border-t border-luxury-border">
      {/* Background Gold Ambient */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-radial-amber opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="section-badge">TECHNICAL FOUNDATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-luxury-text">
            Interactive Technical Constellation<span className="text-luxury-gold">.</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-luxury-muted font-normal leading-relaxed">
            Verified engineering capabilities across software, hardware, and artificial intelligence — presented transparently without fabricated percentage bars.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {skillsData.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-luxury-gold text-dark-900 font-bold shadow-gold-glow"
                    : "bg-dark-800 text-luxury-muted hover:text-luxury-text hover:bg-dark-750 border border-luxury-border"
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display & Skill Constellation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-dark-800/90 border border-luxury-border space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-luxury-gold flex items-center gap-2">
                {getCategoryIcon(activeCategoryData.id)} {activeCategoryData.name}
              </span>
              <p className="text-sm text-luxury-muted leading-relaxed">
                {activeCategoryData.description}
              </p>
              <div className="pt-3 border-t border-luxury-border/60 font-mono text-[11px] text-luxury-dim">
                <span>{activeCategoryData.skills.length} VERIFIED SKILLS IN THIS DOMAIN</span>
              </div>
            </div>

            {/* Quick Competency Key */}
            <div className="p-4 rounded-xl bg-dark-850/60 border border-luxury-border/60 text-xs font-mono space-y-2">
              <span className="text-luxury-gold font-semibold uppercase text-[10px] block">Verified Competency Key:</span>
              <div className="flex items-center justify-between text-luxury-muted">
                <span>Core:</span>
                <span className="text-luxury-text">Primary daily production toolchain</span>
              </div>
              <div className="flex items-center justify-between text-luxury-muted">
                <span>Advanced:</span>
                <span className="text-luxury-text">Extensive project implementation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Constellation Cards */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {activeCategoryData.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className={`p-5 rounded-xl luxury-card transition-all relative ${
                        isHovered ? "border-luxury-gold shadow-gold-glow" : "border-luxury-border"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-display text-base font-semibold text-luxury-text">
                          {skill.name}
                        </h3>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            skill.level === "Core"
                              ? "bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/40"
                              : "bg-dark-750 text-luxury-dim border border-luxury-border"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {skill.highlight && (
                        <p className="text-xs text-luxury-muted mt-2 font-mono flex items-start gap-1.5 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0 mt-0.5" />
                          <span>{skill.highlight}</span>
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
