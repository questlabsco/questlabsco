import { Clock, Search, BarChart2, ShieldOff } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import CalendlyEmbed from "@/components/site/CalendlyEmbed";
import Reveal from "@/components/site/Reveal";
import { booking, siteConfig } from "@/lib/data/site";

const expectations = [
  {
    icon: Clock,
    title: `${booking.duration}, with the people who do the work`,
    body: "A real conversation with the team that would build it, not a sales sequence.",
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
      {/* Hero + calendar: booking is the first thing on the page */}
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
                Book a free call
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Pick a time that works for you. We&apos;ll map your
                workflows, show you what&apos;s automatable, and attach real
                numbers.
              </p>

              <div className="mt-10 space-y-6">
                {expectations.map((e) => {
                  const Icon = e.icon;
                  return (
                    <div key={e.title} className="flex items-start gap-4">
                      <div className="size-10 shrink-0 border border-line-dark bg-ink-soft flex items-center justify-center text-accent">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{e.title}</p>
                        <p className="mt-1 text-sm text-white/50 leading-relaxed">
                          {e.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-10 text-sm text-white/55 leading-relaxed">
                25+ active clients. Tens of thousands of hours of manual work
                saved. 4.9 / 5 average client rating.
              </p>
            </div>

            <div className="bg-white">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Message form, for people who would rather write */}
      <section id="message" className="bg-white">
        <div className="container-site py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Or send us a message
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                A workflow that eats your team&apos;s week, a product idea, a
                website that needs to work harder: describe it in your own
                words and we&apos;ll reply within one business day.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-primary hover:text-primary-hover transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </Reveal>
            <Reveal className="border border-line p-7 md:p-9">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
