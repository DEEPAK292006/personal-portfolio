"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Certificate } from "@/types";
import { X, Award, CheckCircle, Calendar, Hash } from "lucide-react";
import Image from "next/image";

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose }) => {
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

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-950/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-dark-850 border border-luxury-border rounded-2xl shadow-2xl z-10 overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-luxury-border bg-dark-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-luxury-gold" />
                <span className="font-mono text-xs text-luxury-gold uppercase tracking-wider">
                  Verified Credential Detail
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-luxury-muted hover:text-luxury-text hover:bg-dark-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Optional Real Image Preview */}
              {certificate.image && (
                <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-luxury-border bg-dark-900">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              )}

              <div>
                <span className="section-badge !text-[11px] mb-2">{certificate.category}</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-luxury-text mt-1">
                  {certificate.title}
                </h3>
                <p className="text-sm font-medium text-luxury-goldBright mt-1">
                  Issued by {certificate.issuer}
                </p>
              </div>

              {/* Meta Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-luxury-border text-xs font-mono text-luxury-muted">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-luxury-gold" />
                  <span>Completion Date: {certificate.date}</span>
                </div>
                {certificate.credentialId && (
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-luxury-gold" />
                    <span className="truncate">ID: {certificate.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Verified Competencies */}
              <div>
                <h4 className="font-mono text-xs font-bold text-luxury-gold uppercase tracking-wider mb-2.5">
                  Verified Competencies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-800 text-xs text-luxury-text border border-luxury-border"
                    >
                      <CheckCircle className="w-3 h-3 text-luxury-gold" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
