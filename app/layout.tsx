import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quest Labs Co. — Your Outsourced AI Automation Department",
  description:
    "We build, run, and continuously improve AI-powered automation systems for your business — on a monthly subscription, for a fraction of the cost of a single hire.",
  keywords: [
    "AI automation",
    "workflow automation",
    "outsourced automation",
    "AI agency",
    "process automation",
  ],
  openGraph: {
    title: "QuestLabs — Your Outsourced AI Automation Department",
    description:
      "We find the repetitive workflows eating your team's time and build AI systems to handle them — for a fraction of the cost of a single in-house hire.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="bg-background text-foreground antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
