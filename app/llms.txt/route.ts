import { posts } from "@/lib/data/blog";
import { engagements } from "@/lib/data/engagements";
import { industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import { booking, siteConfig } from "@/lib/data/site";

// /llms.txt: a plain-Markdown map of the site for AI assistants and AI
// search (ChatGPT, Claude, Perplexity, Gemini). Built from the same data
// files as the pages, so it can't drift out of date.
export const dynamic = "force-static";

const site = siteConfig.url;
const link = (title: string, path: string, note: string) =>
  `- [${title}](${site}${path}): ${note}`;

export function GET() {
  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    "> AI automation and web development agency in Dallas-Fort Worth, Texas. Builds AI agents, workflow automations and websites for small and mid-sized businesses.",
    "",
    `${siteConfig.name} plans and builds automation for the repetitive office work that eats a team's week: copying data between tools, chasing documents, answering the same questions, scheduling and follow-ups, and reporting. Every project starts with a free automation audit (a 60-second quiz, then a ${booking.durationAdjective} call), followed by a written roadmap with prices before any build begins.`,
    "",
    "## Start Here",
    "",
    link("Home", "/", "What Quest Labs Co. does, who it works with, how a project runs and the questions people ask before booking."),
    link("Free Automation Audit", booking.page, `The main offer. A seven-question quiz, then a free ${booking.durationAdjective} call covering workflows, tools, time sinks, quick wins and rough numbers.`),
    link("Case Studies", "/case-studies", "Eight client projects, one per industry, each with the business, the manual process before, what was built, the tools, the timeline and the measured result."),
    link("About", "/about", "How the team works, what clients own at handover, who the agency works with and where it is based."),
    link("Book A Call", booking.calendarPage, `Calendar for booking the ${booking.durationAdjective} audit call directly, plus a contact form.`),
    "",
    "## Services",
    "",
    link("All Services", "/services", "Overview of the AI, automation, web development and design services."),
    ...services.map((s) => link(s.name, `/services/${s.slug}`, s.summary)),
    "",
    "## Industries",
    "",
    link("All Industries", "/industries", "The eight industries the agency builds for, with typical automations in each."),
    ...industries.map((i) => link(i.name, `/industries/${i.slug}`, i.summary)),
    "",
    "## Case Studies",
    "",
    ...engagements.map((e) => link(e.title, `/case-studies/${e.slug}`, e.summary)),
    "",
    "## Blog",
    "",
    link("Blog", "/blog", "Plain-English guides to AI agents, automation tools, costs and industry playbooks."),
    ...posts.map((p) => link(p.title, `/blog/${p.slug}`, p.description)),
    "",
    "## Key Facts",
    "",
    `- Business type: AI automation agency and web development studio`,
    `- Location: ${siteConfig.location}`,
    "- Clients: 25+ active clients, mostly small and mid-sized businesses",
    "- Hours saved: tens of thousands of hours of manual work saved for clients",
    "- Average client rating: 4.9 out of 5",
    "- Team: 23+ years of combined engineering experience",
    "- 86% of client work is in regulated industries",
    "- Typical project: 4 to 8 weeks from kickoff to a production build",
    "- Pricing: no public price list. Each project gets a written, priced roadmap before the build starts",
    "- Ownership: the client owns what is built, with documentation and handover",
    "- Tools commonly used: n8n, Zapier, Make, Microsoft Power Automate, OpenAI, Claude, Gemini, Airtable, HubSpot, Shopify, Twilio, SharePoint, Outlook and Excel",
    "- Case-study figures are results measured on each client project",
    "",
    "## Contact",
    "",
    `- Website: ${site}`,
    `- Email: ${siteConfig.email}`,
    `- Free audit: ${site}${booking.page}`,
    `- Booking calendar: ${siteConfig.calendlyUrl}`,
    `- LinkedIn: ${siteConfig.social.linkedin}`,
    `- YouTube: ${siteConfig.social.youtube}`,
    "",
    "## Optional",
    "",
    link("RSS Feed", "/blog/rss.xml", "Feed of every blog post."),
    link("Privacy Policy", "/privacy", "How personal data from forms and bookings is handled."),
    link("Terms", "/terms", "Terms of use for the website."),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
