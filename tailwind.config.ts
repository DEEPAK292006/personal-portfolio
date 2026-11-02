import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#050505",
          900: "#080808", // Primary background
          850: "#0D0D0D",
          800: "#101010", // Secondary background
          750: "#151515", // Elevated surface
          700: "#1A1A1A",
          650: "#222222",
        },
        luxury: {
          text: "#F5F2ED",       // Primary text
          muted: "#A6A19A",      // Secondary text
          dim: "#6B665F",        // Tertiary/dim text
          gold: "#C18B4A",       // Muted amber / warm gold
          goldBright: "#D3A66B", // Secondary accent
          goldMuted: "#8E6533",
          goldSubtle: "rgba(193, 139, 74, 0.12)",
          goldGlow: "rgba(211, 166, 107, 0.2)",
          border: "rgba(245, 242, 237, 0.08)",
          borderStrong: "rgba(245, 242, 237, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D3A66B 0%, #C18B4A 50%, #8E6533 100%)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(211,166,107,0.15) 0%, rgba(193,139,74,0.05) 100%)",
        "radial-amber": "radial-gradient(circle at 50% 0%, rgba(193, 139, 74, 0.15) 0%, rgba(8, 8, 8, 0) 70%)",
        "radial-bottom": "radial-gradient(circle at 50% 100%, rgba(193, 139, 74, 0.12) 0%, rgba(8, 8, 8, 0) 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(193, 139, 74, 0.25)",
        "gold-glow-lg": "0 0 60px -10px rgba(193, 139, 74, 0.35)",
        "luxury-card": "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(245, 242, 237, 0.05)",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
