import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { Sparkle } from "@/components/art/Doodles";
import ServiceIcon from "@/components/art/proof/ServiceIcons";
import { services } from "@/lib/data/services";
import { booking } from "@/lib/data/site";

// Homepage: every service as a tidy grid of linked cards. Pale section.
const tints = ["bg-sun-light", "bg-brand-sky/50", "bg-mint/25", "bg-lilac/35"];

// Homepage-only one-liners, said the way we'd say them out loud. Falls back
// to the service's own summary for any slug not listed here.
const blurbs: Record<string, string> = {
  "ai-consulting": "We work out what's worth building and what it should pay back, before you spend anything.",
  "ai-agents": "Hand it a job with a lot of steps and it does the whole thing, start to end.",
  "generative-ai": "Drafts documents and answers questions using your own files and notes.",
  "ai-chatbots": "A chat assistant your customers won't roll their eyes at.",
  "workflow-automation": "The copy-and-paste work your team does by hand, done by software instead.",
  "ai-integration": "AI added to the software you already run, so nobody has to switch apps.",
  "web-development": "Websites and web apps that load fast. We design, build and launch them here.",
  "ui-ux-design": "A site that looks like a real business and gets people to actually get in touch.",
};

export default function Practices() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          title="One Team, From The Plan To The Last Line Of Code"
          highlight="One Team"
          lede={
            <>
              We do the planning, the AI, the automation and the website ourselves, so nobody hands your
              project to someone else halfway through. Not sure what you need? That&apos;s what the{" "}
              <Link href={booking.anchor} className="font-bold text-brand underline">
                {booking.offer}
              </Link>{" "}
              is for.
            </>
          }
        />

        <Reveal className="relative">
          <Sparkle
            className="pointer-events-none absolute -left-5 -top-6 hidden w-8 animate-twinkle lg:block"
          />
          <Sparkle
            color="#35D6A0"
            className="pointer-events-none absolute -bottom-5 -right-4 hidden w-6 animate-twinkle [animation-delay:-1.3s] [animation-duration:3.4s] lg:block"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-pop group flex h-full flex-col p-6 transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-pop-lg active:translate-x-[3px] active:translate-y-[3px] active:shadow-pop-sm"
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-xl border-[3px] border-ink transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110 ${
                      tints[i % tints.length]
                    }`}
                  >
                    <ServiceIcon slug={s.slug} className="h-11 w-11" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{blurbs[s.slug] ?? s.summary}</p>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-4 h-5 w-5 text-brand transition-transform duration-150 group-hover:translate-x-1"
                    strokeWidth={3}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-outline-dark">
            See Every Service
          </Link>
        </div>
      </div>
    </section>
  );
}
