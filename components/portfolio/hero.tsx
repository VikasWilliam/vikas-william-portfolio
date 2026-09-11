import { ArrowDown, CodeXml, MapPin } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { SectionId } from '@/types/portfolio'
import { ExternalLink } from './shared'
export function Hero() {
  return (
    <section className="hero" id={SectionId.About}>
      <div className="hero-copy">
        <p className="eyebrow">REACT ENGINEER / CREATIVE PROBLEM SOLVER</p>
        <p className="intro">Hello, I’m Vikas William.</p>
        <h1>
          Thoughtful code.
          <br />
          Meaningful
          <br />
          <em>experiences.</em>
        </h1>
        <p className="hero-description">
          Senior Frontend Engineer building modular, intuitive web applications.
          Grounded in React. Growing with AI.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore my work <ArrowDown size={18} />
          </a>
          <ExternalLink className="github-link" href={profile.github}>
            <CodeXml size={19} /> GitHub
          </ExternalLink>
        </div>
        <p className="location">
          <MapPin size={15} /> {profile.location}
          <span>·</span> React & TypeScript
        </p>
      </div>
      <div className="portrait-area">
        <div className="portrait-caption">
          <span>A LITTLE ABOUT ME</span>
          <span>01 / VW</span>
        </div>
        <div className="portrait-frame">
          <img
            src="./vikas-william.png"
            alt="Vikas William"
            width="880"
            height="670"
            fetchPriority="high"
          />
        </div>
        <div className="portrait-bottom">
          <span>
            Engineer by profession.
            <br />
            Learner by instinct.
          </span>
          <span className="asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="role-tag">FRONTEND FIRST. ALWAYS CURIOUS.</div>
        <div>LEARN UNLEARN RELEARN</div>
      </div>
    </section>
  )
}
