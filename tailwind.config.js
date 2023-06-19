module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myblue: "#426EEB",
        bordergray: "#C1C3D9",
        itemgray: "#D9D9D9",
        fontgray: "#7D7E8C",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
