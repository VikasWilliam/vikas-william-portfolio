import { navigation, profile } from '@/data/portfolio'
import { ExternalLink } from './shared'
export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#about" aria-label="Vikas William home">
        vw<span>⸱</span>
      </a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
      <ExternalLink href={profile.linkedin} className="contact-link">
        Let’s connect
      </ExternalLink>
    </header>
  )
}
