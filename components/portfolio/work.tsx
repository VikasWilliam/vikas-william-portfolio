import { projects, profile } from '@/data/portfolio'
import { SectionId, type Project } from '@/types/portfolio'
import { ExternalLink, SectionHeading } from './shared'
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">0{index + 1}</span>
        <span>{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <ExternalLink
        className="project-link"
        href={`${profile.github}/${project.repository}`}
      >
        Explore repository
      </ExternalLink>
    </article>
  )
}
export function Work() {
  return (
    <section className="section" id={SectionId.Work}>
      <SectionHeading
        number="01"
        label="SELECTED WORK"
        title="Learning in public. Building with purpose."
      >
        <ExternalLink href={profile.github} className="text-link">
          All repositories
        </ExternalLink>
      </SectionHeading>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.repository}
            project={project}
            index={index}
          />
        ))}
      </div>
      <p className="section-note">
        Personal projects & experiments. Professional work is described below at
        a high level.
      </p>
    </section>
  )
}
