import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f6f1e7",
        "ivory-d": "#ede6d5",
        ink: "#1c1c1a",
        "ink-muted": "#5a574f",
        emerald: "#1f4d3a",
        "emerald-d": "#163829",
        brass: "#b08d4f",
        "brass-l": "#c9a96e",
        "brass-muted": "#d4b87a",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.68rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
        "display-xl": ["clamp(3rem,7vw,6rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(2.2rem,5vw,4rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(1.6rem,3.5vw,2.6rem)", { lineHeight: "1.15" }],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        brass: "0 0 0 2px #b08d4f",
        "brass-lg": "0 12px 40px -8px rgba(176,141,79,0.25)",
        portrait: "inset 0 0 0 3px #b08d4f, 0 24px 60px -12px rgba(28,28,26,0.18)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        underlineGrow: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
        underlineGrow: "underlineGrow 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
