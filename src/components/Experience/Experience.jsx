import "./experience.css"
import { motion } from "framer-motion"

export default function Experience() {
  return (
    <motion.section
      className="exp"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >

      <div className="exp-tags">
        <span className="tag green">marketing</span>
        <span className="tag purple">graphisme</span>
        <span className="tag yellow">html/css</span>
        <span className="tag green">ui/ux design</span>
        <span className="tag blue">community management</span>
        <span className="tag pink">illustrations</span>
      </div>

      <div className="exp-grid">

        <div className="box yellow big">
          <h4>Compétences</h4>
          <p>
            Leadership · Adaptabilité · Organisation · Communication · Créativité
          </p>
        </div>

        <div className="box pink">
          <h4>Formation</h4>
          <p>Bachelor Design Digital · UX/UI</p>
        </div>

        <div className="box blue">
          <h4>Projets</h4>
          <p>+40 réalisés</p>
        </div>

        <div className="box gradient tall">
          <h4>Expérience</h4>
          <p>Freelance · UI/UX · Branding</p>
        </div>

      </div>

    </motion.section>
  )
}