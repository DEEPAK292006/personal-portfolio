"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-950 border-t border-luxury-border py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-luxury-border/60">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-dark-800 border border-luxury-gold/40 flex items-center justify-center shadow-gold-glow">
              <span className="font-display font-bold text-sm tracking-wider text-luxury-gold">
                DM
              </span>
            </div>
            <div>
              <span className="font-display text-base font-bold text-luxury-text block tracking-wider">
                DEEPAK M.
              </span>
              <span className="font-mono text-xs text-luxury-dim tracking-widest block">
                CREATIVE TECHNOLOGIST & BUILDER
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-luxury-muted">
            <a
              href="https://github.com/DEEPAK292006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-850 border border-luxury-border hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-m-488885383/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-850 border border-luxury-border hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:113930DEEPAK@gmail.com"
              className="p-2.5 rounded-lg bg-dark-850 border border-luxury-border hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-luxury-muted hover:text-luxury-gold transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="p-2 rounded-lg bg-dark-850 border border-luxury-border group-hover:border-luxury-gold transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Bottom Credits & Integrity Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-luxury-dim">
          <p>© {currentYear} Deepak M. All technical credentials verified.</p>
          <p className="flex items-center gap-1.5">
            Designed in Pure Dark Luxury with Next.js, TypeScript & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};
