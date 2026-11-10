export default function Logo({ size = 40, className = '' }) {
  return (
    <img
      src="/logo@480.png"
      alt="RYG Networks"
      className={`logo-img ${className}`.trim()}
      style={{ height: size, width: 'auto', display: 'block' }}
      width="480"
      height="428"
      loading="eager"
      decoding="async"
    />
  )
}
