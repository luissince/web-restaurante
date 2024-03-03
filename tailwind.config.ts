import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: "media",
  theme: {
    extend: {
      backgroundColor:{
        'qgray-border': 'rgb(239 239 239/1)',
        'search-btn': 'rgb(255 187 56/1)',
        'qyellow': 'rgb(255 187 56/1)',
        'banner': 'rgba(0, 0, 0, 0.4)',
        'greenBanner': '#756a66',
        products: "#dce5e4",
        popularProducts: '#dce5e4',
        prevNext: 'rgba(59, 93, 80, 0.1)',
        testimonials: '#d6d6d6',
        nosotros: 'rgba(59, 93, 80, 0.2)',
        whatsapp: '#0df053',
        chat: '#FAFAFA'
      },
      backgroundImage: {
        'nosotros': "url('/assets/nosotros.jpg')",
        'pedirAhora': "url('/assets/pedirAhora.jpg')",
        'locales': "url('/assets/locales.jpg')",
        'banner': "url('/assets/banner.jpg')",
      },
      colors: {
        primary: "#2f2f2f",
        secondary: "#F9BF29",
        orderNow: "#f91944",
        whatsapp: '#0df053'
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        primaSans: ["sans-serif"],
      },
      borderColor:{
        'weHelp': "#3b5d50",        
      },
      fontWeight: {
        boldCustomer: '400',
      },
      padding: {
        a: "19.2px 34.4px 40px 34px",
      },
      boxShadow: {
        // x y opacidad tamaño de profundidad color, borde-> x y opacidad tamaño color
        shadowPilares: "-5px 20px 25px 10px rgb(223 36 36 / 0.1), 0 4px 6px -4px rgb(223 36 36 / 0.1)",
      },
      animation: {
        'animate-spin': 'spin 4s linear infinite',
        'animate-spin-reverse': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        "spin-reverse": {
          'to': { transform: 'rotate(-1turn)' },
        }
      },
      transitionProperty: {
        'products': '.3s all ease'
      },
      gridTemplateColumns: {
        "weHelp": "repeat(27, 1fr)"
      }
    }, 
    screens: {
      "xxs": "280px",
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "x": "1216px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
