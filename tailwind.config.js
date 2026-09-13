module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        foreground: '#e5e5e5',
        obsidian: '#050507',
        'velvet-obsidian': '#0a0a0f',
        midnight: '#101014',
        'accent-electric': '#00f0ff',
        'accent-purple': '#bf5fff',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.075em',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #050507 0%, #0a0a0f 100%)',
        'gradient-velvet': 'linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00f0ff, #bf5fff)',
      },
    },
  },
  plugins: [],
}