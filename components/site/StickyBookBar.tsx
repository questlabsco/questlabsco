"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { booking } from "@/lib/data/site";

// Phones only: once the visitor has scrolled past the hero, keep the
// booking button within thumb reach. It steps aside while the booking
// section itself is on screen.
export default function StickyBookBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [href, setHref] = useState<string>(booking.page);

  useEffect(() => {
    const target = document.getElementById("book");
    setHref(target ? booking.anchor : booking.page);

    let targetOnScreen = false;
    const update = () => setVisible(window.scrollY > 520 && !targetOnScreen);

    const io = target
      ? new IntersectionObserver(([entry]) => {
          targetOnScreen = entry.isIntersecting;
          update();
        })
      : null;
    if (target && io) io.observe(target);

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, [pathname]);

  if (pathname === "/watch" || pathname === "/contact") return null;

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <Link
        href={href}
        tabIndex={visible ? 0 : -1}
        className="btn-primary w-full !py-3.5 !text-base"
      >
        {booking.label}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </div>
  );
}
