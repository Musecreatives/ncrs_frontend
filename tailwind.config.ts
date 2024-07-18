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
        'mobileherobg': "url('/img/mobile-hero.jpg')",
        'building': "url('/img/bg-02.jpg')",
        },
        boxShadow:{
          '3xl': '2px 2px 5px 4px #ccc'
        },
      fontFamily:{
        afacad: ['var(--font-afacad)']
      }
    },
  },
  plugins: [],
};
export default config;
