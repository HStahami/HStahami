import React from 'react'

const capabilities = [
  'Full-stack product development',
  'User-centered interface design',
  'API and database architecture',
  'Performance optimization and deployment',
]

const stats = [
  { value: '5+', label: 'Years building' },
  { value: '3+', label: 'Major products' },
  { value: '∞', label: 'Curiosity' },
]

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="animate-in">
          <p className="text-sm uppercase tracking-[0.22em] text-accent-electric">About me</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Helping brands and founders build better digital products.
          </h2>
        </div>

        <div className="space-y-8 text-white/70">
          <p className="animate-in text-lg leading-8">
            I&apos;m Shaikh Tahami, a full-stack developer and freelance partner helping businesses turn ideas into products that are clean, scalable, and memorable. I work closely with founders, teams, and brands to design and build experiences that feel premium and perform reliably.
          </p>

          <p className="animate-in leading-8">
            My work spans product design support, front-end interfaces, back-end systems, and product delivery—from first concept to launch. I care about performance, maintainability, and user trust, and I&apos;ve helped build solutions for education, events, and sustainability-focused initiatives.
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
