// Service definitions. Each entry generates /services/[slug].
// Copy is original; edit freely.

export type Service = {
  slug: string;
  name: string; // short label for nav + footer
  group: "AI & Automation" | "Web & Design";
  summary: string; // one-liner for hub cards and mega-menu
  title: string; // page hero headline
  intro: string; // page hero paragraph
  offerings: { title: string; body: string }[]; // numbered list
  solutions: { title: string; body: string }[]; // grid of what we build
  industrySlugs: string[];
  faqs: { q: string; a: string }[];
  caseStudySlugs: string[];
};

export const services: Service[] = [
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    group: "AI & Automation",
    summary: "Strategy, feasibility, and ROI mapping before you invest.",
    title: "AI consulting services",
    intro:
      "Most AI budgets are wasted on the wrong use case. We help you find the right ones: auditing your workflows, scoring opportunities by feasibility and return, and leaving you with a roadmap you can execute with us or without us.",
    offerings: [
      {
        title: "AI opportunity audit",
        body: "A structured review of your team's workflows to identify where AI and automation create measurable value: each opportunity priced against its expected return.",
      },
      {
        title: "AI readiness assessment",
        body: "An honest look at your data, systems, and processes to determine what's usable today and what needs preparation before AI can deliver.",
      },
      {
        title: "Use-case prioritization & roadmap",
        body: "A sequenced plan that starts with quick, low-risk wins and builds toward larger transformations, with budgets and timelines attached.",
      },
      {
        title: "Vendor & model selection",
        body: "Independent guidance on models, platforms, and build-vs-buy decisions. We're not resellers, so our recommendation is whatever fits your case.",
      },
      {
        title: "AI governance & risk",
        body: "Practical policies for data handling, human oversight, and compliance, sized for your organization rather than copied from an enterprise playbook.",
      },
      {
        title: "Proof-of-concept delivery",
        body: "When a use case looks promising, we validate it with a working prototype on your real data before you commit to a full build.",
      },
    ],
    solutions: [
      {
        title: "Automation roadmaps",
        body: "A prioritized backlog of automations with ROI estimates your leadership can act on.",
      },
      {
        title: "Feasibility studies",
        body: "Evidence-based answers on whether a proposed AI project will actually work.",
      },
      {
        title: "Pilot programs",
        body: "Scoped pilots that prove value in one team before rolling out company-wide.",
      },
      {
        title: "Executive workshops",
        body: "Hands-on sessions that get decision-makers fluent in what modern AI can and cannot do.",
      },
    ],
    industrySlugs: ["healthcare", "finance", "legal", "logistics"],
    faqs: [
      {
        q: "What does an AI consulting engagement look like?",
        a: "Typically one to three weeks: workshops with your team, a workflow audit, and a final report with prioritized use cases, ROI estimates, and a delivery roadmap. You own everything we produce.",
      },
      {
        q: "Do we have to build with you afterward?",
        a: "No. The roadmap is written so any competent team can execute it. Most clients do continue with us, but the audit is designed to stand alone.",
      },
      {
        q: "How do you estimate ROI before anything is built?",
        a: "We measure the current cost of a workflow (hours, error rates, delays) and model the automated version against it. Estimates are ranges with stated assumptions, not single optimistic numbers.",
      },
      {
        q: "Our data is a mess. Is AI still realistic?",
        a: "Usually yes. Many high-value automations need surprisingly little data preparation, and the assessment tells you exactly which ones. Where data work is required, it goes on the roadmap with its own cost.",
      },
    ],
    caseStudySlugs: ["healthcare-rcm-analytics", "legal-contract-intelligence"],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    group: "AI & Automation",
    summary: "Autonomous agents that execute multi-step work end to end.",
    title: "AI agent development",
    intro:
      "AI agents go beyond answering questions. They complete work. We build agents that research, draft, reconcile, file, and follow up across your systems, with the permissions, logging, and human checkpoints that make them safe to run in production.",
    offerings: [
      {
        title: "Agent design & scoping",
        body: "We map the task, define what the agent may and may not do, and design the human-approval points before any code is written.",
      },
      {
        title: "Custom agent development",
        body: "Production agents built on frontier models with tool use: connected to your CRM, ERP, inbox, and internal APIs.",
      },
      {
        title: "Multi-agent systems",
        body: "Orchestrated teams of specialized agents for complex pipelines (one researches, one drafts, one validates) with a coordinator enforcing the workflow.",
      },
      {
        title: "Agent evaluation & guardrails",
        body: "Test suites, sandboxed execution, spend limits, and audit logs so you can trust what the agent did and prove it later.",
      },
      {
        title: "Ongoing operation & tuning",
        body: "We monitor agent performance in production, review edge cases, and improve prompts and tools as your processes change.",
      },
    ],
    solutions: [
      {
        title: "Back-office agents",
        body: "Invoice processing, data reconciliation, report generation, and record keeping handled automatically.",
      },
      {
        title: "Research agents",
        body: "Market, compliance, or prospect research compiled into structured briefs on schedule.",
      },
      {
        title: "Sales & CRM agents",
        body: "Lead enrichment, qualification, follow-up drafting, and pipeline hygiene that never falls behind.",
      },
      {
        title: "Operations agents",
        body: "Order tracking, exception handling, and status communication across your supply chain tools.",
      },
    ],
    industrySlugs: ["finance", "logistics", "legal", "retail-ecommerce"],
    faqs: [
      {
        q: "How is an agent different from a chatbot?",
        a: "A chatbot converses; an agent acts. Agents plan multi-step tasks, call tools and APIs, check their own work, and deliver a finished outcome: a filed report, an updated record, a sent follow-up.",
      },
      {
        q: "What stops an agent from doing something wrong?",
        a: "Scoped permissions, approval gates for consequential actions, spend and rate limits, and complete audit logs. High-stakes actions always route through a human until the track record justifies autonomy.",
      },
      {
        q: "Which models do you build on?",
        a: "We're model-agnostic: Claude, GPT, Gemini, or open-weight models, chosen per task for capability, cost, and data-residency requirements. Architecture keeps you portable between them.",
      },
      {
        q: "How long until an agent is in production?",
        a: "A scoped single-task agent typically ships in four to eight weeks including evaluation. Multi-agent systems take longer and are usually rolled out one capability at a time.",
      },
    ],
    caseStudySlugs: ["logistics-document-ai", "fintech-trading-automation"],
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    group: "AI & Automation",
    summary: "Content, document, and knowledge systems built on LLMs.",
    title: "Generative AI development",
    intro:
      "We build generative AI systems that produce work your team would otherwise do by hand (drafting documents, summarizing records, answering from your knowledge base) grounded in your data so outputs are accurate, on-brand, and auditable.",
    offerings: [
      {
        title: "RAG knowledge systems",
        body: "Retrieval-augmented generation over your documents, wikis, and databases: answers with citations, not hallucinations.",
      },
      {
        title: "Document generation",
        body: "Proposals, reports, contracts, and correspondence drafted from your templates and live data, ready for human review.",
      },
      {
        title: "Summarization pipelines",
        body: "Long records (calls, cases, threads, filings) condensed into structured summaries your team actually reads.",
      },
      {
        title: "Fine-tuning & model adaptation",
        body: "When prompting isn't enough, we adapt models to your domain language and formats with fine-tuning and structured evaluation.",
      },
      {
        title: "LLM evaluation & safety",
        body: "Automated eval suites that score accuracy, tone, and policy compliance before and after every change.",
      },
    ],
    solutions: [
      {
        title: "Internal knowledge assistants",
        body: "Staff ask questions in plain language; the system answers from your own documentation with sources.",
      },
      {
        title: "Content operations",
        body: "Product descriptions, listings, and marketing variants generated at scale under editorial control.",
      },
      {
        title: "Intelligent document processing",
        body: "Unstructured PDFs, emails, and scans turned into clean, structured data in your systems.",
      },
      {
        title: "Meeting & call intelligence",
        body: "Transcripts turned into action items, CRM updates, and follow-up drafts automatically.",
      },
    ],
    industrySlugs: ["legal", "healthcare", "real-estate", "education"],
    faqs: [
      {
        q: "How do you prevent hallucinations?",
        a: "Grounding: the model answers only from retrieved, cited sources; low-confidence cases route to humans; automated evals catch drift. For factual workflows we design so wrong answers are detectable, not just rare.",
      },
      {
        q: "Is our data used to train public models?",
        a: "No. We use enterprise API tiers with no-training guarantees, or private/self-hosted deployments where required. Your data stays yours contractually and architecturally.",
      },
      {
        q: "Do we need fine-tuning?",
        a: "Usually not at first. Retrieval and careful prompting solve most cases at lower cost. Fine-tuning earns its place for high-volume, format-heavy tasks, and the evaluation data tells us when.",
      },
      {
        q: "What does a typical build cost?",
        a: "Scoped after a short discovery, since it depends on data sources and integrations. Every proposal itemizes build cost and expected monthly run cost: no single-line 'AI package' totals.",
      },
    ],
    caseStudySlugs: ["legal-contract-intelligence", "healthcare-rcm-analytics"],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    group: "AI & Automation",
    summary: "Support and sales assistants your customers actually like.",
    title: "AI chatbot development",
    intro:
      "We build chat assistants that resolve real customer issues: grounded in your help content, connected to your order and account systems, and honest enough to hand off to a human at the right moment.",
    offerings: [
      {
        title: "Customer support assistants",
        body: "Bots that answer from your real help center, check order status via API, and resolve the repetitive 60% so agents handle the hard 40%.",
      },
      {
        title: "Sales & lead qualification bots",
        body: "Assistants that answer product questions, qualify visitors, and book meetings directly into your calendar.",
      },
      {
        title: "Internal helpdesk assistants",
        body: "IT and HR bots that answer policy questions and file tickets, cutting internal queue volume.",
      },
      {
        title: "Voice & multichannel deployment",
        body: "One assistant across web, WhatsApp, SMS, and phone: consistent answers everywhere your customers are.",
      },
      {
        title: "Handoff & escalation design",
        body: "Confidence-based routing to human agents with full conversation context, so customers never repeat themselves.",
      },
    ],
    solutions: [
      {
        title: "E-commerce support",
        body: "Order status, returns, and product Q&A resolved instantly, day and night.",
      },
      {
        title: "Appointment booking",
        body: "Scheduling assistants for clinics, agencies, and service businesses.",
      },
      {
        title: "Onboarding guides",
        body: "In-product assistants that walk new users through setup and reduce churn.",
      },
      {
        title: "FAQ deflection",
        body: "The long tail of repetitive questions answered before they become tickets.",
      },
    ],
    industrySlugs: ["retail-ecommerce", "healthcare", "real-estate", "education"],
    faqs: [
      {
        q: "Will it embarrass us in front of customers?",
        a: "Not if built properly. Our bots answer only from approved content, decline questions outside scope, and escalate on low confidence. We test against adversarial transcripts before launch.",
      },
      {
        q: "Can it take actions, not just answer?",
        a: "Yes, with API access it can look up orders, process standard returns, update bookings, and file tickets. Every action is permission-scoped and logged.",
      },
      {
        q: "How long does deployment take?",
        a: "A grounded FAQ-plus-handoff assistant: two to four weeks. Assistants with system integrations: typically four to eight weeks including testing.",
      },
      {
        q: "What about languages?",
        a: "Modern models handle dozens of languages natively. We test quality per language you care about rather than assuming.",
      },
    ],
    caseStudySlugs: ["retail-support-chatbot", "ecommerce-personalization"],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    group: "AI & Automation",
    summary: "The repetitive work your team does by hand, done by software.",
    title: "Intelligent workflow automation",
    intro:
      "Every business runs on repetitive digital work: copying data between tools, chasing approvals, assembling reports. We find the workflows worth automating, build the automations, and run them so the hours come back to your team permanently.",
    offerings: [
      {
        title: "Automation audit",
        body: "A one-to-two-week deep dive that maps your workflows and attaches a real dollar figure to each automation opportunity.",
      },
      {
        title: "Cross-tool workflow automation",
        body: "Your CRM, inbox, spreadsheets, and ERP connected so data moves itself: no more swivel-chair copy-paste.",
      },
      {
        title: "AI-powered document handling",
        body: "Invoices, orders, and forms extracted, validated, and entered automatically, with exceptions routed to humans.",
      },
      {
        title: "Approval & notification flows",
        body: "Requests routed, reminders sent, and status tracked automatically so nothing stalls in someone's inbox.",
      },
      {
        title: "Embedded automation team",
        body: "An ongoing engagement: we own, monitor, and expand your automations, shipping new ones from your backlog every month.",
      },
    ],
    solutions: [
      {
        title: "Finance operations",
        body: "Invoice capture, reconciliation, and payment reminders on autopilot.",
      },
      {
        title: "Sales operations",
        body: "Lead capture, enrichment, routing, and follow-up without manual triage.",
      },
      {
        title: "HR & onboarding",
        body: "Offer letters, account provisioning, and checklists triggered by a single approval.",
      },
      {
        title: "Reporting",
        body: "The weekly numbers assembled and delivered before anyone asks.",
      },
    ],
    industrySlugs: [
      "logistics",
      "healthcare",
      "finance",
      "manufacturing",
    ],
    faqs: [
      {
        q: "Where do we start?",
        a: "With the audit. In one to two weeks you get a map of what's automatable and what each item is worth, with no obligation to build with us. The audit fee credits toward a build if you continue.",
      },
      {
        q: "Do you replace our existing tools?",
        a: "No, we connect them. Automations work across the stack you already use. If a tool genuinely blocks automation, we'll flag it, but rip-and-replace is a last resort.",
      },
      {
        q: "What if a workflow changes after launch?",
        a: "Automations are documented and built modularly, so changes are cheap. Embedded-team clients get changes handled as part of the monthly engagement.",
      },
      {
        q: "Is this RPA?",
        a: "Sometimes, where legacy systems have no APIs. But most modern automation is API-first with AI handling the unstructured parts, more reliable and easier to maintain than screen-scraping bots.",
      },
    ],
    caseStudySlugs: ["logistics-document-ai", "healthcare-rcm-analytics"],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    group: "AI & Automation",
    summary: "AI capabilities added to the software you already run.",
    title: "AI integration services",
    intro:
      "You don't need a new platform to benefit from AI. You need intelligence added to the systems your team already lives in. We integrate AI into your existing products, CRMs, ERPs, and internal tools with minimal disruption.",
    offerings: [
      {
        title: "AI features for your product",
        body: "Search, summarization, generation, and assistant features designed and shipped inside your existing application.",
      },
      {
        title: "CRM & ERP intelligence",
        body: "Scoring, drafting, and data-hygiene AI embedded in Salesforce, HubSpot, and the systems of record you run today.",
      },
      {
        title: "API & pipeline integration",
        body: "Model providers wired into your backend with caching, fallbacks, cost controls, and observability from day one.",
      },
      {
        title: "Legacy system enablement",
        body: "AI capabilities layered onto older systems through APIs, middleware, or RPA where no integration path exists.",
      },
      {
        title: "Security & compliance review",
        body: "Data-flow mapping, PII handling, and access controls validated before anything touches production data.",
      },
    ],
    solutions: [
      {
        title: "In-app AI assistants",
        body: "Your users get answers and actions inside your product, not in a separate tab.",
      },
      {
        title: "Smart search",
        body: "Semantic search over your product's content that understands intent, not just keywords.",
      },
      {
        title: "Auto-drafting",
        body: "Replies, notes, and summaries pre-written inside the tools where work happens.",
      },
      {
        title: "Data enrichment",
        body: "Records cleaned, deduplicated, and enriched continuously in the background.",
      },
    ],
    industrySlugs: ["finance", "healthcare", "real-estate", "manufacturing"],
    faqs: [
      {
        q: "Will integration disrupt our current system?",
        a: "Integrations ship behind feature flags with staged rollouts and rollback plans. Your system keeps working exactly as before until the new capability is proven.",
      },
      {
        q: "Which model providers can you integrate?",
        a: "Anthropic, OpenAI, Google, and open-weight models, usually behind an abstraction layer so you can switch providers as pricing and capability evolve.",
      },
      {
        q: "How do you control API costs?",
        a: "Caching, model routing (small models for simple calls), token budgets, and per-feature cost dashboards. You'll know the unit cost of every AI feature before full rollout.",
      },
      {
        q: "Our vendor already offers an AI add-on. Why build?",
        a: "Sometimes the add-on is the right call and we'll say so. Custom integration wins when the vendor feature doesn't fit your workflow, locks in your data, or prices per seat what you could run per use.",
      },
    ],
    caseStudySlugs: ["fintech-trading-automation", "retail-support-chatbot"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    group: "Web & Design",
    summary: "Fast, modern websites and web apps, built end to end.",
    title: "Web development services",
    intro:
      "We design and build complete websites and web applications: marketing sites that load instantly, dashboards your team relies on, and customer portals that feel like products. Engineering-grade builds, not page-builder templates.",
    offerings: [
      {
        title: "Corporate & marketing websites",
        body: "Fast, SEO-sound, easy-to-edit sites built on modern frameworks and deployed on global edge hosting.",
      },
      {
        title: "Web applications & portals",
        body: "Customer portals, internal dashboards, and booking systems with authentication, payments, and integrations.",
      },
      {
        title: "AI-enabled web products",
        body: "Sites and apps with built-in assistants, semantic search, and personalization: our AI practice and web practice under one roof.",
      },
      {
        title: "Performance & SEO engineering",
        body: "Core Web Vitals, structured data, and accessibility handled as engineering requirements, not afterthoughts.",
      },
      {
        title: "Maintenance & iteration",
        body: "Ongoing improvements, content updates, and monitoring after launch: your site keeps getting better instead of slowly rotting.",
      },
    ],
    solutions: [
      {
        title: "Company websites",
        body: "Multi-page corporate sites that establish credibility and convert.",
      },
      {
        title: "Product landing pages",
        body: "Launch pages with analytics and A/B testing wired in from day one.",
      },
      {
        title: "Client portals",
        body: "Secure logins where your customers track orders, documents, and status.",
      },
      {
        title: "Internal tools",
        body: "The dashboard your ops team keeps asking for, built in weeks.",
      },
    ],
    industrySlugs: ["real-estate", "education", "retail-ecommerce", "legal"],
    faqs: [
      {
        q: "What stack do you build on?",
        a: "Typically TypeScript, React/Next.js, and Tailwind, deployed to edge platforms like Cloudflare. Boring, proven, fast, and easy for any future developer to take over.",
      },
      {
        q: "Can we edit content ourselves after launch?",
        a: "Yes. Depending on your needs we wire in a headless CMS or keep content in simple structured files. Either way, routine edits don't require a developer.",
      },
      {
        q: "How long does a website take?",
        a: "A focused marketing site: three to six weeks from kickoff to launch. Web applications vary with scope; we quote after a short discovery with an itemized breakdown.",
      },
      {
        q: "Do you also handle hosting and domains?",
        a: "Yes, we set up hosting, DNS, SSL, and analytics, and hand over full ownership of every account. No hostage infrastructure.",
      },
    ],
    caseStudySlugs: ["ecommerce-personalization", "retail-support-chatbot"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    group: "Web & Design",
    summary: "Website design that looks credible and converts.",
    title: "UI/UX design for the web",
    intro:
      "Design is the first thing your customers judge. Our web design practice covers research, wireframes, visual design, and design systems: always for the web, always built to be implemented, because the same team writes the code.",
    offerings: [
      {
        title: "Website UX & information architecture",
        body: "Page structures and user journeys planned around what visitors need to decide, not around what's easy to build.",
      },
      {
        title: "Visual & interaction design",
        body: "Distinctive, on-brand visual systems with real typography and motion, never template lookalikes.",
      },
      {
        title: "Design systems for the web",
        body: "Reusable component libraries that keep your site consistent as it grows and make future pages cheap.",
      },
      {
        title: "UX audits & conversion review",
        body: "A structured review of your existing site: where visitors drop, why, and the ranked fixes worth making.",
      },
      {
        title: "Prototyping & validation",
        body: "Clickable prototypes tested with real users before engineering time is spent.",
      },
    ],
    solutions: [
      {
        title: "Website redesigns",
        body: "Your existing site rebuilt around clarity, speed, and trust.",
      },
      {
        title: "Design-to-code delivery",
        body: "Designs implemented pixel-faithfully by the same team: nothing lost in handoff.",
      },
      {
        title: "Brand-consistent components",
        body: "A web design system your whole site is assembled from.",
      },
      {
        title: "Conversion optimization",
        body: "Measured improvements to the pages where revenue actually happens.",
      },
    ],
    industrySlugs: ["retail-ecommerce", "real-estate", "education", "finance"],
    faqs: [
      {
        q: "Do you design mobile apps too?",
        a: "No, we deliberately focus on web. Websites, web apps, and web design systems are what we're best at, so that's all we sell.",
      },
      {
        q: "What do we get at the end of a design engagement?",
        a: "Complete design files, a component library, and documentation; or, most commonly, the implemented website itself, since design and engineering are one team here.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Yes. We extend existing brand guidelines to the web rather than reinventing them, or evolve them carefully where the web demands it.",
      },
      {
        q: "How do you measure design success?",
        a: "Before/after metrics agreed up front: conversion, task completion, bounce, and qualitative user feedback. Design reviews are about evidence, not taste debates.",
      },
    ],
    caseStudySlugs: ["ecommerce-personalization", "legal-contract-intelligence"],
  },
];

export const serviceGroups = ["AI & Automation", "Web & Design"] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
