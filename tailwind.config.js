/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFFF',
        'ivory-soft': '#F5F5F4',
        'ivory-deep': '#E8E8E6',
        ink: '#131211',
        'ink-soft': '#2A2722',
        mute: '#737272',
        // Accent token kept under the `rust` name for component compatibility;
        // value swapped to a deep violet.
        rust: '#6938EF',
        'rust-soft': '#EDE7FB',
        moss: '#4A5D3A',
        // legacy tokens kept for components copied from v1
        bg: '#FFFFFF',
        'bg-soft': '#F7F7F6',
        surface: 'rgba(19,18,17,0.04)',
        'surface-hover': 'rgba(19,18,17,0.08)',
        text: {
          primary: '#131211',
          secondary: '#4A4842',
          muted: '#8A8780',
        },
        border: 'rgba(19,18,17,0.10)',
        accent: '#6938EF',
        'accent-soft': 'rgba(105,56,239,0.12)',
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
