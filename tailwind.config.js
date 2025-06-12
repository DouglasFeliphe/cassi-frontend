module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ds-app-primaria03": "var(--ds-app-primaria03)",
        "ds-app-primaria05": "var(--ds-app-primaria05)",
        "ds-so-coreserror-600": "var(--ds-so-coreserror-600)",
        "ds-so-coresneutral-900": "var(--ds-so-coresneutral-900)",
        "web-error-0": "var(--web-error-0)",
        "web-neutral-0": "var(--web-neutral-0)",
        "web-neutral-100": "var(--web-neutral-100)",
        "web-neutral-300": "var(--web-neutral-300)",
        "web-neutral-400": "var(--web-neutral-400)",
        "web-neutral-800": "var(--web-neutral-800)",
        "web-primary-100-default": "var(--web-primary-100-default)",
        "web-secondary-100-default": "var(--web-secondary-100-default)",
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
      },
      fontFamily: {
        "a-text-button": "var(--a-text-button-font-family)",
        "DS-SO-fontes-16pt-body-text":
          "var(--DS-SO-fontes-16pt-body-text-font-family)",
        "h3-text-subtitle": "var(--h3-text-subtitle-font-family)",
        "h4-text-title": "var(--h4-text-title-font-family)",
        "h6-text": "var(--h6-text-font-family)",
        "p-text": "var(--p-text-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
