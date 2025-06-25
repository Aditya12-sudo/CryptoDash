
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#141413",
        foreground: "#FAFAF8",
        primary: {
          DEFAULT: "#8989DE",
          foreground: "#FAFAF8",
        },
        secondary: {
          DEFAULT: "#3A3935",
          foreground: "#FAFAF8",
        },
        success: {
          DEFAULT: "#7EBF8E",
          foreground: "#FAFAF8",
        },
        warning: {
          DEFAULT: "#D2886F",
          foreground: "#FAFAF8",
        },
        muted: {
          DEFAULT: "#605F5B",
          foreground: "#E6E4DD",
        },
        accent: {
          DEFAULT: "#8989DE",
          foreground: "#FAFAF8",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#FAFAF8",
        },
        card: {
          DEFAULT: "#1A1A18",
          foreground: "#FAFAF8",
        },
        popover: {
          DEFAULT: "#1A1A18",
          foreground: "#FAFAF8",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "pulse-subtle": "pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(137, 137, 222, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(137, 137, 222, 0.6)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
