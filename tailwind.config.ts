import type { Config } from "tailwindcss";

// Bright, illustrated system: white pages, a blue hero, navy ink for text
// and thick outlines, and a sunny yellow for the one action we want.
const INK = "#1B1D4E";

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
        background: "#FFFFFF",
        foreground: INK,
        ink: {
          DEFAULT: INK, // text and outlines
          deep: "#12143A", // footer
          soft: "#2A2D66",
        },
        brand: {
          DEFAULT: "#3B4CFF", // the blue from the logo
          dark: "#2B38D9",
          light: "#6E8BFF",
          sky: "#A9CBFF",
        },
        sun: {
          DEFAULT: "#FFCB2E", // primary buttons and highlights
          light: "#FFE38A",
        },
        mint: "#35D6A0",
        coral: "#FF7B7B",
        lilac: "#B9A7FF",
        surface: {
          DEFAULT: "#F3F6FF", // alternate section background
          raised: "#FFFFFF",
          cream: "#FFF7E3",
        },
        // Older names still used in places.
        primary: {
          DEFAULT: "#3B4CFF",
          hover: "#2B38D9",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#3B4CFF",
          foreground: "#FFFFFF",
        },
        tint: {
          DEFAULT: "#F3F6FF",
          strong: "#DCE5FF",
        },
        muted: {
          DEFAULT: "#F3F6FF",
          foreground: "#565B8C", // secondary text
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: INK,
        },
        line: {
          DEFAULT: "#D5DCF7", // soft dividers
          dark: INK,
        },
        border: "#D5DCF7",
        input: "#D5DCF7",
        ring: "#3B4CFF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        // Kept so older `font-mono` classes resolve to the site font.
        mono: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1160px",
      },
      boxShadow: {
        // Hard offset shadows: the "sticker" look.
        pop: `5px 5px 0 0 ${INK}`,
        "pop-sm": `3px 3px 0 0 ${INK}`,
        "pop-lg": `8px 8px 0 0 ${INK}`,
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(18px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.85) translateY(12px)" },
          "70%": { opacity: "1", transform: "scale(1.03) translateY(0)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        march: {
          to: { strokeDashoffset: "-28" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "96%": { transform: "scaleY(0.1)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(16deg)" },
          "75%": { transform: "rotate(-8deg)" },
        },
        twinkle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.6)", opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 36s linear infinite",
        float: "float 5s ease-in-out infinite",
        drift: "drift 11s ease-in-out infinite",
        wiggle: "wiggle 2.4s ease-in-out infinite",
        "pop-in": "pop-in 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2) both",
        march: "march 1.1s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        blink: "blink 4.5s ease-in-out infinite",
        wave: "wave 1.8s ease-in-out infinite",
        twinkle: "twinkle 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
