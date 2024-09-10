// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {
        '30p': '30%',
        '35p': '35%',
        '65p': '65%',
        '80p': '80%',

      },
      fontFamily: {
        sans: ['Uridaum', 'sans-serif'], // Uridaum을 기본 sans-serif로 설정
      },
    },
  },
  plugins: [],
}
