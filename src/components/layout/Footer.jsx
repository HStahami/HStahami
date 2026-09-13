import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050507]/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Shaikh Tahami</p>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
