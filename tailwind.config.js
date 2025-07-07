/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro': {
          'purple': '#8B5CF6',
          'pink': '#EC4899',
          'cyan': '#06B6D4',
          'green': '#10B981',
          'yellow': '#F59E0B',
          'red': '#EF4444',
        },
        'dark': {
          '900': '#0A0A0A',
          '800': '#121212',
          '700': '#1F1F1F',
          '600': '#2A2A2A',
          '500': '#3A3A3A',
        }
      },
      fontFamily: {
        'pixel': ['monospace'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6' },
          '100%': { boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}