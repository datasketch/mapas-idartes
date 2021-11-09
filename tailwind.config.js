module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html"],
    options: {
      safelist: []
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        'banner-home-sm': 'url(/images/home/foto_candelaria.png)',
        'banner-home-lg': 'url(/images/home/foto_candelaria@2x.png)',
        'agenda-cultural-sm': 'url(/images/home/agenda-cultural.png)',
        'agenda-cultural-lg': 'url(/images/home/agenda-cultural@2x.png)',
      },
      colors: {
        blue: '#5337F7',
        'blue-dark': '#311EA0',
        pink: '#E81483',
        'pink-dark': '#B52471',
        lemon: '#D7DB2E',
        'lemon-dark': '#B2B511'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
