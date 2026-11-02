"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Users,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-950/85 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-850 border border-luxury-border rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 custom-scrollbar"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top Amber Lighting Edge */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-850/95 backdrop-blur-md border-b border-luxury-border">
              <div className="flex items-center gap-3">
                <span className="section-badge !text-[11px] !py-0.5">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-luxury-muted flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-luxury-gold inline-block animate-pulse" />
                  {project.status}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-dark-750 text-luxury-muted hover:text-luxury-text hover:bg-dark-700 transition-colors focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Header Title & Subtitle */}
              <div>
                <h2 id="modal-title" className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-luxury-text">
                  {project.title}
                </h2>
                <p className="mt-2 text-base text-luxury-goldBright font-medium">
                  {project.subtitle}
                </p>

                {/* Meta details */}
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-luxury-muted">
                  {project.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                      {project.date}
                    </span>
                  )}
                  {project.teamOrRole && (
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-luxury-gold" />
                      {project.teamOrRole}
                    </span>
                  )}
                </div>
              </div>

              {/* Metrics Highlights (if available) */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-luxury-border">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-dark-800/80 p-3 rounded-lg border border-luxury-border">
                      <span className="font-mono text-[10px] text-luxury-dim uppercase tracking-wider block">
                        {m.label}
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-luxury-goldBright mt-0.5 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Executive Overview */}
              <div>
                <h3 className="text-xs font-mono tracking-widest text-luxury-gold uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Executive Overview
                </h3>
                <p className="mt-2 text-sm sm:text-base text-luxury-muted leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-dark-900/90 p-5 rounded-xl border border-red-500/20">
                  <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
                    The Problem Statement
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-luxury-muted leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
                <div className="bg-dark-900/90 p-5 rounded-xl border border-luxury-gold/30">
                  <h4 className="font-mono text-xs font-bold text-luxury-goldBright uppercase tracking-wider">
                    The Engineered Solution
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-luxury-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deepak's Specific Contribution */}
              <div className="bg-dark-800/70 p-5 rounded-xl border border-luxury-border">
                <h4 className="font-mono text-xs font-bold text-luxury-gold uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Deepak's Direct Engineering Contribution
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-luxury-text leading-relaxed">
                  {project.deepakContribution}
                </p>
              </div>

              {/* Architecture Blueprint */}
              {project.architecture && (
                <div className="space-y-3">
                  <h4 className="font-mono text-xs font-bold text-luxury-gold uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Technical Architecture: {project.architecture.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed">
                    {project.architecture.description}
                  </p>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.architecture.keyComponents.map((comp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs font-mono text-luxury-muted bg-dark-900 p-2.5 rounded-lg border border-luxury-border"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div>
                <h4 className="font-mono text-xs font-bold text-luxury-gold uppercase tracking-wider mb-3">
                  Key Capabilities & Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-luxury-muted">
                      <CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Tags */}
              <div>
                <h4 className="font-mono text-xs font-bold text-luxury-gold uppercase tracking-wider mb-2.5">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text text-xs font-mono border border-luxury-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="pt-4 border-t border-luxury-border flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-gradient text-dark-900 font-semibold text-xs tracking-wider uppercase hover:shadow-gold-glow transition-all"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-dark-750 border border-luxury-border text-luxury-text hover:text-luxury-goldBright hover:border-luxury-gold transition-all text-xs font-mono font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
