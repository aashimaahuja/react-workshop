/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        'leading-12': '3',
        12: '3rem',
      },
    },
  },
  plugins: [],
};
