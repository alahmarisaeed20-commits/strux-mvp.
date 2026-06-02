/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // STRUX brand palette — dark navy, electric blue, silver
        navy: {
          950: '#070b18',
          900: '#0a1024',
          850: '#0d1530',
          800: '#111a3a',
          700: '#16224d',
          600: '#1d2c61',
        },
        electric: {
          500: '#2f6bff',
          400: '#4f86ff',
          300: '#7aa6ff',
          600: '#1f50d6',
        },
        silver: {
          100: '#f4f6fb',
          200: '#e3e8f2',
          300: '#c7d0e3',
          400: '#9aa6c4',
          500: '#6b7798',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        arabic: ['Tajawal', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(47,107,255,0.25), 0 8px 30px -8px rgba(47,107,255,0.45)',
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
