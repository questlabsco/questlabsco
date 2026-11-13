"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { siteConfig } from "@/lib/data/site";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Example projects", href: "/examples" },
  { label: "Book a free call", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  // Standalone hidden pages render without the site chrome.
  if (pathname === "/watch" || pathname === "/watch/") return null;

  return (
    <footer className="bg-ink-deep text-white">
      <div className="container-site py-16 md:py-20">
        <nav aria-label="Footer" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src="/brand/logo-mark-light.webp"
                alt=""
                width={90}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto object-contain"
              />
              <span className="text-base font-extrabold tracking-tight text-white">
                Quest Labs Co
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              An AI automation and web development agency. We build AI
              agents, workflow automation, and fast websites that take manual
              work off your team.
            </p>
            {siteConfig.location && (
              <p className="mt-3 text-sm text-white/50">
                Based in {siteConfig.location}
              </p>
            )}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quest Labs Co. on LinkedIn"
                className="size-11 border border-line-dark flex items-center justify-center text-white/50 hover:text-white hover:border-accent transition-colors"
              >
                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quest Labs Co. on YouTube"
                className="size-11 border border-line-dark flex items-center justify-center text-white/50 hover:text-white hover:border-accent transition-colors"
              >
                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}/`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-line-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()}{" "}
            {(siteConfig.legalName || siteConfig.name).replace(/\.$/, "")}. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/privacy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies/" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
