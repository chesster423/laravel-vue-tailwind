module.exports = {
  content: [
    './resources/**/*.blade.php', 
    './resources/**/*.{html,js,ts,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0fa968',
          50: '#ecfdf3',
          100: '#d1fae1',
          200: '#a7f3c9',
          300: '#6ee7ac',
          400: '#34d38b',
          500: '#0fa968',
          600: '#05965c',
          700: '#04784c',
          800: '#065f3e',
          900: '#064e34',
        },
        background: '#e5e5e5',
        surface: '#ffffff',
      },
      spacing: {
        40: '45px',
        45: '45px',
        60: '60px',
        85: '85px',
        90: '90px',
        140: '140px',
        150: '150px',
        8700: '87%',
      },
    },
  },
  variants: {
    aspectRatio: ['responsive', 'hover'],
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ],
};
