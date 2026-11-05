/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8FAFC',
          dark: '#0B1120',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#111827',
          subtle: {
            light: '#F1F5F9',
            dark: '#1E293B',
          }
        },
        foreground: {
          light: '#0F172A',
          dark: '#F8FAFC',
          muted: {
            light: '#475569',
            dark: '#94A3B8',
          },
          subtle: {
            light: '#64748B',
            dark: '#64748B',
          }
        },
        border: {
          light: '#E2E8F0',
          dark: '#334155',
          muted: {
            light: '#F1F5F9',
            dark: '#1E293B',
          }
        },
        accent: {
          light: '#4F46E5', // Indigo 600
          dark: '#818CF8',  // Indigo 400
          hover: {
            light: '#4338CA',
            dark: '#A5B4FC',
          }
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        reading: '75ch',
        content: 'min(94vw, 1800px)',
      }
    },
  },
  plugins: [],
};
