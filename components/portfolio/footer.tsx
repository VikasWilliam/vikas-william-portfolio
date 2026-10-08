import { profile } from '@/data/portfolio'
import { SectionId } from '@/types/portfolio'
import { ExternalLink } from './shared'
export function Footer() {
  return (
    <>
      <section className="contact section" id={SectionId.Contact}>
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>
          Let’s build something
          <br />
          <em>worth using.</em>
        </h2>
        <ExternalLink className="button primary" href={profile.linkedin}>
          Connect on LinkedIn
        </ExternalLink>
      </section>
      <footer>
        <a href="#about" className="wordmark">
          vw<span>⸱</span>
        </a>
        <p>© {new Date().getFullYear()} Vikas William</p>
        <div>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <a href="#about">Back to top ↑</a>
        </div>
        <a href="/pocket-fx-privacy.html">Pocket FX Privacy Policy</a>
      </footer>
    </>
  )
}
