/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stelix: {
          'deep': '#0A1A2F',        // Deep Space Blue
          'cyan': '#14E9E2',        // Electric Neon Cyan
          'graphite': '#121212',    // Graphite Black
          'silver': '#D9D9D9',      // Silver Tech Grey
          'purple': '#7A3CF4',      // Stellar Purple
          'lime': '#7DFF80',        // Lime Neon Green
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #0A1A2F 0%, #081726 60%)',
        'gradient-accent': 'linear-gradient(135deg, #7A3CF4 0%, #14E9E2 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 8px 30px rgba(20, 233, 226, 0.12)',
        'glow-purple': '0 8px 30px rgba(122, 60, 244, 0.12)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
