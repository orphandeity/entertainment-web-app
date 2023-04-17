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
        _red: "#fc4747",
        "_dark-blue": "#10141e",
        "_semi-dark-blue": "#161d2f",
        "_greyish-blue": "#5a698f",
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
