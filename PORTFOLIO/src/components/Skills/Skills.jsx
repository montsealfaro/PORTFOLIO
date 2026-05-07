import "./skills.css"

export default function Skills() {
  const skills = [
    { name: "UI/UX", class: "s1" },
    { name: "React", class: "s2" },
    { name: "Illustration", class: "s3" },
    { name: "Branding", class: "s4" },
    { name: "HTML/CSS", class: "s5" },
    { name: "Creative Coding", class: "s6" },
  ]

  return (
    <section className="skills">

      <h2 className="skills-title">What I play with</h2>

      <div className="skills-canvas">
        {skills.map((skill, i) => (
          <span key={i} className={`skill ${skill.class}`}>
            {skill.name}
          </span>
        ))}
      </div>

    </section>
  )
}