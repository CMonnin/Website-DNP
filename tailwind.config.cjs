const typographyPlugin = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [typographyPlugin()],
  root: __dirname,
  theme: {
    extend: {
      colors: {
        logo: {
          300: '#57abda',
          800: '#0743c6',
          900: '#102e71'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          xl: '3rem'
        }
      }
    }
  }
};
