const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx,html}', './components/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
