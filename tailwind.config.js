const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        _red: "var(--color-red)",
        "_dark-blue": "var(--color-dark-blue)",
        "_semi-dark-blue": "var(--color-semi-dark-blue)",
        "_greyish-blue": "var(--color-greyish-blue)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "heading-sm": "var(--font-heading-sm)",
        "heading-md": "var(--font-heading-md)",
        "heading-lg": "var(--font-heading-lg)",
        "body-sm": "var(--font-body-sm)",
        "body-md": "var(--font-body-md)",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
