import React from 'react'

const links = [
  { label: 'Email', href: 'mailto:tahamishaikh5@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/HStahami' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaikh-tahami/' },
]

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:pb-28">
      <div className="animate-in rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,240,255,0.12),transparent_30%),linear-gradient(135deg,#0d0f16,#090a0f)] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)] md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-electric">Get in touch</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
              Let&apos;s build something valuable.
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              I&apos;m open to freelance collaborations, product work, and meaningful full-time opportunities. If you have an idea, product, or challenge that needs a thoughtful technical partner, let&apos;s talk.
            </p>
          </div>

          <a href="mailto:tahamishaikh5@gmail.com?subject=Project%20Inquiry" className="inline-flex items-center justify-center rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-[#050507] shadow-[0_0_35px_rgba(0,240,255,0.25)] transition hover:translate-y-[-1px]">
            Send me an email
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-white/20 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
