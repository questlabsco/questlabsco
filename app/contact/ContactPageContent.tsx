"use client";

import Script from "next/script";
import { Clock, Search, BarChart2, ShieldOff } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import Reveal from "@/components/site/Reveal";
import { siteConfig } from "@/lib/data/site";

const expectations = [
  {
    icon: Clock,
    title: "Reply within one business day",
    body: "A real answer from the team that would do the work, not a sales sequence.",
  },
  {
    icon: Search,
    title: "An honest feasibility read",
    body: "If your idea won't work or isn't worth the cost, we'll say so up front.",
  },
  {
    icon: BarChart2,
    title: "Numbers, not adjectives",
    body: "Proposals are itemized, with expected returns attached to every line.",
  },
  {
    icon: ShieldOff,
    title: "Zero obligation",
    body: "No pressure tactics, no expiring discounts. Decide on the merits.",
  },
];

export default function ContactPageContent() {
  return (
    <main>
      {/* Hero + form */}
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
                Tell us what you&apos;re trying to achieve
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                A workflow that eats your team&apos;s week, a product idea, a
                website that needs to work harder: describe it in your own
                words and we&apos;ll take it from there.
              </p>

              <div className="mt-10 space-y-6">
                {expectations.map((e, i) => {
                  const Icon = e.icon;
                  return (
                    <Reveal key={e.title} delay={0.1 + i * 0.06}>
                      <div className="flex items-start gap-4">
                        <div className="size-10 shrink-0 border border-line-dark bg-ink-soft flex items-center justify-center text-accent">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">
                            {e.title}
                          </p>
                          <p className="mt-1 text-sm text-white/50 leading-relaxed">
                            {e.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <p className="mt-10 text-sm text-white/40">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </Reveal>

            <Reveal delay={0.15} className="bg-white p-7 md:p-9 self-start">
              <h2 className="text-xl font-bold text-ink mb-6">
                Send us a request
              </h2>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-24">
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Pick a time that works for you
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                30 minutes with the team. We&apos;ll map your workflows, show
                you what&apos;s automatable, and attach real numbers, no
                sales pitch.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="border border-line">
              <div
                className="calendly-inline-widget"
                data-url={siteConfig.calendlyUrl}
                style={{ minWidth: "320px", height: "700px" }}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
