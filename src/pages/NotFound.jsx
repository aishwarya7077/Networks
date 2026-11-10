import { Link } from 'react-router-dom'
import { Home, ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="container notfound">
      <h1 className="grad-text">404</h1>
      <p className="muted">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn btn-primary"><Home size={17} /> Back home <ArrowUpRight size={16} /></Link>
    </section>
  )
}
