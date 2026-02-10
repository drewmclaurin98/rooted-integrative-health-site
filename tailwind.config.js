/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#719CA6",
        "primary-hover": "#5E8A94",
        "primary-active": "#4B7179",
        "primary-light": "#A9C5CD",

        "accent": "#755E52",
        "accent-hover": "#5F4C42",
        
        "background-page": "#FAFAFA",
        "background-surface": "#F2F3F2",
        "background-muted": "#7E817E",

        "border": "#D1D3D1",
        "border-focus": "#719CA6",

        "success": "#5F9C86",
        "warning": "#C29A5C",
        "error": "#B45D5D",
        "info": "#6A8FA0",

        'gradient-start': '#F7F8F7',
        'gradient-middle': '#ECEDED',
        'gradient-end': '#EAF2F4',

        'gradient-primary-start': '#EAF2F4',
        'gradient-primary-middle': '#C9DBE0',
        'gradient-primary-end': '#F7F8F7',

        'gradient-warm-start': '#EFEAEA',
        'gradient-warm-middle': '#F7F8F7',
        'gradient-warm-end': '#ECEDED',

        'gradient-dark-start': '#5F6160',
        'gradient-dark-middle': '#2F3231',
        'gradient-dark-end': '#1E2020',
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
