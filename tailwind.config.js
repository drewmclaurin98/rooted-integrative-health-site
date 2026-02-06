/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-main': '#6B9F7F',      // Warm sage green
        'accent-dark': '#5a8a6b',      // Darker sage
        'accent-light': '#A8D5BA',     // Light sage
        'secondary-light': '#D4C5B9',  // Warm beige/taupe
        'gradient-start': '#FBF9F7',   // Warm off-white
        'gradient-middle': '#F5F0EB',  // Soft warm beige
        'gradient-end': '#E8DED5',     // Light taupe
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
