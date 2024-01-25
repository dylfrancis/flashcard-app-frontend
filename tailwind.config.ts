import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindTypography from "@tailwindcss/typography";
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
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      fontFamily: {
        mooli: ["Mooli", "sans-serif"],
      },
      colors: {
        border: "#fff",
        input: "#fff",
        ring: "#f57474",
        background: "#161616",
        foreground: "#fff",
        primary: {
          DEFAULT: "#f57474",
          50: "#ffecef",
          100: "#ffced4",
          200: "#fb9c9b",
          300: "#51b99a",
          400: "#ff524f",
          500: "#ff4133",
          600: "#f73734",
          700: "#e52c2e",
          800: "#d82427",
          900: "#c8161a",
          foreground: "#000",
        },
        secondary: {
          DEFAULT: "#0e9588",
          50: "#e0f2f1",
          100: "#b2dfdb",
          200: "#81cac4",
          300: "#4fb5ac",
          400: "#2ba59a",
          500: "#0e9588",
          600: "#0c887b",
          700: "#0a786b",
          800: "#09685c",
          900: "#064c40",
          foreground: "#000",
        },
        destructive: {
          DEFAULT: "#f3362a",
          foreground: "#fff",
        },
        popover: {
          DEFAULT: "#676767",
          foreground: "#fff",
        },
        card: {
          DEFAULT: "#676767",
          foreground: "fff",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
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
  plugins: [tailwindcssAnimate, tailwindTypography],
} satisfies Config;
