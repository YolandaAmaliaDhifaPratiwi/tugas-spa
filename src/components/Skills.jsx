import React from 'react'

function SkillItem({ s }) {
  return (
    <li className="skill-item glow">
      <img src={s.icon_url} alt={s.name} className="skill-icon" />
      <div>
        <div className="skill-name">
          {s.name} {s.is_main && <span className="badge">main</span>}
        </div>
        <div className="skill-meta">
          {s.level} • {s.years_of_experience ?? '1'} yrs
        </div>
      </div>
    </li>
  )
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="card glow">
      <h3>SKILLS</h3>
      <ul className="skills-list">
        {skills.map(s => (
          <SkillItem key={s.id} s={s} />
        ))}
      </ul>
    </section>
  )
}

