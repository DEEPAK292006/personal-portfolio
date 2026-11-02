"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProjectArchive } from "@/components/sections/ProjectArchive";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { CertificateModal } from "@/components/ui/CertificateModal";
import { BackToTop } from "@/components/ui/BackToTop";

import { projectsData } from "@/data/projectsData";
import { Project, Certificate } from "@/types";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleOpenCertModal = (cert: Certificate) => {
    setSelectedCertificate(cert);
    setIsCertModalOpen(true);
  };

  const handleCloseCertModal = () => {
    setIsCertModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  return (
    <main className="min-h-screen bg-dark-900 text-luxury-text relative selection:bg-luxury-gold/30 selection:text-luxury-text">
      {/* Branded Loading Experience */}
      <Preloader />

      {/* Custom Amber Trailing Cursor */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Editorial About Section */}
      <AboutSection />

      {/* 3. Level A: Flagship Case Studies */}
      <FeaturedProjects
        projects={projectsData}
        onSelectProject={handleOpenProjectModal}
      />

      {/* 4. Level B: Complete Project Archive */}
      <ProjectArchive
        projects={projectsData}
        onSelectProject={handleOpenProjectModal}
      />

      {/* 5. Interactive Technical Skills Constellation */}
      <SkillsSection />

      {/* 6. Experience & Leadership Timeline */}
      <ExperienceTimeline />

      {/* 7. Achievements & Certified Credentials */}
      <AchievementsSection onSelectCertificate={handleOpenCertModal} />

      {/* 8. Powerful Final Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Detail Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
      />

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isCertModalOpen}
        onClose={handleCloseCertModal}
      />

      {/* Floating Back To Top */}
      <BackToTop />
    </main>
  );
}
