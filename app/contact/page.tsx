import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Let's Talk",
  description:
    "Tell us about your project. We reply within one business day. Or book a 30-minute call directly.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
