import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08091A",
        foreground: "#E2E8F0",
        primary: {
          DEFAULT: "#7C3AED",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#A78BFA",
          foreground: "#1E1E3F",
        },
        muted: {
          DEFAULT: "#12102A",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#7C3AED",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#0D0B1E",
          foreground: "#E2E8F0",
        },
        border: "#221F3A",
        input: "#221F3A",
        ring: "#7C3AED",
        "violet-glow": "rgba(124,58,237,0.15)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.35), transparent)",
        "card-glow":
          "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(124,58,237,0.15), transparent)",
        "gradient-violet":
          "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
        "gradient-border":
          "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(167,139,250,0.2))",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
