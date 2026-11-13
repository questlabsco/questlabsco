"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { booking } from "@/lib/data/site";

const HIDDEN_ON = ["/watch", "/contact", booking.page, booking.calendarPage];

// Phones only: once the visitor has scrolled past the hero, keep the
// booking button within thumb reach. It points at the #book section (the
// audit quiz) when the page has one, and at the quiz page otherwise. It
// steps aside while the booking section itself is on screen.
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

  // Pages that are already the booking step (or a video page) don't need it.
  const path = (pathname || "/").replace(/\/+$/, "") || "/";
  if (HIDDEN_ON.includes(path)) return null;

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 border-t-[3px] border-ink bg-white px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <Link
        href={href}
        tabIndex={visible ? 0 : -1}
        className="btn-primary w-full min-h-[48px] !py-3 !text-base"
      >
        {booking.label}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </div>
  );
}
