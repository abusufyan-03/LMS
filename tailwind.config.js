/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#171717',
        'hero-overlay': '#00000080',
        'text-custom-grey': '#71717a',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #171717, #616161, #e0e0e0)',
      },
    },
    screens: {
      'xs': '320px',    // Custom breakpoint for 320px
      'sm-m': '425px',  // Custom breakpoint for 425px
      'sm': '640px',    // Default Tailwind sm breakpoint
      'md': '768px',    // Default Tailwind md breakpoint
      'lg': '1024px',   // Default Tailwind lg breakpoint
      'xl': '1280px',   // Default Tailwind xl breakpoint
    },
  },
  plugins: [],
}

