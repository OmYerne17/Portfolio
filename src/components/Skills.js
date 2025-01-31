'use client'
import { motion } from "framer-motion"
import ViewportWrapper from "./ViewportWrapper"

export default function Skills() {
  const skills = [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
    { name: "React", value: 70 },
    { name: "NEXTJS", value: 65 },
    { name: "MongoDB", value: 70 },
    { name: "JavaScript", value: 55 },
    { name: "NodeJS", value: 70 },
    { name: "SHAD CN UI", value: 70 },
  ]

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <ViewportWrapper>
          <div>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Skills
            </motion.p>
            <motion.h2
              className="h2 section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I Develop Skills Regularly
            </motion.h2>
            <motion.p
              className="section-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              In each of these cases, the pain is reprimanded in pleasure
            </motion.p>
          </div>
        </ViewportWrapper>

        <ul className="skills-list">
          {skills.map((skill, index) => (
            <ViewportWrapper key={skill.name}>
              <motion.li
                className="skills-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="wrapper" style={{ width: `${skill.value}%` }}>
                  <h3 className="skills-title">{skill.name}</h3>
                  <data className="skills-data" value={skill.value}>
                    {skill.value}%
                  </data>
                </div>
                <div className="skills-progress-box">
                  <motion.div
                    className="skills-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.li>
            </ViewportWrapper>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .skills-item {
          margin-bottom: 20px;
        }

        .skills-progress-box {
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .skills-progress {
          height: 100%;
          background-color: #007bff;
          border-radius: 4px;
        }

        .wrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .skills-title {
          font-weight: bold;
        }

        .skills-data {
          font-weight: normal;
        }
      `}</style>
    </section>
  )
}

