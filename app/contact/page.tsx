import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Book Your Free Audit Call",
  description:
    `Pick a time for your free automation audit: a ${booking.durationAdjective} call with Quest Labs Co. to find out what's worth automating. Or send us a message and we'll reply within one business day.`,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
