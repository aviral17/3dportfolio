/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        medium: "880px",
        custom: { min: "832px", max: "1215px" },
        testi: { min: "1024px", max: "1156px" },
        aboutSmall: { min: "449px", max: "587px" },
        earthlg: "1280px",
        footerxs: { min: "777px", max: "920px" },
        footersm: "777px",
        mynamemd: "532px",
        mynamelg: { min: "640px", max: "1023px" },
        mynamexl: "1024px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
