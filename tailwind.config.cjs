const typographyPlugin = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svg}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [typographyPlugin()],
  root: __dirname,
  theme: {
    extend: {
      animation: {
        dash: 'dash 3s forwards',
        'spin-slow': 'spin 10s linear infinite'
      },
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
      },
      fontSize: {
        md: '0.9375rem'
      },
      keyframes: {
        dash: {
          '50%, 100%': {
            strokeDashoffset: 0
          }
        }
      },
      typography: {
        sm: {
          css: {
            fontSize: '0.9375rem'
          }
        }
      }
    }
  }
};
