// Technology stack tabs shown on service pages.

export type TechTab = {
  label: string;
  items: string[];
};

export const techTabs: TechTab[] = [
  {
    label: "AI models & frameworks",
    items: [
      "Claude (Anthropic)",
      "GPT (OpenAI)",
      "Gemini",
      "Llama",
      "Mistral",
      "LangChain",
      "LlamaIndex",
      "Hugging Face",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    label: "Automation & integration",
    items: [
      "n8n",
      "Make",
      "Zapier",
      "Temporal",
      "Airflow",
      "REST & GraphQL APIs",
      "Webhooks",
      "RPA",
    ],
  },
  {
    label: "Data & backend",
    items: [
      "Python",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Pinecone",
      "pgvector",
      "Elasticsearch",
      "Snowflake",
    ],
  },
  {
    label: "Web & cloud",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Cloudflare",
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Docker",
    ],
  },
];
