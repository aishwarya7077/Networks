import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Phone, Mail, Sparkles } from 'lucide-react'
import { company } from '../data/site'
import '../styles/home.css'

export default function Home() {
  // Single-screen home: dark hero + light nav text, no footer, no scroll.
  useEffect(() => {
    document.body.classList.add('is-home')
    return () => document.body.classList.remove('is-home')
  }, [])

  return (
    <section className="home-hero">
      {/* ===== Big background image ===== */}
      <div className="home-hero__bg" aria-hidden="true">
        <img className="home-hero__photo" src="/images/hero-bg.png" alt="" />
        <div className="home-hero__overlay" />
        <div className="home-hero__vignette" />
      </div>

      {/* ===== Content ===== */}
      <div className="container home-hero__inner">
        <motion.div
          className="home-hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="home-hero__eyebrow">
            <Sparkles size={14} /> Trusted IT Services &amp; Solutions
          </span>

          <h1 className="home-hero__title">
            Complete IT Solutions<br />
            for All Your{' '}
            <span className="home-hero__gold">Business Needs</span>
          </h1>

          <p className="home-hero__lead">
            Innovative Technology. Reliable Support. A Smarter Tomorrow.
          </p>

          <div className="home-hero__actions">
            <Link to="/services" className="btn home-hero__btn-gold">
              Explore Our Services <ArrowUpRight />
            </Link>
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn home-hero__btn-ghost">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </div>

          <div className="home-hero__meta">
            <span><Phone size={15} /> <a href={`tel:${company.phoneHref}`}>{company.phone}</a></span>
            <span><Mail size={15} /> <a href={`mailto:${company.email}`}>{company.email}</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
