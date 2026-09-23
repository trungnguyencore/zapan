export function InstagramLink() {
  return (
    <a
      className="instagram-link"
      href="https://www.instagram.com/trunk.ng/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram của trunk.ng"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="instagram-icon">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.8" r="1.15" fill="currentColor" />
      </svg>
      <span>@trunk.ng</span>
    </a>
  )
}
