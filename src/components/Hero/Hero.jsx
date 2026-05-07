import "./hero.css"
import heroBg from "../../assets/hero.png"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="hero">

      <img src={heroBg} className="hero-bg" alt="background" />
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-sub">montserrat</p>

        <h1 className="hero-title">
          portfolio book
        </h1>
      </motion.div>

      <div className="tags">
        <span className="tag pink t1">web design</span>
        <span className="tag green t2">graphic design</span>
        <span className="tag purple t3">ux/ui design</span>
        <span className="tag yellow t4">projects perso</span>
        <span className="tag blue t5">illustrations</span>
      </div>

    </section>
  )
}