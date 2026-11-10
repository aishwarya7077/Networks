import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'
import { company, services, navLinks } from '../data/site'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <Logo size={46} />
              <span>RYG<span className="footer__logo-soft">Networks</span></span>
            </Link>
            <p className="muted footer__blurb">
              Reliable, innovative and customized IT &amp; security solutions under one roof — built for
              quality, performance and customer satisfaction.
            </p>
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="footer__wa">
              <MessageCircle size={16} /> WhatsApp us
            </a>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            {services.slice(0, 6).map((s) => (
              <Link key={s.id} to="/services">{s.title}</Link>
            ))}
          </div>

          <div className="footer__col footer__contact">
            <h4>Get in touch</h4>
            <a href={`tel:${company.phoneHref}`}><Phone size={15} /> {company.phone}</a>
            <a href={`mailto:${company.email}`}><Mail size={15} /> {company.email}</a>
            <span><MapPin size={15} /> {company.address}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} RYG Networks. All rights reserved.</span>
          <span>Simplifying Technology. Securing Your Future.</span>
        </div>
      </div>
    </footer>
  )
}
