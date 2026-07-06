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
        // Light-first palette. White base, purple accent, dark ink bands.
        background: "#FFFFFF",
        foreground: "#191331",
        ink: {
          DEFAULT: "#191331", // dark section background / primary text
          deep: "#120D24", // darkest band (hero, footer)
          soft: "#241B45", // raised surfaces inside dark bands
        },
        primary: {
          DEFAULT: "#6D28D9", // violet-700 — main action color
          hover: "#5B21B6", // violet-800
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#8B5CF6", // lighter violet for icons/details on dark
          foreground: "#FFFFFF",
        },
        tint: {
          DEFAULT: "#F5F3FA", // pale lilac alternate-section background
          strong: "#ECE7F7",
        },
        muted: {
          DEFAULT: "#F5F3FA",
          foreground: "#5D5775", // secondary text on white
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#191331",
        },
        line: {
          DEFAULT: "#CFC6E4", // hairline borders on white (darkened for visibility)
          dark: "#453869", // hairline borders on ink bands (darkened for visibility)
        },
        border: "#CFC6E4",
        input: "#CFC6E4",
        ring: "#6D28D9",
      },
      fontFamily: {
        sans: ["var(--font-mona)", "system-ui", "sans-serif"],
        heading: ["var(--font-mona)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
