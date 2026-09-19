import React from 'react'
import { GSAPProvider } from './hooks/GSAPProvider.jsx'
import { ThemeProvider } from './hooks/ThemeProvider.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
  return (
    <ThemeProvider>
      <GSAPProvider>
        <div className="relative min-h-screen overflow-hidden bg-obsidian text-white">
          <div className="floating-orb pointer-events-none fixed left-[8%] top-[10%] z-0 h-52 w-52 rounded-full bg-accent-electric/10 blur-3xl" />
          <div className="floating-orb pointer-events-none fixed bottom-[12%] right-[10%] z-0 h-64 w-64 rounded-full bg-accent-purple/10 blur-3xl" />
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(191,95,255,0.1),transparent_24%)]" />
          <div className="pointer-events-none fixed inset-0 z-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-dark" />

          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </GSAPProvider>
    </ThemeProvider>
  )
}

export default App
