/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "ui-sans-serif", "sans-serif"],
        display: ["Playfair Display", "system-ui", "serif"],
      },
      colors: {
        brand: {
          bg: "#020617",      // väldigt mörk blå/svart
          soft: "#0b1220",    // mjuk bakgrund
          primary: "#fb7185", // rosa (tailwind rose-400/500 vibe)
          accent: "#38bdf8",  // ljus blå
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.75)",
      },
    },
  },
  plugins: [],
};
