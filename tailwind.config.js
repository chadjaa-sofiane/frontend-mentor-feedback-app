/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#FFF",
      transparent: "transparent",
      primary: {
        100: "#62BCFA",
        200: "#AD1FEA",
        300: "#4661E6",
      },
      secondary: {
        100: "#647196",
        200: "#3A4374",
        300: "#373F68",
      },
      natural: {
        300: "#D73737",
        200: "#E98888",
      },
    },
    fontFamily: {
      primary: "var(--font-jost)",
    },
  },
  plugins: [],
};
