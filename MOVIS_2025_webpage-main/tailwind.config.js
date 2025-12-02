/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#00d4ff',
        'space-purple': '#1a1a2e',
        'space-dark': '#0a0a0a',
        'space-darker': '#050505',
        'space-red': '#ff6b6b',
        'space-gold': '#ffd93d'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'streak': 'streak 12s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' }
        },
        streak: {
          '0%': { transform: 'translateX(-100px) translateY(-100px) rotate(45deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(200px) translateY(200px) rotate(45deg)', opacity: '0' }
        },
        'pulse-glow': {
          '0%': { 
            transform: 'scale(1)', 
            opacity: '0.3',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
          },
          '100%': { 
            transform: 'scale(1.2)', 
            opacity: '0.6',
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)'
          }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        glow: {
          '0%': { textShadow: '0 0 20px #00d4ff' },
          '100%': { textShadow: '0 0 30px #00d4ff, 0 0 40px #00d4ff' }
        }
      },
      fontFamily: {
        'space': ['Arial', 'sans-serif']
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
}
