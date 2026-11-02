"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Shield, Cpu, BookOpen } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-dark-900 border-t border-luxury-border">
      {/* Background Subtle Radial Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-radial-amber opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="section-badge">ABOUT DEEPAK M.</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-luxury-text">
            Bridging Physical Engineering & Digital Intelligence<span className="text-luxury-gold">.</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg text-luxury-muted font-normal leading-relaxed">
            A computer science engineer driven by the convergence of full-stack software architectures, industrial Internet of Things (IoT), TinyML edge intelligence, and grassroots frugal innovations.
          </p>
        </div>

        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-luxury-muted text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am pursuing my <strong className="text-luxury-text font-semibold">B.Tech in Computer Science and Engineering</strong> at{" "}
              <strong className="text-luxury-gold font-semibold">SRM Institute of Science and Technology, Tiruchirappalli</strong> (Expected Graduation: 2029). My academic curriculum grounds me in core Object-Oriented Programming (Java), Data Structures, Algorithms, Relational Database Systems, and Cybersecurity.
            </p>

            <p>
              Rather than confining myself to abstract theory, my journey is defined by <strong className="text-luxury-text font-semibold">tangible real-world implementations</strong>. During my hands-on industrial rotation at{" "}
              <strong className="text-luxury-gold font-semibold">Manatec Electronics Private Limited (MEPL)</strong>, an OEM automotive electronics manufacturing plant complying with IATF 16949 standards, I gained direct shop-floor insight into automotive TPMS and CTIS assembly, RF/BLE lifecycle testing jigs, and ERP Bill-of-Materials (BOM) serialization.
            </p>

            <p>
              This industrial exposure directly fueled my software building: from engineering the live <strong className="text-luxury-text font-semibold">Manatec Code Creator & ERP Codification Engine</strong> to architecting the <strong className="text-luxury-text font-semibold">EcoClean Smart Civic Platform</strong> and the <strong className="text-luxury-text font-semibold">SolarAgar Pro Smart Thermal Agarbatti Drying Chamber</strong> for national hackathons.
            </p>

            <p>
              As <strong className="text-luxury-text font-semibold">Technical & Core Team Lead of the Embedded Computing Club</strong> and <strong className="text-luxury-text font-semibold">Research Team Lead</strong> at SRMIST, I actively mentor peer engineers, conduct microcontroller bootcamps, and synthesize technical literature spanning frugal innovation and rural artisanal technology transfer.
            </p>

            {/* Quick Core Metric Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-dark-800 border border-luxury-border">
                <span className="font-display text-2xl font-bold text-luxury-gold block">28+</span>
                <span className="font-mono text-xs text-luxury-dim mt-1 block">GitHub Repositories</span>
              </div>
              <div className="p-4 rounded-xl bg-dark-800 border border-luxury-border">
                <span className="font-display text-2xl font-bold text-luxury-gold block">3</span>
                <span className="font-mono text-xs text-luxury-dim mt-1 block">Industrial Internships</span>
              </div>
              <div className="p-4 rounded-xl bg-dark-800 border border-luxury-border">
                <span className="font-display text-2xl font-bold text-luxury-gold block">17+</span>
                <span className="font-mono text-xs text-luxury-dim mt-1 block">Verified Credentials</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars & Verified Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-dark-800/90 border border-luxury-border space-y-4">
              <h3 className="font-display text-lg font-semibold text-luxury-text flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-luxury-gold" /> Academic Foundation
              </h3>
              <div className="space-y-1.5 text-xs text-luxury-muted">
                <p className="font-semibold text-luxury-text text-sm">
                  SRM Institute of Science and Technology
                </p>
                <p className="text-luxury-gold">B.Tech — Computer Science and Engineering</p>
                <p className="font-mono text-[11px] text-luxury-dim">Tiruchirappalli Campus • Expected 2029</p>
              </div>
              <div className="pt-2 border-t border-luxury-border/60 text-xs text-luxury-dim space-y-1">
                <span className="font-mono block uppercase text-[10px] text-luxury-gold">Key Coursework:</span>
                <span>Java OOPs • Data Structures • Database Systems • UI/UX Design • Cyber Security</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-800/90 border border-luxury-border space-y-4">
              <h3 className="font-display text-lg font-semibold text-luxury-text flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-luxury-gold" /> Verified Industry Exposure
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-luxury-text block">Manatec Electronics Private Limited (MEPL)</span>
                  <span className="text-luxury-dim font-mono">Automotive OEM Plant • IATF 16949 QMS • 6-Center Rotation</span>
                </div>
                <div>
                  <span className="font-semibold text-luxury-text block">Techy Geeks</span>
                  <span className="text-luxury-dim font-mono">Data Science Intern • Exemplary Completion Citation</span>
                </div>
                <div>
                  <span className="font-semibold text-luxury-text block">The Developers Arena</span>
                  <span className="text-luxury-dim font-mono">Java Developer Intern • Official Technical Excellence Citation</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-800/90 border border-luxury-border space-y-4">
              <h3 className="font-display text-lg font-semibold text-luxury-text flex items-center gap-2">
                <Cpu className="w-5 h-5 text-luxury-gold" /> Technical Focus & Curiosity
              </h3>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text border border-luxury-border">Full-Stack Web (Next.js)</span>
                <span className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text border border-luxury-border">Embedded IoT (ESP32)</span>
                <span className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text border border-luxury-border">Computer Vision (OpenCV)</span>
                <span className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text border border-luxury-border">TinyML Edge Inference</span>
                <span className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text border border-luxury-border">Sensor-Fused Safety</span>
                <span className="px-2.5 py-1 rounded bg-dark-750 text-luxury-text border border-luxury-border">Frugal Engineering</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
