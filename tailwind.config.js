module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html"],
    options: {
      safelist: [
        'header--active',
        'nav--active',
        'menu-icon--active',
        'overlay--active',
        'btn-up--active'
      ]
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
        'mapa-interactivo': 'url(/images/home/mapa-interactivo.png)',
        'banner-estrategias-sm': 'url(/images/metodologia/que-es-mapas/banner-estrategias.png)',
        'banner-estrategias-lg': 'url(/images/metodologia/que-es-mapas/banner-estrategias@2x.png)',
        'banner-explora-datos-lg': 'url(/images/explora-los-datos/banner-explora-datos-desktop.png)',
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
