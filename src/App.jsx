import { useEffect, useState } from 'react'
import { projects } from './projects.js'

function Arrow({ diagonal = false }) {
  return (
    <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d={diagonal ? 'M7 17 17 7M8 7h9v9' : 'M5 12h14m-5-5 5 5-5 5'} />
    </svg>
  )
}

const t = {
  id: {
    navAbout: 'Tentang',
    navProjects: 'Project',
    navExperience: 'Pengalaman',
    navContact: 'Kontak',
    menuOpen: 'Menu',
    menuClose: 'Tutup',
    heroDesc: 'Produk digital, tools, dan sistem yang dirancang dengan logika yang jernih—lalu benar-benar dirilis.',
    approachTitle: '01 / Tentang',
    approachDescPre: 'Backend Engineer yang berfokus pada ',
    approachDescEm: 'sistem scalable, efisien, dan aman.',
    approachDescPost: ' Saya merancang layanan production-ready dengan Go—mencakup concurrency, microservices, database, caching, messaging, dan load balancing.',
    approachStack: 'GO · POSTGRESQL · SQL SERVER · REDIS · RABBITMQ · DOCKER',
    projectsTitleLabel: '02 / Project terpilih',
    experienceLabel: '03 / Pengalaman',
    experienceTitle: 'Systems that\nhold up.',
    capabilitiesLabel: 'Kapabilitas utama',
    educationLabel: 'Pendidikan',
    educationValue: 'Bachelor of Physics',
    educationPlace: 'Mataram University · 2015—2020',
    languagesLabel: 'Bahasa',
    languagesValue: 'Indonesia — Native\nEnglish — Intermediate',
    contactLabel: '04 / Selanjutnya',
    contactTitle: 'Punya ide yang\nlayak dirilis?',
    contactAction: 'Mulai percakapan',
    liveProject: 'Live Site',
    sourceCode: 'Source Code',
    footerBackToTop: 'Kembali ke atas ↑',
  },
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navContact: 'Contact',
    menuOpen: 'Menu',
    menuClose: 'Close',
    heroDesc: 'Digital products, tools, and systems designed with clear logic—and actually shipped.',
    approachTitle: '01 / About',
    approachDescPre: 'Backend Engineer focused on ',
    approachDescEm: 'scalable, efficient, and secure systems.',
    approachDescPost: ' I design production-ready services with Go—covering concurrency, microservices, databases, caching, messaging, and load balancing.',
    approachStack: 'GO · POSTGRESQL · SQL SERVER · REDIS · RABBITMQ · DOCKER',
    projectsTitleLabel: '02 / Selected projects',
    experienceLabel: '03 / Experience',
    experienceTitle: 'Systems that\nhold up.',
    capabilitiesLabel: 'Core capabilities',
    educationLabel: 'Education',
    educationValue: 'Bachelor of Physics',
    educationPlace: 'Mataram University · 2015—2020',
    languagesLabel: 'Languages',
    languagesValue: 'Indonesian — Native\nEnglish — Intermediate',
    contactLabel: '04 / What\'s next',
    contactTitle: 'Got an idea\nworth shipping?',
    contactAction: 'Start a conversation',
    liveProject: 'Live Site',
    sourceCode: 'Source Code',
    footerBackToTop: 'Back to top ↑',
  }
}

const capabilities = [
  'Golang & concurrency',
  'Microservices & REST APIs',
  'SQL optimization',
  'Redis & server-side caching',
  'RabbitMQ & async processing',
  'Docker & load balancing',
]

