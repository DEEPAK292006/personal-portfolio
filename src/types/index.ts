export type ProjectCategory = 
  | "All"
  | "Web Development"
  | "Full-Stack"
  | "AI / ML"
  | "IoT / Embedded"
  | "Software Applications";

export type ProjectStatus =
  | "Completed"
  | "Live"
  | "IoT Hardware Prototype"
  | "Sensor-Fused PPE Research Prototype"
  | "Prototype / Research"
  | "Concept / Planned"
  | "Academic Project";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  overview: string;
  problemStatement: string;
  solution: string;
  deepakContribution: string;
  techStack: string[];
  features: string[];
  architecture: {
    title: string;
    description: string;
    keyComponents: string[];
  };
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor?: string;
  date?: string;
  teamOrRole?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  organizationType: string;
  location: string;
  period: string;
  isInternship: boolean;
  isLeadership: boolean;
  credentialId?: string;
  description: string[];
  technologies: string[];
  keyHighlights: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: "Cloud & AI" | "Data & Analytics" | "Database & Backend" | "Hackathon & Innovation" | "Industrial & Technical";
  date: string;
  credentialId?: string;
  image?: string;
  skills: string[];
  verificationUrl?: string;
  badgeText?: string;
}
