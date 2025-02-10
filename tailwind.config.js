/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Light mode background (ShadCN default)
        muted: "#f5f5f5", // Light mode muted (ShadCN default)
        darkBackground: "#09090b", // Dark mode background (ShadCN default)
        darkMuted: "#1e1e2e", // Dark mode muted (ShadCN default)
      }
    },
  },
  plugins: [],
}