import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },

      colors: {
        // Victus Consulting palette
        background: "#ffffff",
        foreground: "#0f172a",
        border: "#dbe3ef",
        input: "#dbe3ef",

        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
          border: "#dbe3ef",
        },

        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
          border: "#dbe3ef",
        },

        primary: {
          DEFAULT: "#00338D",
          foreground: "#ffffff",
          border: "#00338D",
        },

        secondary: {
          DEFAULT: "#f5f8fc",
          foreground: "#0f172a",
          border: "#dbe3ef",
        },

        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#334155",
          border: "#dbe3ef",
        },

        accent: {
          DEFAULT: "#11A6F5",
          foreground: "#ffffff",
          border: "#11A6F5",
        },

        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
          border: "#dc2626",
        },

        ring: "#11A6F5",

        chart: {
          "1": "#00338D",
          "2": "#11A6F5",
          "3": "#0f172a",
          "4": "#64748b",
          "5": "#dbe3ef",
        },

        sidebar: {
          ring: "#11A6F5",
          DEFAULT: "#f5f8fc",
          foreground: "#0f172a",
          border: "#dbe3ef",
        },

        "sidebar-primary": {
          DEFAULT: "#00338D",
          foreground: "#ffffff",
          border: "#00338D",
        },

        "sidebar-accent": {
          DEFAULT: "#11A6F5",
          foreground: "#ffffff",
          border: "#11A6F5",
        },

        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },

        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;