/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/*.{js,jsx}',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '868px',
          },
          '@screen xl': {
            maxWidth: '868px',
          },
        }
      });
    }
  ],
}

