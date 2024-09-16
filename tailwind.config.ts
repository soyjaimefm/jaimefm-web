import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'FMorange': '#ea8239',
        'FMblue': '#355973',
        'FMsoftBlue': '#c6d8df',
        'FMwhite': '#f8f9f4',
        'FMbeige': '#f9e4c7',
      },
      fontFamily: {
        title: ['var(--font-title)'],
        subTitle: ['var(--font-subtitle)']
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

export default config;
