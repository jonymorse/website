// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-900': '#111827',
        'gray-800': '#1f2937',
        'gray-700': '#374151',
        'gray-600': '#4b5563',
        'gray-500': '#6b7280',
        'gray-400': '#9ca3af',
        'gray-300': '#d1d5db',
        'gray-200': '#e5e7eb',
        'gray-100': '#f3f4f6',
        'white': '#ffffff',
        primary: {
          light: '#8B5CF6',      // Primary color for light mode (purple)
          dark: '#c4a84d',       // Primary color for dark mode (gold)
          hoverLight: '#6D28D9', // Hover effect for light mode (darker purple)
          hoverDark: '#FFB300',  // Hover effect for dark mode (lighter gold)
        },
      },
    },
  },
  plugins: [],
}
