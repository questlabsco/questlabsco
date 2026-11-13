import type { BlogPost } from "../types";

const post: BlogPost = {
  slug: "diy-automation-audit",
  title: "DIY Automation Audit: Find Your Biggest Time Sink in an Afternoon",
  description:
    "A step-by-step DIY automation audit: list recurring tasks, time them for a week, score them with a copyable table, and pick the one worth automating first.",
  excerpt:
    "List your recurring tasks, time them for a week, score each one, do the math. A simple method for finding the one task worth automating first.",
  category: "Automation Basics",
  date: "2026-11-12",
  readMinutes: 6,
  art: "checklist",
  answer:
    "To run a DIY automation audit, list every recurring task your team does, track how often each happens and how long it takes for one normal week, then score each from 1 to 5 on frequency, time, error cost and how rule-based it is. Multiply out the monthly hours, and automate the highest-scoring rule-based task first.",
  takeaways: [
    "Write down every recurring task first. The ones people forget are often the biggest.",
    "Track one normal week with tally marks. Rough numbers are fine; guesses are not.",
    "Score each task on frequency, time, error cost and how rule-based it is.",
    "A task that needs judgment every time is out, however many hours it takes.",
    "Pick one task, check what your current tools can already do, then decide.",
  ],
  body: [
    {
      type: "p",
      text: "Ask a business owner where their team's time goes and you'll get a confident answer. Ask them to prove it and the room gets quiet. Most of us have a gut feel for what's annoying, and a much fuzzier idea of what's actually expensive. Those are rarely the same task.",
    },
    {
      type: "p",
      text: "This is a method for finding out, without hiring anybody. It takes about an afternoon of real work, spread across one ordinary week. At the end you'll have a ranked list and one clear candidate for automation (or a clear sign you don't need any yet, which is also a good result).",
    },
    { type: "h2", text: "What is a DIY automation audit?" },
    {
      type: "p",
      text: "A DIY automation audit is a structured look at your own team's recurring work, done in-house, to find the task that costs the most time and is simple enough for software to take over. You list the tasks, measure them, score them, and pick one.",
    },
    {
      type: "p",
      text: "Here's the whole thing at a glance:",
    },
    {
      type: "ol",
      items: [
        "**List** every recurring task (about 30 minutes with your team).",
        "**Track** how often each happens and how long it takes, for one normal week.",
        "**Score** each task on four factors using the table below.",
        "**Do the arithmetic** to turn minutes into monthly hours.",
        "**Pick the top one** and sanity check it before you spend a dollar.",
      ],
    },
    { type: "h2", text: "Step 1: How do you list your recurring tasks?" },
    {
      type: "p",
      text: "Get everyone who does admin or operations work in a room (or a call) for half an hour and ask one question: what do you do every day or every week that follows roughly the same steps? Write every answer down, however small.",
    },
    {
      type: "p",
      text: "Small is the point. Nobody mentions \"copy the tracking number into the reply\" because it takes a minute. Then you find out it happens 60 times a day. Prompts that help people remember:",
    },
    {
      type: "ul",
      items: [
        "What do you copy from one screen into another?",
        "What do you send reminders about?",
        "What report or export do you build on a schedule?",
        "What question do customers ask you over and over?",
        "What do you check before something can move to the next person?",
      ],
    },
    {
      type: "p",
      text: "Phrase each task as a verb and a thing: \"enter web orders into QuickBooks\", not \"orders\". You'll want twenty or so items. If you have fewer than ten, someone's being modest.",
    },
    { type: "h2", text: "Step 2: How do you time tasks without a stopwatch?" },
    {
      type: "p",
      text: "Use tally marks. For one normal week, each person keeps the task list next to them and adds a mark every time they do a task. Once or twice a day, they time a single instance and write down the minutes. That's it.",
    },
    {
      type: "p",
      text: "You don't need precision. You need real counts instead of guesses, because people are bad at estimating small repeated things. \"A few times a day\" turns out to be 40 surprisingly often.",
    },
    {
      type: "callout",
      title: "Pick a normal week",
      text: "Don't measure during your busiest season or the week before a holiday. If your work is seasonal, note that next to the task and adjust the monthly count by hand afterward.",
    },
    { type: "h2", text: "Step 3: How do you score which tasks to automate?" },
    {
      type: "p",
      text: "Score each task from 1 to 5 on four factors: how often it happens, how long each instance takes, how much a mistake costs, and how rule-based it is. Add them up for a score out of 20. Copy this table into a spreadsheet and use it as your key.",
    },
    {
      type: "table",
      head: ["Factor", "1 point", "3 points", "5 points"],
      rows: [
        ["Frequency", "A few times a month or less", "Weekly to a few times a week", "Daily, or many times a day"],
        ["Time per instance", "Under 2 minutes", "5 to 10 minutes", "20 minutes or more"],
        ["Error cost", "A mistake is a mild annoyance", "A mistake means rework or an awkward call", "A mistake costs money, a customer or compliance trouble"],
        ["Rule-based", "Needs real judgment every time", "Mostly rules, with some exceptions", "Same steps every time; you could write them as a checklist"],
      ],
    },
    {
      type: "p",
      text: "Use 2 and 4 for anything in between. Score error cost honestly: a typo in an internal note is a 1, a wrong dosage reminder or a wrong invoice total is a 5.",
    },
    {
      type: "callout",
      title: "Rule of thumb",
      text: "A 1 on rule-based is a veto. If the task needs a person's judgment every single time, it isn't an automation candidate, whatever its total. Software can gather the inputs for that person, but it shouldn't make the call.",
    },
    { type: "h2", text: "Step 4: How do you work out what a task really costs?" },
    {
      type: "p",
      text: "Multiply the times per month by the minutes each, then divide by 60. That's your monthly hours. Times 12 gives you the year. If you want a dollar figure, multiply the hours by what an hour of that person's time costs you, including taxes and benefits.",
    },
    {
      type: "p",
      text: "Here's a worked example for an imaginary 10-person office. The numbers are made up to show the method, not taken from any real business.",
    },
    {
      type: "table",
      head: ["Task (example)", "Times a month", "Minutes each", "Hours a month", "Score out of 20"],
      rows: [
        ["Enter web orders into invoicing", "200", "6", "20", "17"],
        ["Send appointment reminders by hand", "300", "2", "10", "15"],
        ["Build the Monday sales report", "4", "90", "6", "14"],
        ["Price custom quotes", "40", "25", "16.7", "14 (vetoed: judgment)"],
      ],
    },
    {
      type: "p",
      text: "Look at what the scoring did. Pricing quotes takes plenty of hours, but each one needs an estimator's judgment, so it's out (though the prep work around it might not be: gathering drawings and flagging missing details is very rule-based, which is what we built in our [quote intake case study](/case-studies/fabrication-quote-intake)). The Monday report takes the most time per go, but it only happens four times a month. Order entry wins: frequent, rule-based, and expensive when it goes wrong.",
    },
    {
      type: "p",
      text: "One more honest adjustment. Automation rarely takes a task to zero. Someone still handles the odd exceptions and keeps an eye on things. If automating order entry cuts it from 6 minutes to 1, you save 5 of the 6 minutes, so about 17 of the 20 hours in this example. Plan with that number, not the full 20.",
    },
    { type: "h2", text: "Step 5: How do you pick the one to automate first?" },
    {
      type: "p",
      text: "Take the highest scorer that wasn't vetoed, then run it past three quick checks. If it passes all three, that's your first automation.",
    },
    {
      type: "ol",
      items: [
        "**Is the process stable?** If you're about to change how this task works, fix the process first. Automating something that changes next month means building it twice.",
        "**Do the tools involved share data?** Most modern software can connect to other tools. Paper forms, locked-down legacy systems and screenshots make things harder (not impossible, but harder).",
        "**Could a setting you already own handle it?** Check your CRM, email, scheduling and accounting tools for built-in rules before you look at anything new. A surprising amount of \"we need automation\" is a checkbox nobody ticked.",
      ],
    },
    {
      type: "cta",
      text: "Got your top task? Bring it to a [free automation audit](/free-audit) and we'll tell you whether it's worth automating.",
    },
    { type: "h2", text: "What should you do with your top task?" },
    {
      type: "p",
      text: "You have three realistic options: switch on a built-in feature, build it yourself with a no-code tool, or get help. The right one depends on how many systems are involved and what happens when it breaks.",
    },
    {
      type: "ul",
      items: [
        "**Built-in feature.** Best when the whole task lives inside one tool. Free, quick, and the vendor maintains it.",
        "**No-code tool.** Zapier, Make or n8n can connect two or three apps without a developer. Our [n8n vs Zapier vs Make comparison](/blog/n8n-vs-zapier-vs-make) covers which fits what.",
        "**Get help.** Worth it when the workflow crosses several systems, handles sensitive data, or needs to cope with messy inputs like emailed PDFs. That's the work our [workflow automation](/services/workflow-automation) team does.",
      ],
    },
    {
      type: "p",
      text: "Whichever you choose, run the new version next to the old one for a week or two before you switch the manual process off. And keep your scoring sheet. Once the first task is done, the second one is already waiting at the top of the list.",
    },
    {
      type: "p",
      text: "If you'd rather have someone experienced look over your list, a [professional automation audit](/blog/what-is-an-ai-automation-audit) goes further, and our free version is a good place to start: you bring the workflow that eats the most time, and the team that would build it tells you what's automatable, roughly what it would take, and whether it's worth doing.",
    },
    {
      type: "cta",
      text: "Skip the guesswork on your top three tasks with a [free automation audit](/free-audit) from the team that would do the work.",
    },
  ],
  faqs: [
    {
      q: "How long should I track tasks for?",
      a: "One normal week is enough for most businesses. If a task only happens monthly, like month-end reporting, note how long it took last time instead of waiting a month to measure it.",
    },
    {
      q: "What if my team doesn't want to track their time?",
      a: "Be clear it's about the tasks, not the people. Nobody is being graded. Tally marks on a printed list take seconds, and the people doing the boring work are usually the keenest to see it go.",
    },
    {
      q: "What score makes a task worth automating?",
      a: "There's no fixed cutoff. Compare tasks against each other rather than against a number. In practice, the tasks that rise to the top score high on both frequency and rule-based, and those two matter more than the total.",
    },
    {
      q: "Should I automate several tasks at once?",
      a: "No. Do one, run it alongside the old process, and switch over once it's reliable. You'll learn what your systems and your team can handle, and the second automation goes faster because of it.",
    },
  ],
  related: ["signs-you-need-workflow-automation", "what-is-an-ai-automation-audit", "n8n-vs-zapier-vs-make"],
};

export default post;
