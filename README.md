# Deepak M. | Premium Dark Luxury Developer Portfolio

> **Digital Identity & Technical Portfolio of Deepak M.**  
> Aspiring Full-Stack Developer & Creative Technologist | SRM Institute of Science and Technology, Tiruchirappalli

---

## 🌟 Overview & Creative Philosophy

This production-ready portfolio is engineered with a **Pure Dark Luxury** visual aesthetic:
- **Palette**: Charcoal and deep obsidian (`#080808`, `#101010`, `#151515`) illuminated with muted warm gold / amber gradients (`#C18B4A`, `#D3A66B`).
- **Typography**: Space Grotesk (Editorial Display), Plus Jakarta Sans (Clean Modern Body), and JetBrains Mono (Technical Details).
- **Interactive Depth**: Real-time Three.js metallic 3D WebGL object with ambient gold particle simulation, custom trailing cursor with halo physics, and layout-morphing modals.
- **Authenticity**: 100% verified credentials, real studio portrait, authentic internships (Manatec MEPL, Techy Geeks, Developers Arena), and real project architectures (SolarAgar Pro, EcoClean, SafeGear Connect, HorizonXT AI Inspector).

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js**: `v18.18+` or `v20+` (Tested on Node `v24.14.1`)
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### 2. Installation
```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies
npm install
```

### 3. Run Locally
```bash
# Run local dev server
npm run dev

# Open in browser:
# http://localhost:3000
```

### 4. Build for Production
```bash
# Run static analysis and production compilation
npm run build

# Start production server
npm run start
```

---

## ⚙️ Environment Variables & Contact Form Setup

Create a `.env.local` file in the root directory:

```env
# Optional: Resend API Key for live email dispatch
# Get your free API key at https://resend.com
RESEND_API_KEY=re_your_api_key_here

# Optional: Custom recipient address (defaults to 113930DEEPAK@gmail.com)
CONTACT_RECIPIENT_EMAIL=113930DEEPAK@gmail.com
```

> **Note**: If `RESEND_API_KEY` is omitted, the API route automatically falls back to structured server console logging and returns a valid 200 JSON success response so the user interface never breaks in development.

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── deepak-portrait.jpg     # Verified studio portrait
│   ├── deepak-resume.pdf       # Verified downloadable resume
│   ├── favicon.svg             # Interlocking DM Monogram SVG
│   └── certificates/           # Authentic certificate scans (IBM AI, GUVI HCL)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, Google Fonts, OpenGraph & SEO metadata
│   │   ├── page.tsx            # Main page orchestrating all sections & modals
│   │   ├── globals.css         # Dark luxury tokens, film grain, ambient lighting
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Production contact handler with honeypot & Resend
│   ├── components/
│   │   ├── ui/
│   │   │   ├── CustomCursor.tsx    # Smooth trailing cursor with gold ambient halo
│   │   │   ├── Preloader.tsx       # Branded DM monogram loader
│   │   │   ├── Navbar.tsx          # Floating header with section ScrollSpy & mobile drawer
│   │   │   ├── Hero3DObject.tsx    # Three.js 3D metallic object with particle cloud
│   │   │   ├── ProjectModal.tsx    # Case-study detail modal
│   │   │   ├── CertificateModal.tsx# Verified credential view modal
│   │   │   └── BackToTop.tsx       # Floating luxury back to top button
│   │   └── sections/
│   │       ├── HeroSection.tsx     # Hero section with exact prompt copy & portrait
│   │       ├── AboutSection.tsx    # Editorial narrative (SRMIST, Manatec, Leadership)
│   │       ├── FeaturedProjects.tsx# Level A: 4 flagship case studies
│   │       ├── ProjectArchive.tsx  # Level B: Searchable & filterable 16+ project archive
│   │       ├── SkillsSection.tsx   # Interactive technical constellation (8 domains)
│   │       ├── ExperienceTimeline.tsx # Timeline (Manatec, Techy Geeks, Developers Arena)
│   │       ├── AchievementsSection.tsx # Hackathon & certificate showcase
│   │       ├── ContactSection.tsx  # "Let's Create Something Extraordinary." form
│   │       └── Footer.tsx          # DM Monogram & verified identity badges
│   ├── data/
│   │   ├── projectsData.ts     # Verified project inventory
│   │   ├── skillsData.ts       # Verified skills across 8 categories
│   │   ├── experienceData.ts   # Chronological work & leadership records
│   │   └── certificatesData.ts # Authentic certificate & badge database
│   └── types/
│       └── index.ts            # Type-safe TypeScript interfaces
├── tailwind.config.ts          # Custom dark luxury palette & typography
├── tsconfig.json               # Path alias '@/*' mapping
└── package.json
```

---

## 🌐 Deploy to Vercel (Production)

Deploying to Vercel is seamless:

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete pure dark luxury portfolio for Deepak M."
   git remote add origin https://github.com/DEEPAK292006/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Next.js** (auto-detected).
4. Add Environment Variable:
   - `RESEND_API_KEY` (if you wish to enable live email delivery).
5. Click **Deploy**. Vercel will build and assign your production URL.

---

## 📄 License & Attribution
Designed and built exclusively for **Deepak M.** All personal information, credentials, and project history are strictly verified from official sources.
