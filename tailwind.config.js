/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundImage: {
        laco: 'url(/laço.png)',
      },
      boxShadow: {
        shape:
          "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      },
      colors: {
        'selectiveyellow': {
        '50': '#fffbeb',
        '100': '#fdf1c8',
        '200': '#fbe38c',
        '300': '#f9ce50',
        '400': '#f7b928',
        '500': '#f1980f',
        '600': '#d5730a',
        '700': '#b1500c',
        '800': '#903e10',
        '900': '#763411',
        '950': '#441904',
        },
      },
    },
  },
  plugins: [],
}

