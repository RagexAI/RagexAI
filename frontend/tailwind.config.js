/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'page': '#F8FAFC',
        'section': '#FFFFFF',
        'divider': '#E5E7EB',
        'slate': '#0F172A',
        'slate-muted': '#475569',
        'slate-light': '#94A3B8',
        'accent': '#2563EB',
        'accent-hover': '#1D4ED8',
        'accent-soft': '#EFF6FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 6rem)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'menu-in': 'menuIn 0.25s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        menuIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
