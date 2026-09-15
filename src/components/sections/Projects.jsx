import React from 'react'

const projects = [
  {
    title: 'Al Arabia FI LMS',
    category: 'Learning Management System',
    description: 'A comprehensive learning platform for Islamic education. Built with React, Node.js, and PostgreSQL. Features include course management, student tracking, progress monitoring, and interactive learning modules.',
    accent: 'from-[#00f0ff]/30 via-[#00f0ff]/10 to-transparent',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://alarabiafi.vercel.app/',
    linkText: 'Visit platform',
  },
  {
    title: 'EventSphere',
    category: 'Event Management System',
    description: 'A collaborative group project for managing events efficiently. Includes event creation, attendee management, scheduling, and real-time notifications. Built with modern web technologies for scalability.',
    accent: 'from-[#bf5fff]/30 via-[#bf5fff]/10 to-transparent',
    tags: ['Full-stack', 'Real-time', 'Database Design'],
    link: '#projects',
    linkText: 'View details',
  },
  {
    title: 'Sustainable Living App',
    category: 'Mobile Application',
    description: 'A native mobile app for encouraging eco-friendly habits and sustainable living. Built with Flutter, Dart, and Firebase to support daily tracking, challenges, progress insights, and community-driven sustainability goals.',
    accent: 'from-[#57e6a5]/30 via-[#57e6a5]/10 to-transparent',
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: '#projects',
    linkText: 'View details',
  },
]

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="animate-in">
          <p className="text-sm uppercase tracking-[0.22em] text-accent-electric">My work</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Projects I&apos;ve built
          </h2>
        </div>

        <a href="#contact" className="animate-in text-sm font-medium text-white/70 transition hover:text-white">
          Interested? Reach out →
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="project-card animate-in group overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0b10]/80 p-5 transition duration-300 hover:border-white/20 hover:bg-[#0d0f16]"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className={`relative mb-6 h-52 overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br ${project.accent}`}>
              <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-x-6 bottom-6 h-20 rounded-2xl border border-white/15 bg-[#050507]/80 backdrop-blur-xl" />
              <div className="absolute left-8 top-8 h-14 w-14 rounded-full border border-white/10 bg-white/5" />
              <div className="absolute right-8 top-12 h-20 w-24 rounded-2xl border border-white/10 bg-white/5" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">{project.category}</p>
            <h3 className="mt-4 text-2xl font-bold tracking-[-0.05em] text-white">{project.title}</h3>
            <p className="mt-4 text-white/65">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/65">
                  {tag}
                </span>
              ))}
            </div>

            {project.link !== '#projects' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-electric hover:text-white transition">
                {project.linkText} →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
