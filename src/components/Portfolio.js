'use client'
import { motion } from "framer-motion"
import ViewportWrapper from "./ViewportWrapper"

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <ViewportWrapper>
          <motion.p className="section-subtitle">
            Portfolio
          </motion.p>
          
          <motion.h2 className="h2 section-title">
            My Amazing Works
          </motion.h2>
          
          <motion.p className="section-text">
            In each of these cases, the pain is reprimanded in pleasure
          </motion.p>
        </ViewportWrapper>

        <ViewportWrapper>
          <ul className="portfolio-list">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <motion.a
                  href="#"
                  className="portfolio-card"
                  style={{ backgroundImage: `url('./images/portfolio-${item}.jpg')` }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="card-content"
                    initial={{ y: 10, opacity: 0.8 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      className="card-subtitle"
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    >
                      {item === 1 ? "Youtube" : item === 2 ? "Vimeo" : item === 3 ? "Soundcloud" : "Details"}
                    </motion.p>
                    <motion.h3
                      className="h3 card-title"
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                    >
                      Web Application for Desiverse
                    </motion.h3>
                    <motion.span
                      className="btn-link"
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    >
                      <span>View Project</span>
                      <ion-icon name="arrow-forward"></ion-icon>
                    </motion.span>
                  </motion.div>
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </ViewportWrapper>
      </div>
    </section>
  )
}

