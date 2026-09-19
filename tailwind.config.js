/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bcn: {
          blue: '#168FE3',
          deep: '#0755B0',
          dark: '#10233F',
          light: '#8CCBF3',
          ice: '#EEF8FE',
          50: '#F7FAFC',
          100: '#EEF8FE',
          200: '#D6EEFC',
          300: '#8CCBF3',
          400: '#4DA8E8',
          500: '#168FE3',
          600: '#0775C7',
          700: '#0755B0',
          800: '#0A3D7A',
          900: '#10233F',
        },
        ink: {
          DEFAULT: '#102033',
          muted: '#64748B',
          light: '#94A3B8',
        },
        bg: {
          soft: '#F7FAFC',
          ice: '#EEF8FE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5.5vw, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h2': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg': ['clamp(1.05rem, 1.5vw, 1.2rem)', { lineHeight: '1.6' }],
        'label': ['0.75rem', { letterSpacing: '0.08em', fontWeight: '600' }],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '7xl': '80rem',
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgba(16,35,63,0.06), 0 1px 2px -1px rgba(16,35,63,0.05)',
        card: '0 4px 24px -8px rgba(16,35,63,0.1)',
        deep: '0 16px 48px -16px rgba(16,35,63,0.16)',
        blue: '0 8px 32px -8px rgba(23,143,227,0.3)',
        nav: '0 1px 0 0 rgba(16,35,63,0.06)',
      },
      borderRadius: {
        'lg2': '0.875rem',
        'xl2': '1rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(1.03)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'draw-line': 'draw-line 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
