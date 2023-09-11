module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        base: '#FFDE00',
        primary: '#007BC8',
        secondary: '#4FC47E',
        accent: '#F0655D',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
        body: 'Noto Sans JP, Arial, sans-serif',
      },
    },
  },
  content: [
    './components/**/*.jsx', // all components
    './pages/**/*.js', // all pages as well
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};
