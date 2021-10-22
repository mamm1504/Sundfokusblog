module.exports = {
  purge: [
    './pages/**/*.js',
    "./components/**/*.js", 
    "./static/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#a7cb42',
        'greybg': '#f9f9f9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
