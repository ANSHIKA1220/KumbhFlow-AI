/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        command: {
          950: "#071014",
          900: "#0b171d",
          800: "#11242b",
          700: "#17323a"
        },
        signal: {
          green: "#20c783",
          amber: "#f2b84b",
          red: "#f65d4e",
          blue: "#5ca8ff",
          cyan: "#42d9d2"
        }
      },
      boxShadow: {
        glow: "0 0 32px rgba(66,217,210,0.16)"
      }
    }
  },
  plugins: []
};