const workExperience = [
  {
    role: { id: 'Backend Developer', en: 'Backend Developer' },
    company: 'PT Bank Rakyat Indonesia (Persero) Tbk',
    period: '11.2025—PRESENT',
    location: { id: 'Jakarta, Indonesia · On-site', en: 'Jakarta, Indonesia · On-site' },
  },
  {
    role: { id: 'Software Engineer — Backend Golang', en: 'Software Engineer — Backend Golang' },
    company: 'PT Sprint Asia Technology · Full-time',
    period: '12.2022—11.2025',
    location: { id: 'Jakarta Selatan, Indonesia · Hybrid', en: 'South Jakarta, Indonesia · Hybrid' },
    points: {
      id: [
        'Mengembangkan dan mengimplementasikan aplikasi Go.',
        'Melakukan troubleshooting dan debugging pada aplikasi.',
        'Berperan dalam keputusan arsitektur dan desain microservices terdistribusi.',
        'Berkolaborasi dengan tim product, business, infrastructure, dan operations.',
        'Memelihara dan menyesuaikan aplikasi yang sudah berjalan.',
        'Menerjemahkan kebutuhan software menjadi sistem yang stabil dan berperforma tinggi.',
      ],
      en: [
        'Developed and implemented Go applications.',
        'Troubleshot and debugged application code.',
        'Contributed to architecture and design decisions for distributed microservices.',
        'Collaborated with product, business, infrastructure, and operations teams.',
        'Maintained and adapted existing applications.',
        'Translated software requirements into stable, high-performance systems.',
      ],
    },
  },
]

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.palette}`} aria-hidden="true">
      <span className="visual-index">PROJECT / {project.number}</span>
      <span className="visual-mark">{project.mark}</span>
      <span className="visual-rule" />
      <span className="visual-caption">DESIGNED &amp; BUILT<br />IN INDONESIA</span>
      <span className="visual-orbit" />
    </div>
  )
}

function ProjectItem({ project, lang }) {
  const dict = t[lang]
  const primaryUrl = project.productionUrl || project.repositoryUrl
  return (
    <article className={`project ${project.featured ? 'project-featured' : ''}`}>
      <div className="project-inner">
        <a className="project-visual-link" href={primaryUrl} target="_blank" rel="noreferrer" aria-label={`${project.productionUrl ? dict.liveProject : dict.sourceCode}: ${project.name}`}>
          <ProjectVisual project={project} />
        </a>
        <div className="project-copy">
          <div className="project-meta">
            <span>{project.number}</span>
            <span>{project.kind[lang]}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description[lang]}</p>
          <div className="project-actions">
            {project.productionUrl && (
              <a className="project-link" href={project.productionUrl} target="_blank" rel="noreferrer">
                {dict.liveProject} <Arrow diagonal />
              </a>
            )}
            <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
              {dict.sourceCode} <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [time, setTime] = useState('')
  const [lang, setLang] = useState('id') // 'id' or 'en'
  const [menuOpen, setMenuOpen] = useState(false)
  const dict = t[lang]

  useEffect(() => {
    const updateTime = () => setTime(new Intl.DateTimeFormat('id-ID', {
      hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Jakarta',
    }).format(new Date()).replace('.', ':'))
    updateTime()
    const timer = window.setInterval(updateTime, 30000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id')
    closeMenu()
  }

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Kembali ke atas" onClick={closeMenu}>
          <span className="brand-dot" />
          ZAIDUS / WORKS
        </a>
        <div className="topbar-note">Backend Engineer / Golang Specialist<br />Jakarta, Indonesia</div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? dict.menuClose : dict.menuOpen}
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Navigasi utama">
          <a href="#about" onClick={closeMenu}>{dict.navAbout}</a>
          <a href="#projects" onClick={closeMenu}>{dict.navProjects}</a>
          <a href="#experience" onClick={closeMenu}>{dict.navExperience}</a>
          <a href="#contact" onClick={closeMenu}>{dict.navContact}</a>
          <button className="language-toggle" type="button" onClick={toggleLang} aria-label={`Switch to ${lang === 'id' ? 'English' : 'Bahasa Indonesia'}`}>
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-kicker"><span>Selected work</span><span>2025—26</span></div>
          <h1 id="hero-title">
            Ideas made<br />
            <span className="hero-line"><i>useful.</i><span className="hero-stamp">OPEN<br />TO BUILD<br />GOOD THINGS</span></span>
          </h1>
          <div className="hero-footer">
            <p>{dict.heroDesc}</p>
            <a href="#projects" className="circle-link" aria-label="Lihat project"><Arrow /></a>
          </div>
        </section>

        <section className="manifesto" id="about" aria-label={dict.approachTitle}>
          <p className="section-label">{dict.approachTitle}</p>
          <div className="manifesto-content">
            <p className="manifesto-copy">{dict.approachDescPre}<em>{dict.approachDescEm}</em>{dict.approachDescPost}</p>
            <figure className="profile-portrait">
              <img
                src="/profile-zaidus.avif"
                alt="Zaidus Zhuhur, Backend Engineer"
                width="800"
                height="1212"
                loading="lazy"
                decoding="async"
              />
              <figcaption>ZAIDUS ZHUHUR / BACKEND ENGINEER</figcaption>
            </figure>
            <p className="manifesto-stack">{dict.approachStack}</p>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-label">{dict.projectsTitleLabel}</p>
            <h2 id="projects-title">Built, shipped,<br />and in the wild.</h2>
            <span className="project-count">({String(projects.length).padStart(2, '0')})</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectItem key={project.name} project={project} lang={lang} />)}
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="section-heading experience-heading">
            <p className="section-label">{dict.experienceLabel}</p>
            <h2 id="experience-title" style={{ whiteSpace: 'pre-line' }}>{dict.experienceTitle}</h2>
            <span className="project-count">2022—NOW</span>
          </div>

          <div className="experience-grid">
            <div className="experience-list">
              {workExperience.map((job, index) => (
                <article className="experience-role" key={job.company}>
                  <div className="experience-meta">
                    <span>{String(index + 1).padStart(2, '0')} / WORK</span>
                    <span>{job.period}</span>
                  </div>
                  <h3>{job.role[lang]}</h3>
                  <p className="experience-company">{job.company}</p>
                  <p className="experience-location">{job.location[lang]}</p>
                  {job.points && (
                    <ol className="experience-points">
                      {job.points[lang].map((point) => <li key={point}>{point}</li>)}
                    </ol>
                  )}
                </article>
              ))}
            </div>

            <aside className="career-sidebar">
              <div className="career-block">
                <p className="career-label">{dict.capabilitiesLabel}</p>
                <ul className="capability-list">
                  {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                </ul>
              </div>
              <div className="career-block">
                <p className="career-label">{dict.educationLabel}</p>
                <strong>{dict.educationValue}</strong>
                <span>{dict.educationPlace}</span>
              </div>
              <div className="career-block">
                <p className="career-label">{dict.languagesLabel}</p>
                <span style={{ whiteSpace: 'pre-line' }}>{dict.languagesValue}</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">{dict.contactLabel}</p>
          <div className="contact-main">
            <h2 style={{ whiteSpace: 'pre-line' }}>{dict.contactTitle}</h2>
            <a href="https://www.linkedin.com/in/zaidus-zhuhur/" target="_blank" rel="noreferrer">{dict.contactAction} <Arrow diagonal /></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} ZAIDUS ZHUHUR</span>
        <span>WIB {time || '--:--'}</span>
        <a href="#top">{dict.footerBackToTop}</a>
      </footer>
    </div>
    </>
  )
}
