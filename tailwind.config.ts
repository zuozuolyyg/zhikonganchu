
import { type Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
  theme: {
  	extend: {
  		colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: '#1e3a8a', // Ocean Blue 700
                foreground: "hsl(var(--primary-foreground))",
                900: '#0f172a', // Slate 900 for deep backgrounds
                800: '#1e293b',
  			},
  			secondary: {
  				DEFAULT: '#f97316', // Orange 500
                foreground: "hsl(var(--secondary-foreground))",
                600: '#ea580c',
  			},
            destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            heading: ['Montserrat', 'Inter', 'sans-serif'],
        }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
