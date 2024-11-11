/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        watercolor: {
          cream: '#FFF5EA',
          sand: '#F5E6D3',
          rose: '#FFE4E6',
          terra: '#E6C9A8',
          sage: '#E6EBE0',
          brown: {
            light: '#A67B5B',
            DEFAULT: '#8B5E34',
            dark: '#6B4423'
          },
          beige: {
            light: '#F5E6D3',
            DEFAULT: '#E8D5C4',
            dark: '#D4B499'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif']
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'brush-stroke': 'brushStroke 1.2s ease-out forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'paint-splash': 'paintSplash 0.6s ease-out forwards',
        'color-flow': 'colorFlow 8s ease-in-out infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        brushStroke: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        paintSplash: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95) translateY(10px)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.02)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          }
        },
        colorFlow: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            filter: 'saturate(1)'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'saturate(1.2)'
          }
        }
      },
      backgroundImage: {
        'watercolor-texture': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'watercolor-gradient': 'linear-gradient(120deg, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}