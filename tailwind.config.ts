import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }
      'md': '412px',

      'xmd': '540px',
      // => @media (min-width: 768px) { ... }
      'slg':'768px',

      'lg': '820px',
      // => @media (min-width: 1024px) { ... }
      'xlg': '1024px',
      
      'xlg-min':{
        'raw':'(min-width: 1024px) and (max-height: 1366px)'
      },

      'xlg-max':{
        'raw':'(min-width: 1024px) and (max-height:600px)'
      },
      
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'webherobg': "url('/img/homepage.png')",
        'mobileherobg': "url('/img/mobile-hero.jpg')",
        'building': "url('/img/bg-02.jpg')",
        'bg-03': "url('/img/img-07.jpeg')",
        'space': "url('/img/bg-03.jpg')",
        },
        boxShadow:{
          '3xl': '2px 2px 5px 4px #ccc',
          '4xl': '2px 2px 5px 1px #191D1F',
          '5xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          '6xl':' 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
export default config;
