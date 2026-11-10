import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, company } from '../data/site'
import Logo from './Logo'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label={company.name}>
          <Logo size={44} />
          <span className="nav__brand-text">RYG<span className="nav__brand-accent">Networks</span></span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__cta">
          <a href={`tel:${company.phoneHref}`} className="nav__phone">{company.phone}</a>
          <Link to="/contact" className="btn btn-primary nav__cta-btn">
            Get a Quote <ArrowUpRight />
          </Link>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <nav className="nav__mobile-links">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__mobile-link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary nav__mobile-btn">
          Get a Quote <ArrowUpRight />
        </Link>
        <a href={`tel:${company.phoneHref}`} className="nav__mobile-phone">{company.phone}</a>
      </div>
    </header>
  )
}
