// The blog: every post, newest first, plus lookups for the pages.
// Each post is its own file in ./posts; add new ones to `all` below.

import type { BlogCategory, BlogPost } from "./types";
import n8nVsZapierVsMake from "./posts/n8n-vs-zapier-vs-make";
import aiChatbotVsAiAgent from "./posts/ai-chatbot-vs-ai-agent";
import whatDrivesAiAgentCost from "./posts/what-drives-ai-agent-cost";
import aiAutomationAgencyVsInHouse from "./posts/ai-automation-agency-vs-in-house";
import signsYouNeedWorkflowAutomation from "./posts/signs-you-need-workflow-automation";
import diyAutomationAudit from "./posts/diy-automation-audit";
import whatIsAnAiAutomationAudit from "./posts/what-is-an-ai-automation-audit";
import medSpaMissedCallsAutomation from "./posts/med-spa-missed-calls-automation";
import propertyManagementAutomation from "./posts/property-management-automation";
import fieldServiceAutomation from "./posts/field-service-automation";

export type { Block, BlogArt, BlogCategory, BlogPost } from "./types";

const all: BlogPost[] = [
  n8nVsZapierVsMake,
  aiChatbotVsAiAgent,
  whatDrivesAiAgentCost,
  aiAutomationAgencyVsInHouse,
  signsYouNeedWorkflowAutomation,
  diyAutomationAudit,
  whatIsAnAiAutomationAudit,
  medSpaMissedCallsAutomation,
  propertyManagementAutomation,
  fieldServiceAutomation,
];

// Newest first; posts published the same day sort by title.
export const posts: BlogPost[] = [...all].sort(
  (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title)
);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// Every category, in the order the blog hub shows them. Categories with no
// posts yet are left out.
const categoryOrder: BlogCategory[] = [
  "Automation Basics",
  "Tools",
  "AI Agents",
  "Buying Guide",
  "Industry Playbooks",
];

export const categories: BlogCategory[] = categoryOrder.filter((c) =>
  posts.some((p) => p.category === c)
);

// "Industry Playbooks" -> "industry-playbooks", used as the anchor id of
// the category's section on /blog.
export function categorySlug(category: BlogCategory): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function postsIn(category: BlogCategory): BlogPost[] {
  return posts.filter((p) => p.category === category);
}

// The related posts a post lists, skipping any slug that doesn't exist.
export function relatedPosts(post: BlogPost): BlogPost[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);
}

// "2026-11-12" -> "November 12, 2026". Read as UTC so the day never shifts
// with the build machine's time zone.
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
