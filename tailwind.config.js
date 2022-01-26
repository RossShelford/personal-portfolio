module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      colors: {
        night: '#392D6E',
        lavender: '#AA66FF',
        salmon: '#FFB997',
        mint: '#71DCAB',
        sunflower: '#F4E16D',
        cream: '#FFFEF6',
        offwhite: '#FEFEFB',
        flint: '#343434',
        charcoal: '#232323'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x':'gradient-x 12s ease infinite',
        'gradient-y':'gradient-y 12s ease infinite',
        'gradient-xy':'gradient-xy 12s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
      },
      'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [],
}
