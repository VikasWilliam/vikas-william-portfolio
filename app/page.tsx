import { Header } from '@/components/portfolio/header'
import { Hero } from '@/components/portfolio/hero'
import { Work } from '@/components/portfolio/work'
import { Experience } from '@/components/portfolio/experience'
import { Skills } from '@/components/portfolio/skills'
import { Footer } from '@/components/portfolio/footer'
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page-shell">
        <Header />
        <main id="main">
          <Hero />
          <div className="career-strip">
            <p>EXPERIENCE ACROSS</p>
            <span>IBM</span>
            <span>Infosys</span>
            <span>tcs</span>
            <p>
              Enterprise technology.
              <br />
              Human-centered interfaces.
            </p>
          </div>
          <Work />
          <Experience />
          <Skills />
          <Footer />
        </main>
      </div>
    </>
  )
}
