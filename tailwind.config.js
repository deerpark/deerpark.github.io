const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(15, 23, 42, 0.03)',
      DEFAULT: '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 1.5px 0 rgba(15, 23, 42, 0.02)',
      md: '0 4px 16px -1px rgba(15, 23, 42, 0.05), 0 2px 3px -1px rgba(15, 23, 42, 0.03)',
      lg: '0 8px 28px -2px rgba(15, 23, 42, 0.06), 0 5px 12.5px -2px rgba(15, 23, 42, 0.04)',
      xl: '0 20px 40px -4px rgba(15, 23, 42, 0.08), 0 10px 18.5px -4px rgba(15, 23, 42, 0.05)',
      '2xl': '0 24px 56px -8px rgba(15, 23, 42, 0.1)',
      '3xl': '0 36px 76px -12px rgba(15, 23, 42, 0.15)',
      inner: 'inset 0 1px 2px 0 rgba(15, 23, 42, 0.15)',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      blue: colors.blue,
      yellow: colors.amber,
    },
    extend: {
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
      },
      minWidth: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      minHeight: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxHeight: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      screens: {
        '2xs': '320px',
        xs: '480px',
        base: '813px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['dark'],
      borderRadius: ['hover', 'focus'],
      ringColor: ['hover'],
      ringWidth: ['hover'],
      ringOffsetWidth: ['hover'],
      transform: ['hover', 'focus', 'active'],
      display: ['dark'],
      scale: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
