import { Link } from 'react-router-dom'
import {
  ArrowUpRight, Target, Gem, Handshake, Layers, ShieldCheck, Wrench, MessageCircle,
} from 'lucide-react'
import { company, stats } from '../data/site'
import Reveal from '../components/Reveal'

const values = [
  { icon: Gem, title: 'Quality First', text: 'Reliable, well-engineered solutions that perform under real-world demands.' },
  { icon: Target, title: 'Customized Approach', text: 'Built around your workflow — never a one-size-fits-all template.' },
  { icon: Layers, title: 'End-to-End', text: 'Hardware, software and networking delivered under one roof.' },
  { icon: Handshake, title: 'Customer Satisfaction', text: 'Prompt, honest support and a partnership that lasts beyond delivery.' },
]

const steps = [
  { title: 'Consult & Assess', text: 'We learn your business, audit your current setup and identify gaps and opportunities.' },
  { title: 'Design & Recommend', text: 'A tailored plan across IT, cloud, security and surveillance — sized to your budget.' },
  { title: 'Deploy & Integrate', text: 'Supply, install and configure hardware and software with minimal disruption.' },
  { title: 'Support & Optimize', text: 'Proactive maintenance and responsive helpdesk keep everything running smoothly.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">About Us</span>
            <h1>Empowering businesses with <span className="grad-text">cutting-edge IT &amp; security</span></h1>
            <p>
              RYG Networks delivers a comprehensive range of IT products, services and solutions —
              tailored to meet all your business requirements under one roof.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container about__lead-grid">
          <Reveal>
            <span className="eyebrow"><Target size={14} /> Our Commitment</span>
            <h2 className="section-title">Technology made simple, security made certain</h2>
            <p className="section-sub" style={{ maxWidth: 'none' }}>
              Our commitment is to deliver reliable, innovative and customized IT and security solutions
              under one roof — ensuring quality, performance and customer satisfaction at every step.
            </p>
            <div className="hero__actions" style={{ marginTop: 28 }}>
              <Link to="/contact" className="btn btn-primary">Work with us <ArrowUpRight /></Link>
              <Link to="/services" className="btn btn-ghost">Our services</Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="about__values">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="about__value">
                    <Icon size={22} />
                    <div>
                      <b>{v.title}</b>
                      <span>{v.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
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

      {/* How we work */}
      <section className="section">
        <div className="container about__lead-grid">
          <Reveal>
            <span className="eyebrow"><Wrench size={14} /> How we work</span>
            <h2 className="section-title">A clear path from consultation to ongoing care</h2>
            <p className="section-sub" style={{ maxWidth: 'none' }}>
              Whether you're upgrading infrastructure or securing a facility, we follow a simple,
              transparent process so you always know what comes next.
            </p>
            <div className="about__value" style={{ marginTop: 26 }}>
              <ShieldCheck size={22} />
              <div>
                <b>Free initial consultation</b>
                <span>No obligation — just practical advice from our technical team.</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="timeline">
              {steps.map((s) => (
                <div key={s.title} className="timeline__item">
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Let's build your reliable IT backbone</h2>
              <p>Reach out today and see how much simpler your technology can be.</p>
              <div className="cta-band__actions">
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle /> Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-ghost">Contact us <ArrowUpRight /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
