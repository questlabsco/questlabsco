"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Automation Audit", href: "#features" },
    { label: "Build & Implement", href: "#features" },
    { label: "Embedded Team", href: "#features" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Book Audit", href: "#book" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/6 overflow-hidden">
      {/* CTA banner */}
      <div className="relative border-b border-white/6" id="contact">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Ready to start?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 font-heading max-w-2xl leading-tight">
              See what automation could be worth for your business
            </h2>
            <p className="text-base md:text-lg text-slate-400 max-w-xl mb-8">
              Start with an audit. In two weeks you&apos;ll know exactly
              what&apos;s automatable, what it&apos;s worth, and what it
              costs — with zero obligation to go further.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold py-4 px-9 rounded transition-all duration-200 shadow-lg shadow-violet-500/30 text-base group"
            >
              Book your automation audit
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-xs text-slate-600">
              from $3,500 · 1–2 weeks · zero obligation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer body */}
      <div className="container mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Quest Labs Co."
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Your outsourced AI automation department — on a monthly
              subscription, for a fraction of the cost of a single in-house hire.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-9 border border-white/8 bg-white/[0.03] hover:border-violet-500/30 hover:bg-violet-500/10 flex items-center justify-center text-slate-500 hover:text-violet-400 transition-all duration-200 cursor-pointer"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="size-9 border border-white/8 bg-white/[0.03] hover:border-violet-500/30 hover:bg-violet-500/10 flex items-center justify-center text-slate-500 hover:text-violet-400 transition-all duration-200 cursor-pointer"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-violet-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Quest Labs Co. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <a href="/privacy" className="hover:text-slate-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-slate-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
