"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectCategory } from "@/types";
import { Search, ExternalLink, Github, ArrowUpRight, FolderGit2 } from "lucide-react";

interface ProjectArchiveProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const categories: ProjectCategory[] = [
  "All",
  "Web Development",
  "Full-Stack",
  "AI / ML",
  "IoT / Embedded",
  "Software Applications",
];

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="archive" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dark-900 border-t border-luxury-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-badge mb-3">LEVEL B • COMPLETE VERIFIED INVENTORY</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-luxury-text">
              Project Archive & Repositories<span className="text-luxury-gold">.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-luxury-muted max-w-xl">
              An exhaustive archive of every verified project, research prototype, enterprise tool, and academic implementation.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-luxury-dim absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech, title, problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-800 border border-luxury-border rounded-full pl-10 pr-4 py-2 text-xs text-luxury-text placeholder-luxury-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-luxury-gold text-dark-900 font-semibold shadow-gold-glow"
                  : "bg-dark-800 text-luxury-muted hover:text-luxury-text hover:bg-dark-750 border border-luxury-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-between group hover:border-luxury-gold/50 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  {/* Card Header: Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-widest">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-dark-750 text-luxury-muted border border-luxury-border">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-luxury-text group-hover:text-luxury-goldBright transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-luxury-muted mt-1">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-luxury-muted mt-3 line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-luxury-border/60">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-750 text-luxury-dim"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-luxury-dim">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-luxury-gold group-hover:underline">
                      Explore Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-dark-750 text-luxury-muted hover:text-luxury-gold hover:bg-dark-700 transition-colors"
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-dark-750 text-luxury-muted hover:text-luxury-gold hover:bg-dark-700 transition-colors"
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-dark-800 rounded-2xl border border-luxury-border">
            <FolderGit2 className="w-10 h-10 text-luxury-dim mx-auto mb-3" />
            <p className="text-sm text-luxury-muted font-medium">No projects match your current search.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-mono text-luxury-gold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
