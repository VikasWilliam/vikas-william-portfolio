import { experience } from '@/data/portfolio'
import { SectionId } from '@/types/portfolio'
import { SectionHeading } from './shared'
export function Experience() {
  return (
    <section className="section experience" id={SectionId.Experience}>
      <SectionHeading
        number="02"
        label="THE JOURNEY"
        title="Enterprise roots. Frontend focus."
      />
      <div className="experience-layout">
        <div className="experience-intro">
          <p>
            From understanding systems in production to crafting the interfaces
            people use.
          </p>
          <p className="muted">
            My career spans IBM, Infosys, and TCS, with a focus on React
            development, reusable components, and enterprise banking
            applications.
          </p>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <article key={job.company} className="job">
              <div className="job-meta">
                <span>{job.period}</span>
                {index === 0 && <span className="current">CURRENT</span>}
              </div>
              <h3>{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <p className="muted">{job.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
