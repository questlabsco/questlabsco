import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Quest Labs Co. collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-12 md:pb-16">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-white/50">Effective date: January 1, 2026</p>
        </div>
      </section>

      <div className="container-site py-16 max-w-3xl space-y-10 text-sm md:text-base leading-relaxed text-ink/80">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Information we collect</h2>
          <p>
            When you contact us through this website, we collect the information
            you provide: your name, email address, company, phone number, and
            the contents of your message. We also collect standard technical
            data such as pages visited and approximate location, via our
            hosting provider&apos;s analytics.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">How we use it</h2>
          <p>
            We use your information solely to respond to your inquiry, provide
            our services, and improve this website. We do not sell your data,
            and we do not send marketing email you didn&apos;t ask for.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Third-party services</h2>
          <p>
            Form submissions are processed by Web3Forms and delivered to our
            inbox. Meeting bookings are handled by Calendly under its own
            privacy policy. This site is hosted on Cloudflare. Each provider
            processes only the data needed to perform its function.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Data retention</h2>
          <p>
            We keep inquiry correspondence for as long as needed to serve you
            and meet legal obligations, after which it is deleted.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Your rights</h2>
          <p>
            You may request a copy of the personal data we hold about you, ask
            us to correct it, or ask us to delete it by emailing{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary font-medium">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary font-medium">
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
