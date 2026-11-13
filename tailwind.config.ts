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
        // Dark, type-led palette: near-black base, off-white text, and one
        // accent taken from the blue stripe in the logo.
        background: "#08080A",
        foreground: "#F2F2F3",
        surface: {
          DEFAULT: "#0E0E11", // alternate section background
          raised: "#15151A", // cards and panels on top of a section
        },
        // Legacy names kept so older class names still resolve.
        ink: {
          DEFAULT: "#F2F2F3",
          deep: "#08080A",
          soft: "#15151A",
        },
        primary: {
          DEFAULT: "#8FA2FF", // accent for links, small details, focus
          hover: "#B5C1FF",
          foreground: "#08080A",
        },
        accent: {
          DEFAULT: "#8FA2FF",
          strong: "#4F63FF", // the logo blue, for fills
          foreground: "#08080A",
        },
        tint: {
          DEFAULT: "#0E0E11",
          strong: "#15151A",
        },
        muted: {
          DEFAULT: "#0E0E11",
          foreground: "#A0A0AB", // secondary text
        },
        card: {
          DEFAULT: "#0E0E11",
          foreground: "#F2F2F3",
        },
        line: {
          DEFAULT: "#232329", // hairlines
          dark: "#232329",
        },
        border: "#232329",
        input: "#232329",
        ring: "#8FA2FF",
      },
      fontFamily: {
        sans: ["var(--font-mona)", "system-ui", "sans-serif"],
        heading: ["var(--font-mona)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        site: "1280px",
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
