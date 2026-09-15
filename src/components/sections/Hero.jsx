import React from 'react'

const stack = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'REST APIs', 'Figma'] },
]

const metrics = [
  { value: '5+', label: 'Years building' },
  { value: '3+', label: 'Full projects' },
  { value: '100%', label: 'Code quality' },
]

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="animate-in mb-6 inline-flex items-center gap-2 rounded-full border border-accent-electric/30 bg-accent-electric/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-electric">
            <span className="h-2 w-2 rounded-full bg-accent-electric" />
            Freelance full-stack developer
          </div>

          <h1 className="animate-in max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl xl:text-[5.5rem]">
            Hi, I&apos;m <span className="text-gradient-cyan">Shaikh Tahami</span>
          </h1>

          <p className="animate-in mt-6 max-w-xl text-lg leading-8 text-white/70">
            I build polished digital products for startups, founders, and businesses that want better experiences, cleaner systems, and faster execution. From strategy to launch, I focus on quality, clarity, and business value.
          </p>

          <div className="animate-in mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-[#050507] shadow-[0_0_35px_rgba(0,240,255,0.28)] transition hover:translate-y-[-1px]">
              View my work
            </a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/10">
              Start a project
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 md:gap-8">
            {metrics.map((item, index) => (
              <div key={item.label} className="animate-in" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-2xl font-bold tracking-[-0.05em] text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="floating-panel glass-card relative overflow-hidden p-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.12),transparent_30%),linear-gradient(135deg,rgba(191,95,255,0.12),transparent_60%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-xs uppercase tracking-[0.22em] text-white/50">Status</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open to work
                </span>
              </div>

              <div className="space-y-4">
                {stack.map((section) => (
                  <div key={section.category} className="rounded-2xl border border-white/10 bg-[#0c0d12]/90 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent-electric">{section.category}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {section.items.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
