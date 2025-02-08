/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'axio-dark-blue': '#111827',
  			'axio-blue': '#1E3A8A',
  			'axio-white': '#F9FAFB',
        'axio-white-blue': '#F3F4F6',
  			'axio-black': '#1F1F1F',
  			'axio-black-light': '#202020',
  			'axio-sky-blue': '#3276E8',
  			'axio-mid-blue': '#60A5FA',
  			'axio-light-blue': '#ECECED',
  			'axio-green': '#047857',
  			'axio-orange': '#F97316',
  			'axio-red': '#FF4D4D'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
}

