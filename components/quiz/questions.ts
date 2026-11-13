// The free audit quiz: questions, options, Questy's quips and the
// sessionStorage helpers. Small on purpose, because the lead pop-up (a
// client component on every page) imports it for question 1.
//
// Step 2's options (the industries) are built in AuditQuiz.tsx from
// lib/data/industries.ts and passed in, so the big data files never reach
// the browser bundle.

export type Option = { id: string; label: string };

export type Answers = {
  pains: string[];
  industry: string;
  team: string;
  hours: string;
  tools: string[];
  timing: string;
  name: string;
  email: string;
  website: string;
};

export const emptyAnswers: Answers = {
  pains: [],
  industry: "",
  team: "",
  hours: "",
  tools: [],
  timing: "",
  name: "",
  email: "",
  website: "",
};

export const painOptions: Option[] = [
  { id: "copying", label: "Copying data between tools" },
  { id: "documents", label: "Chasing documents" },
  { id: "questions", label: "Answering the same questions" },
  { id: "scheduling", label: "Scheduling and follow-ups" },
  { id: "reports", label: "Reports and spreadsheets" },
  { id: "leads", label: "Following up with leads" },
  { id: "website", label: "A slow or outdated website" },
  { id: "other", label: "Something else" },
];

// Added after the eight industries from lib/data/industries.ts.
export const extraIndustryOptions: Option[] = [
  { id: "field-services", label: "Home and field services" },
  { id: "other", label: "Something else" },
];

export const teamOptions: Option[] = [
  { id: "1", label: "Just me" },
  { id: "2-5", label: "2 to 5" },
  { id: "6-15", label: "6 to 15" },
  { id: "16+", label: "16 or more" },
];

// min / max hours a week, for the yearly maths on the result screen.
export const hoursOptions: (Option & { min?: number; max?: number })[] = [
  { id: "under-5", label: "Under 5", max: 5 },
  { id: "5-10", label: "5 to 10", min: 5, max: 10 },
  { id: "10-20", label: "10 to 20", min: 10, max: 20 },
  { id: "20+", label: "20 or more", min: 20 },
  { id: "unknown", label: "Honestly no idea" },
];

// Tool names used in our case studies (lib/data/engagements.ts), plus the
// ones small businesses mention most.
export const toolOptions: Option[] = [
  { id: "google-workspace", label: "Google Workspace" },
  { id: "outlook", label: "Outlook" },
  { id: "excel", label: "Excel" },
  { id: "sharepoint", label: "SharePoint" },
  { id: "quickbooks", label: "QuickBooks" },
  { id: "hubspot", label: "HubSpot" },
  { id: "salesforce", label: "Salesforce" },
  { id: "shopify", label: "Shopify" },
  { id: "airtable", label: "Airtable" },
  { id: "calendly", label: "Calendly" },
  { id: "clio", label: "Clio Grow" },
  { id: "gorgias", label: "Gorgias" },
  { id: "spreadsheets-email", label: "Mostly spreadsheets and email" },
];

export const timingOptions: Option[] = [
  { id: "yesterday", label: "Yesterday" },
  { id: "quarter", label: "This quarter" },
  { id: "looking", label: "Just looking around" },
];

export const TOTAL_STEPS = 7;

export const questionText = {
  pains: "What's eating your team's time?",
  industry: "What kind of business are you?",
  team: "How many people touch this work?",
  hours: "Roughly how many hours a week does it eat, all in?",
  tools: "Which tools are in the mix?",
  timing: "How soon do you want this fixed?",
  contact: "Where should we send your audit details?",
} as const;

export type Mood = "happy" | "wow" | "wink";

// What Questy says above the card on each step (decorative, aria-hidden).
// Index 0 to 6 are the questions, then "building" and "result".
export const quips: { text: string; mood: Mood; wave?: boolean }[] = [
  { text: "Be honest. I won't tell anyone.", mood: "happy", wave: true },
  { text: "Every business is a little weird. That's fine.", mood: "wink" },
  { text: "Counting heads. Mine counts as one.", mood: "happy" },
  { text: "A guess is fine. Nobody's holding a stopwatch.", mood: "wow" },
  { text: "Spreadsheets count. They always count.", mood: "wink" },
  { text: "No wrong answer. Just looking is fine too.", mood: "happy" },
  { text: "Last one, then you pick a time.", mood: "wow" },
  { text: "Crunching. Politely.", mood: "wow" },
  { text: "You did the hard part.", mood: "happy", wave: true },
];

export function labelFor(options: Option[], id: string): string {
  return options.find((o) => o.id === id)?.label ?? "";
}

export function labelsFor(options: Option[], ids: string[]): string[] {
  return ids.map((id) => labelFor(options, id)).filter(Boolean);
}

const fmt = (n: number) => n.toLocaleString("en-US");

// "10 to 20 hours a week is roughly 520 to 1,040 hours a year". Their own
// numbers times 52, nothing more.
export function yearlyLine(hoursId: string): string | null {
  const o = hoursOptions.find((h) => h.id === hoursId);
  if (!o) return null;
  if (o.min !== undefined && o.max !== undefined) {
    return `${o.min} to ${o.max} hours a week is roughly ${fmt(o.min * 52)} to ${fmt(o.max * 52)} hours a year.`;
  }
  if (o.max !== undefined) {
    return `Under ${o.max} hours a week is still up to ${fmt(o.max * 52)} hours a year.`;
  }
  if (o.min !== undefined) {
    return `${o.min} or more hours a week is ${fmt(o.min * 52)}+ hours a year.`;
  }
  return null;
}

// ------------------------------------------------------------ storage

export const STORAGE_KEY = "ql-audit-quiz";
export const PAINS_PARAM = "pains";

export type Saved = {
  step: number;
  answers: Answers;
  done: boolean; // reached the result screen
  sent: "ok" | "failed" | "";
};

export function loadSaved(): Saved | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Saved>;
    return {
      step: typeof parsed.step === "number" ? parsed.step : 0,
      answers: { ...emptyAnswers, ...(parsed.answers ?? {}) },
      done: Boolean(parsed.done),
      sent: parsed.sent === "ok" || parsed.sent === "failed" ? parsed.sent : "",
    };
  } catch {
    return null;
  }
}

export function save(state: Saved) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage blocked: the quiz still works, it just won't survive a refresh.
  }
}

export function clearSaved() {
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to clear.
  }
}

// Used by the lead pop-up: store question 1's picks and start the quiz at
// question 2.
export function savePains(pains: string[]) {
  const prev = loadSaved();
  const answers = { ...(prev?.answers ?? emptyAnswers), pains };
  save({ step: pains.length > 0 ? 1 : 0, answers, done: false, sent: "" });
}

export function painsFromQuery(search: string): string[] {
  try {
    const raw = new URLSearchParams(search).get(PAINS_PARAM);
    if (!raw) return [];
    const valid = new Set(painOptions.map((p) => p.id));
    return raw.split(",").filter((id) => valid.has(id));
  } catch {
    return [];
  }
}
