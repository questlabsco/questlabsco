import type { Metadata } from "next";
import Link from "next/link";
import Zigzag from "@/components/site/Zigzag";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description: "How Quest Labs Co. uses cookies and similar technology on this website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="hidden md:block absolute right-[8%] top-10 w-24 animate-drift" />
        <Sparkle className="hidden md:block absolute left-[8%] bottom-8 w-8 animate-twinkle" />
        <div className="container-site page-hero relative pb-12 md:pb-16 text-center">
          <h1 className="h-page">Cookie Policy</h1>
          <p className="mt-4 text-sm md:text-base font-semibold text-white/85">
            Effective date: January 1, 2026
          </p>
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      <div className="bg-white">
      <div className="container-site py-14 md:py-20 max-w-3xl space-y-10 text-base md:text-lg leading-relaxed text-ink/80">
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">What this covers</h2>
          <p>
            This site keeps cookies to a minimum. We don&apos;t run
            advertising trackers, and we don&apos;t use cookies to build
            profiles of visitors. What follows is a plain account of what
            does get set, and by whom.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Essential cookies</h2>
          <p>
            Our hosting provider, Cloudflare, sets a small number of cookies
            needed to serve this site securely and protect it from abusive
            traffic (for example, distinguishing real visitors from bots).
            These aren&apos;t optional and don&apos;t require consent under
            most privacy laws, since the site can&apos;t function safely
            without them.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Third-party embeds</h2>
          <p>
            A few pages load embedded tools from other companies, and those
            tools may set their own cookies once loaded:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>
              <strong>Calendly</strong>, on the contact page, to run the
              meeting-booking widget.
            </li>
            <li>
              <strong>Wistia</strong>, on pages that embed video, to run the
              video player.
            </li>
          </ul>
          <p className="mt-3">
            These cookies are set by the third party&apos;s own domain, under
            its own policy, not ours. We only load them on the pages that
            actually use them.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">What we don&apos;t use</h2>
          <p>
            No advertising or retargeting pixels, no third-party analytics
            trackers, and no cookies that sell or share data with data
            brokers.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Managing cookies</h2>
          <p>
            You can block or delete cookies in your browser settings at any
            time. Blocking essential cookies may affect how reliably the
            site loads; blocking third-party embed cookies may stop the
            booking widget or video player from working, but the rest of the
            site will work normally.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Related policy</h2>
          <p>
            For how we handle information you submit directly (contact
            forms, meeting bookings), see our{" "}
            <Link href="/privacy" className="text-brand font-semibold underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand font-semibold underline underline-offset-2">
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
      </div>
    </main>
  );
}
