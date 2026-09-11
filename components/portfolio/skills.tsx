import { skills } from '@/data/portfolio'
import { SectionId } from '@/types/portfolio'
import { SectionHeading } from './shared'
export function Skills() {
  return (
    <section className="section" id={SectionId.Skills}>
      <SectionHeading
        number="03"
        label="MY TOOLKIT"
        title="Strong foundations. New possibilities."
      />
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-group" key={group.level}>
            <p className="eyebrow">{group.level}</p>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
