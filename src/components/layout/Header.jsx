import React from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-electric/30 bg-accent-electric/10 text-sm font-bold text-accent-electric">
            ST
          </span>
          <span className="font-display text-xl tracking-[-0.05em]">Shaikh Tahami</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition-colors duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/30 hover:bg-white/10 md:inline-flex">
            Book a call
          </a>
          <button className="rounded-full bg-gradient-accent px-4 py-2 text-sm font-medium text-[#050507] shadow-[0_0_30px_rgba(0,240,255,0.4)] transition hover:scale-[1.02]">
            Hire me
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header