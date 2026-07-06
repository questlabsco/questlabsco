import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Quest Labs Co. website.",
};

// EDIT-ME: starter terms for the website itself. Service engagements are
// governed by individual agreements. Have this reviewed before launch.
export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-12 md:pb-16">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-sm text-white/50">Effective date: January 1, 2026 (EDIT-ME)</p>
        </div>
      </section>

      <div className="container-site py-16 max-w-3xl space-y-10 text-sm md:text-base leading-relaxed text-ink/80">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Use of this website</h2>
          <p>
            This website is provided for general information about Quest Labs
            Co. and its services. You may browse and contact us freely; you may
            not misuse the site, attempt to disrupt it, or use its content to
            misrepresent your relationship with us.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">No professional advice</h2>
          <p>
            Content on this site, including case studies, estimates, and
            descriptions of typical results, is informational and does not
            constitute a guarantee of outcomes. Every engagement is governed by
            its own written agreement.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Intellectual property</h2>
          <p>
            The content, design, and branding of this website belong to Quest
            Labs Co. Third-party trademarks referenced here belong to their
            respective owners.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Limitation of liability</h2>
          <p>
            This website is provided &quot;as is.&quot; To the maximum extent
            permitted by law, Quest Labs Co. is not liable for damages arising
            from your use of the site or reliance on its contents.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Changes</h2>
          <p>
            We may update these terms from time to time; the effective date
            above reflects the latest revision. Continued use of the site
            constitutes acceptance of the current terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Contact</h2>
          <p>
            Questions:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary font-medium">
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
