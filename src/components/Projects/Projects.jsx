import { motion } from "framer-motion"
import "./projects.css"

export default function Projects() {
  const projects = [
    { title: "Dream UI", image: "/project1.jpg" },
    { title: "Brand System", image: "/project2.jpg" },
    { title: "Interactive Web", image: "/project3.jpg" },
  ]

  return (
    <section className="projects">

      <h2 className="projects-title">Selected Work</h2>

      <motion.div
        className="projects-list"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-item"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <img src={project.image} alt={project.title} />
            <h3 className="project-title">{project.title}</h3>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}