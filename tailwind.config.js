module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        resume: {
          50: "#d6e7d0",
          100: "#c0dbbc",
          200: "#96c596",
          300: "#74ae7a",
          400: "#58975e",
          500: "#408040",
          600: "#39682c",
          700: "#38511c",
          800: "#363910",
          900: "#221807"
        },
        custom: {
          grey: '#E2E7ED',
          grey100: '#E5E5E5',
        },
      },
      borderRadius: {
        md: '4px',
      },
      boxShadow: {
        'level-4px-0.25': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'level-8dp':
          '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
        'level-4dp':
          '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
        'level-hard': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      },
      screens: {
        'max-md': { max: '767px' },
      },
    },
  },
  plugins: [],
};
