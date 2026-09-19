import React from 'react'
import { useTheme } from '../../hooks/ThemeProvider.jsx'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="group inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white transition-colors duration-300">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-electric/30 bg-accent-electric/10 text-sm font-bold text-accent-electric">
            ST
          </span>
          <span className="text-base tracking-[-0.05em] sm:text-xl">Shaikh Tahami</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/70 transition-colors duration-300 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative transition-colors duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="h-5 w-5 text-accent-electric" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707zM5 12a1 1 0 100 2H4a1 1 0 100-2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <a
            href="mailto:tahamishaikh5@gmail.com?subject=Project%20Inquiry"
            className="inline-flex items-center justify-center rounded-full bg-gradient-accent px-4 py-2 text-xs font-semibold text-[#050507] shadow-[0_0_30px_rgba(0,240,255,0.4)] transition hover:scale-[1.02] sm:text-sm"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header