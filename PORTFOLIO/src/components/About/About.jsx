import "./about.css"
import { motion } from "framer-motion"
import profilepic from "../../assets/descarga.png"


export default function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <div className="about-left">

        <h2 className="about-title">
          <span className="s1">S</span>
          <span className="s2">a</span>
          <span className="s3">l</span>
          <span className="s4">u</span>
          <span className="s5">t</span>
          <span className="s6">!</span>
        </h2>

        <p className="about-text">
          Je suis Montserrat, une designer et développeuse en devenir.
          Passionnée par le design web et l’expérience utilisateur,
          je crée des univers visuels immersifs, sensibles et intuitifs.
        </p>

        <a className="about-link" href="https://linkedin.com/in/montserrat-alfaro-187338193"> 
          🔍 linkedin.com/in/montserrat
        </a>

        <a className="about-link" href='https://github.com/montsealfaro'>
          Mi GitHub
        </a>

      </div>

      <div className="about-card">
        <img src={profilepic} alt="profile" />

        <div className="card-info">
          <h3>Montserrat</h3>
          <p>Argentina</p>
          <span>@montserrat.dev</span>
        </div>
      </div>

    </motion.section>
  )
}