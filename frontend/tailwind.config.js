/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors using CSS variables
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-heading))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-heading))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-background))',
        },
        
        // Background colors
        background: 'hsl(var(--color-background))',
        surface: 'hsl(var(--color-surface))',
        
        // Text colors
        heading: 'hsl(var(--color-heading))',
        body: 'hsl(var(--color-body))',
        muted: 'hsl(var(--color-muted))',
        
        // UI elements
        border: 'hsl(var(--color-border))',
        
        // Semantic colors
        success: 'hsl(var(--color-success))',
        warning: 'hsl(var(--color-warning))',
        error: 'hsl(var(--color-error))',
        info: 'hsl(var(--color-info))',

        // Legacy support (backwards compatibility)
        'page': 'hsl(var(--color-background))',
        'section': 'hsl(var(--color-surface))',
        'slate': 'hsl(var(--color-heading))',
        'slate-muted': 'hsl(var(--color-body))',
        'slate-light': 'hsl(var(--color-muted))',
        'accent-hover': 'hsl(var(--color-primary))',
        'accent-soft': 'hsl(var(--color-surface))',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Monaco', 'Courier', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 1px 1px, hsl(var(--color-body) / 0.08) 1px, transparent 0)',
      },
      backgroundSize: {
        'pattern': '40px 40px',
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 6rem)',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.15)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        card: '0 1px 3px rgba(0,0,0,0.06)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'menu-in': 'menuIn 0.25s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },
    },
  },
  plugins: [],
};
