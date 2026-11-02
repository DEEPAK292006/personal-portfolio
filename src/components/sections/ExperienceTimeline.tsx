"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experienceData";
import { Briefcase, Users, MapPin, Calendar, CheckCircle2, ChevronDown, Award } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "internship" | "leadership">("all");
  const [expandedId, setExpandedId] = useState<string | null>(experienceData[0].id);

  const filteredExperiences = experienceData.filter((exp) => {
    if (filter === "internship") return exp.isInternship;
    if (filter === "leadership") return exp.isLeadership;
    return true;
  });

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-dark-900 border-t border-luxury-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-badge mb-3">CHRONOLOGY & TENURE</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-luxury-text">
              Experience & Leadership<span className="text-luxury-gold">.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-luxury-muted max-w-xl">
              Authentic timeline of industrial OEM rotations, software engineering internships, and university technical leadership.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-dark-800 border border-luxury-border self-start">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                filter === "all" ? "bg-luxury-gold text-dark-900 font-semibold" : "text-luxury-muted hover:text-luxury-text"
              }`}
            >
              All Roles
            </button>
            <button
              onClick={() => setFilter("internship")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                filter === "internship" ? "bg-luxury-gold text-dark-900 font-semibold" : "text-luxury-muted hover:text-luxury-text"
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setFilter("leadership")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                filter === "leadership" ? "bg-luxury-gold text-dark-900 font-semibold" : "text-luxury-muted hover:text-luxury-text"
              }`}
            >
              Leadership
            </button>
          </div>
        </div>

        {/* Vertical Timeline Spine */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:inset-0 before:left-[11px] sm:before:left-[19px] before:w-[2px] before:bg-gradient-to-b before:from-luxury-gold before:via-luxury-gold/30 before:to-transparent">
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Glowing Node */}
                <div className="absolute -left-[30px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark-900 border-2 border-luxury-gold flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                </div>

                {/* Main Experience Card */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className={`luxury-card rounded-2xl p-6 sm:p-8 cursor-pointer transition-all ${
                    isExpanded ? "border-luxury-gold/50 shadow-gold-glow" : "border-luxury-border"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        {exp.isInternship ? (
                          <span className="section-badge !text-[10px] !py-0.5">
                            <Briefcase className="w-3 h-3" /> Internship
                          </span>
                        ) : (
                          <span className="section-badge !text-[10px] !py-0.5 !border-purple-500/40 !bg-purple-950/20 !text-purple-300">
                            <Users className="w-3 h-3" /> Leadership
                          </span>
                        )}
                        {exp.credentialId && (
                          <span className="font-mono text-[10px] text-luxury-dim">
                            ID: {exp.credentialId}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-luxury-text group-hover:text-luxury-goldBright transition-colors">
                        {exp.role}
                      </h3>

                      <p className="font-medium text-luxury-gold text-sm sm:text-base">
                        {exp.organization}
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-luxury-dim pt-1">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <button
                      className="self-start sm:self-center p-2 rounded-lg bg-dark-750 text-luxury-muted hover:text-luxury-text transition-colors"
                      aria-label="Toggle details"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-luxury-gold" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Key Highlights Bulleted */}
                  <div className="mt-5 grid grid-cols-1 gap-2 pt-4 border-t border-luxury-border/60">
                    {exp.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-luxury-text">
                        <CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Deep Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-5 border-t border-luxury-border space-y-4"
                    >
                      <h4 className="font-mono text-xs uppercase tracking-wider text-luxury-gold">
                        Comprehensive Role Scope & Deliverables
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-luxury-muted leading-relaxed">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} className="list-disc ml-5">
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Encountered */}
                      <div className="pt-2">
                        <span className="font-mono text-[10px] text-luxury-dim uppercase tracking-wider block mb-2">
                          Domain Skills & Technologies
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-dark-750 text-luxury-text border border-luxury-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
