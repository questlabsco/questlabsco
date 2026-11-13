import { clientLogos } from "@/lib/data/logos";
import { HandArrow } from "@/components/art/Doodles";

// Homepage: the client logo wall, right under the hero. White section.
// Logos are one-colour navy files shown at 60% and full strength on hover.
// No links, and no claim, number or quote attached to any client.

// Size each logo by area rather than height, so a long wordmark and a
// stacked badge carry about the same visual weight.
const TARGET_AREA = 7200; // px², at display size
function displayHeight(width: number, height: number) {
  const aspect = width / height;
  return Math.round(Math.min(56, Math.max(30, Math.sqrt(TARGET_AREA / aspect))));
}

// Slow, out-of-step drift so the row breathes without looking busy.
const drift = [
  { duration: "7.5s", delay: "-1.2s" },
  { duration: "9s", delay: "-4.1s" },
  { duration: "6.5s", delay: "-2.6s" },
  { duration: "8.5s", delay: "-0.4s" },
  { duration: "7s", delay: "-5.3s" },
  { duration: "8s", delay: "-3.2s" },
];

export default function ClientLogos() {
  return (
    <section aria-labelledby="client-logos-heading" className="bg-white py-12 md:py-16">
      <style>{`
        @keyframes clientlogos-drift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes clientlogos-note {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(-1deg); }
        }
        .clientlogos-drift { animation: clientlogos-drift 8s ease-in-out infinite; }
        .clientlogos-note { animation: clientlogos-note 5s ease-in-out infinite; transform-origin: left center; }
      `}</style>

      <div className="container-site relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-0 hidden w-48 flex-col items-start xl:flex"
        >
          <span className="note-hand clientlogos-note">Real DFW businesses, real work</span>
          <HandArrow className="ml-6 mt-1 w-12 -scale-x-100" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 id="client-logos-heading" className="h-section text-2xl text-ink md:text-3xl">
            Trusted By Teams Across <span className="hl">Dallas-Fort Worth</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/80 md:text-lg">
            Landscapers, a dermatology practice, an HVAC outfit and a handful of property managers.
            A few of the local businesses we&apos;ve worked with.
          </p>
        </div>

        <ul className="mx-auto mt-9 grid max-w-3xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 md:mt-11 md:grid-cols-3 md:gap-x-12 md:gap-y-10">
          {clientLogos.map((logo, i) => {
            const h = displayHeight(logo.width, logo.height);
            const { duration, delay } = drift[i % drift.length];
            return (
              <li
                key={logo.name}
                className="clientlogos-drift flex items-center"
                style={{ animationDuration: duration, animationDelay: delay }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                  className="w-auto max-w-full object-contain opacity-60 transition-[opacity,transform] duration-200 hover:scale-105 hover:opacity-100"
                  style={{ height: h }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
