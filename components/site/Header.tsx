"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { booking } from "@/lib/data/site";

const navLinks = [
  { label: "Examples", href: "/examples" },
  { label: "About", href: "/about" },
];

function servicesForIndustry(slug: string) {
  return services.filter((s) => s.industrySlugs.includes(slug)).slice(0, 4);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  // Desktop mega menu: opens on hover, click, or keyboard (Enter/Space).
  const [megaOpen, setMegaOpen] = useState(false);
  // Transparent over the hero, solid once the page has scrolled; slides
  // away while scrolling down and returns on the first scroll up.
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 320 && y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4 || y < 320) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Standalone hidden pages render without the site chrome.
  if (pathname === "/watch" || pathname === "/watch/") return null;

  // Never hide the bar while a menu is open
  const translated = hidden && !mobileOpen && !megaOpen;
  const solid = scrolled || mobileOpen || megaOpen;

  const close = () => {
    setMobileOpen(false);
    setOpenSection(null);
    setMegaOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-[transform,background-color,border-color] duration-300 ${
        translated ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "bg-background/85 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-site flex h-16 md:h-20 items-center justify-between">
        <Link href="/" onClick={close} className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-full-light.webp"
            alt="Quest Labs Co"
            width={623}
            height={96}
            className="h-6 md:h-7 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {/* Industries & services: combined mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setMegaOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") setMegaOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              aria-controls="mega-menu"
              // Keyboard activation toggles; a mouse click (already open
              // from hover) just keeps it open.
              onClick={(e) => setMegaOpen(e.detail === 0 ? !megaOpen : true)}
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              What we do
              <ChevronDown
                aria-hidden="true"
                className={`size-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id="mega-menu"
              className={`transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[920px] max-w-[92vw] ${
                megaOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="bg-surface-raised border border-line shadow-[0_24px_60px_rgba(0,0,0,0.6)] p-9">
                <div className="grid grid-cols-4 gap-x-8 gap-y-9">
                  {industries.map((ind) => (
                    <div key={ind.slug}>
                      <Link
                        onClick={close}
                        href={`/industries/${ind.slug}`}
                        className="block text-sm font-semibold text-white hover:text-primary transition-colors"
                      >
                        {ind.name}
                      </Link>
                      <ul className="mt-3 space-y-2">
                        {servicesForIndustry(ind.slug).map((s) => (
                          <li key={s.slug}>
                            <Link
                              onClick={close}
                              href={`/services/${s.slug}`}
                              className="block text-sm text-white/55 hover:text-white transition-colors"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 border-t border-line mt-9 pt-6">
                  <Link
                    onClick={close}
                    href="/industries"
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                  >
                    All industries <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    onClick={close}
                    href="/services"
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
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
              className={`px-4 py-3 text-sm font-medium transition-colors hover:text-white ${
                pathname?.startsWith(l.href) ? "text-white" : "text-white/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href={booking.page} className="btn-primary">
            {booking.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden size-11 -mr-2 flex items-center justify-center text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-line bg-background max-h-[calc(100vh-64px)] overflow-y-auto"
        >
          <div className="container-site py-4">
            <button
              type="button"
              aria-expanded={openSection === "services"}
              className="flex w-full items-center justify-between py-4 text-lg font-medium text-white"
              onClick={() =>
                setOpenSection(openSection === "services" ? null : "services")
              }
            >
              What we do
              <ChevronDown
                className={`size-5 transition-transform ${
                  openSection === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "services" && (
              <div className="pb-4 space-y-6">
                {industries.map((ind) => (
                  <div key={ind.slug}>
                    <Link
                      href={`/industries/${ind.slug}`}
                      onClick={close}
                      className="block text-base font-semibold text-white"
                    >
                      {ind.name}
                    </Link>
                    <ul className="mt-2 space-y-1">
                      {servicesForIndustry(ind.slug).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={close}
                            className="block py-1.5 text-base text-white/55"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-2">
                  <Link
                    href="/industries"
                    onClick={close}
                    className="block text-base font-semibold text-primary"
                  >
                    All industries
                  </Link>
                  <Link
                    href="/services"
                    onClick={close}
                    className="block text-base font-semibold text-primary"
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
                className="block py-4 text-lg font-medium text-white border-t border-line"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-4 pb-3 border-t border-line">
              <Link
                href={booking.page}
                onClick={close}
                className="btn-primary btn-lg w-full"
              >
                {booking.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
