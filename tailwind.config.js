/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F1ECE2',
        'ivory-soft': '#E8E1D2',
        'ivory-deep': '#DDD3BE',
        ink: '#131211',
        'ink-soft': '#2A2722',
        mute: '#6B675F',
        rust: '#C0492B',
        'rust-soft': '#EBD9CF',
        moss: '#4A5D3A',
        // legacy tokens kept for components copied from v1
        bg: '#F1ECE2',
        'bg-soft': '#E8E1D2',
        surface: 'rgba(19,18,17,0.04)',
        'surface-hover': 'rgba(19,18,17,0.08)',
        text: {
          primary: '#131211',
          secondary: '#4A4842',
          muted: '#8A8780',
        },
        border: 'rgba(19,18,17,0.10)',
        accent: '#C0492B',
        'accent-soft': 'rgba(192,73,43,0.12)',
        proof: '#4A5D3A',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'Inter',
          '-apple-system',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
        serif: [
          'Instrument Serif',
          'Times New Roman',
          'Times',
          'serif',
        ],
        mono: [
          'JetBrains Mono',
          'SF Mono',
          'ui-monospace',
          'Menlo',
          'monospace',
        ],
      },
      letterSpacing: {
        'tightest-2': '-0.045em',
      },
      maxWidth: {
        page: '1280px',
        prose: '720px',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 80s linear infinite',
        'marquee-rev': 'marquee-rev 60s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
