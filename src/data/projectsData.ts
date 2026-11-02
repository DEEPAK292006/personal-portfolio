import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "solaragar-pro",
    title: "SolarAgar Pro",
    subtitle: "Smart Thermal-Managed Agarbatti Drying Chamber",
    category: "IoT / Embedded",
    status: "IoT Hardware Prototype",
    featured: true,
    accentColor: "#C18B4A",
    date: "2026",
    teamOrRole: "Hardware & Telemetry Architect | SIH 2026",
    overview:
      "A solar-powered smart thermal-managed drying chamber designed to provide uniform, scientific, and energy-efficient drying for artisanal incense manufacturing without fragrance degradation.",
    problemStatement:
      "Traditional incense drying relies completely on ambient sunlight and weather. High humidity causes erratic multi-day delays, open heating coils create dangerous hot spots that evaporate volatile fragrance oils, and traditional sensors merely guess dryness via air humidity rather than actual moisture loss.",
    solution:
      "Engineered a closed water circuit utilizing a 150W solar panel and MPPT controller, heating element, copper-tube perimeter heat exchangers, and a Phase Change Material (PCM) thermal buffer to distribute heat uniformly without sudden spikes. Implemented dual moisture removal (top exhaust + dual-bed silica/zeolite desiccant) and scientific weight-loss drying tracking via load cells.",
    deepakContribution:
      "Designed the complete electrical and embedded architecture around the ESP32. Implemented load cell (HX711) weight-reduction calculus for actual moisture loss calculation, multi-node DS18B20 temperature telemetry (PCM layer, water circuit, chamber), float sensor protection, and mechanical pressure safety valve design.",
    techStack: [
      "ESP32",
      "PCM Thermal Storage",
      "HX711 Load Cell",
      "DS18B20 Sensors",
      "Copper Tube Heat Exchanger",
      "Dual Desiccant System",
      "Embedded C++",
      "Solar MPPT",
    ],
    features: [
      "PCM Thermal Storage Layer to buffer temperature spikes and eliminate aroma evaporation",
      "HX711 Load Cell scientific moisture estimation based on actual physical weight loss",
      "Dual-Bed Silica Gel & Zeolite Desiccant mode for continuous monsoon drying",
      "Perimeter copper-tube fluid circulation for zero uneven hot spots",
      "ESP32 automated multi-sensor closed-loop drying algorithm",
      "Autonomous Solar + Battery Assisted fallback modes",
    ],
    architecture: {
      title: "Closed-Loop Thermal & Weight-Loss Drying Architecture",
      description:
        "The system circulates water heated to a maximum of 65°C through copper heat exchangers surrounding the insulated chamber. A PCM buffer absorbs peak energy and releases it steadily. An ESP32 samples temperature, humidity, water level, and HX711 load cell telemetry to dynamically adjust exhaust ventilation and desiccant regeneration.",
      keyComponents: [
        "150W Solar Array & 12V Lithium Storage with MPPT Controller",
        "Perimeter Copper Tube Distribution Network & DC Circulator Pump",
        "Phase Change Material (PCM) Thermal Stabilization Buffer",
        "Multi-point DS18B20 Temperature Probes & Ultrasonic/Float Cutoffs",
        "HX711 Micro-precision Strain Gauge Load Cell Array",
      ],
    },
    metrics: [
      { label: "Artisanal Throughput", value: "5–15 kg/day" },
      { label: "Water Temp Ceiling", value: "65°C Regulated" },
      { label: "Fragrance Retention", value: "100% Volatiles Saved" },
      { label: "Energy Source", value: "100% Solar / Off-Grid" },
    ],
  },
  {
    id: "ecoclean",
    title: "EcoClean",
    subtitle: "Smart Waste Management & Civic AI Intelligence Platform",
    category: "Full-Stack",
    status: "Completed",
    featured: true,
    accentColor: "#059669",
    date: "2026",
    teamOrRole: "Full-Stack Developer",
    overview:
      "A modern, civic-grade municipal waste management web application that empowers citizens to participate in sustainable segregation through AI-assisted reporting, live truck tracking, and gamified recycling tokenomics.",
    problemStatement:
      "Urban municipalities struggle with inefficient segregation compliance, unmonitored illegal dumping hotspots, lack of collection route transparency, and an absence of direct incentives for citizen participation.",
    solution:
      "Built a full-stack platform featuring Google AI Studio image classification for automated waste categorization, live GPS collection vehicle tracking with simulated WebSockets, community impact dashboards, illegal dumping dispatch reporting, and an integrated recycling rewards marketplace.",
    deepakContribution:
      "Spearheaded end-to-end full-stack development using Next.js 15 App Router, TypeScript, and Tailwind CSS. Implemented the Google AI triage integration, real-time route map visualization, role-based citizen and administrative portals, and the gamification reward ledger.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Google AI Studio",
      "Framer Motion",
      "Prisma ORM",
      "PostgreSQL",
      "Leaflet Maps",
    ],
    features: [
      "Computer vision waste triage estimating material type, confidence score, and toxicity",
      "Live GPS municipal waste collection vehicle telemetry and ETA tracking",
      "Citizen Reward Points and Eco-Marketplace redeeming compost kits and recycling bins",
      "Geo-tagged illegal dumping evidence submission with severity prioritization",
      "Real-time municipal administrative command center and analytics graphs",
      "Gamified community leaderboard across wards and cities",
    ],
    architecture: {
      title: "Civic Event-Driven Full-Stack Architecture",
      description:
        "Next.js 15 App Router serves both citizen-facing PWAs and administrative analytics dashboards. Image uploads are processed via Gemini API vision models for categorization. Geospatial collection truck routes are tracked via real-time telemetry endpoints.",
      keyComponents: [
        "Next.js 15 App Router Architecture with Server Actions",
        "Google AI Studio / Gemini Vision Model Pipeline",
        "Leaflet Geospatial Fleet Tracking & Route Corridors",
        "Prisma Database Schema with Citizen, Collection & Report models",
      ],
    },
    metrics: [
      { label: "Inspection Speed", value: "<1.2s AI Classification" },
      { label: "Municipal Coverage", value: "Ward-level Mapping" },
      { label: "GitHub Stars", value: "1 Active Star" },
      { label: "Platform Readiness", value: "Full-Stack Production" },
    ],
    githubUrl: "https://github.com/DEEPAK292006/ECO-CLEAN",
  },
  {
    id: "safegear-connect",
    title: "SafeGear Connect",
    subtitle: "Sensor-Fused PPE with Dynamic Risk Scoring for High-Hazard Training",
    category: "IoT / Embedded",
    status: "Sensor-Fused PPE Research Prototype",
    featured: true,
    accentColor: "#D3A66B",
    date: "2026",
    teamOrRole: "Embedded Systems & Risk Telemetry Engineer",
    overview:
      "A smart industrial PPE architecture combining multi-sensor telemetry with edge risk-scoring algorithms to safeguard technical trainees in electrical substation and high-temperature welding environments.",
    problemStatement:
      "During electrical and welding apprenticeship training, catastrophic injuries occur when trainees unknowingly bypass mandatory safety equipment (arc shields, insulated gloves) or enter live high-voltage / lethal radiation zones without supervisory awareness.",
    solution:
      "Engineered an intelligent wearable harness with sensor-fused edge intelligence. The system samples optical welding arc emissions, magnetic field proximity to high-voltage lines, volatile fumes, and trainee posture to calculate a continuous 0–100 dynamic risk score, triggering immediate fail-safe machine lockouts upon protocol breach.",
    deepakContribution:
      "Formulated the edge sensor fusion model and fail-safe separation logic. Defined real-time risk index thresholds, sensor calibration algorithms for optical and proximity inputs, and the wireless alert broadcast mechanism.",
    techStack: [
      "Embedded C++",
      "ESP32 Microcontroller",
      "TinyML Edge Inference",
      "IR & UV Arc Detection",
      "Magnetic Proximity Sensors",
      "BLE Telemetry",
      "Industrial Fail-Safe Relays",
    ],
    features: [
      "Dynamic Multi-Parameter Risk Scoring (0–100 scale) updated in real-time at the edge",
      "Optical Arc Flash & UV sensor detecting unshielded welding ignition within 35ms",
      "High-Voltage non-contact electromagnetic field proximity alarm",
      "Fail-Safe Separation Principle: Hardwired machine cut-off relays on safety breach",
      "Supervisor dashboard streaming live student trainee telemetry via BLE/WiFi mesh",
      "Ruggedized, low-power industrial enclosure design",
    ],
    architecture: {
      title: "Edge Sensor Fusion & Machine Interlock Protocol",
      description:
        "Sensor clusters on the helmet, gloves, and vest feed raw telemetry into an ESP32 edge processor running a fused state-machine. If cumulative risk exceeds threshold values or mandatory PPE is unclasped, an interlock relay command trips power to the welding rig or equipment instantly.",
      keyComponents: [
        "Edge Microcontroller with Ultra-Low Latency Interrupt Loops",
        "Fused Optical, Electromagnetic & Environmental Sensor Array",
        "Hardware Interlock Wireless Relay Receiver",
        "Real-Time Supervisor Monitoring Interface",
      ],
    },
    metrics: [
      { label: "Arc Breach Response", value: "<35ms Reaction" },
      { label: "Telemetry Rate", value: "50Hz Edge Sampling" },
      { label: "Safety Principle", value: "Hardware Fail-Safe" },
      { label: "Target Domains", value: "Welding & Electrical" },
    ],
  },
  {
    id: "horizonxt-ai-inspector",
    title: "Industrial AI Inspector",
    subtitle: "Automated Product & Metal Surface Defect Detection System (HorizonXT / McDefect)",
    category: "AI / ML",
    status: "Completed",
    featured: true,
    accentColor: "#C18B4A",
    date: "2026",
    teamOrRole: "AI / Computer Vision Engineer | Team Quantum Warriors",
    overview:
      "A high-precision automated surface inspection and defect localization system engineered to detect microscopic cracks, voids, and casting flaws in industrial metal components such as pump impellers.",
    problemStatement:
      "India's manufacturing sector loses crores annually to post-assembly equipment failures. Manual inspection of raw and machined castings is slow, fatigue-prone, and inconsistent, missing sub-millimeter defects in critical aerospace, defense, and automotive parts.",
    solution:
      "Deployed a multi-stage deep learning and computer vision pipeline. The system acquires high-resolution product imagery, detects and segments the target component (e.g. pump impeller), extracts metallic surface textures, localizes flaw regions, classifies defect severities, and delivers instant Pass / Fail / Review automated decisions.",
    deepakContribution:
      "Represented Team Quantum Warriors (Shortlisted for HORIZONXT 2026). Collaborated on computer vision model inference, image normalization under industrial glare, bounding-box defect classification, and integrating inspection evidence reporting.",
    techStack: [
      "Python",
      "OpenCV",
      "PyTorch / TensorFlow",
      "Convolutional Neural Networks",
      "FastAPI",
      "Next.js Dashboard",
      "Docker",
    ],
    features: [
      "Automated pump impeller component localization and orientation alignment",
      "Multi-class surface defect inspection: cracks, pitting, porosity, blowholes, abrasions",
      "Bounding-box defect localization with pixel-level flaw area measurement",
      "Tri-state sorting engine: Automated Pass / Fail / Review routing",
      "Comprehensive inspection evidence audit logging with image annotation history",
      "Zero Defect Zero Effect (ZED) compliance alignment for heavy manufacturing",
    ],
    architecture: {
      title: "End-to-End Industrial Computer Vision Pipeline",
      description:
        "High-resolution cameras transmit component feeds to an inference server running optimized CNN models. Images undergo illumination correction, component segmentation, texture feature extraction, and defect classification. Results are transmitted to industrial sorting actuators and logged in quality audit tables.",
      keyComponents: [
        "High-Speed Industrial Image Acquisition & Normalization Pipeline",
        "Component Geometry & Impeller Segmentation Neural Network",
        "Defect Localization & Severity Classification Backbone",
        "Quality Audit Telemetry & PLC Actuator Control Interface",
      ],
    },
    metrics: [
      { label: "Inference Time", value: "<150ms / component" },
      { label: "Classification", value: "Multi-class Flaw Detection" },
      { label: "Hackathon Standing", value: "HorizonXT Shortlisted" },
      { label: "Target Sector", value: "Heavy Metal & OEM Plants" },
    ],
    githubUrl: "https://github.com/tezansahu/McDefect",
  },
  {
    id: "smart-hazard-protection-3d",
    title: "Smart Hazard Protection 3D Architecture",
    subtitle: "Interactive WebGL Digital Twin for Industrial Safety",
    category: "IoT / Embedded",
    status: "Live",
    featured: false,
    accentColor: "#C18B4A",
    date: "2026",
    overview:
      "An interactive 3D spatial model and digital twin depicting worker proximity zones, sensor mesh topology, and automated barrier interlocks in hazardous industrial plant environments.",
    problemStatement:
      "Industrial safety protocols are traditionally documented in static 2D manuals that fail to communicate dynamic 3D line-of-sight risks and spatial buffer zones around dangerous machinery.",
    solution:
      "Created a full 3D interactive WebGL environment demonstrating how real-time wearable beacons trigger spatial warning rings, hazard boundaries, and automated cut-offs.",
    deepakContribution:
      "Built and deployed the 3D model architecture, interactive camera orbits, zone lighting triggers, and live WebGL presentation on Vercel.",
    techStack: ["Three.js", "WebGL", "HTML5", "JavaScript", "Vercel"],
    features: [
      "Interactive 3D camera controls with orbit, zoom, and target inspection",
      "Dynamic color-coded spatial danger zones around simulated industrial machinery",
      "Visual representation of wearable sensor nodes and antenna ranges",
      "Zero-dependency lightweight WebGL delivery",
    ],
    architecture: {
      title: "WebGL 3D Digital Twin Engine",
      description: "Client-side Three.js scene utilizing custom geometric meshes, ambient lighting, and mouse-controlled orbit controls.",
      keyComponents: ["Three.js Scene Graph", "WebGL Renderer", "OrbitControls Camera Controller"],
    },
    liveUrl: "https://shps3dmodel.vercel.app",
    githubUrl: "https://github.com/DEEPAK292006/Smart_Hazard_Protection_System_Architecture_3D_MODEL",
  },
  {
    id: "tamil-kudil-cafe",
    title: "Tamil Kudil Cafe Thanjavur",
    subtitle: "Commercial Restaurant Order Management & Billing Engine",
    category: "Full-Stack",
    status: "Live",
    featured: false,
    accentColor: "#C18B4A",
    date: "2026",
    overview:
      "A fast, production-grade billing and order dispatch system engineered for high-turnover dining operations at Tamil Kudil Cafe, Thanjavur.",
    problemStatement:
      "Traditional manual restaurant billing causes peak-hour queue bottlenecks, kitchen ticketing discrepancies, and lost sales data tracking.",
    solution:
      "Designed an intuitive web application providing instant table bill generation, tax calculations, daily sales analytics, and itemized receipts with zero friction.",
    deepakContribution:
      "Developed the backend logic, menu catalog, tax calculus, and receipt printing layout; deployed the live platform on Vercel.",
    techStack: ["Python", "Flask / Web Core", "JavaScript", "HTML5", "Tailwind CSS", "Vercel"],
    features: [
      "Instant itemized billing with automated GST and discount computation",
      "Fast keyboard-optimized menu search and cart aggregation",
      "Daily revenue breakdown and product sales velocity tracking",
      "Mobile-friendly interface for table-side order taking",
    ],
    architecture: {
      title: "Lightweight Restaurant POS & Billing Architecture",
      description: "Python-driven backend handling menu state, transaction logs, and printable thermal receipt formatting.",
      keyComponents: ["Order & Cart Engine", "Dynamic Tax & Discount Calculator", "Daily Revenue Aggregator"],
    },
    liveUrl: "https://tamil-kudil-cafe-thanjavur.vercel.app",
    githubUrl: "https://github.com/DEEPAK292006/Tamil-Kudil-CAFE-THANJAVUR",
  },
  {
    id: "manatec-code-creator",
    title: "Manatec Code Creator & Codification Engine",
    subtitle: "Industrial OEM Part Numbering & ERP Codification System",
    category: "Software Applications",
    status: "Live",
    featured: false,
    accentColor: "#D3A66B",
    date: "2026",
    overview:
      "An automated enterprise part codification engine conceived during Deepak's internship at Manatec Electronics Private Limited (MEPL) to standardize OEM component serialization across MRP and ERP workflows.",
    problemStatement:
      "In large automotive OEM manufacturing plants complying with IATF 16949, manual part numbering across thousands of raw materials, sub-assemblies, and PCBA components results in duplicate inventory codes and production delays.",
    solution:
      "Created an intelligent codification tool that generates standardized, deterministic alphanumeric item codes based on product category, sub-module taxonomy, and engineering specifications using Gemini AI assistance.",
    deepakContribution:
      "Engineered the codification rules derived from MEPL's Bill of Materials (BOM) hierarchy, integrated Next.js with Gemini API for automated item classification, and deployed the tool live on Vercel.",
    techStack: ["TypeScript", "Next.js", "Gemini API", "Tailwind CSS", "Vercel"],
    features: [
      "Automated IATF 16949-aligned alphanumeric part serialization",
      "Dynamic BOM taxonomy mapping across electrical, mechanical, and sensor parts",
      "Gemini AI integration for intelligent component description parsing",
      "Instant copy and ERP database export formatting",
    ],
    architecture: {
      title: "ERP Item Codification Pipeline",
      description: "Next.js application evaluating taxonomy rules and invoking LLM parsing to transform free-text component specifications into structured ERP keys.",
      keyComponents: ["BOM Hierarchy Mapper", "Gemini AI Classification Service", "Validation & Code Formatter"],
    },
    liveUrl: "https://manatec-code-creator.vercel.app",
    githubUrl: "https://github.com/DEEPAK292006/Manatec-code-creator",
  },
  {
    id: "maintenance-scheduler",
    title: "Maintenance Scheduler Engine",
    subtitle: "Capacity-Constrained Preventive Maintenance & Fleet Asset Triage",
    category: "Software Applications",
    status: "Completed",
    featured: false,
    accentColor: "#C18B4A",
    date: "2026",
    overview:
      "A dependency-free Python engineering system engineered to audit machinery fleets, calculate preventive maintenance intervals, detect overdue assets, and triage capital replacements under maintenance bandwidth constraints.",
    problemStatement:
      "Industrial plants with hundreds of operational machines suffer unexpected downtime because maintenance teams fail to balance calendar-based service with operating-hour wear and technician capacity.",
    solution:
      "Developed a mathematical scheduling algorithm that ingests equipment logs, calculates risk-weighted maintenance deadlines, flags critical replacement candidates, and prioritizes work orders against technician availability.",
    deepakContribution:
      "Authored the complete Python codebase from scratch without external dependencies, implementing clean object-oriented data structures, priority queues, and deterministic maintenance scoring models.",
    techStack: ["Python", "Algorithms", "Object-Oriented Programming", "Fleet Management"],
    features: [
      "Dynamic preventive maintenance date calculus based on operational duty cycles",
      "Capital asset replacement scoring identifying machinery past economical repair",
      "Technician capacity-constrained dispatch optimization",
      "Terminal and tabular reporting of urgent and overdue work orders",
    ],
    architecture: {
      title: "Algorithmic Fleet Prioritization Pipeline",
      description: "Pure Python architecture with zero third-party dependencies utilizing object models, priority heaps, and chronological date calculus.",
      keyComponents: ["Asset Registry & Usage Model", "Degradation Rate Calculator", "Capacity Scheduling Dispatcher"],
    },
    githubUrl: "https://github.com/DEEPAK292006/Maintenance-Scheduler",
  },
  {
    id: "special-eye-care",
    title: "Special Eye Care Medical Platform",
    subtitle: "Accessible Vision Health Triage & Optical Consultation Portal",
    category: "Web Development",
    status: "Live",
    featured: false,
    accentColor: "#059669",
    date: "2026",
    overview:
      "A healthcare web platform tailored for preliminary visual symptom assessment, optical consultation scheduling, and eye health guidance.",
    problemStatement:
      "Patients frequently delay routine eye examinations due to complicated hospital booking flows and lack of basic vision health self-assessment information.",
    solution:
      "Built a patient-friendly digital portal providing quick symptom checklists, automated consultation reminders, and educational optical hygiene modules.",
    deepakContribution:
      "Designed and coded the frontend and backend workflows, interactive appointment form, and deployed the live system on Vercel.",
    techStack: ["TypeScript", "Python", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Visual symptom assessment questionnaire",
      "Seamless doctor consultation booking interface",
      "Corrective lens prescription history viewer",
      "High-contrast accessible dark UI design",
    ],
    architecture: {
      title: "Healthcare Booking & Assessment Workflow",
      description: "Responsive React frontend with client-side validation and automated consultation record persistence.",
      keyComponents: ["Triage Assessment Form", "Appointment Calendar Engine", "Prescription Portal"],
    },
    liveUrl: "https://special-eye-care-project-j6ql.vercel.app",
    githubUrl: "https://github.com/DEEPAK292006/special-eye-care-project",
  },
  {
    id: "auto-id-generator",
    title: "Auto ID Generator",
    subtitle: "Automated Enterprise Credential & Badge Generation Suite",
    category: "Web Development",
    status: "Live",
    featured: false,
    accentColor: "#C18B4A",
    date: "2026",
    overview:
      "A high-speed browser-based identification badge generation tool creating print-ready student and employee credentials with automated barcode and QR encoding.",
    problemStatement:
      "Generating thousands of institutional ID cards manually in graphic design software is repetitive, prone to typos, and takes weeks during admissions.",
    solution:
      "Engineered an automated web tool that parses CSV student rosters and renders custom vector badges instantly with embedded photos, barcodes, and exportable PDF prints.",
    deepakContribution:
      "Built the dynamic HTML5 Canvas rendering engine, badge template customizer, and export pipeline.",
    techStack: ["TypeScript", "React", "HTML5 Canvas", "Tailwind CSS", "Vercel"],
    features: [
      "Live canvas badge preview with drag-and-drop photo positioning",
      "Automated dynamic barcode and QR code generation from student IDs",
      "Batch print layout generator for high-resolution card printers",
      "Customizable institutional themes and typography presets",
    ],
    architecture: {
      title: "Client-Side Vector Badge Generation Engine",
      description: "Direct pixel-perfect rendering using HTML5 Canvas with client-side blob export for zero server latency.",
      keyComponents: ["Canvas Rendering Pipeline", "Barcode Encoder", "Export PDF/PNG Engine"],
    },
    liveUrl: "https://auto-id-generator.vercel.app",
    githubUrl: "https://github.com/DEEPAK292006/AUTO-ID-GENERATOR",
  },
  {
    id: "campusbite",
    title: "CampusBite",
    subtitle: "Campus Food, Grocery & Medicine Nocturnal Delivery Platform",
    category: "Full-Stack",
    status: "Concept / Planned",
    featured: false,
    accentColor: "#D3A66B",
    date: "2026",
    overview:
      "A planned hyper-local university delivery platform designed to connect hostel residents with on-campus cafeterias, stationery shops, and nocturnal emergency medical essentials.",
    problemStatement:
      "Hostel students face restricted campus entry after hours, leaving them with zero access to essential medications, groceries, or hot food during late-night exam study blocks.",
    solution:
      "Formulated a peer-to-peer campus delivery network featuring synchronized dorm room delivery corridors, curfew-compliant drop zones, and digital hostel billing.",
    deepakContribution:
      "Conceived the project architecture, database schemas, and delivery route corridors; initialized the project repository.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    features: [
      "Dormitory floor-specific delivery routing",
      "Late-night emergency medical dispensary dispatch",
      "Group ordering feature to split delivery surcharges",
      "Student digital wallet and campus card integration",
    ],
    architecture: {
      title: "Campus Micro-Logistics Conceptual Architecture",
      description: "Microservices design for localized ordering, automated dispatch matching, and real-time order status pings.",
      keyComponents: ["Order & Catalog Service", "Peer Courier Dispatch Matrix", "Hostel Delivery Corridors"],
    },
    githubUrl: "https://github.com/DEEPAK292006/CAMPUSBITE",
  },
  {
    id: "hostel-room-allocation",
    title: "Hostel Room Allocation Analyzer",
    subtitle: "Combinatorial Room Allocation & Vacancy Fragmentation Engine",
    category: "Software Applications",
    status: "Academic Project",
    featured: false,
    accentColor: "#C18B4A",
    date: "2025",
    overview:
      "An academic computer science algorithmic project analyzing student preference matrices, room vacancy fragmentation, and optimal room cluster assignment at SRMIST.",
    problemStatement:
      "Hostel wardens struggle with manual room allotment, creating isolated single vacancies that prevent roommate group assignments and cause uneven hall occupancy.",
    solution:
      "Designed a Java combinatorial allocation algorithm that clusters students by academic department and study habits while minimizing fragmented single beds.",
    deepakContribution:
      "Authored the allocation algorithm, student preference constraint matrix, and vacancy defragmentation metrics.",
    techStack: ["Java", "Data Structures", "Combinatorial Algorithms", "File I/O"],
    features: [
      "Constraint satisfaction algorithm for student roommate preferences",
      "Vacancy fragmentation index measuring spatial bed distribution",
      "Automated hostel floor-plan report generator",
    ],
    architecture: {
      title: "Constraint Satisfaction Room Allotment Model",
      description: "Java-based algorithmic system parsing student rosters and room graphs to execute optimal clustering.",
      keyComponents: ["Constraint Solver", "Student Preference Matrix", "Defragmentation Engine"],
    },
  },
  {
    id: "airline-management-system",
    title: "Airline Operations Management System",
    subtitle: "Enterprise Flight Scheduling & Passenger Reservation Core",
    category: "Software Applications",
    status: "Completed",
    featured: false,
    accentColor: "#C18B4A",
    date: "2026",
    overview:
      "A multi-threaded Java enterprise desktop system managing commercial flight schedules, passenger reservations, seat manifests, and baggage tracking.",
    problemStatement:
      "Airline operations demand high-integrity booking management that eliminates double bookings across simultaneous ticket counters without data corruption.",
    solution:
      "Built a concurrent Java application utilizing strict object-oriented inheritance, synchronized thread access, and persistent file logging.",
    deepakContribution:
      "Developed the core booking state machine, thread synchronization primitives, seat allocation charts, and CLI interface.",
    techStack: ["Java Core", "OOPs", "Multi-Threading", "File I/O Serialization"],
    features: [
      "Synchronized seat booking preventing concurrency race conditions",
      "Flight manifest generation with passenger baggage weight reconciliation",
      "Ticket cancellation and automated refund calculus",
      "Persistent file serialization saving system state across restarts",
    ],
    architecture: {
      title: "Concurrent Enterprise Reservation Engine",
      description: "Java core architecture utilizing synchronization locks, structured file streams, and strict domain class hierarchies.",
      keyComponents: ["Thread-Safe Reservation Service", "Flight Fleet Directory", "Baggage & Manifest Tracker"],
    },
    githubUrl: "https://github.com/DEEPAK292006/Airline-Management-System",
  },
  {
    id: "ai-doctor-voicebot",
    title: "AI Clinical Voicebot Assistant",
    subtitle: "Conversational Voice-Assisted Clinical Triage Blueprint",
    category: "AI / ML",
    status: "Prototype / Research",
    featured: false,
    accentColor: "#C18B4A",
    date: "2026",
    overview:
      "A speech-assisted AI clinical interface designed to conduct natural preliminary patient interviews, transcribe spoken symptoms, and map clinical vocabulary to triage levels.",
    problemStatement:
      "Rural and elderly patients struggle with text-heavy digital healthcare forms, leading to skipped questions and inaccurate medical intake.",
    solution:
      "Formulated a voice-first conversational blueprint combining speech recognition with clinical dialogue trees for natural symptom intake.",
    deepakContribution:
      "Designed the conversational state tree, speech recognition integration pipelines, and clinical categorization mapping.",
    techStack: ["Python", "Speech AI", "Natural Language Processing", "Audio Pipelines"],
    features: [
      "Spoken symptom transcription with medical term extraction",
      "Dynamic dialogue prompts clarifying severity and symptom duration",
      "Automated clinical summary card generated for consulting physicians",
    ],
    architecture: {
      title: "Speech-to-Clinical Dialogue Pipeline",
      description: "Audio pipeline converting spoken input to text tokens, mapped through medical intent classifiers to structured summaries.",
      keyComponents: ["Voice Transcription Engine", "Clinical Intent Classifier", "Physician Summary Formatter"],
    },
  },
  {
    id: "complete-library-desktop",
    title: "Complete Library Management Desktop Suite",
    subtitle: "Serialized Persistence Library Management System",
    category: "Software Applications",
    status: "Academic Project",
    featured: false,
    accentColor: "#C18B4A",
    date: "2026",
    overview:
      "A Java desktop application built with local file storage serialization to guarantee zero data loss for institutional book inventories.",
    problemStatement:
      "Small educational institutions need lightweight, zero-cloud-cost software to manage physical book lending without recurring database server subscriptions.",
    solution:
      "Engineered a desktop suite using Java File I/O and custom object serialization to persist member cards, book ISBN catalogs, and borrow timelines on local disk.",
    deepakContribution:
      "Built the Java Swing UI, binary file serialization pipeline, and fine calculation routines.",
    techStack: ["Java Core", "Object Serialization", "File I/O", "Java Swing"],
    features: [
      "Deterministic object serialization saving catalog states to local encrypted files",
      "Automated overdue fine computation based on calendar borrow days",
      "Instant ISBN and author search indexing",
    ],
    architecture: {
      title: "Serialized Local File Architecture",
      description: "Java application reading and writing serialized byte streams to local disk without third-party database engines.",
      keyComponents: ["Object Serialization Engine", "Catalog Indexer", "Member Borrow Tracker"],
    },
    githubUrl: "https://github.com/DEEPAK292006/Complete-Library-Management-Desktop-Application",
  },
  {
    id: "astra-aerofest",
    title: "ASTRA-26 Space & Aeronautics Fest Portal",
    subtitle: "SRMIST Space & Aeronautics Symposium Event Platform",
    category: "Web Development",
    status: "Completed",
    featured: false,
    accentColor: "#D3A66B",
    date: "2026",
    overview:
      "An interactive web platform built for SRMIST's annual aerospace and space technology festival, managing attendee registrations, speaker sessions, and competition schedules.",
    problemStatement:
      "College symposia face chaotic registration queues, mismatched team rosters, and uncoordinated event schedules across multi-track aeronautical competitions.",
    solution:
      "Developed an interactive dark-themed event portal with animated workshop schedules, instant team pass generation, and competition rules.",
    deepakContribution:
      "Created the frontend animations, interactive schedule matrix, and responsive symposium landing page.",
    techStack: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Dynamic interactive festival timeline with track filtering",
      "Competition team registration forms with instant pass generation",
      "Aerospace 3D visual theme with smooth scroll transitions",
    ],
    architecture: {
      title: "Single-Page Festival Event Portal",
      description: "Fast, responsive React interface styled with dark luxury visual elements and smooth micro-animations.",
      keyComponents: ["Event Schedule Switcher", "Symposium Workshop Catalog", "Registration State Machine"],
    },
    githubUrl: "https://github.com/DEEPAK292006/ASTRA-26---College-Space-Aeronautics-Fest",
  },
];
