import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, MessageCircle, Phone, Mail, ShieldCheck, Cloud,
  Cctv, Server, Sparkles, CheckCircle2, Award, Headset,
} from 'lucide-react'
import { company, services, whyChooseUs, stats } from '../data/site'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'

export default function Home() {
  const [showAll, setShowAll] = useState(false)
  const visibleServices = showAll ? services : services.slice(0, 3)
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={14} /> Trusted IT Services &amp; Solutions
            </motion.span>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Simplifying Technology.<br />
              <span className="grad-text">Securing Your Future.</span>
            </motion.h1>

            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {company.intro}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle /> Chat on WhatsApp
              </a>
              <Link to="/services" className="btn btn-ghost">Explore Services <ArrowUpRight /></Link>
            </motion.div>

            <div className="hero__meta">
              <span><Phone size={15} /> <a href={`tel:${company.phoneHref}`}>{company.phone}</a></span>
              <span><Mail size={15} /> <a href={`mailto:${company.email}`}>{company.email}</a></span>
            </div>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__panel">
              <div className="hero__panel-bar"><i /><i /><i /></div>
              <div className="hero__tiles">
                <div className="hero__tile"><ShieldCheck /><b>Cybersecurity</b><span>Firewalls · VPN · endpoint</span></div>
                <div className="hero__tile"><Cloud /><b>Microsoft Cloud</b><span>Licensing &amp; migration</span></div>
                <div className="hero__tile"><Cctv /><b>CCTV Surveillance</b><span>In-house hardware</span></div>
                <div className="hero__tile"><Server /><b>Infrastructure</b><span>Servers &amp; networking</span></div>
              </div>
            </div>
            <motion.div
              className="hero__float hero__float--tl"
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ShieldCheck /> 24/7 Monitored
            </motion.div>
            <motion.div
              className="hero__float hero__float--br"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <CheckCircle2 /> All under one roof
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== Trust strip ===== */}
      <div className="trust">
        <div className="container trust__row">
          <span className="trust__item"><Award size={19} /> Microsoft Channel Partner</span>
          <span className="trust__item"><ShieldCheck size={19} /> Enterprise-grade Security</span>
          <span className="trust__item"><Cctv size={19} /> In-house CCTV Manufacturing</span>
          <span className="trust__item"><Headset size={19} /> Dedicated Support</span>
        </div>
      </div>

      {/* ===== Services ===== */}
      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow"><Server size={14} /> What we do</span>
            <h2 className="section-title">Complete IT solutions, <span className="grad-text">under one roof</span></h2>
            <p className="section-sub">
              From day-to-day support to cloud, software and physical security — a comprehensive range of
              products and services tailored to your business.
            </p>
          </Reveal>

          <div className="grid grid-3">
            {visibleServices.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'Show less' : 'See more services'} <ArrowUpRight />
            </button>
            <Link to="/services" className="btn btn-ghost">View full details <ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="section section--tight">
        <div className="container">
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="stat">
                  <div className="stat__value grad-text">{s.value}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why choose us ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><ShieldCheck size={14} /> Why RYG Networks</span>
            <h2 className="section-title">A single partner for every layer of your technology</h2>
          </Reveal>

          <div className="grid grid-2">
            {whyChooseUs.map((w, i) => {
              const Icon = w.icon
              return (
                <Reveal key={w.title} delay={(i % 2) * 0.08}>
                  <div className="card why__item">
                    <span className="icon-badge"><Icon /></span>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Ready to upgrade your IT or secure your facility?</h2>
              <p>Contact our expert technical team for a free consultation — no pressure, just practical advice.</p>
              <div className="cta-band__actions">
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle /> Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-ghost">Request a Quote <ArrowUpRight /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
