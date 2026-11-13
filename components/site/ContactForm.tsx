"use client";

import { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import { CheckBadge } from "@/components/art/Doodles";
import { siteConfig } from "@/lib/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border-[3px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-4 focus:ring-sun transition-[border-color,box-shadow]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `New inquiry from ${data.name || "website visitor"} (questlabsco.com)`,
          from_name: "Quest Labs Website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="card-pop p-8 md:p-10 text-center text-ink">
        <CheckBadge className="w-14 mx-auto" />
        <h3 className="mt-4 text-2xl font-extrabold">Message Sent</h3>
        <p className="mt-2 text-base text-ink/80 max-w-sm mx-auto leading-relaxed">
          Thanks for reaching out. We&apos;ll get back to you within one
          business day at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot for bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Full name *"
          className={inputClass}
          aria-label="Full name"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Work email *"
          className={inputClass}
          aria-label="Work email"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="company"
          placeholder="Company"
          className={inputClass}
          aria-label="Company"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone (optional)"
          className={inputClass}
          aria-label="Phone"
        />
      </div>
      <select
        name="budget"
        defaultValue=""
        className={inputClass}
        aria-label="Estimated budget"
      >
        <option value="" disabled>
          Estimated budget (optional)
        </option>
        <option>Under $5,000</option>
        <option>$5,000 – $15,000</option>
        <option>$15,000 – $50,000</option>
        <option>$50,000+</option>
        <option>Not sure yet</option>
      </select>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell us about your project *"
        className={inputClass}
        aria-label="Project details"
      />

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 text-sm font-semibold text-red-700">
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          Something went wrong. Please try again or email us directly at{" "}
          {siteConfig.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary btn-lg group w-full sm:w-auto disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-sm text-muted-foreground">
        We reply within one business day. Your information is never shared.
      </p>
    </form>
  );
}
