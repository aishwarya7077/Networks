import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle, Sparkles, Quote } from 'lucide-react'
import { company, clients } from '../data/site'
import Reveal from '../components/Reveal'

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function Clients() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <Reveal>
            <span className="eyebrow"><Sparkles size={14} /> Our Clients</span>
            <h1>Trusted by businesses <span className="grad-text">across industries</span></h1>
            <p>
              From startups to large enterprises, organizations rely on RYG Networks to plan, deploy and
              support the technology that keeps them running.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="clients-grid">
            {clients.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 0.06}>
                <div className="client-tile">
                  {c.logo ? (
                    <img className="client-tile__logo" src={c.logo} alt={`${c.name} logo`} loading="lazy" />
                  ) : (
                    <span className="client-tile__monogram">{initials(c.name)}</span>
                  )}
                  <div className="client-tile__meta">
                    <b>{c.name}</b>
                    {c.industry && <span>{c.industry}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <Quote className="cta-band__mark" />
              <h2>Join the businesses we help grow</h2>
              <p>
                Whether you are a startup, small business or large enterprise, we have the expertise to
                support your journey — from planning and implementation to ongoing maintenance and support.
              </p>
              <div className="cta-band__actions">
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle /> Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-ghost">Become a client <ArrowUpRight /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
