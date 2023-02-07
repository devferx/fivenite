/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "black-night": "#2A2A2A",
        "grey-soft": "#CCCCCC",
        primary: "#FFFF01",
        malibu: "#4DCCFA",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        burbank: ["Burbank Big Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
