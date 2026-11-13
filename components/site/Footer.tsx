"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { siteConfig, booking } from "@/lib/data/site";
import Mascot from "@/components/art/Mascot";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import { QuestionBubble } from "@/components/art/chrome/ChromeDoodles";

const serviceLinks = services.map(({ slug, name }) => ({ href: `/services/${slug}`, label: name }));
const industryLinks = industries.map(({ slug, name }) => ({ href: `/industries/${slug}`, label: name }));
const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: booking.label, href: booking.page },
  { label: "Pick A Time", href: booking.calendarPage },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const socialClass =
  "size-11 rounded-full border-[3px] border-white/80 flex items-center justify-center text-white hover:bg-sun hover:border-sun hover:text-ink transition-colors";

function LinkColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-sun">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-semibold text-white/80 hover:text-white hover:underline decoration-sun decoration-[3px] underline-offset-4"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  // Standalone hidden pages render without the site chrome.
  if (pathname === "/watch" || pathname === "/watch/") return null;

  return (
    <footer className="relative bg-ink-deep text-white overflow-hidden">
      <div className="container-site pt-14 md:pt-20 pb-8">
        {/* Question panel */}
        <div className="flex flex-col items-center gap-5 rounded-3xl border-[3px] border-ink bg-ink-soft px-6 py-8 text-center shadow-[6px_6px_0_0_#3B4CFF] md:flex-row md:justify-between md:px-10 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <QuestionBubble className="w-14 shrink-0 animate-float" />
            <div>
              <p className="text-xl md:text-2xl font-extrabold leading-tight">
                Have A Question? We Don’t Bite.
              </p>
              <p className="mt-1 text-sm text-white/75">
                Drop us a line and a real person on the team will write back.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn-primary !rounded-full !normal-case !tracking-normal !text-base shrink-0 max-w-full break-all"
          >
            {siteConfig.email}
          </a>
        </div>

        <nav
          aria-label="Footer"
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-5"
        >
          {/* Brand */}
          <div className="col-span-2 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-mark-light.webp"
                width={90}
                height={80}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
              <span className="text-lg font-extrabold tracking-tight">Quest Labs Co</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            {siteConfig.location && (
              <p className="mt-3 text-sm font-semibold text-white/80">
                Based in {siteConfig.location}
              </p>
            )}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quest Labs Co. on LinkedIn"
                className={socialClass}
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
                className={socialClass}
              >
                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <LinkColumn title="Services" links={serviceLinks} />
          <LinkColumn title="Industries" links={industryLinks} />
          <LinkColumn title="Company" links={companyLinks} />
        </nav>

        {/* Bottom line */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t-2 border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()}{" "}
            {(siteConfig.legalName || siteConfig.name).replace(/\.$/, "")}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Doodle strip along the bottom edge (desktop only) */}
      <div
        aria-hidden="true"
        className="hidden md:flex container-site h-24 items-end justify-between pointer-events-none"
      >
        <Cloud className="w-24 mb-4 opacity-90 animate-drift" />
        <Sparkle className="w-6 mb-12 animate-twinkle" />
        <Cloud className="w-16 mb-8 opacity-80 animate-drift [animation-delay:-4s]" />
        <div className="w-20 -mb-6">
          <Mascot wave className="w-full" />
        </div>
        <Sparkle className="w-5 mb-10 animate-twinkle [animation-delay:-1s]" color="#35D6A0" />
        <Cloud className="w-20 mb-3 opacity-90 animate-drift [animation-delay:-7s]" />
        <Sparkle className="w-7 mb-14 animate-twinkle [animation-delay:-1.6s]" color="#B9A7FF" />
      </div>
    </footer>
  );
}
