/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: '#a2de64',
        customGreen: '#28422f',
        customGreen1: '#99f553',
        customGreen2: '#2a3f2d',
        customorange: '#ff8a4a',
        customfaint: '#ffce98',
        custumOrange2: '#ff8a4a',
        customlimegreen: '#a2de64',
        customgreen: '#4f5b51'
    },
      height: {
        '10p': '10%', // 10% height
        '20p': '20%', // 20% height
        '50p': '50%', // 50% height
        '75p': '75%', // 75% height
        '90p': '90%', // 90% height
        '100p': '100%', // 100% height
      },
      width: {
        '10p': '10%', // 10% width
        '25p': '25%', // 25% width
        '50p': '50%', // 50% width
        '75p': '75%', // 75% width
        '100p': '100%', // 100% width
      },
  
  },
  plugins: [],
}
}
