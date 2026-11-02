"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { certificatesData } from "@/data/certificatesData";
import { Certificate } from "@/types";
import { Award, Trophy, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

interface AchievementsSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onSelectCertificate }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Cloud & AI", "Data & Analytics", "Hackathon & Innovation", "Industrial & Technical"];

  const filteredCerts = certificatesData.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  return (
    <section id="achievements" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-dark-900 border-t border-luxury-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="section-badge">VERIFIED MERIT & CREDENTIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-luxury-text">
            Achievements & Certifications<span className="text-luxury-gold">.</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-luxury-muted font-normal leading-relaxed">
            National hackathon standings, verified professional certifications from IBM, AWS, Microsoft, and MongoDB, and official industry citations.
          </p>
        </div>

        {/* Hackathon Showcase Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="luxury-card rounded-2xl p-6 border-l-4 border-l-luxury-gold">
            <div className="flex items-center gap-3 text-luxury-gold mb-2">
              <Trophy className="w-5 h-5" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider">HORIZONXT 2026</span>
            </div>
            <h3 className="font-display text-lg font-bold text-luxury-text">
              National Shortlist — Team Quantum Warriors
            </h3>
            <p className="text-xs text-luxury-muted mt-2 leading-relaxed">
              Selected at the national level for the Industrial AI Defect Inspector project, localizing sub-millimeter metal casting defects.
            </p>
          </div>

          <div className="luxury-card rounded-2xl p-6 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider">SMART INDIA HACKATHON</span>
            </div>
            <h3 className="font-display text-lg font-bold text-luxury-text">
              National Innovation Showcase — SolarAgar Pro
            </h3>
            <p className="text-xs text-luxury-muted mt-2 leading-relaxed">
              Smart Thermal-Managed Agarbatti Drying Chamber leveraging PCM thermal storage and load cell moisture calculus for rural artisans.
            </p>
          </div>

          <div className="luxury-card rounded-2xl p-6 border-l-4 border-l-amber-500">
            <div className="flex items-center gap-3 text-amber-400 mb-2">
              <Award className="w-5 h-5" />
              <span className="font-mono text-xs uppercase font-bold tracking-wider">MICROSOFT LEARN</span>
            </div>
            <h3 className="font-display text-lg font-bold text-luxury-text">
              17 Verified Power BI & Copilot Badges
            </h3>
            <p className="text-xs text-luxury-muted mt-2 leading-relaxed">
              Comprehensive certification in DAX calculations, semantic modeling, data cleansing, UX design, and Copilot AI orchestration.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-luxury-gold text-dark-900 font-semibold shadow-gold-glow"
                  : "bg-dark-800 text-luxury-muted hover:text-luxury-text border border-luxury-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between group hover:border-luxury-gold/50 cursor-pointer"
              onClick={() => onSelectCertificate(cert)}
            >
              <div>
                {/* Optional Certificate Thumbnail */}
                {cert.image && (
                  <div className="relative w-full h-36 mb-4 rounded-xl overflow-hidden bg-dark-900 border border-luxury-border">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] text-luxury-gold uppercase tracking-widest">
                    {cert.category}
                  </span>
                  {cert.badgeText && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-dark-750 text-luxury-dim border border-luxury-border">
                      {cert.badgeText}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-base font-bold text-luxury-text group-hover:text-luxury-goldBright transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-luxury-muted mt-1">
                  Issued by {cert.issuer}
                </p>

                {cert.credentialId && (
                  <p className="font-mono text-[10px] text-luxury-dim mt-2 truncate">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-luxury-border/60 flex items-center justify-between">
                <span className="font-mono text-[11px] text-luxury-dim">{cert.date}</span>
                <span className="text-xs font-semibold text-luxury-gold group-hover:underline flex items-center gap-1">
                  View Credential <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
