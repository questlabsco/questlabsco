"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { services, serviceGroups } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { booking } from "@/lib/data/site";

type MenuKey = "services" | "industries";

const navLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

const groupedServices = serviceGroups.map((group) => ({
  group,
  items: services.filter((s) => s.group === group).map(({ slug, name }) => ({ slug, name })),
}));
const industryLinks = industries.map(({ slug, name }) => ({ slug, name }));

// Uppercase nav label with a yellow underline that grows on hover/focus.
const navText =
  "relative text-[13px] font-extrabold uppercase tracking-[0.1em] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full after:bg-sun after:origin-left after:transition-transform after:duration-200";

function isActive(pathname: string | null, href: string) {
  return !!pathname && (pathname === href || pathname.startsWith(`${href}/`));
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const buttonRefs = useRef<Record<MenuKey, HTMLButtonElement | null>>({
    services: null,
    industries: null,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile panel too.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Standalone hidden pages render without the site chrome.
  if (pathname === "/watch" || pathname === "/watch/") return null;

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  const dropdown = (key: MenuKey, label: string, panel: React.ReactNode, width: string) => {
    const isOpen = open === key;
    const id = `nav-${key}`;
    const active = isActive(pathname, `/${key}`);
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(key)}
        onMouseLeave={() => setOpen((cur) => (cur === key ? null : cur))}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null))
            setOpen((cur) => (cur === key ? null : cur));
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape" && isOpen) {
            e.stopPropagation();
            setOpen(null);
            buttonRefs.current[key]?.focus();
          }
        }}
      >
        <button
          ref={(el) => {
            buttonRefs.current[key] = el;
          }}
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={id}
          // Keyboard (Enter/Space, detail 0) toggles; a mouse click after the
          // hover has opened it keeps it open.
          onClick={(e) => setOpen(e.detail === 0 ? (isOpen ? null : key) : key)}
          className={`group flex items-center gap-1 px-3 py-3 transition-colors hover:text-brand ${
            isOpen || active ? "text-brand" : "text-ink"
          }`}
        >
          <span
            className={`${navText} ${
              isOpen || active ? "after:scale-x-100" : "after:scale-x-0 group-hover:after:scale-x-100"
            }`}
          >
            {label}
          </span>
          <ChevronDown
            aria-hidden="true"
            strokeWidth={3}
            className={`size-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          id={id}
          className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${width} ${
            isOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1"
          } transition-[opacity,transform,visibility] duration-150`}
        >
          <div className="card-pop-lg p-6">{panel}</div>
        </div>
      </div>
    );
  };

  const menuLink =
    "flex items-center rounded-lg px-3 py-2 text-sm font-bold text-ink hover:bg-surface hover:text-brand transition-colors";
  const allLink =
    "inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand hover:text-brand-dark";

  const servicesPanel = (
    <>
      <div className="grid grid-cols-2 gap-6">
        {groupedServices.map(({ group, items }) => (
          <div key={group}>
            <p className="px-3 pb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
              {group}
            </p>
            <ul className="space-y-0.5">
              {items.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} onClick={closeAll} className={menuLink}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 border-t-2 border-line pt-4 px-3">
        <Link href="/services" onClick={closeAll} className={allLink}>
          All services <ArrowRight aria-hidden="true" className="size-4" strokeWidth={3} />
        </Link>
      </div>
    </>
  );

  const industriesPanel = (
    <>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5">
        {industryLinks.map((i) => (
          <li key={i.slug}>
            <Link href={`/industries/${i.slug}`} onClick={closeAll} className={menuLink}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t-2 border-line pt-4 px-3">
        <Link href="/industries" onClick={closeAll} className={allLink}>
          All industries <ArrowRight aria-hidden="true" className="size-4" strokeWidth={3} />
        </Link>
      </div>
    </>
  );

  const mobileGroup = (key: MenuKey, label: string, body: React.ReactNode) => {
    const isOpen = mobileSection === key;
    return (
      <div className="border-b-2 border-line">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`mobile-${key}`}
          onClick={() => setMobileSection(isOpen ? null : key)}
          className="flex w-full min-h-[52px] items-center justify-between py-3 text-base font-extrabold uppercase tracking-[0.08em] text-ink"
        >
          {label}
          <ChevronDown
            aria-hidden="true"
            strokeWidth={3}
            className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div id={`mobile-${key}`} hidden={!isOpen} className="pb-4">
          {body}
        </div>
      </div>
    );
  };

  const mobileLink = "flex min-h-[44px] items-center text-base font-bold text-ink";

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b-[3px] transition-colors duration-200 ${
        scrolled || mobileOpen ? "border-ink" : "border-transparent"
      }`}
    >
      <div className="container-site flex h-16 md:h-[76px] items-center justify-between gap-6">
        <Link href="/" onClick={closeAll} className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-full.webp"
            width={623}
            height={96}
            alt="Quest Labs Co"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 ml-auto">
          {dropdown("services", "Services", servicesPanel, "w-[520px]")}
          {dropdown("industries", "Industries", industriesPanel, "w-[480px]")}
          {navLinks.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`group px-3 py-3 transition-colors hover:text-brand ${
                  active ? "text-brand" : "text-ink"
                }`}
              >
                <span
                  className={`${navText} ${
                    active ? "after:scale-x-100" : "after:scale-x-0 group-hover:after:scale-x-100"
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Link href={booking.page} className="btn-primary">
            {booking.label}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden size-11 -mr-1 flex items-center justify-center rounded-lg border-[3px] border-ink bg-white text-ink shadow-pop-sm"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setMobileSection(null);
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="size-5" strokeWidth={3} />
          ) : (
            <Menu aria-hidden="true" className="size-5" strokeWidth={3} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute inset-x-0 top-full border-b-[3px] border-ink bg-white max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain animate-pop-in"
        >
          <div className="container-site pt-2 pb-6">
            {mobileGroup(
              "services",
              "Services",
              <div className="space-y-4">
                {groupedServices.map(({ group, items }) => (
                  <div key={group}>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
                      {group}
                    </p>
                    <ul className="mt-1">
                      {items.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} onClick={closeAll} className={mobileLink}>
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/services" onClick={closeAll} className={`${allLink} min-h-[44px]`}>
                  All services <ArrowRight aria-hidden="true" className="size-4" strokeWidth={3} />
                </Link>
              </div>,
            )}
            {mobileGroup(
              "industries",
              "Industries",
              <>
                <ul>
                  {industryLinks.map((i) => (
                    <li key={i.slug}>
                      <Link href={`/industries/${i.slug}`} onClick={closeAll} className={mobileLink}>
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/industries" onClick={closeAll} className={`${allLink} mt-2 min-h-[44px]`}>
                  All industries <ArrowRight aria-hidden="true" className="size-4" strokeWidth={3} />
                </Link>
              </>,
            )}
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeAll}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className="flex min-h-[52px] items-center border-b-2 border-line py-3 text-base font-extrabold uppercase tracking-[0.08em] text-ink"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-6">
              <Link href={booking.page} onClick={closeAll} className="btn-primary btn-lg w-full">
                {booking.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
