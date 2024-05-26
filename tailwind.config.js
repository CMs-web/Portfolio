/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
      },
      fontFamily: {
        pri: ['font1', 'sans-serif'],
        sec: ['font2', 'serif'],
      },
    },
    plugins: [],
  }
};
