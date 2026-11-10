import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle, Cctv, Camera, ScanEye, Video } from 'lucide-react'
import { company, services } from '../data/site'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'

const cctvRange = [
  { icon: Camera, title: 'PTZ Cameras', text: 'Pan-tilt-zoom units with dynamic tracking and remote direction control for large areas.' },
  { icon: Video, title: 'Day & Night Vision', text: 'Ultra-clear HD recording in low light and full darkness, around the clock.' },
  { icon: ScanEye, title: '360° Panoramic', text: 'Full-room coverage that eliminates surveillance dead zones.' },
  { icon: Cctv, title: 'Custom Builds', text: 'Bespoke camera hardware and tailored security software setups for your site.' },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Services</span>
            <h1>Everything your business needs, <span className="grad-text">in one place</span></h1>
            <p>
              A comprehensive range of IT products, services and solutions — reliable, innovative and
              customized to your exact requirements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="grid grid-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.07}>
                <ServiceCard service={s} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CCTV spotlight */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow"><Cctv size={14} /> In-house manufactured</span>
            <h2 className="section-title">Security &amp; surveillance, <span className="grad-text">engineered by us</span></h2>
            <p className="section-sub">
              We design and manufacture custom surveillance hardware to meet precise operational demands —
              protecting your assets and your workforce.
            </p>
          </Reveal>
          <div className="grid grid-4">
            {cctvRange.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={(i % 4) * 0.07}>
                  <div className="card">
                    <span className="icon-badge"><Icon /></span>
                    <h3 className="service-card__title">{c.title}</h3>
                    <p className="service-card__text muted">{c.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Not sure which solution fits?</h2>
              <p>Tell us about your setup and goals — we'll recommend the right mix of services for your budget.</p>
              <div className="cta-band__actions">
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle /> Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-ghost">Get a free consultation <ArrowUpRight /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
