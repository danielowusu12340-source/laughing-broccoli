import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Results', href: '#stats' },
    { label: 'Voices', href: '#testimonials' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-dot"></span>
          Buzzly
        </a>
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#cta" className="btn btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
              Start a Project
            </a>
          </li>
        </ul>
        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
