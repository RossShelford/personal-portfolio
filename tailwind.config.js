module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
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
      },
      keyframes: {
      },
    },
  },
  plugins: [],
}
