import type { BlogPost } from "../types";

const post: BlogPost = {
  slug: "what-drives-ai-agent-cost",
  title: "What Drives AI Agent Cost (and Where Quotes Get Padded)",
  description:
    "What really moves the cost of an AI agent, how to work out whether one is worth it, and the line items where quotes get padded or quietly left out.",
  excerpt:
    "The AI model is rarely the expensive part. Here's what actually moves the price of an AI agent, and how to read a quote without getting padded.",
  category: "Buying Guide",
  date: "2026-11-12",
  readMinutes: 6,
  art: "pricetag",
  answer:
    "AI agent cost is driven mostly by scope, not the model: how many systems it connects, how messy your data is, how many edge cases it handles, how much human review it needs, and the monitoring and upkeep after launch. Model usage is a running cost that grows with volume. Padding hides in vague line items and oversized scope.",
  takeaways: [
    "Scope drives AI agent cost far more than the AI model does.",
    "Systems connected, data quality, edge cases and human review are the big build drivers.",
    "Running costs (platforms, model usage, upkeep) should appear as separate line items.",
    "Padding hides in vague line items, oversized scope and retainers with no defined job.",
    "Work out the hours saved before you ask anyone for a quote.",
  ],
  body: [
    {
      type: "p",
      text: "Say two quotes for the same AI agent land on your desk. One is a single line. The other runs to three pages. The totals are far apart and neither one explains why. This post is about the why.",
    },
    {
      type: "p",
      text: "We won't give you a number here, because any number without your process attached is a guess. What we can do is show you what actually moves the cost, so you can read a quote and tell careful scoping from padding.",
    },
    { type: "h2", text: "What actually drives the cost of an AI agent?" },
    {
      type: "p",
      text: "The work around the model drives the cost: connecting systems, coping with messy data, handling exceptions, building in human review and keeping it all running. The AI part is often the smallest slice of the build.",
    },
    {
      type: "p",
      text: "Here's each driver, why it adds work and what to ask about it.",
    },
    {
      type: "table",
      head: ["Cost driver", "Why it adds work", "Ask the vendor"],
      rows: [
        [
          "Systems connected",
          "Each system needs access, testing and a plan for when it's down or changes. Writing to a system needs more care than reading from it.",
          "Which systems will it read from, and which will it change?",
        ],
        [
          "Data quality",
          "Duplicates, inconsistent formats and scanned paperwork need cleanup or extra handling before an agent can rely on them.",
          "What did you assume about our data, and what happens if it's worse?",
        ],
        [
          "Edge cases",
          "The common case is quick to build. The odd ones (missing fields, duplicates, partial payments) are where the time goes.",
          "Which exceptions does it handle, and which go to a person?",
        ],
        [
          "Human review",
          "Approval steps, review queues and clean handoffs have to be designed and built, not bolted on at the end.",
          "Where does a person approve or check the agent's work?",
        ],
        [
          "Volume",
          "More runs mean more model usage, more load on connected systems and more exceptions in absolute terms.",
          "What does running cost look like at our volume, and at double it?",
        ],
        [
          "Monitoring and upkeep",
          "The apps it depends on change, models get updated and your process shifts. Someone has to notice and fix things.",
          "Who watches it after launch, and what's included?",
        ],
        [
          "Model usage",
          "One task may involve several model calls, and larger models cost more per call.",
          "Which model, roughly how many calls per task, and who gets billed for it?",
        ],
      ],
    },
    { type: "h2", text: "How do you know if an AI agent is worth the cost?" },
    {
      type: "p",
      text: "Work out the hours first. If the task doesn't eat meaningful time or cause expensive mistakes, no quote will make sense, however good it looks.",
    },
    {
      type: "p",
      text: "The method is plain arithmetic. Say a task takes 6 minutes and happens 200 times a month. That's 1,200 minutes, or 20 hours a month. Now be honest about how much of that an agent would really take off someone's plate. If a person still spends a minute reviewing each result, you're saving 5 minutes per task, which is about 17 hours. Subtract time spent on exceptions and a little upkeep. Whatever's left, multiplied by what an hour of that person's time is worth to you, is the monthly value. Compare it with the build cost spread over a sensible period, plus the monthly running cost.",
    },
    {
      type: "p",
      text: "Our case studies set their goals the same way. The [freight paperwork case study](/case-studies/freight-delivery-paperwork), for example, multiplies supported documents by the minutes saved on each, then subtracts the time spent reviewing exceptions and correcting matches. If a vendor's numbers don't show working like that, ask for it.",
    },
    {
      type: "callout",
      title: "Rule of thumb",
      text: "If you can't name the hours saved or the mistakes prevented, you're not ready for a quote yet. You're ready for an audit. Our [DIY automation audit](/blog/diy-automation-audit) shows how to time a task yourself.",
    },
    { type: "h2", text: "Why do AI agent quotes vary so much?" },
    {
      type: "p",
      text: "Mostly because vendors assume different scopes, not because one is honest and the other isn't. One quote assumes clean data and the happy path. Another assumes your real inbox, with its scans, duplicates and half-filled forms.",
    },
    {
      type: "ul",
      items: [
        "**Who maintains it.** Some quotes include monitoring and fixes after launch. Others stop at handover.",
        "**How it's tested.** A serious build is tested against real past examples, including the ugly ones. That takes time, and it's worth paying for.",
        "**How it rolls out.** Running the agent alongside your current process before you trust it costs more up front and saves you from a bad first month.",
        "**Build versus configure.** Sometimes software you already own does most of the job and only needs setting up. Sometimes it really does need custom code.",
      ],
    },
    {
      type: "p",
      text: "A low quote isn't automatically a bargain if it leaves exception handling and monitoring for you to discover later.",
    },
    { type: "h2", text: "Where do AI agent quotes get padded?" },
    {
      type: "p",
      text: "Padding usually hides in vagueness: line items you can't check, scope that's bigger than the problem, and ongoing fees with no defined job.",
    },
    {
      type: "ul",
      items: [
        "**A single line called \"AI package\" or \"agent build\".** You can't tell what you're paying for or what's missing. Ask for it broken down.",
        "**An agent for a job a workflow would do.** If the steps are fixed, a plain automation is cheaper to build and to run. Our post on [AI chatbots vs AI agents](/blog/ai-chatbot-vs-ai-agent) explains how to tell.",
        "**Several cooperating agents for a single task.** Multi-agent setups make sense for complex pipelines. For one job, they mostly add parts that can break.",
        "**Custom model training up front.** Fine-tuning is rarely the first step. Retrieval and careful prompting handle most cases, and training can come later if the evidence calls for it.",
        "**Rebuilding integrations that already exist.** If your CRM already connects to your inbox, nobody should bill you to build that from scratch.",
        "**Retainers with no defined scope.** Ongoing support is reasonable. Ongoing support where nobody says what's included, how fast they respond or what counts as a change is not.",
        "**A long discovery phase with no deliverable.** Scoping is real work, but it should end in something you can use: a process map, a list of exceptions, a plan.",
      ],
    },
    {
      type: "callout",
      title: "Watch out",
      text: "The opposite of padding is a problem too. A quote with no line for testing, exception handling or monitoring isn't lean. It's incomplete, and you'll pay for those things anyway, usually at a worse moment.",
    },
    { type: "h2", text: "What ongoing costs come after launch?" },
    {
      type: "p",
      text: "Expect three kinds: platform subscriptions, model usage and someone's time to keep it healthy. They don't go away, so put them in the comparison from day one.",
    },
    {
      type: "ul",
      items: [
        "**Platforms and hosting.** The automation tool, any server it runs on and any other software it needs. Check each vendor's current pricing, because it changes.",
        "**Model usage.** AI providers charge by how much text goes in and comes out. It scales with volume and with how many calls each task makes. Ask for an estimate at your volume and at double it.",
        "**Upkeep.** Apps update, fields get renamed, your process changes. Someone needs to watch the error alerts and fix things. Budget the time, whether it's yours or a vendor's.",
      ],
    },
    {
      type: "p",
      text: "A good proposal shows build cost and expected monthly running cost as separate numbers. Ours do, and you should expect the same from anyone. If running costs are missing, ask before you sign.",
    },
    { type: "h2", text: "How can you keep the cost of an AI agent down?" },
    {
      type: "p",
      text: "Shrink the first version. Most of the savings come from scope, not from haggling.",
    },
    {
      type: "ol",
      items: [
        "Pick one task, not a whole department. Get it working, then add the next.",
        "Clean up the obvious data problems yourself before the build starts.",
        "Decide which exceptions go to a person instead of paying to automate every one.",
        "Use the tools you already pay for wherever they can do the job.",
        "Start with human review switched on, and remove it step by step only once it's earned.",
      ],
    },
    {
      type: "p",
      text: "That's how we scope [AI agents](/services/ai-agents) at Quest Labs Co.: one capability at a time, with the review points designed before any code is written. From kickoff, a scoped build typically reaches production in 4 to 8 weeks. If you'd like a second pair of eyes on a quote you already have, bring it to a [free automation audit](/free-audit).",
    },
    {
      type: "cta",
      text: "Bring the task you're pricing to a free automation audit and we'll tell you what's automatable, roughly what it would take, and whether it's worth doing.",
    },
  ],
  faqs: [
    {
      q: "Is the AI model the biggest cost?",
      a: "Usually not for the build. Connecting systems, handling exceptions and testing tend to take far more of the effort. Model usage matters more as a running cost, and it grows with volume, so get it estimated at your real numbers.",
    },
    {
      q: "Should I pay a fixed price or by the hour?",
      a: "A fixed price works when the scope is clear and written down. Hourly or phased pricing makes sense when there are real unknowns, like messy data or an integration nobody has tested. Either way, get the scope, the exclusions and the process for changes in writing.",
    },
    {
      q: "Why not just take the cheapest quote?",
      a: "You can, if it covers testing, exception handling, monitoring and handover. Compare quotes line by line against the same scope. The cheapest one is often cheapest because it left some of those out.",
    },
    {
      q: "Can I lower the cost by doing part of it in-house?",
      a: "Often, yes. Your team can own data cleanup, gather example cases and work the review queue. Some businesses also take over day-to-day upkeep after launch, as long as they get proper documentation at handover.",
    },
  ],
  related: ["ai-chatbot-vs-ai-agent", "ai-automation-agency-vs-in-house", "what-is-an-ai-automation-audit"],
};

export default post;
