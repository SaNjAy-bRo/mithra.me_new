/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#16233b",
          ink: "#22304a",
          blue: "#2c6bff",
          cyan: "#13b8c6",
          coral: "#ff6b63",
          orange: "#ff8c42",
          mist: "#eef4fb",
          pale: "#f7f9fc",
          line: "#d9e3f0",
          text: "#56657c"
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 28px rgba(22, 35, 59, 0.08)',
        float: '0 18px 34px rgba(255, 107, 99, 0.28)',
      },
      animation: {
        'ticker-scroll': 'tickerScroll 28s linear infinite',
        'blob-float': 'blobFloat 16s ease-in-out infinite',
        'grid-twinkle': 'gridTwinkle 6s ease-in-out infinite',
        'float-particle': 'floatParticle 16s linear infinite',
        'arrow-pulse': 'arrowPulse 2.2s ease-out infinite',
        'phone-pulse': 'phonePulse 2.4s ease-out infinite',
      },
      keyframes: {
        tickerScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blobFloat: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(18px, -20px, 0) scale(1.05)' },
          '66%': { transform: 'translate3d(-16px, 12px, 0) scale(0.96)' },
        },
        gridTwinkle: {
          '0%': { opacity: '0.08' },
          '20%': { opacity: '0.4' },
          '40%': { opacity: '0.12' },
          '60%': { opacity: '0.58' },
          '80%': { opacity: '0.18' },
          '100%': { opacity: '0.34' },
        },
        floatParticle: {
          '0%': { transform: 'translate3d(0,0,0) scale(0.9)', opacity: '0.25' },
          '50%': { opacity: '0.75' },
          '100%': { transform: 'translate3d(0,-34px,0) scale(1.08)', opacity: '0.2' },
        },
        arrowPulse: {
          '0%': { transform: 'scale(0.92)', opacity: '0.58' },
          '70%': { transform: 'scale(1.18)', opacity: '0' },
          '100%': { transform: 'scale(1.18)', opacity: '0' },
        },
        phonePulse: {
          '0%': { transform: 'scale(1)', opacity: '0.65' },
          '70%': { transform: 'scale(1.08)', opacity: '0' },
          '100%': { transform: 'scale(1.08)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
