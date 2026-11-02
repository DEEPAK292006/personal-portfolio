import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepak M. | Creative Developer & Full-Stack Engineer",
  description:
    "Personal portfolio of Deepak M., aspiring Full-Stack Developer, Creative Technologist, and Computer Science Engineer at SRMIST. Specializing in AI/ML, IoT, TinyML, and high-performance web systems.",
  keywords: [
    "Deepak M",
    "Creative Developer",
    "Full-Stack Developer",
    "Creative Technologist",
    "SRMIST",
    "AI",
    "Machine Learning",
    "TinyML",
    "IoT",
    "Embedded Systems",
    "Next.js",
    "Three.js",
    "SolarAgar Pro",
    "EcoClean",
    "SafeGear Connect",
  ],
  authors: [{ name: "Deepak M.", url: "https://github.com/DEEPAK292006" }],
  creator: "Deepak M.",
  metadataBase: new URL("https://deepak-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepak-portfolio.vercel.app",
    title: "Deepak M. | Creative Developer & Full-Stack Engineer",
    description:
      "Aspiring Full-Stack Developer passionate about building meaningful digital products through technology, creativity, and thoughtful engineering.",
    siteName: "Deepak M. Portfolio",
    images: [
      {
        url: "/deepak-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Deepak M. — Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak M. | Creative Developer & Full-Stack Engineer",
    description:
      "Aspiring Full-Stack Developer passionate about building meaningful digital products through technology, creativity, and thoughtful engineering.",
    images: ["/deepak-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <meta name="theme-color" content="#080808" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-dark-900 text-luxury-text antialiased selection:bg-luxury-gold/30 selection:text-luxury-text">
        {/* Subtle Film Grain Texture */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
