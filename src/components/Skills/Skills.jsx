
import { useState } from "react"
import "./skills.css"

import ilustracion01 from "../../assets/ilustracion2.png"
import ilustracion02 from "../../assets/ilustracion3.png"
import ilustracion03 from "../../assets/ilustracion4.png"

import brand01 from "../../assets/brand1.png"
import brand02 from "../../assets/brand5.png"
import brand03 from "../../assets/logo.png"

export default function Skills() {

  const [activeSkill, setActiveSkill] = useState(null)

  /* LIGHTBOX */
  const [selectedImage, setSelectedImage] = useState(null)

  const skills = [
    {
      name: "UI/UX",
      class: "s1",
      works: [
        "/works/uiux-1.jpg",
        "/works/uiux-2.jpg",
        "/works/uiux-3.jpg",
      ],
    },

    {
      name: "React",
      class: "s2",
      works: [],
    },

    {
      name: "Illustration",
      class: "s3",
      works: [
        ilustracion01,
        ilustracion02,
        ilustracion03,
      ],
    },

    {
      name: "Branding",
      class: "s4",
      works: [
        brand01,
        brand02,
        brand03,
      ],
    },

    {
      name: "HTML/CSS",
      class: "s5",
      works: [],
    },

    {
      name: "Creative Coding",
      class: "s6",
      works: [],
    },
  ]

  const toggleSkill = (index) => {
    setActiveSkill(
      activeSkill === index ? null : index
    )
  }

  return (
    <>

      <section className="skills">

        <h2 className="skills-title">
          What I play with
        </h2>

        <div className="skills-canvas">

          {skills.map((skill, i) => (

            <div
              key={i}
              className="skill-wrapper"
            >

              <button
                className={`skill ${skill.class} ${
                  activeSkill === i ? "active" : ""
                }`}
                onClick={() => toggleSkill(i)}
              >
                {skill.name}
              </button>

              <div
                className={`gallery ${
                  activeSkill === i
                    ? "show-gallery"
                    : ""
                }`}
              >

                {skill.works.map((img, idx) => (

                  <div
                    key={idx}
                    className="gallery-item"
                    onClick={() => setSelectedImage(img)}
                  >

                    <img
                      src={img}
                      alt={`${skill.name} work ${idx + 1}`}
                    />

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FULLSCREEN GALLERY */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="preview"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </>
  )
}
