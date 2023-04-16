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
      fontFamily: {
        sans: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
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
