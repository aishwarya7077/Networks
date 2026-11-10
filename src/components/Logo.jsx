export default function Logo({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="rygLogo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="0.55" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="62" height="62" rx="16" fill="#0E1322" stroke="rgba(255,255,255,0.1)" />
      <path
        d="M20 44V20h12a8 8 0 0 1 3 15l6 9h-7l-5-8h-2v8h-6Zm6-13h5a3 3 0 0 0 0-6h-5v6Z"
        fill="url(#rygLogo)"
      />
    </svg>
  )
}
