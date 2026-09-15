import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const links = [
  { label: 'Email', href: 'mailto:tahamishaikh5@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/HStahami' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaikh-tahami/' },
]

// Initialize EmailJS (update with your EmailJS Public Key)
emailjs.init('hhkvkGbtUe4A-6ZrX')

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send('service_ujy3rxg', 'template_l5y0enq', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:pb-28">
      <div className="animate-in rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(0,240,255,0.12),transparent_30%),linear-gradient(135deg,#0d0f16,#090a0f)] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)] md:p-10">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-electric">Get in touch</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
              Need a reliable freelance developer?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              I help startups, businesses, and founders build sleek digital products, improve user experience, and turn ideas into reliable web experiences. Whether you need a landing page, a product MVP, or a full-stack build, I&apos;d love to hear about it.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 transition focus:border-accent-electric focus:outline-none focus:ring-1 focus:ring-accent-electric/50"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 transition focus:border-accent-electric focus:outline-none focus:ring-1 focus:ring-accent-electric/50"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 transition focus:border-accent-electric focus:outline-none focus:ring-1 focus:ring-accent-electric/50"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 transition focus:border-accent-electric focus:outline-none focus:ring-1 focus:ring-accent-electric/50"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-[#050507] shadow-[0_0_35px_rgba(0,240,255,0.25)] transition hover:translate-y-[-1px] disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {submitted && (
              <p className="text-sm text-accent-electric">✓ Message sent successfully!</p>
            )}
          </form>
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
