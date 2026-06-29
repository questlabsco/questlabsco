"use client";

import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

function HeroSplineBackground() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        pointerEvents: "auto",
        overflow: "hidden",
      }}
    >
      <Suspense fallback={<div className="w-full h-full bg-background" />}>
        <Spline
          style={{ width: "100%", height: "100vh", pointerEvents: "auto" }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: `
            linear-gradient(to right, rgba(8,9,26,0.85), transparent 35%, transparent 65%, rgba(8,9,26,0.85)),
            linear-gradient(to bottom, transparent 40%, rgba(8,9,26,0.98))
          `,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="text-left text-white pt-20 sm:pt-28 md:pt-36 px-4 max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.1] tracking-tight font-heading"
      >
        Your outsourced{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400">
          AI automation
        </span>{" "}
        department.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-base sm:text-lg md:text-xl mb-8 text-slate-300/85 max-w-2xl leading-relaxed"
      >
        We find the repetitive workflows eating your team&apos;s time and build
        AI systems to handle them — tested on your real data, handed over
        working, for a fraction of the cost of a single in-house hire.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-start gap-3 pointer-events-auto"
      >
        <a
          href="#book"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold py-3 px-7 rounded transition-all duration-200 shadow-lg shadow-violet-500/25 text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          Start with an audit
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-2 border border-white/20 hover:border-violet-400/50 text-slate-200 hover:text-white font-medium py-3 px-7 rounded transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center"
          style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.04)" }}
        >
          <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          See how it works
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-4 text-xs text-slate-400/70"
      >
        from $3,500 · 1–2 weeks · zero obligation to continue
      </motion.p>
    </div>
  );
}

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { label: "Services", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const linkClass = (label: string) => {
    const isHovered = hoveredItem === label;
    const isOtherHovered = hoveredItem !== null && !isHovered;
    return `text-sm font-medium transition-colors duration-150 ${
      isHovered ? "text-white" : isOtherHovered ? "text-slate-500" : "text-slate-300"
    }`;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(8,9,26,0.90)" : "rgba(8,9,26,0.3)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(45,42,74,0.6)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Quest Labs Co."
            className="h-10 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 8px rgba(124,58,237,0.3))" }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={linkClass(link.label)}
              onMouseEnter={() => setHoveredItem(link.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="hidden md:block text-slate-300 hover:text-white text-sm font-medium transition-colors duration-150"
          >
            Contact
          </a>
          <a
            href="#book"
            className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold py-2 px-5 rounded text-sm transition-all duration-200 shadow-md shadow-violet-500/20"
          >
            Book Audit
          </a>
          <button
            className="lg:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(8,9,26,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(45,42,74,0.6)",
        }}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-150 py-1"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-150 py-1"
            onClick={() => setIsMobileOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection() {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;
        const maxScroll = 500;
        const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
        if (heroContentRef.current) {
          heroContentRef.current.style.opacity = opacity.toString();
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />

      {/* Spline galaxy background */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        {/* Hero content overlay */}
        <div
          ref={heroContentRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div style={{ pointerEvents: "auto" }}>
              <HeroContent />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="size-5 flex items-center justify-center"
          >
            <svg className="text-slate-500 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
