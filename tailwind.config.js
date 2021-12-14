module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html'],
    options: {
      safelist: [
        'header--active',
        'nav--active',
        'menu-icon--active',
        'overlay--active',
        'btn-up--active',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        'mapa-interactivo': 'url(/images/home/mapa-interactivo.png)',
        'banner-explora-datos-lg':
          'url(/images/explora-los-datos/banner-explora-datos-desktop.png)',
      },
      colors: {
        'blue': '#5337F7',
        'blue-dark': '#311EA0',
        'pink': '#E81483',
        'pink-dark': '#B52471',
        'lemon': '#D7DB2E',
        'lemon-dark': '#B2B511',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
