// Service definitions. Each entry generates /services/[slug].
// Copy is original; edit freely. `intro` is also the meta description, so
// its first sentence should say plainly what the service is.

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
  caseStudySlugs: string[]; // slugs of example engagements in engagements.ts
  answer?: { q: string; a: string[] }; // Plain definition shown under the hero; written so it can be quoted on its own.
};

export const services: Service[] = [
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    group: "AI & Automation",
    summary: "Find out where AI will actually pay off, before you spend on it.",
    title: "AI consulting services",
    intro:
      "AI consulting for businesses that want to know where AI will pay off before they spend on it. You leave with a roadmap you can run with us, or without us.",
    offerings: [
      {
        title: "AI opportunity review",
        body: "We sit with your team, walk through how the work really gets done, and price every AI or automation idea against what it should return.",
      },
      {
        title: "AI readiness assessment",
        body: "A straight look at your data, systems and processes. What's usable today, and what needs cleaning up before AI can do anything useful with it.",
      },
      {
        title: "Use-case priorities and roadmap",
        body: "Quick, low-risk wins first, bigger projects after, each with a budget and a timeline attached. The order matters more than most people expect.",
      },
      {
        title: "Vendor and model selection",
        body: "Which model, which platform, build it or buy it. We don't resell anything, so we recommend whatever fits your case.",
      },
      {
        title: "AI governance and risk",
        body: "Sensible rules for data handling, human sign-off and compliance, sized for a company like yours instead of lifted from a giant enterprise's playbook.",
      },
      {
        title: "Proof-of-concept builds",
        body: "When an idea looks promising, we build a working prototype on your real data. You see it work (or not) before you commit to the full build.",
      },
    ],
    solutions: [
      {
        title: "Automation roadmaps",
        body: "A ranked backlog of automations, each with an ROI estimate your leadership can say yes or no to.",
      },
      {
        title: "Feasibility studies",
        body: "Will this AI project actually work? We answer with evidence, not a hunch.",
      },
      {
        title: "Pilot programs",
        body: "Prove it in one team first. Roll it out to everyone once it has earned it.",
      },
      {
        title: "Executive workshops",
        body: "Hands-on sessions so your decision-makers know what today's AI can do, and what it can't.",
      },
    ],
    industrySlugs: ["healthcare", "finance", "legal", "logistics"],
    faqs: [
      {
        q: "What does an AI consulting engagement look like?",
        a: "Usually one to three weeks. We run workshops with your team, audit the workflows, and hand over a final report with the use cases in priority order, ROI estimates and a delivery roadmap. You own all of it.",
      },
      {
        q: "Do we have to build with you afterward?",
        a: "No. We write the roadmap so any capable team can pick it up. Most clients do keep going with us, but the roadmap is built to stand on its own.",
      },
      {
        q: "How do you estimate ROI before anything is built?",
        a: "We measure what the workflow costs you now (hours, error rates, delays) and model the automated version against that. You get a range with the assumptions written down, not one hopeful number.",
      },
      {
        q: "Our data is a mess. Is AI still realistic?",
        a: "Usually, yes. Plenty of high-value automations need surprisingly little data cleanup, and the assessment tells you which ones. If data work is needed, it goes on the roadmap with its own price.",
      },
    ],
    caseStudySlugs: ["bookkeeping-document-collection", "fabrication-quote-intake"],
    answer: {
      q: "What is AI consulting?",
      a: [
        "AI consulting is outside help deciding where AI and automation will pay off in a business before money goes into building. An AI consultant maps how the work really gets done and prices each idea against what it should return. Typical outputs are a ranked list of automation opportunities, a data readiness check and a pick of which model or vendor fits. AI consulting suits owners who hear plenty about AI but can't yet say which of their own jobs are worth automating.",
        "Quest Labs Co. runs AI consulting as a short engagement that ends in a priced roadmap, and the client owns that roadmap whether or not Quest Labs Co. builds anything. Quest Labs Co. doesn't resell software, so its vendor advice isn't tied to a commission. AI consulting is the wrong buy when one workflow obviously needs automating, because going straight to a scoped build costs less.",
      ],
    },
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    group: "AI & Automation",
    summary: "Software that does the multi-step job itself, start to finish.",
    title: "AI agent development",
    intro:
      "We build AI agents that finish tasks across your systems instead of only answering questions. They research, draft, reconcile, file and follow up, with permissions, logs and human checkpoints.",
    offerings: [
      {
        title: "Agent design and scoping",
        body: "Before any code, we map the task, write down what the agent is and isn't allowed to do, and decide where a person has to approve.",
      },
      {
        title: "Custom agent development",
        body: "Production agents on frontier models that can use tools, hooked into your CRM, ERP, inbox and internal APIs.",
      },
      {
        title: "Multi-agent systems",
        body: "For bigger pipelines, a small crew of specialist agents: one researches, one drafts, one checks the work, and a coordinator keeps them to the process.",
      },
      {
        title: "Evaluation and guardrails",
        body: "Test suites, sandboxed runs, spend limits and audit logs. You can trust what the agent did, and prove it later if anyone asks.",
      },
      {
        title: "Running and tuning",
        body: "Once it's live, we watch how it performs, review the odd cases, and adjust prompts and tools when your process changes.",
      },
    ],
    solutions: [
      {
        title: "Back-office agents",
        body: "Invoices processed, data reconciled, reports built and records kept, without anyone retyping numbers at the end of the day.",
      },
      {
        title: "Research agents",
        body: "Market, compliance or prospect research, pulled together into tidy briefs on a schedule.",
      },
      {
        title: "Sales and CRM agents",
        body: "Leads enriched and qualified, follow-ups drafted, the pipeline kept clean. Even in a busy week, it doesn't fall behind.",
      },
      {
        title: "Operations agents",
        body: "Orders tracked, exceptions handled and status updates sent across your supply chain tools.",
      },
    ],
    industrySlugs: ["finance", "logistics", "legal", "retail-ecommerce"],
    faqs: [
      {
        q: "How is an agent different from a chatbot?",
        a: "A chatbot talks; an agent does. It plans a multi-step task, calls tools and APIs, checks its own work and hands back a finished result: a filed report, an updated record, a follow-up that's already sent.",
      },
      {
        q: "What stops an agent from doing something wrong?",
        a: "Tight permissions, approval gates on anything consequential, spend and rate limits, and a full audit log. High-stakes actions go through a person until the agent's track record says it can handle more on its own.",
      },
      {
        q: "Which models do you build on?",
        a: "Whichever fits the task: Claude, GPT, Gemini or open-weight models, picked for capability, cost and where your data has to live. We build it so you can switch between them later.",
      },
      {
        q: "How long until an agent is in production?",
        a: "Four to eight weeks for a scoped, single-task agent, testing included. Multi-agent systems take longer, so we usually roll them out one capability at a time.",
      },
    ],
    caseStudySlugs: ["freight-delivery-paperwork", "skincare-support-tickets"],
    answer: {
      q: "What is AI agent development?",
      a: [
        "AI agent development is building software that finishes a multi-step task across business systems, instead of only answering questions the way a chatbot does. An AI agent plans the steps, uses tools like a CRM or an inbox, checks its own output and hands back a finished result. Common examples are entering invoices into accounting software, turning prospect research into a short brief, and sending routine follow-ups. AI agents suit businesses with repetitive back-office work that mostly follows rules but still needs some judgment.",
        "Quest Labs Co. builds AI agents with tight permissions, a full audit log and human approval on anything consequential, and a scoped single-task agent typically takes 4 to 8 weeks to build. The honest limit is that an AI agent is overkill for a task with fixed steps and no judgment involved. Plain workflow automation handles that kind of task more cheaply and more predictably.",
      ],
    },
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    group: "AI & Automation",
    summary: "LLM systems that draft, summarize and answer from your own documents.",
    title: "Generative AI development",
    intro:
      "Generative AI development for the drafting, summarizing and look-it-up work your team does by hand. It runs on your own data, so you can check where every answer came from.",
    offerings: [
      {
        title: "RAG knowledge systems",
        body: "Retrieval-augmented generation over your documents, wikis and databases. Answers cite where they came from instead of making things up.",
      },
      {
        title: "Document generation",
        body: "Proposals, reports, contracts and letters drafted from your templates and live data, then handed to a person to review.",
      },
      {
        title: "Summarization pipelines",
        body: "Long calls, case files, email threads and filings boiled down into structured summaries people actually read.",
      },
      {
        title: "Fine-tuning and model adaptation",
        body: "When good prompting isn't enough, we teach a model your field's language and formats with fine-tuning, and measure whether it helped.",
      },
      {
        title: "LLM evaluation and safety",
        body: "Automated tests that score accuracy, tone and policy compliance before and after every change, so an update can't quietly make things worse.",
      },
    ],
    solutions: [
      {
        title: "Internal knowledge assistants",
        body: "Staff ask in plain English and get an answer from your own documentation, with the source attached.",
      },
      {
        title: "Content operations",
        body: "Product descriptions, listings and marketing variations produced in bulk, with an editor still in charge.",
      },
      {
        title: "Intelligent document processing",
        body: "Messy PDFs, emails and scans turned into clean, structured data inside your systems.",
      },
      {
        title: "Meeting and call intelligence",
        body: "Transcripts turned into action items, CRM updates and follow-up drafts, without anyone taking notes.",
      },
    ],
    industrySlugs: ["legal", "healthcare", "real-estate", "education"],
    faqs: [
      {
        q: "How do you prevent hallucinations?",
        a: "By grounding the model: it answers only from sources it retrieved, and it cites them. Low-confidence cases go to a person, and automated tests catch drift. For factual work we design it so a wrong answer gets caught, instead of hoping it stays rare.",
      },
      {
        q: "Is our data used to train public models?",
        a: "No. We use enterprise API tiers that guarantee no training on your data, or private and self-hosted setups when you need them. Your data stays yours, in the contract and in the architecture.",
      },
      {
        q: "Do we need fine-tuning?",
        a: "Probably not at first. Retrieval and careful prompting handle most cases for less money. Fine-tuning earns its place on high-volume, format-heavy tasks, and the evaluation data tells us when you've reached that point.",
      },
      {
        q: "What does a typical build cost?",
        a: "It depends on your data sources and integrations, so we price it after a short discovery. Every proposal breaks out the build cost and the expected monthly running cost. You won't get a one-line 'AI package' total from us.",
      },
    ],
    caseStudySlugs: ["fabrication-quote-intake", "law-firm-client-intake"],
    answer: {
      q: "What is generative AI development?",
      a: [
        "Generative AI development is building systems on large language models that draft, summarize and answer questions using a company's own documents and data. Typical jobs include drafting proposals from templates, summarizing long call transcripts or case files, and answering staff questions from an internal wiki with the source cited. The usual method is retrieval-augmented generation (RAG), where the model looks up the relevant documents first and answers only from what it found. Generative AI suits teams that spend hours every week reading, writing or digging through documents.",
        "Quest Labs Co. builds generative AI systems that cite their sources, send low-confidence answers to a person, and run on enterprise API tiers that don't train public models on client data. Generative AI is a poor fit for work that has to be exactly right every time with no human review, like entering figures straight into a tax filing.",
      ],
    },
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    group: "AI & Automation",
    summary: "Support and sales chat assistants your customers actually like using.",
    title: "AI chatbot development",
    intro:
      "AI chatbot development for support and sales. Our assistants answer from your help content, check orders and accounts, and know when to hand the chat to a human.",
    offerings: [
      {
        title: "Customer support assistants",
        body: "A bot that answers from your real help center and checks order status through the API. It takes the repetitive 60% so your agents can work the hard 40%.",
      },
      {
        title: "Sales and lead qualification bots",
        body: "Answers product questions, works out who's a real lead, and books the meeting straight into your calendar.",
      },
      {
        title: "Internal helpdesk assistants",
        body: "IT and HR bots that answer the 'what's our PTO policy?' questions and file tickets, so the internal queue gets shorter.",
      },
      {
        title: "Voice and multichannel deployment",
        body: "One assistant on your website, WhatsApp, SMS and the phone line, giving the same answer everywhere your customers ask.",
      },
      {
        title: "Handoff and escalation design",
        body: "When the bot isn't sure, it passes the chat to a person with the whole conversation attached. Nobody has to repeat themselves.",
      },
    ],
    solutions: [
      {
        title: "E-commerce support",
        body: "Order status, returns and product questions answered on the spot, at 2pm or 2am.",
      },
      {
        title: "Appointment booking",
        body: "Scheduling assistants for clinics, agencies and service businesses that live by their calendar.",
      },
      {
        title: "Onboarding guides",
        body: "An assistant inside your product that walks new users through setup, so fewer of them give up and leave.",
      },
      {
        title: "FAQ deflection",
        body: "All those small, repetitive questions answered before they turn into tickets.",
      },
    ],
    industrySlugs: ["retail-ecommerce", "healthcare", "real-estate", "education"],
    faqs: [
      {
        q: "Will it embarrass us in front of customers?",
        a: "Not if it's built properly. Ours answer only from content you've approved, turn down questions outside their lane, and hand off when they're unsure. Before launch we throw hostile test conversations at it to see what breaks.",
      },
      {
        q: "Can it take actions, not just answer?",
        a: "Yes. With API access it can look up orders, process standard returns, change bookings and file tickets. Every action has scoped permissions and gets logged.",
      },
      {
        q: "How long does deployment take?",
        a: "Two to four weeks for an FAQ assistant with human handoff. If it has to connect to your other systems, plan on four to eight weeks, testing included.",
      },
      {
        q: "What about languages?",
        a: "Today's models handle dozens of languages out of the box. We still test quality in each language you care about instead of assuming it's fine.",
      },
    ],
    caseStudySlugs: ["skincare-support-tickets", "med-spa-front-desk"],
    answer: {
      q: "What is an AI chatbot for business?",
      a: [
        "An AI chatbot for business is a chat assistant on a website or text line that answers customer questions from the company's own approved content. A well-built AI chatbot can check order status, book appointments into a calendar, and answer the questions a front desk hears all day. When an AI chatbot isn't sure, the conversation goes to a person with the chat history attached. AI chatbots suit service businesses, clinics and online stores that get a steady stream of repetitive questions.",
        "Quest Labs Co. builds AI chatbots that answer only from approved content, turn down questions outside their lane, and get tested with hostile chats before launch. Every action a Quest Labs Co. chatbot takes, like processing a return, has scoped permissions and gets logged. An AI chatbot isn't worth building for a business that gets a few questions a week, since a good FAQ page covers those.",
      ],
    },
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    group: "AI & Automation",
    summary: "The copy-paste work your team does every day, handed to software.",
    title: "Intelligent workflow automation",
    intro:
      "We automate the repetitive computer work your team does by hand: copying data between tools, chasing approvals, building reports. We pick the jobs worth it and keep them running.",
    offerings: [
      {
        title: "Priced automation roadmap",
        body: "One to two weeks mapping your workflows, with a real dollar figure attached to every automation opportunity we find.",
      },
      {
        title: "Cross-tool workflow automation",
        body: "Your CRM, inbox, spreadsheets and ERP wired together so data moves on its own. No more copying from one window and pasting into another.",
      },
      {
        title: "AI-powered document handling",
        body: "Invoices, orders and forms read, checked and entered for you. Anything that looks off goes to a person.",
      },
      {
        title: "Approval and notification flows",
        body: "Requests routed, reminders sent and status tracked automatically, so nothing sits forgotten in someone's inbox.",
      },
      {
        title: "Embedded automation team",
        body: "An ongoing arrangement: we own, watch and grow your automations, and ship new ones from your backlog every month.",
      },
    ],
    solutions: [
      {
        title: "Finance operations",
        body: "Invoices captured, accounts reconciled and payment reminders sent, without anyone having to remember.",
      },
      {
        title: "Sales operations",
        body: "Leads captured, enriched, routed and followed up. Nobody sorts the inbox by hand.",
      },
      {
        title: "HR and onboarding",
        body: "One approval kicks off the offer letter, the new accounts and the checklist.",
      },
      {
        title: "Reporting",
        body: "The weekly numbers, put together and delivered before anyone asks for them.",
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
        a: "With the free automation audit: a 60-second quiz, then a 15-minute call. If there's something worth building, the next step is a priced roadmap. In one to two weeks you get a map of what's automatable and what each piece is worth, with no obligation to build with us, and the roadmap fee is credited toward the build if you go ahead.",
      },
      {
        q: "Do you replace our existing tools?",
        a: "No, we connect them. The automations run across the tools you already use. If one of them really does block automation we'll say so, but ripping it out is the last resort.",
      },
      {
        q: "What if a workflow changes after launch?",
        a: "Then the automation changes too, and it's cheap to do. Everything is documented and built in small, swappable pieces. Embedded-team clients get changes handled as part of the monthly engagement.",
      },
      {
        q: "Is this RPA?",
        a: "Sometimes, when an old system has no API. Most of the time it's API-first, with AI handling the messy unstructured parts. That's more reliable and easier to maintain than bots that click around a screen.",
      },
    ],
    caseStudySlugs: ["freight-delivery-paperwork", "bookkeeping-document-collection"],
    answer: {
      q: "What is workflow automation?",
      a: [
        "Workflow automation is software that does the repetitive computer work people handle by hand, like copying data between tools, chasing approvals and building reports. A typical automation moves a new lead from a web form into the CRM, reads invoices into accounting software, or sends the weekly numbers before anyone asks. Workflow automation connects existing tools through their APIs and uses AI for messy inputs like emails and PDFs. Workflow automation suits small and midsize teams losing hours each week to copy-paste.",
        "Quest Labs Co. starts workflow automation with a free automation audit (a 60-second quiz, then a 15-minute call) and delivers a priced roadmap before anything gets built. Quest Labs Co. connects the tools a business already uses instead of replacing them. Workflow automation is the wrong move for a process that changes weekly or runs a few times a month. Sometimes a well-built spreadsheet is the right answer.",
      ],
    },
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    group: "AI & Automation",
    summary: "AI added to the software your team already uses.",
    title: "AI integration services",
    intro:
      "AI integration adds AI to the software you already run, so you don't need a new platform. We build it into your product, CRM, ERP and internal tools without upending your day.",
    offerings: [
      {
        title: "AI features for your product",
        body: "Search, summaries, content generation and assistant features, designed and shipped inside the app you already have.",
      },
      {
        title: "CRM and ERP intelligence",
        body: "Scoring, drafting and data cleanup built into Salesforce, HubSpot or whichever system of record you run today.",
      },
      {
        title: "API and pipeline integration",
        body: "Model providers wired into your backend with caching, fallbacks, cost controls and monitoring from the first day.",
      },
      {
        title: "Legacy system enablement",
        body: "Older systems get AI features through APIs, middleware, or RPA when there's no other way in.",
      },
      {
        title: "Security and compliance review",
        body: "We map where data flows, how personal information is handled and who can access what. All of it is checked before anything touches production data.",
      },
    ],
    solutions: [
      {
        title: "In-app AI assistants",
        body: "Your users get answers and actions inside your product, instead of in another tab.",
      },
      {
        title: "Smart search",
        body: "Search over your product's content that gets what people mean, even when they don't type the exact words.",
      },
      {
        title: "Auto-drafting",
        body: "Replies, notes and summaries already written, right inside the tools where the work happens.",
      },
      {
        title: "Data enrichment",
        body: "Records cleaned, deduplicated and filled in, quietly and continuously, in the background.",
      },
    ],
    industrySlugs: ["finance", "healthcare", "real-estate", "manufacturing"],
    faqs: [
      {
        q: "Will integration disrupt our current system?",
        a: "No. New features ship behind feature flags, roll out in stages and come with a rollback plan. Your system works exactly as it does now until the new piece has proven itself.",
      },
      {
        q: "Which model providers can you integrate?",
        a: "Anthropic, OpenAI, Google and open-weight models. We usually put a thin layer of our own in front of them, so you can switch providers when prices or capabilities change.",
      },
      {
        q: "How do you control API costs?",
        a: "Caching, sending simple calls to smaller models, token budgets and a cost dashboard for each feature. You'll know what every AI feature costs per use before it rolls out to everyone.",
      },
      {
        q: "Our vendor already offers an AI add-on. Why build?",
        a: "Sometimes you shouldn't, and we'll tell you. Building your own makes sense when the add-on doesn't fit how you work, locks up your data, or charges per seat for something you could pay for per use.",
      },
    ],
    caseStudySlugs: ["law-firm-client-intake", "skincare-support-tickets"],
    answer: {
      q: "What is AI integration?",
      a: [
        "AI integration is adding AI features to software a business already runs, such as its own product, its CRM or its ERP, instead of buying a new platform. Common examples are lead scoring and email drafting inside HubSpot or Salesforce, search that understands what users mean, and ticket summaries right where staff already work. AI integration also covers the plumbing: model connections, caching, cost controls and monitoring. AI integration suits companies with established systems that want AI inside the tools their team opens every day.",
        "Quest Labs Co. ships AI integrations behind feature flags, rolls them out in stages with a rollback plan, and maps where data flows before anything touches production data. Quest Labs Co. usually puts a thin layer in front of model providers so the client can switch later. Custom AI integration isn't worth it when a vendor's built-in AI add-on already fits how the team works.",
      ],
    },
  },
  {
    slug: "web-development",
    name: "Web Development",
    group: "Web & Design",
    summary: "Fast websites and web apps, built start to finish.",
    title: "Web development services",
    intro:
      "Web development for marketing sites, customer portals and the dashboards your team runs on. Built by engineers, quick to load, and nothing like a page-builder template.",
    offerings: [
      {
        title: "Company and marketing websites",
        body: "Fast sites that search engines can read and your team can edit, built on modern frameworks and hosted on a global edge network.",
      },
      {
        title: "Web applications and portals",
        body: "Customer portals, internal dashboards and booking systems, with logins, payments and integrations.",
      },
      {
        title: "AI-enabled web products",
        body: "Sites and apps with built-in assistants, smarter search and personalization. Our AI work and our web work happen under one roof.",
      },
      {
        title: "Performance and SEO engineering",
        body: "Core Web Vitals, structured data and accessibility treated as engineering requirements from day one, not a cleanup job the week before launch.",
      },
      {
        title: "Maintenance and iteration",
        body: "After launch we keep improving it, update content and keep an eye on it, so the site gets better over time instead of slowly going stale.",
      },
    ],
    solutions: [
      {
        title: "Company websites",
        body: "Multi-page sites that make you look credible and turn visitors into inquiries.",
      },
      {
        title: "Product landing pages",
        body: "Launch pages with analytics and A/B testing set up before the first visitor shows up.",
      },
      {
        title: "Client portals",
        body: "A secure login where your customers check orders, documents and status without emailing you to ask.",
      },
      {
        title: "Internal tools",
        body: "That dashboard your ops team keeps asking for, built in weeks.",
      },
    ],
    industrySlugs: ["real-estate", "education", "retail-ecommerce", "legal"],
    faqs: [
      {
        q: "What stack do you build on?",
        a: "Usually TypeScript, React or Next.js, and Tailwind, deployed to edge platforms like Cloudflare. It's boring on purpose: proven, fast, and easy for any future developer to pick up.",
      },
      {
        q: "Can we edit content ourselves after launch?",
        a: "Yes. Depending on what you need, we set up a headless CMS or keep content in simple structured files. Either way, everyday edits don't need a developer.",
      },
      {
        q: "How long does a website take?",
        a: "Three to six weeks from kickoff to launch for a focused marketing site. Web apps depend on scope, so we quote after a short discovery, with every line itemized.",
      },
      {
        q: "Do you also handle hosting and domains?",
        a: "Yes. We set up hosting, DNS, SSL and analytics, then hand you full ownership of every account. Your site is never held hostage.",
      },
    ],
    caseStudySlugs: ["law-firm-client-intake", "rental-property-reporting"],
    answer: {
      q: "What is custom web development?",
      a: [
        "Custom web development is building a website or web application with code written for that business, instead of assembling one from a page-builder template. Projects range from marketing websites to customer portals, internal dashboards and booking systems with logins and payments. A custom-built site can be engineered to load fast and give search engines clean structured data. Custom web development suits businesses that need a site to do real work, like capturing leads, taking bookings or showing customers their account.",
        "Quest Labs Co. builds websites on proven tools such as TypeScript, Next.js and Tailwind, sets up hosting, domains and analytics, and hands the client ownership of every account. Clients of Quest Labs Co. can edit everyday content without a developer. Custom web development is more than a business needs when a simple brochure page will do, and a good template is fine for that.",
      ],
    },
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    group: "Web & Design",
    summary: "Web design that looks credible and gets visitors to take the next step.",
    title: "UI/UX design for the web",
    intro:
      "UI/UX design for websites and web apps: research, wireframes, visual design and design systems. The same team writes the code, so every design is one we know how to build.",
    offerings: [
      {
        title: "Website UX and information architecture",
        body: "Pages and the paths between them planned around what visitors need to make a decision, not around what's easiest to build.",
      },
      {
        title: "Visual and interaction design",
        body: "A look that's yours, with real typography and motion. It won't resemble a template half your competitors are also using.",
      },
      {
        title: "Design systems for the web",
        body: "A kit of reusable components that keeps the site consistent as it grows, and makes every new page cheaper to add.",
      },
      {
        title: "UX audits and conversion review",
        body: "We go through your current site and show where visitors drop off, why, and which fixes are worth doing first.",
      },
      {
        title: "Prototyping and validation",
        body: "Clickable prototypes tested with real users before anyone spends engineering time.",
      },
    ],
    solutions: [
      {
        title: "Website redesigns",
        body: "Your current site rebuilt to be clearer, faster and easier to trust.",
      },
      {
        title: "Design-to-code delivery",
        body: "The team that designed it builds it, pixel for pixel. Nothing gets lost in a handoff.",
      },
      {
        title: "Brand-consistent components",
        body: "One web design system that every page on your site is built from.",
      },
      {
        title: "Conversion optimization",
        body: "Measured improvements to the pages where the money actually comes in.",
      },
    ],
    industrySlugs: ["retail-ecommerce", "real-estate", "education", "finance"],
    faqs: [
      {
        q: "Do you design mobile apps too?",
        a: "No. We stick to the web on purpose. Websites, web apps and web design systems are what we're best at, so that's all we sell.",
      },
      {
        q: "What do we get at the end of a design engagement?",
        a: "Full design files, a component library and documentation. More often you get the finished website itself, because design and engineering are the same team here.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Yes. We carry your current brand guidelines onto the web instead of reinventing them, and adjust them carefully where the web needs it.",
      },
      {
        q: "How do you measure design success?",
        a: "With before-and-after numbers we agree on up front: conversion, task completion, bounce rate, plus what real users tell us. Design reviews come down to evidence, not whose taste wins.",
      },
    ],
    caseStudySlugs: ["law-firm-client-intake", "tutoring-center-scheduling"],
    answer: {
      q: "What is UI/UX design for websites?",
      a: [
        "UI/UX design for websites is planning how a site looks and how visitors move through it, so visitors find what they came for and take the next step. UX covers the structure: which pages exist, what goes on each page and the paths between them. UI covers the visual layer, like typography, layout and interactive components. Typical UI/UX work includes a redesign, a UX audit that shows where visitors drop off, and a design system of reusable components. UI/UX design suits businesses whose site gets visitors but not enough inquiries.",
        "At Quest Labs Co., the same team designs and codes each site, so every design is buildable and nothing gets lost in a handoff. Quest Labs Co. agrees on before-and-after measures, like conversion and bounce rate, before design work starts. Design won't fix a site nobody visits, because a traffic problem needs search or marketing work first.",
      ],
    },
  },
];

export const serviceGroups = ["AI & Automation", "Web & Design"] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
