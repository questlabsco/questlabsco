import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Book a Free Call",
  description:
    `Book a free ${booking.durationAdjective} call with Quest Labs Co. to find out what's worth automating, or send us a message. We reply within one business day.`,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
