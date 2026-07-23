"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

const navLinks = [
  { label: "About", href: "/about/" },
];

const logoFilter =
  "brightness(0) saturate(100%) invert(29%) sepia(61%) saturate(3207%) hue-rotate(246deg) brightness(97%) contrast(101%)";

function servicesForIndustry(slug: string) {
  return services.filter((s) => s.industrySlugs.includes(slug)).slice(0, 4);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  // Island scroll states: compact after leaving the top, hidden while
  // scrolling down, reappears as soon as the user scrolls up a little.
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 60);
      if (y > 320 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4 || y < 320) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never hide the island while the mobile drawer is open
  const translated = hidden && !mobileOpen;

  const close = () => {
    setMobileOpen(false);
    setOpenSection(null);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 px-3 md:px-6 transition-transform duration-300 ${
        translated ? "-translate-y-[130%]" : "translate-y-0"
      } ${compact ? "pt-2" : "pt-3 md:pt-5"}`}
    >
      <div
        className={`mx-auto bg-white/95 backdrop-blur border border-line shadow-[0_8px_30px_rgba(25,19,49,0.08)] transition-all duration-300 ${
          compact ? "max-w-4xl" : "max-w-site"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            compact ? "h-12 px-3 md:px-5" : "h-14 px-4 md:h-16 md:px-6"
          }`}
        >
          <Link
            href="/"
            onClick={close}
            className="group flex items-center shrink-0"
          >
            {compact ? (
              <img
                src="/logo-mark.png"
                alt="Quest Labs Co"
                className="h-7 w-auto object-contain transition-all duration-300 group-hover:[filter:var(--logo-hover-filter)]"
                style={{ ["--logo-hover-filter" as string]: logoFilter }}
              />
            ) : (
              <img
                src="/logo-full-transparent.png"
                alt="Quest Labs Co"
                className="h-9 md:h-11 w-auto object-contain transition-all duration-300 group-hover:[filter:var(--logo-hover-filter)]"
                style={{ ["--logo-hover-filter" as string]: logoFilter }}
              />
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            {/* Industries & services: combined mega menu */}
            <div className="group relative">
              <button className="flex items-center gap-1.5 px-4 py-4 text-sm font-medium text-ink hover:text-primary transition-colors">
                What we do
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[880px] max-w-[90vw]">
                <div className="bg-white border border-line shadow-[0_16px_40px_rgba(25,19,49,0.12)] p-8">
                  <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                    {industries.map((ind) => (
                      <div key={ind.slug}>
                        <Link
                          href={`/industries/${ind.slug}/`}
                          className="block text-[13px] font-semibold text-ink hover:text-primary transition-colors"
                        >
                          {ind.name}
                        </Link>
                        <ul className="mt-3 space-y-2">
                          {servicesForIndustry(ind.slug).map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}/`}
                                className="block text-[13px] text-muted-foreground hover:text-primary transition-colors"
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-8 border-t border-line mt-8 pt-5">
                    <Link
                      href="/industries/"
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      All industries <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href="/services/"
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      All services <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-4 text-sm font-medium transition-colors hover:text-primary ${
                  pathname?.startsWith(l.href.replace(/\/$/, ""))
                    ? "text-primary"
                    : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Let&apos;s talk
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-line bg-white max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              <button
                className="flex w-full items-center justify-between py-3 text-sm font-semibold text-ink"
                onClick={() =>
                  setOpenSection(openSection === "services" ? null : "services")
                }
              >
                What we do
                <ChevronDown
                  className={`size-4 transition-transform ${
                    openSection === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "services" && (
                <div className="pl-4 pb-3 space-y-5">
                  {industries.map((ind) => (
                    <div key={ind.slug}>
                      <Link
                        href={`/industries/${ind.slug}/`}
                        onClick={close}
                        className="block text-sm font-semibold text-ink"
                      >
                        {ind.name}
                      </Link>
                      <ul className="mt-2 space-y-2">
                        {servicesForIndustry(ind.slug).map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}/`}
                              onClick={close}
                              className="block text-sm text-muted-foreground"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-col gap-2 pt-2">
                    <Link
                      href="/industries/"
                      onClick={close}
                      className="block text-sm font-semibold text-primary"
                    >
                      All industries
                    </Link>
                    <Link
                      href="/services/"
                      onClick={close}
                      className="block text-sm font-semibold text-primary"
                    >
                      All services
                    </Link>
                  </div>
                </div>
              )}

              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block py-3 text-sm font-semibold text-ink border-t border-line"
                >
                  {l.label}
                </Link>
              ))}

              <div className="pt-3 pb-2 border-t border-line">
                <Link
                  href="/contact/"
                  onClick={close}
                  className="btn-primary w-full !py-3"
                >
                  Let&apos;s talk
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
