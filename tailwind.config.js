/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#0A111F',
          surface: '#121E36',
          surfaceElevated: '#162544',
          surfaceCard: '#1C2F57',
          border: '#1E2F52',
          borderLight: '#263B66',
          primary: '#42A5F5',
          primaryHover: '#64B5F6',
          azure: '#2979FF',
          cyan: '#00E5FF',
          amber: '#FF9800',
          pink: '#FF4081',
          textMuted: '#8094B0',
        },
        dark: {
          950: '#070C16',
          900: '#0A111F',
          850: '#0E1729',
          800: '#121E36',
          750: '#162544',
          700: '#1C2F57',
          600: '#233A6B',
        },
        brand: {
          teal: '#42A5F5',
          cyan: '#2979FF',
          darkTeal: '#121E36',
          accent: '#42A5F5',
          gold: '#FFB74D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        }
      }
    },
  },
  plugins: [],
}
