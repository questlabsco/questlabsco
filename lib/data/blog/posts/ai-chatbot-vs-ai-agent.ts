import type { BlogPost } from "../types";

const post: BlogPost = {
  slug: "ai-chatbot-vs-ai-agent",
  title: "AI Chatbot vs AI Agent: The Real Difference and Which You Need",
  description:
    "A chatbot answers questions; an agent finishes tasks in your systems. Here's how to tell which one your business needs, and why it's usually the chatbot.",
  excerpt:
    "The two words get used as if they mean the same thing. They don't, and mixing them up can turn a few-week project into a much bigger one.",
  category: "AI Agents",
  date: "2026-11-12",
  readMinutes: 6,
  art: "robot",
  answer:
    "An AI chatbot talks: it answers questions from approved content and hands tricky ones to a person. An AI agent acts: it plans several steps, uses your software and finishes a task, like updating a record or filing a document. Most small businesses should start with a chatbot plus a simple automation, and add an agent only when needed.",
  takeaways: [
    "A chatbot answers questions; an agent completes multi-step tasks inside your systems.",
    "Most small businesses should start with a grounded chatbot plus a plain workflow.",
    "Agents cost more because of integrations, testing, approvals and monitoring, not because of the model.",
    "Reach for an agent when the steps change case by case and a person currently makes every small decision.",
  ],
  body: [
    {
      type: "p",
      text: "Picture a med spa owner who asks an agency for an AI agent. The agency asks what it should do. \"Answer questions about hours and pricing, and send people the booking link.\" That's a chatbot. A good one is well worth having. But building it as an agent would turn a few-week project into a much bigger one, with more testing, more permissions and more things that can go wrong.",
    },
    {
      type: "p",
      text: "The two words get used interchangeably, mostly by people selling one or the other. They're different tools with different costs and different risks. Here's the plain version.",
    },
    { type: "h2", text: "What's the difference between an AI chatbot and an AI agent?" },
    {
      type: "p",
      text: "A chatbot has a conversation. An agent does a job. The chatbot's output is a reply; the agent's output is a finished piece of work in one of your systems.",
    },
    {
      type: "p",
      text: "A chatbot sits on your website, in a text thread or inside an internal tool, and answers questions. A good one answers only from content you've approved (your FAQ, your policies, your price list) and passes the conversation to a person when it's out of its depth.",
    },
    {
      type: "p",
      text: "An agent is given a goal and a set of tools. It decides which steps to take, uses your software to take them, checks the result and keeps going until the job is done or it needs a human. Reading an invoice, matching it to a purchase order, flagging a mismatch and drafting the email to the vendor: that's agent work.",
    },
    {
      type: "table",
      head: ["Question", "AI chatbot", "AI agent"],
      rows: [
        ["What's its main job?", "Answer questions", "Complete multi-step tasks"],
        ["What does it produce?", "A reply in a conversation", "An updated record, a filed document, a sent message"],
        ["Does it touch your systems?", "Read-only, if at all", "Reads and writes, within set permissions"],
        ["What starts it?", "A customer or staff member asking", "An event, a schedule or a request"],
        ["What's the main risk?", "A wrong or off-brand answer", "A wrong action in a real system"],
        ["How much work to build?", "Less", "More, mostly in testing and guardrails"],
        ["Typical first example", "Answering \"are you open Sunday?\"", "Matching delivery paperwork to shipments and filing it"],
      ],
    },
    { type: "h2", text: "Is there something in between a chatbot and an agent?" },
    {
      type: "p",
      text: "Yes, and it's where most small businesses should land: a chatbot that can do a few specific, safe actions, backed by ordinary automation.",
    },
    {
      type: "p",
      text: "A chatbot can look up an order status, check open appointment slots or open a support ticket without becoming a free-roaming agent. Each action is narrow, permission-scoped and logged. Our [skincare support case study](/case-studies/skincare-support-tickets) has this shape: customers verify who they are, see their own order status and tracking, and anything unusual (a lost package, a refund exception, a reported skin reaction) goes to staff with the details attached.",
    },
    {
      type: "p",
      text: "Behind the scenes, plenty of the \"smart\" work isn't AI at all. It's a workflow: when this happens, do that. Workflows are predictable, cheap to run and easy to test. AI earns its place in the steps that involve reading messy text or making a judgment call, not in the plumbing.",
    },
    {
      type: "callout",
      title: "Rule of thumb",
      text: "If you can draw the steps as a flowchart with no \"it depends\" boxes, you want a workflow. If the job ends with a good answer from approved content, you want a chatbot. Reach for an agent when the steps genuinely change from case to case and someone currently has to think about each one.",
    },
    { type: "h2", text: "When is a chatbot enough?" },
    {
      type: "p",
      text: "A chatbot is enough when the job is answering, not doing. That covers more ground than people expect.",
    },
    {
      type: "ul",
      items: [
        "The same couple of dozen questions come in every week: hours, location, parking, pricing ranges, what to bring.",
        "You want after-hours inquiries captured and sent a booking link instead of waiting until morning.",
        "Staff need quick answers from an internal handbook or policy document.",
        "You want leads asked a few qualifying questions before a person calls them back.",
      ],
    },
    {
      type: "p",
      text: "In each case the bot's job ends when it hands over a good answer or a clean record. Picture a property management front desk fielding \"when is rent due?\" and \"who do I call about the dishwasher?\" all day. A grounded chatbot answers the first and turns the second into a maintenance request. Nobody needs an agent for that. If that sounds like your week, start with [AI chatbots](/services/ai-chatbots).",
    },
    { type: "h2", text: "When do you actually need an AI agent?" },
    {
      type: "p",
      text: "You need an agent when a task has several steps, the steps vary from case to case, and a person currently spends their day making small decisions to move each one along.",
    },
    {
      type: "ul",
      items: [
        "The work involves reading unstructured material (emails, PDFs, phone photos of paperwork) and deciding what to do with it.",
        "The task spans several systems: inbox, CRM, accounting, a shared drive.",
        "Exceptions are common enough that a fixed workflow keeps breaking.",
        "A person could describe the goal clearly but couldn't list every step in advance.",
      ],
    },
    {
      type: "p",
      text: "Even then, a good agent is boxed in. It gets only the permissions the task needs, consequential actions go through a human approval step, and every action is logged so you can see what happened later. That's how we build [AI agents](/services/ai-agents): narrow first, with more autonomy only once the track record earns it.",
    },
    {
      type: "callout",
      title: "Watch out",
      text: "If someone pitches you an agent for a job that a form and a workflow could do, ask why. Agents cost more to build, test and watch. You should get something real for that, and \"it sounds more advanced\" doesn't count.",
    },
    { type: "h2", text: "Which costs more to build and run, a chatbot or an agent?" },
    {
      type: "p",
      text: "Agents, almost always. The AI model is rarely the expensive part. Everything around it is.",
    },
    {
      type: "p",
      text: "A chatbot's work is mostly in the content: gathering approved answers, setting the handoff rules and testing it against awkward questions. An agent adds integrations with write access, test cases for every kind of exception, approval steps, monitoring, and someone reviewing its work in the early weeks. Running costs differ too, because an agent may make several model calls per task where a chatbot makes one per reply. We go through the full list in [what actually drives the cost of an AI agent](/blog/what-drives-ai-agent-cost).",
    },
    { type: "h2", text: "Can you start with a chatbot and grow into an agent?" },
    {
      type: "p",
      text: "Yes, and it's usually the smart order. A chatbot teaches you what people actually ask, which questions it can't handle and where the handoffs pile up. That's the evidence you need to decide whether an agent is worth it.",
    },
    {
      type: "ol",
      items: [
        "Launch a grounded chatbot on your most repeated questions, with a clear handoff to staff.",
        "Add one or two narrow actions, like booking or order lookup, once the answers are reliable.",
        "Automate the follow-up work behind it with a plain workflow.",
        "Look at what still lands on someone's desk. If it's varied, multi-step work, that's your agent candidate.",
      ],
    },
    {
      type: "p",
      text: "Our [med spa case study](/case-studies/med-spa-front-desk) follows roughly this pattern: an approved FAQ assistant for administrative questions, a workflow that puts website inquiries and missed calls into one pipeline, and follow-ups that stop when the person replies or staff take over. Questions about treatment suitability go straight to staff. No agent required.",
    },
    {
      type: "p",
      text: "If you're not sure which bucket your idea falls into, that's a fair question to bring to a [free automation audit](/free-audit). It's a short call, and \"you don't need an agent\" is an answer we give often.",
    },
    {
      type: "cta",
      text: "Tell us the job you're thinking of handing to AI and we'll tell you whether it needs a chatbot, a workflow or an agent.",
    },
  ],
  faqs: [
    {
      q: "Will an AI chatbot make things up?",
      a: "It can if it's built loosely. A well-built one answers only from content you've approved, says so when it doesn't know, and hands the conversation to a person. Test it against your trickiest real questions before it goes live, and keep reviewing conversations after launch.",
    },
    {
      q: "Can an AI agent work without anyone checking it?",
      a: "Technically, yes. Sensibly, not at first. Put approval steps on anything that moves money, messages customers or changes records that matter, and loosen them one at a time only after you've watched the agent get those steps right for a while.",
    },
    {
      q: "Do I need an agent to book appointments?",
      a: "Usually not. Booking is a narrow action that a chatbot connected to your scheduling tool handles well. It gets harder when booking depends on many variable rules at once, like matching a provider, a service, a room and a location, and even then a careful workflow often does the job.",
    },
    {
      q: "What's the difference between an AI agent and workflow automation?",
      a: "A workflow follows fixed steps you design in advance. An agent decides its own steps within limits you set. Many good systems are mostly workflow, with an AI step or two only where reading or judgment is needed.",
    },
  ],
  related: ["what-drives-ai-agent-cost", "med-spa-missed-calls-automation", "n8n-vs-zapier-vs-make"],
};

export default post;
