/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        clay: "#386fa4",
        forest: "#386fa4",
        pine: "#386fa4",
        moss: "#cfe8ff",
        sand: "#eaf6ff",
        cream: "#fffaf0",
        ivory: "#fffaf0",
        babyBlue: "#cfe8ff",
        powder: "#eaf6ff",
        skyAccent: "#386fa4",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inconsolata", "ui-monospace", "monospace"],
        serif: ["Noto Serif", "Georgia", "serif"],
        retro: ["Noto Serif", "Georgia", "serif"],
      },
      boxShadow: {
        trail: "0 24px 70px rgba(45, 76, 106, 0.14)",
      },
    },
  },
  plugins: [],
};
