import { useEffect, useRef, useState } from 'react'
import profilePhoto from './assets/profile-photo.png'
import mbDevLogo from './assets/mb-dev-logo.svg'
import mbDevLogoLight from './assets/mb-dev-logo-light.svg'
import projectPreview from './assets/hero.png'
import traffic from './assets/traffic.webp'
import dannieleForde from './assets/danniele-forde.webp'

const projects = [
  {
    title: 'Khaw Wealth Consulting',
    description:
      'A corporate website focused on purposeful wealth planning, clear value propositions, and conversion-oriented consultation flows.',
    stack: 'WordPress, UI/UX Design, SEO',
    category: 'Websites',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmb-dev-portfolio.usatsagay.fun%2F%23portfolio?w=800',
  },
  {
    title: 'Danniele Forde (Property Advisory)',
    description:
      'A modern property advisory website focused on credibility, trust-building, and clear consultation pathways for clients.',
    stack: 'WordPress, UI/UX Design, SEO',
    category: 'Websites',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:dannieleForde,
  },
  {
    title: 'Assured Fire Services',
    description:
      'A service-oriented platform built for fire safety services with streamlined booking flow and compliance-focused content.',
    stack: 'WordPress, PHP, Responsive Design',
    category: 'Websites',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmb-dev-portfolio.usatsagay.fun%2F%23services?w=800',
  },
  {
    title: 'Firenzo',
    description:
      'A premium e-commerce experience for New Zealand-made woodfires with visual storytelling and a streamlined product catalog.',
    stack: 'WordPress, E-Commerce, Performance Optimization',
    category: 'Websites',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmb-dev-portfolio.usatsagay.fun%2F%23portfolio?w=900',
  },
  {
    title: 'JJ Nutrition',
    description:
      'A vibrant wellness website designed for personalized nutrition services, custom plan presentation, and user clarity.',
    stack: 'WordPress, UI Design, Content Structuring',
    category: 'Websites',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmb-dev-portfolio.usatsagay.fun%2F%23contact?w=800',
  },
  {
    title: 'Traffic Information System',
    description:
      'A data-driven dashboard for real-time logistics and urban traffic insights using modular cards and high-contrast visualization.',
    stack: 'PHP, MySQL, JavaScript',
    category: 'Web Application',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:traffic,
  },
  {
    title: 'Election Monitoring System',
    description:
      'An analytical platform for live vote tracking with dynamic status indicators and percentage-based visual breakdowns.',
    stack: 'PHP, MySQL, Data Visualization',
    category: 'Web Application',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmb-dev-portfolio.usatsagay.fun%2F%23experience?w=800',
  },
  {
    title: 'Election Results Dashboard',
    description:
      'A data-heavy election dashboard with live-style status indicators and percentage-based vote analytics for easier decision tracking.',
    stack: 'PHP, MySQL, JavaScript Charts',
    category: 'Web Application',
    githubUrl: 'https://github.com/mark015',
    siteUrl: 'https://mb-dev-portfolio.usatsagay.fun/',
    imageUrl:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmb-dev-portfolio.usatsagay.fun%2F%23home?w=820',
  },
]

const skills = [
  'Native PHP',
  'WordPress',
  'MySQL',
  'JavaScript',
  'HTML',
  'CSS',
  'Laravel',
  'Vue.js',
  'Git & GitHub',
  'Photoshop',
]

const services = [
  {
    title: 'UI/UX Design',
    description:
      'I design user-centered interfaces that are clean, consistent, and optimized for real user behavior across devices.',
  },
  {
    title: 'Web Development',
    description:
      'I build responsive websites and web apps that are fast, SEO-friendly, secure, and aligned with business goals.',
  },
  {
    title: 'Database Management',
    description:
      'I design and maintain reliable databases with a focus on structure, performance tuning, and long-term maintainability.',
  },
]

