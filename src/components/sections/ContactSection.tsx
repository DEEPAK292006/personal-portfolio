"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Github, Linkedin, Download, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });

      // Celebration confetti burst
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#C18B4A", "#D3A66B", "#F5F2ED"],
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("113930DEEPAK@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-dark-900 border-t border-luxury-border">
      {/* Background Subtle Radial Amber Spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-radial-bottom opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with EXACT Prompt Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="section-badge">INITIATE COLLABORATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-luxury-text">
            Let’s Create Something Extraordinary<span className="text-luxury-gold">.</span>
          </h2>
          <p className="text-base sm:text-lg text-luxury-muted font-normal leading-relaxed">
            Whether you are discussing engineering roles, collaborative research in AI/IoT, or innovative full-stack digital products, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-xl font-bold text-luxury-text">
                Direct Channels & Coordinates
              </h3>

              {/* Direct Email with One-Click Copy */}
              <div className="p-4 rounded-xl bg-dark-850 border border-luxury-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dark-750 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-luxury-dim uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:113930DEEPAK@gmail.com"
                      className="font-mono text-xs sm:text-sm text-luxury-text hover:text-luxury-gold transition-colors"
                    >
                      113930DEEPAK@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-dark-750 text-luxury-muted hover:text-luxury-gold transition-colors focus:outline-none"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Verified Profiles */}
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/deepak-m-488885383/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-850 border border-luxury-border hover:border-luxury-gold/40 hover:bg-dark-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/30 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-semibold text-luxury-text group-hover:text-luxury-goldBright transition-colors block">
                        LinkedIn Profile
                      </span>
                      <span className="font-mono text-[10px] text-luxury-dim">
                        linkedin.com/in/deepak-m-488885383
                      </span>
                    </div>
                  </div>
                  <span className="text-luxury-gold font-mono text-xs">Connect →</span>
                </a>

                <a
                  href="https://github.com/DEEPAK292006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-850 border border-luxury-border hover:border-luxury-gold/40 hover:bg-dark-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-dark-750 border border-luxury-border flex items-center justify-center text-luxury-text">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-semibold text-luxury-text group-hover:text-luxury-goldBright transition-colors block">
                        GitHub Profile
                      </span>
                      <span className="font-mono text-[10px] text-luxury-dim">
                        github.com/DEEPAK292006 • 28 Repos
                      </span>
                    </div>
                  </div>
                  <span className="text-luxury-gold font-mono text-xs">Explore →</span>
                </a>
              </div>

              {/* Verified Resume Download */}
              <div className="pt-2">
                <a
                  href="/deepak-resume.pdf"
                  download="Deepak_M_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gold-button py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Verified Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="luxury-card rounded-2xl p-6 sm:p-10">
              <h3 className="font-display text-xl font-bold text-luxury-text mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-luxury-muted mb-6">
                Your message is validated and transmitted with zero delay.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <p className="font-semibold">Transmission Confirmed</p>
                    <p className="mt-1 text-emerald-400/90 text-xs">
                      Thank you for reaching out! Your inquiry has been logged, and Deepak will review and reply to your email shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
                  <div>
                    <p className="font-semibold">Transmission Error</p>
                    <p className="mt-1 text-red-400/90 text-xs">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field for bot suppression */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="font-mono text-xs text-luxury-muted block">
                      Your Name <span className="text-luxury-gold">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full bg-dark-800 border ${
                        errors.name ? "border-red-500/80" : "border-luxury-border"
                      } rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-text placeholder-luxury-dim focus:outline-none focus:border-luxury-gold transition-colors`}
                    />
                    {errors.name && <span className="text-[11px] font-mono text-red-400">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="font-mono text-xs text-luxury-muted block">
                      Your Email <span className="text-luxury-gold">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. elena@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full bg-dark-800 border ${
                        errors.email ? "border-red-500/80" : "border-luxury-border"
                      } rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-text placeholder-luxury-dim focus:outline-none focus:border-luxury-gold transition-colors`}
                    />
                    {errors.email && <span className="text-[11px] font-mono text-red-400">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="font-mono text-xs text-luxury-muted block">
                    Subject / Discussion Scope
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Engineering Role / IoT Architecture Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-dark-800 border border-luxury-border rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-text placeholder-luxury-dim focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="font-mono text-xs text-luxury-muted block">
                    Message <span className="text-luxury-gold">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Describe your project, timeline, or engineering inquiry..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`w-full bg-dark-800 border ${
                      errors.message ? "border-red-500/80" : "border-luxury-border"
                    } rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-text placeholder-luxury-dim focus:outline-none focus:border-luxury-gold transition-colors resize-none`}
                  />
                  {errors.message && <span className="text-[11px] font-mono text-red-400">{errors.message}</span>}
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full gold-button py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
