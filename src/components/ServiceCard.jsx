import { Check } from 'lucide-react'

export default function ServiceCard({ service, detailed = false }) {
  const Icon = service.icon
  return (
    <article className="card service-card">
      <span className="icon-badge"><Icon /></span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__text muted">{service.short}</p>
      {detailed && (
        <ul className="service-card__points">
          {service.points.map((p) => (
            <li key={p}><Check size={16} /> {p}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
