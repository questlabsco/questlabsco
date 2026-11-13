import Link from "next/link";
import { ArrowRight } from "lucide-react";

// A worked example of what we build, drawn as the workflow itself: each box
// is a step, and the highlight travels along them in order. The steps come
// from the med spa example engagement.
const steps = [
  { label: "Trigger", title: "Website inquiry or missed call", detail: "From either location" },
  { label: "n8n", title: "Workflow picks it up", detail: "Reads the service and location" },
  { label: "HubSpot", title: "One record, one owner", detail: "Assigned to a staff member" },
  { label: "Twilio", title: "Text follow-up", detail: "Stops on reply, opt-out or booking" },
  { label: "Your team", title: "Staff take over", detail: "Clinical questions go straight here" },
];

export default function FlowDiagram() {
  return (
    <figure className="border border-line bg-surface">
      <figcaption className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-4 md:px-8">
        <span className="label-mono">
          Example workflow · inquiries at a two-location med spa
        </span>
        <Link
          href="/examples/med-spa-front-desk"
          className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          Read the example
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </figcaption>

      <ol className="grid grid-cols-1 md:grid-cols-5 gap-3 p-6 md:p-8">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="flow-node relative border border-line bg-background p-5"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {String(i + 1).padStart(2, "0")} · {s.label}
            </span>
            <p className="mt-4 text-base font-medium leading-snug text-white">
              {s.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              {s.detail}
            </p>
            {/* connector to the next step */}
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="hidden md:block absolute top-1/2 -right-3 h-px w-3 bg-line"
              />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
