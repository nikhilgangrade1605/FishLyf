/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'navy-gradient-start': '#001f3f',
        'navy-gradient-end': '#00091a',
        'slate-panel': '#2f3136',
        'neon-cyan': '#00ffff',
        'emerald-green': '#50fa7b',
        'warning-yellow': '#ffcc00',
        'critical-red': '#ff5555'
      }
    }
  },
  plugins: []
};