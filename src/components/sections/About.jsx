import React from 'react'

const capabilities = [
  'Full-stack web development & architecture',
  'Product design and UX implementation',
  'Database design and API development',
  'Performance optimization & deployment',
]

const stats = [
  { value: '5+', label: 'Years of experience' },
  { value: '3+', label: 'Major projects' },
  { value: '∞', label: 'Passion' },
]

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="animate-in">
          <p className="text-sm uppercase tracking-[0.22em] text-accent-electric">About me</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Full-stack developer focused on solving real problems.
          </h2>
        </div>

        <div className="space-y-8 text-white/70">
          <p className="animate-in text-lg leading-8">
            I&apos;m Shaikh Tahami, a passionate full-stack developer from Pakistan. I love building scalable, user-focused web applications that deliver real value. My work spans frontend interfaces to backend systems, always with an emphasis on clean code and thoughtful design.
          </p>

          <p className="animate-in leading-8">
            I&apos;ve collaborated on projects like EventSphere (event management system), Sustainable Living App, and developed the Al Arabia FI LMS platform. I believe in writing maintainable code, focusing on performance, and creating experiences that users genuinely enjoy.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <div key={item} className="animate-in flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4" style={{ transitionDelay: `${index * 60}ms` }}>
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-electric flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-in rounded-2xl border border-white/10 bg-[#0d0d13] p-4" style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="text-3xl font-black tracking-[-0.05em] text-white">{stat.value}</div>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