const experience = [
  {
    role: 'Freelance Web Developer / Web Designer',
    company: 'Techzquad',
    period: '2019 - Present',
    highlights: [
      'Developed and maintained web applications using Native PHP, MySQL, and JavaScript.',
      'Built and customized WordPress websites, including theme updates and plugin integration.',
      'Managed deployments, hosting setup, and domain configuration across client projects.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Ignition Consulting',
    period: 'October 2025 - Present',
    highlights: [
      'Developed responsive WordPress and Shopify websites with user-focused UX.',
      'Improved site performance and SEO practices to increase engagement and traffic.',
      'Designed and optimized UI assets for stronger branding and usability.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Setup Phils. Inc.',
    period: 'Nov 2021 - May 2023',
    highlights: [
      'Maintained and expanded internal applications using Laravel and Vue.js.',
      'Improved API performance used in WordPress-based projects.',
      'Supported long-term system stability with bug fixes and enhancements.',
    ],
  },
]

const roles = ['Web Developer', 'Web Designer', 'UI/UX Designer', 'WordPress Developer']
const projectTabs = ['All', 'Web Application', 'Websites']

function App() {
  const portfolioRef = useRef(null)

  const getInitialTheme = () => {
    if (typeof window === 'undefined') {
      return 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  }

  const getInitialProjectCount = () => {
    if (typeof window === 'undefined') return 6
    return window.innerWidth <= 700 ? 3 : 6
  }

  const [theme, setTheme] = useState(getInitialTheme)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeProjectTab, setActiveProjectTab] = useState('All')
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(getInitialProjectCount)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('')

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setFormStatus('Thanks for the message — I will get back to you soon!')
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 55 : 95
    const holdDelay = isDeleting ? 450 : 1100

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, typedRole.length + 1)
          setTypedRole(nextText)
          if (nextText === currentRole) {
            setIsDeleting(true)
          }
        } else {
          const nextText = currentRole.slice(0, typedRole.length - 1)
          setTypedRole(nextText)
          if (nextText === '') {
            setIsDeleting(false)
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
          }
        }
      },
      typedRole === currentRole || typedRole === '' ? holdDelay : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [typedRole, isDeleting, roleIndex])

  useEffect(() => {
    setVisibleProjectsCount(getInitialProjectCount())
  }, [activeProjectTab])

  useEffect(() => {
    const handleResize = () => {
      setVisibleProjectsCount(getInitialProjectCount())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cards = portfolioRef.current?.querySelectorAll('.tilt-card')
    if (!cards?.length) {
      return undefined
    }

    const handleMove = (event) => {
      const card = event.currentTarget
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const rotateX = ((y / rect.height) - 0.5) * -10
      const rotateY = ((x / rect.width) - 0.5) * 10

      card.style.setProperty('--rotate-x', `${rotateX.toFixed(2)}deg`)
      card.style.setProperty('--rotate-y', `${rotateY.toFixed(2)}deg`)
      card.style.setProperty('--pointer-x', `${x}px`)
      card.style.setProperty('--pointer-y', `${y}px`)
    }

    const resetTilt = (event) => {
      const card = event.currentTarget
      card.style.setProperty('--rotate-x', '0deg')
      card.style.setProperty('--rotate-y', '0deg')
    }

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMove)
      card.addEventListener('mouseleave', resetTilt)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMove)
        card.removeEventListener('mouseleave', resetTilt)
      })
    }
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const filteredProjects =
    activeProjectTab === 'All'
      ? projects
      : projects.filter((project) => project.category === activeProjectTab)
  const visibleProjects = filteredProjects.slice(0, visibleProjectsCount)

  return (
    <div className="portfolio" ref={portfolioRef}>
      <header className="site-header reveal">
        <nav className="top-nav">
          <a href="#" className="brand" aria-label="MB-DEV home">
            <img
              src={theme === 'dark' ? mbDevLogo : mbDevLogoLight}
              alt="MB-DEV logo"
              className="brand-logo"
            />
          </a>
          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="top-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span aria-hidden="true" />
          </button>
          <div id="top-navigation" className={`top-nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </div>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg
                  className="theme-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 2.5V5.1M12 18.9V21.5M21.5 12H18.9M5.1 12H2.5M18.7 5.3L16.9 7.1M7.1 16.9L5.3 18.7M18.7 18.7L16.9 16.9M7.1 7.1L5.3 5.3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  className="theme-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 14.2A8.5 8.5 0 1 1 9.8 4 7 7 0 0 0 20 14.2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <a href="#contact" className="contact-link">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <header className="hero reveal">
        <div className="hero-panel">
          <div className="hero-content">
            <h1>Mark C. Balinario</h1>
            <h2 className="hero-role" aria-label={roles[roleIndex]}>
              {typedRole}
            </h2>
            <p className="intro">
              I build clean, responsive websites and web apps.
            </p>
            <p className="hero-description">
              I am a passionate web developer focused on modern, user-friendly
              applications. My approach blends performance, usability, and clean
              visual design to deliver meaningful digital experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn ghost">
                Hire Me
              </a>
            </div>
            <div className="hero-metrics">
              <p>
                <strong>20+</strong> Projects delivered
              </p>
              <p>
                <strong>6+</strong> Years of experience
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <img src={profilePhoto} alt="Mark C. Balinario profile" />
            <div className="hero-image-badge">Available for Freelance</div>
          </div>
        </div>
      </header>

      <main>
        <section className="section reveal" id="about">
          <div className="about-layout">
            <div className="about-copy">
              <h2>About Me</h2>
              <p>
                I specialize in building and maintaining websites that are reliable,
                scalable, and easy to use. I enjoy solving complex problems and
                continuously improving both technical quality and user experience.
              </p>
            </div>
            <div className="about-gif-wrap">
              <img
                className="about-gif"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXp3ZWFrZGQ2dDNtdmU3ajQ5cjd1bmdyeHV5ZmNqMmNqN3Vvc2V5MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Developer coding animation"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section reveal" id="services">
          <h2>Services</h2>
          <div className="project-grid">
            {services.map((service) => (
              <article key={service.title} className="card tilt-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="projects">
          <h2>Featured Projects</h2>
          <div className="project-tabs" role="tablist" aria-label="Project categories">
            {projectTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`project-tab ${activeProjectTab === tab ? 'active' : ''}`}
                onClick={() => setActiveProjectTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article key={project.title} className="card tilt-card">
                <img src={project.imageUrl} alt={`${project.title} preview`} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>{project.stack}</span>
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-icon"
                      aria-label={`${project.title} GitHub`}
                      title="View GitHub"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-icon"
                      aria-label={`${project.title} live site`}
                      title="View live site"
                    >
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M14 4H20V10M20 4L11 13"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 6H7.2C6.08 6 5.52 6 5.092 6.218C4.716 6.409 4.409 6.716 4.218 7.092C4 7.52 4 8.08 4 9.2V16.8C4 17.92 4 18.48 4.218 18.908C4.409 19.284 4.716 19.591 5.092 19.782C5.52 20 6.08 20 7.2 20H14.8C15.92 20 16.48 20 16.908 19.782C17.284 19.591 17.591 19.284 17.782 18.908C18 18.48 18 17.92 18 16.8V14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-button-group">
            {filteredProjects.length > visibleProjectsCount ? (
              <button
                type="button"
                className="load-more-btn"
                onClick={() => setVisibleProjectsCount((count) => count + (window.innerWidth <= 700 ? 3 : 6))}
              >
                Load More
              </button>
            ) : null}
            {visibleProjectsCount > getInitialProjectCount() ? (
              <button
                type="button"
                className="load-more-btn show-less"
                onClick={() => setVisibleProjectsCount(getInitialProjectCount())}
              >
                Show Less
              </button>
            ) : null}
          </div>
        </section>

        <section className="section reveal" id="skills">
          <h2>Skills</h2>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section reveal" id="experience">
          <h2>Experience</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="experience-card tilt-card">
                <div className="experience-top">
                  <div className="experience-title-wrap">
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>
                  <span className="experience-date">{item.period}</span>
                </div>
                <ul className="experience-points">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact reveal" id="contact">
          <h2>Let&apos;s Work Together</h2>
          <p>Open to freelance projects and full-time opportunities.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label className="form-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder="name@example.com"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    placeholder="Project or inquiry"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Tell me more about your project."
                    rows="5"
                    required
                  />
                </label>
                <button type="submit" className="btn primary">
                  Send message
                </button>
                {formStatus && <p className="form-status">{formStatus}</p>}
              </form>
            </div>
            <div className="contact-card contact-info">
              <p>
                Feel free to send a message directly, or use the contact links below
                to connect on email, GitHub, LinkedIn, or by phone.
              </p>
              <div className="contact-links">
                <a href="mailto:mbalinario.dev@gmail.com">
                  <span className="contact-icon" aria-hidden="true">
                    @
                  </span>
                  mbalinario.dev@gmail.com
                </a>
                <a href="https://github.com/mark015" target="_blank" rel="noreferrer">
                  <span className="project-link-icon" aria-hidden="true">
                    <img
                      className="contact-icon-img"
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                      alt=""
                    />
                  </span>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mark-balinario-44a2ba22b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon" aria-hidden="true">
                    in
                  </span>
                  LinkedIn
                </a>
                <a href="tel:+639515832413">
                  <span className="contact-icon" aria-hidden="true">
                    PH
                  </span>
                  +63 951 583 2413
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer reveal">
        <p>Copyright {new Date().getFullYear()} Mark C. Balinario. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/mark015" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
