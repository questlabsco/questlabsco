import type { Metadata } from "next";
import Link from "next/link";
import Zigzag from "@/components/site/Zigzag";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Quest Labs Co. collects, uses and protects the information you share through this website, its forms and its booking calendar.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="hidden md:block absolute right-[8%] top-10 w-24 animate-drift" />
        <Sparkle className="hidden md:block absolute left-[8%] bottom-8 w-8 animate-twinkle" />
        <div className="container-site page-hero relative pb-12 md:pb-16 text-center">
          <h1 className="h-page">Privacy Policy</h1>
          <p className="mt-4 text-sm md:text-base font-semibold text-white/85">
            Effective date: January 1, 2026 · Last updated: November 12, 2026
          </p>
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      <div className="bg-white">
      <div className="container-site py-14 md:py-20 max-w-3xl space-y-10 text-base md:text-lg leading-relaxed text-ink/80">
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Who we are</h2>
          <p>
            This website is operated by {siteConfig.legalName || siteConfig.name}
            {siteConfig.location && `, based in ${siteConfig.location}`}. On
            this site we refer to ourselves as &quot;{siteConfig.name}&quot;,
            &quot;we&quot;, and &quot;us&quot;.{" "}
            {siteConfig.legalName || siteConfig.name} is the data controller
            for the personal information collected through this website.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Information we collect</h2>
          <p>
            When you contact us through this website, we collect the information
            you provide: your name, email address, company, phone number, and
            the contents of your message. We also collect standard technical
            data such as pages visited and approximate location, via our
            hosting provider&apos;s analytics.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">How we use it</h2>
          <p>
            We use your information solely to respond to your inquiry, provide
            our services, and improve this website. We do not sell your data,
            and we do not send marketing email you didn&apos;t ask for.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Third-party services</h2>
          <p>
            Form submissions are processed by Web3Forms and delivered to our
            inbox. Meeting bookings are handled by Calendly under its own
            privacy policy. This site is hosted on Cloudflare. Each provider
            processes only the data needed to perform its function.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Cookies</h2>
          <p>
            This site uses a minimal set of cookies: essential ones from our
            hosting provider, plus cookies set by embedded tools like
            Calendly and Wistia on the pages that use them. See our{" "}
            <Link href="/cookies" className="text-brand font-semibold underline underline-offset-2">
              Cookie Policy
            </Link>{" "}
            for the full breakdown.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Data retention</h2>
          <p>
            We keep inquiry correspondence for as long as needed to serve you
            and meet legal obligations, after which it is deleted.
          </p>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink mb-3">Your rights</h2>
          <p>
            You may request a copy of the personal data we hold about you, ask
            us to correct it, or ask us to delete it by emailing{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand font-semibold underline underline-offset-2">
              {siteConfig.email}
            </a>
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
