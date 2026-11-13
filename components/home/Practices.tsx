import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import ServiceIcon from "@/components/art/proof/ServiceIcons";
import { services } from "@/lib/data/services";
import { booking } from "@/lib/data/site";

// Homepage: every service as a tidy grid of linked cards. Pale section.
const tints = ["bg-sun-light", "bg-brand-sky/50", "bg-mint/25", "bg-lilac/35"];

export default function Practices() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          title="Everything It Takes To Put AI To Work, Under One Roof"
          highlight="Under One Roof"
          lede={
            <>
              Strategy, agents, automation and the website around it, all built by one team, so nothing gets
              lost in a handoff. Not sure which you need? Start with a{" "}
              <Link href={booking.anchor} className="font-bold text-brand underline">
                {booking.offer}
              </Link>
              .
            </>
          }
        />

        <Reveal>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-pop group flex h-full flex-col p-6 transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-pop-lg active:translate-x-[3px] active:translate-y-[3px] active:shadow-pop-sm"
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-xl border-[3px] border-ink ${
                      tints[i % tints.length]
                    }`}
                  >
                    <ServiceIcon slug={s.slug} className="h-11 w-11" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{s.summary}</p>
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
            See all services
          </Link>
        </div>
      </div>
    </section>
  );
}
