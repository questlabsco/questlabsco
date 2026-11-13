"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { booking } from "@/lib/data/site";
import { PointingHand } from "@/components/art/chrome/ChromeDoodles";

const STORAGE_KEY = "ql-announcement-dismissed";

// Slim mint bar above the header. Rendered in the server HTML so first-time
// visitors see no layout jump; hidden after mount only if it was dismissed
// earlier in this browser session.
export default function AnnouncementBar() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setDismissed(true);
    } catch {
      // Storage blocked: just keep showing the bar.
    }
  }, []);

  if (dismissed || pathname === "/watch" || pathname === "/watch/") return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore: it stays dismissed until the next page load.
    }
  };

  return (
    <div className="bg-mint text-ink border-b-[3px] border-ink">
      <div className="container-site flex items-center gap-2">
        {/* Balances the close button so the message stays centred. */}
        <span aria-hidden="true" className="hidden sm:block size-11 shrink-0" />
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-2 text-center">
          <p className="text-xs sm:text-sm font-extrabold leading-snug">
            We’ve Saved Clients Tens Of Thousands Of Hours. You Should Be Next
          </p>
          <span className="inline-flex items-center gap-2">
            <PointingHand className="hidden sm:block w-8 shrink-0" />
            <Link
              href={booking.page}
              className="btn-primary !px-3 !py-1 !text-xs !border-2 !shadow-pop-sm whitespace-nowrap"
            >
              {booking.label}
            </Link>
          </span>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="size-11 shrink-0 -mr-2 flex items-center justify-center rounded-full text-ink hover:bg-ink/10 transition-colors"
        >
          <X aria-hidden="true" className="size-5" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
