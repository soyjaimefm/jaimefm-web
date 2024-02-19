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
        'white': '#ffffff',
        'black': '#000000',
        'nowhite': '#EFEFEF',
        'noblack': '#141414',
        'orange': '#DF863B',
        'blue-bayoux': {
          '50': '#f1f9fa',
          '100': '#dbeff2',
          '200': '#badfe7',
          '300': '#8bc8d5',
          '400': '#54a8bc',
          '500': '#398ca1',
          '600': '#327288',
          '700': '#316477',
          '800': '#2d4f5d',
          '900': '#294350',
          '950': '#172b35',
        },
        'hot-cinnamon': {
          '50': '#fdf7ef',
          '100': '#faedda',
          '200': '#f4d7b4',
          '300': '#ecbc85',
          '400': '#e49753',
          '500': '#de7b31',
          '600': '#d76829',
          '700': '#ac4d22',
          '800': '#8a3e22',
          '900': '#6f351f',
          '950': '#3c190e',
        }
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
