import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core algorithmic foundations, type safety, and systems programming.",
    skills: [
      { name: "Java (Core & OOPs)", level: "Core", highlight: "Inheritance, Multi-Threading, Collections, File I/O" },
      { name: "Python", level: "Core", highlight: "AI/ML, Automation, Algorithmic Fleet Schedulers" },
      { name: "C / C++", level: "Advanced", highlight: "Embedded Firmware, Microcontroller Hardware Registers" },
      { name: "TypeScript", level: "Core", highlight: "Strict Type Systems, Next.js, Full-Stack Architecture" },
      { name: "JavaScript (ES6+)", level: "Core", highlight: "Async Engine, Web APIs, DOM Mechanics" },
      { name: "SQL", level: "Advanced", highlight: "Relational Queries, Indexing, Database Schema Design" },
      { name: "HTML5 & CSS3", level: "Core", highlight: "Semantic Hierarchy, Canvas API, Modern Layouts" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Architecting high-performance, cinematic, and responsive web experiences.",
    skills: [
      { name: "Next.js (App Router)", level: "Core", highlight: "Server Components, Server Actions, Route Handlers" },
      { name: "React 18", level: "Core", highlight: "Custom Hooks, State Architecture, Context API" },
      { name: "Tailwind CSS", level: "Core", highlight: "Custom Design Tokens, Luxury Dark Themes, Utility Systems" },
      { name: "Framer Motion", level: "Advanced", highlight: "Layout Morphing, Spring Physics, Scroll Interactions" },
      { name: "Three.js & WebGL", level: "Advanced", highlight: "3D Geometries, Metallic Shaders, Particle Fields" },
      { name: "Responsive Engineering", level: "Core", highlight: "Mobile-First Precision, Zero Horizontal Overflow" },
    ],
  },
  {
    id: "backend-cloud",
    name: "Backend & Cloud Services",
    description: "Robust server architectures, edge compute, and API orchestrations.",
    skills: [
      { name: "Node.js", level: "Core", highlight: "Event Loop, REST APIs, Backend Processing" },
      { name: "FastAPI & Flask", level: "Advanced", highlight: "High-Throughput Python Endpoints, ML Serving" },
      { name: "AWS Cloud", level: "Advanced", highlight: "Certified Data Engineering on AWS" },
      { name: "Google AI Studio", level: "Advanced", highlight: "Gemini 1.5 Pro / Flash Vision & Text Integration" },
      { name: "Vercel & Edge Deployment", level: "Core", highlight: "Global CDN, Serverless Functions, CI/CD" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational integrity, document persistence, and serialized local stores.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: "Prisma Modeling, Relational Integrity, Foreign Keys" },
      { name: "MongoDB", level: "Advanced", highlight: "MongoDB Academy Certified, Document Schemas" },
      { name: "Prisma ORM", level: "Advanced", highlight: "Type-Safe Client, Declarative Data Modeling" },
      { name: "Object Serialization", level: "Advanced", highlight: "Java Local Stream Persistence, Zero Data Loss" },
    ],
  },
  {
    id: "ai-ml",
    name: "AI, Machine Learning & Vision",
    description: "Computer vision defect localization, neural networks, and conversational speech.",
    skills: [
      { name: "Computer Vision (OpenCV)", level: "Core", highlight: "Surface Flaw Localization, Impeller Detection" },
      { name: "Artificial Intelligence", level: "Core", highlight: "IBM SkillsBuild AI Certified Credential" },
      { name: "Deep Learning (CNNs)", level: "Advanced", highlight: "Defect Classification, Feature Normalization" },
      { name: "TinyML & Edge AI", level: "Advanced", highlight: "Low-Power Sensor Telemetry & Inference on MCU" },
      { name: "Conversational Speech AI", level: "Proficient", highlight: "Clinical Triage Dialogue Tree Architecture" },
    ],
  },
  {
    id: "embedded-iot",
    name: "Embedded Systems & IoT",
    description: "Industrial hardware architecture, sensor fusion, and fail-safe safety logic.",
    skills: [
      { name: "ESP32 & Microcontrollers", level: "Core", highlight: "Closed-Loop PID, Interrupts, Multi-Sensor Telemetry" },
      { name: "Edge Sensor Fusion", level: "Advanced", highlight: "Optical Arc, Proximity & Thermal Dynamic Scoring" },
      { name: "Industrial Communication", level: "Advanced", highlight: "RF, BLE, and CAN Bus Protocols (MEPL Experience)" },
      { name: "Fail-Safe Separation Logic", level: "Core", highlight: "Hardware Relay Cutoffs & Safety Interlocks" },
      { name: "Thermal Management & Solar", level: "Advanced", highlight: "PCM Buffers, Copper Heat Exchangers, MPPT" },
    ],
  },
  {
    id: "enterprise-tools",
    name: "Industrial Standards & Analytics",
    description: "OEM automotive quality frameworks, ERP part numbering, and data intelligence.",
    skills: [
      { name: "IATF 16949 Standards", level: "Advanced", highlight: "Automotive OEM Quality Management Systems" },
      { name: "BOM & ERP Codification", level: "Core", highlight: "Material Requirements Taxonomy & Part Serialization" },
      { name: "Microsoft Power BI (17 Badges)", level: "Core", highlight: "DAX Calculations, Semantic Models, Dashboards" },
      { name: "Git & GitHub Workflow", level: "Core", highlight: "Version Control, Branching, Multi-Repo Governance" },
      { name: "Docker", level: "Proficient", highlight: "Containerized Microservices & Inference Runtimes" },
    ],
  },
  {
    id: "uiux-design",
    name: "UI/UX Design & Creative Direction",
    description: "Crafting editorial digital aesthetics with intentional micro-interactions.",
    skills: [
      { name: "Pure Dark Luxury Aesthetics", level: "Core", highlight: "Charcoal Canvases, Amber Lighting, Restraint" },
      { name: "Editorial Typography Pairing", level: "Core", highlight: "Space Grotesk + Plus Jakarta Sans + JetBrains Mono" },
      { name: "3D WebGL Interactions", level: "Advanced", highlight: "Mouse-Responsive Depth, Ambient Glows" },
      { name: "Design Systems & Tokenomics", level: "Core", highlight: "Color Scales, Modular Reusable Primitives" },
    ],
  },
];
