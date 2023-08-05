/** @type {import('tailwindcss').Config} */

export default {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn"],
      },
      boxShadow: {
        subtle: "0 24px 40px #797f880d",
        hover: "0 14px 24px 10px #7E8AAB1C",
      },
      colors: {
        lynch: "#626E94",
        "bondi-blue": "#00ADB5",
        amaranth: "#E11D48",
        "west-side": "#FF9518",
        "black-pearl": "#050F2C",
        "link-water": "#f5f8fc",
        mystic: "#DEE2EE",
        geyser: "#D2D7E4",
        "pigeon-post": "#BDC5DD",
        "bali-hai": "#7E8AAB",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.313rem",
        7.5: "1.813rem",
      },
    },
  },
  plugins: [],
};
