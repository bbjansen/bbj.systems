module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
      },
      fontFamily: {
        primary: ['Courier'],
      },
    },
  },
  daisyui: {
    base: false,
    themes: ['black'],

  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};