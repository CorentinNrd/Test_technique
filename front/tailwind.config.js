module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '320px', 'max': '734px'},
      // => @media (min-width: 640px) { ... }
  
      'md': {'min': '735px', 'max': '1024px'},
      // => @media (min-width: 1024px) { ... }
  
      'lg': {'min': '1025px'},
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
