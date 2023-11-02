/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'green-gradient': 'linear-gradient(45deg, #3F9E53 40%, #ABFF84 60%)',
      },
      backgroundClip: {
        'text': 'text'
      },
      colors: {
        fsblack: "#0E100F",
        fswhite: "#FFFCF3",
        fsgreen: "#3F9E53",
        fsapple: "#ABFF84",
      },
    },
  },
  plugins: [],
}
