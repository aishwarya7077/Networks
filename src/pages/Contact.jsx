import { useState } from 'react'
import {
  Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Globe,
} from 'lucide-react'
import { company, services } from '../data/site'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New enquiry from ${form.name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Service of interest: ${form.service || 'General'}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const whatsappPrefill = () => {
    const text = encodeURIComponent(
      `Hi RYG Networks, I'm ${form.name || ''}. I'm interested in ${form.service || 'your services'}. ${form.message || ''}`.trim()
    )
    window.open(`${company.whatsapp}?text=${text}`, '_blank')
  }

  const cards = [
    { icon: MessageCircle, title: 'WhatsApp', value: 'Chat with us instantly', href: company.whatsapp, ext: true },
    { icon: Phone, title: 'Call us', value: company.phone, href: `tel:${company.phoneHref}` },
    { icon: Mail, title: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, title: 'Visit us', value: company.address },
    { icon: Globe, title: 'Website', value: 'rygnetworks.com', href: company.website, ext: true },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h1>Let's talk about <span className="grad-text">your project</span></h1>
            <p>
              Ready to upgrade your IT infrastructure or enhance your facility's security?
              Send your queries via WhatsApp, call or email — we respond promptly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container contact__grid">
          <Reveal>
            <div className="contact__cards">
              {cards.map((c) => {
                const Icon = c.icon
                const inner = (
                  <>
                    <span className="icon-badge"><Icon /></span>
                    <div>
                      <h4>{c.title}</h4>
                      {c.href
                        ? <a href={c.href} target={c.ext ? '_blank' : undefined} rel={c.ext ? 'noreferrer' : undefined}>{c.value}</a>
                        : <p>{c.value}</p>}
                    </div>
                  </>
                )
                return <div key={c.title} className="contact__card">{inner}</div>
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="card form" onSubmit={handleSubmit}>
              {sent && (
                <div className="form__success">
                  <CheckCircle2 size={20} />
                  Thanks! Your email draft is ready — or reach us instantly on WhatsApp below.
                </div>
              )}

              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" value={form.name} onChange={update} placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={update} placeholder="+91 ..." />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" required />
              </div>

              <div className="field">
                <label htmlFor="service">Service of interest</label>
                <select id="service" name="service" value={form.service} onChange={update}>
                  <option value="">Select a service…</option>
                  {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Other">Something else</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell us about your requirements…" required />
              </div>

              <div className="hero__actions" style={{ marginTop: 4 }}>
                <button type="submit" className="btn btn-primary"><Send size={17} /> Send enquiry</button>
                <button type="button" className="btn btn-whatsapp" onClick={whatsappPrefill}>
                  <MessageCircle /> WhatsApp instead
                </button>
              </div>
              <p className="form__note">We'll never share your details. Typical response within one business day.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
