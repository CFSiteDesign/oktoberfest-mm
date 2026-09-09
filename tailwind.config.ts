import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ["Anton", "Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "hsl(var(--brand-blue))",
          gold: "hsl(var(--brand-gold))",
          ink: "hsl(var(--brand-ink))",
        },
        border: "hsl(var(--border))",
        divider: "hsl(var(--divider))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cranky: {
          DEFAULT: "hsl(var(--cranky))",
          foreground: "hsl(var(--cranky-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-18px) rotate(var(--tilt, 0deg))" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(22px) rotate(var(--tilt, 0deg))" },
        },
        clink: {
          "0%, 100%": { transform: "rotate(var(--tilt, 0deg))" },
          "45%": { transform: "rotate(calc(var(--tilt, 0deg) - 7deg))" },
          "55%": { transform: "rotate(calc(var(--tilt, 0deg) + 7deg))" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(var(--float-rotate, 3deg))" },
          "50%": { transform: "translateY(-20px) rotate(var(--float-rotate, 3deg))" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0) rotate(var(--float-rotate, -6deg))" },
          "50%": { transform: "translateY(20px) rotate(var(--float-rotate, -6deg))" },
        },
        "falling-heart": {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "0.7" },
          "50%": { opacity: "0.5" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 26s linear infinite",
        "marquee-slow": "marquee 44s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        clink: "clink 4s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        "falling-heart": "falling-heart linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
