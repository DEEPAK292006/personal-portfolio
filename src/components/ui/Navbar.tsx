"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // ScrollSpy for sections
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-900/85 backdrop-blur-md border-b border-luxury-border py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* DM Monogram Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-luxury-gold rounded-lg p-1"
            aria-label="Deepak M. Home"
          >
            <div className="relative w-9 h-9 rounded-lg bg-dark-800 border border-luxury-gold/30 flex items-center justify-center overflow-hidden group-hover:border-luxury-gold/70 transition-colors shadow-[0_0_15px_rgba(193,139,74,0.15)]">
              <span className="font-display font-bold text-xs tracking-wider text-luxury-gold group-hover:text-luxury-goldBright transition-colors">
                DM
              </span>
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-wider text-luxury-text group-hover:text-luxury-goldBright transition-colors">
                DEEPAK M.
              </span>
              <span className="font-mono text-[10px] tracking-widest text-luxury-muted">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-800/90 border border-luxury-border rounded-full p-1.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-luxury-gold ${
                    isActive
                      ? "text-luxury-text font-semibold"
                      : "text-luxury-muted hover:text-luxury-text hover:bg-dark-750/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-luxury-gold/15 border border-luxury-gold/40 shadow-[0_0_15px_rgba(193,139,74,0.2)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/deepak-resume.pdf"
              download="Deepak_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-luxury-gold/40 text-luxury-goldBright hover:bg-luxury-gold/10 hover:border-luxury-gold transition-all duration-200 shadow-[0_0_15px_rgba(193,139,74,0.1)] focus:outline-none focus:ring-1 focus:ring-luxury-gold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gold-gradient text-dark-900 hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-800 border border-luxury-border text-luxury-text hover:text-luxury-gold transition-colors focus:outline-none focus:ring-1 focus:ring-luxury-gold"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-dark-900/95 border-b border-luxury-border backdrop-blur-xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg text-left text-sm tracking-wide transition-colors ${
                      isActive
                        ? "bg-luxury-gold/15 text-luxury-gold font-semibold border border-luxury-gold/30"
                        : "text-luxury-muted hover:text-luxury-text hover:bg-dark-800"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-gold-glow" />}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-luxury-border/60 flex flex-col gap-2.5">
                <a
                  href="/deepak-resume.pdf"
                  download="Deepak_M_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg border border-luxury-gold/40 text-luxury-gold text-center text-xs font-semibold flex items-center justify-center gap-2 hover:bg-luxury-gold/10"
                >
                  <Download className="w-4 h-4" />
                  Download Verified Resume
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-2.5 rounded-lg bg-gold-gradient text-dark-900 font-semibold text-xs tracking-wider uppercase text-center"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
