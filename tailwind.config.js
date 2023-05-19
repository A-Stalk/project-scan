/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#FFFFFF',
        footer: '#029491',
        button: '#5970FF',
      },
      fontFamily: {
        ferry: ['Ferry', 'Arial', 'serif'],
        inter: ['Inter', 'Arial', 'serif'],
      },
      backgroundImage: {
        'description-image':
          "url('@/assets/img/home__description_section.svg')",
      },

      boxShadow: {
        '3xl': '0px 0px 20px -4px rgba(0,0,0,0.20);',
      },
    },
    plugins: [],

    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
};
