"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { ArrowUpRight, Cpu, Layers, Sparkles, ExternalLink, Github } from "lucide-react";

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects, onSelectProject }) => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-20">
          <div className="inline-flex items-center gap-2">
            <span className="section-badge">LEVEL A • FLAGSHIP CASE STUDIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-luxury-text">
            Featured Engineering Case Studies<span className="text-luxury-gold">.</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-luxury-muted font-normal leading-relaxed">
            Four flagship implementations demonstrating hardware telemetry, full-stack civic platforms, sensor-fused industrial safety, and deep learning surface inspection.
          </p>
        </div>

        {/* Editorial Case Study Cards */}
        <div className="space-y-20">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-card rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden group"
              >
                {/* Ambient Card Background Glow */}
                <div
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: project.accentColor || "#C18B4A" }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Context, Problem/Solution, Metrics */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="section-badge !text-[11px]">{project.category}</span>
                      <span className="font-mono text-xs text-luxury-muted flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-luxury-gold inline-block animate-pulse" />
                        {project.status}
                      </span>
                      {project.date && (
                        <span className="font-mono text-xs text-luxury-dim">• {project.date}</span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-luxury-text group-hover:text-luxury-goldBright transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base font-medium text-luxury-gold">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-luxury-muted leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Metrics Grid */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="bg-dark-850 p-3 rounded-lg border border-luxury-border">
                            <span className="font-mono text-[10px] text-luxury-dim uppercase tracking-wider block">
                              {m.label}
                            </span>
                            <span className="font-display text-xs sm:text-sm font-bold text-luxury-text mt-0.5 block">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text text-xs font-mono border border-luxury-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="px-2 py-1 rounded bg-dark-750 text-luxury-dim text-xs font-mono">
                          +{project.techStack.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="gold-button px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                      >
                        <span>Deep Dive Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ghost-button px-5 py-2.5 rounded-full text-xs font-mono flex items-center gap-1.5"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ghost-button px-5 py-2.5 rounded-full text-xs font-mono flex items-center gap-1.5"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Blueprint Visualizer */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl bg-dark-900 border border-luxury-border p-6 sm:p-8 space-y-5 overflow-hidden shadow-2xl">
                      <div className="flex items-center justify-between pb-3 border-b border-luxury-border">
                        <span className="font-mono text-xs text-luxury-gold uppercase tracking-wider flex items-center gap-2">
                          <Layers className="w-4 h-4 text-luxury-gold" /> System Architecture
                        </span>
                        <span className="font-mono text-[10px] text-luxury-dim">VERIFIED BLUEPRINT</span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-display text-sm font-semibold text-luxury-text">
                          {project.architecture.title}
                        </h4>
                        <p className="text-xs text-luxury-muted leading-relaxed line-clamp-3">
                          {project.architecture.description}
                        </p>
                      </div>

                      {/* Component Flow Nodes */}
                      <div className="space-y-2 pt-2">
                        {project.architecture.keyComponents.slice(0, 3).map((comp, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-dark-800 border border-luxury-border text-xs font-mono text-luxury-text flex items-center gap-2.5"
                          >
                            <span className="w-5 h-5 rounded-md bg-dark-700 text-luxury-gold flex items-center justify-center text-[10px] font-bold">
                              0{idx + 1}
                            </span>
                            <span className="truncate">{comp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Deepak's Contribution Snippet */}
                      <div className="pt-3 border-t border-luxury-border/80">
                        <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-wider flex items-center gap-1.5 mb-1">
                          <Cpu className="w-3.5 h-3.5" /> Deepak's Key Contribution
                        </span>
                        <p className="text-xs text-luxury-muted line-clamp-2 italic">
                          "{project.deepakContribution}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
