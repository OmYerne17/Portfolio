"use client";
import { motion } from "framer-motion";
import ViewportWrapper from "./ViewportWrapper";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <ViewportWrapper>
          <motion.p className="section-subtitle">Portfolio</motion.p>

          <motion.h2 className="h2 section-title">My Amazing Works</motion.h2>

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
                <motion.div
                  className="portfolio-card"
                  style={{
                    backgroundImage: `url('./images/portfolio-${item}.jpg')`,
                  }}
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
                      {item === 1
                        ? "BDCOE"
                        : item === 2
                        ? "Food Express"
                        : item === 3
                        ? "DRAGS"
                        : "Details"}
                    </motion.p>
                    <motion.h3
                      className="h3 card-title"
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                    >
                      Web{" "}
                      {item === 1
                        ? "Application"
                        : item === 2
                        ? "App"
                        : item === 3
                        ? "Page"
                        : "site"}{" "}
                      for{" "}
                      {item === 1
                        ? "Collage Student"
                        : item === 2
                        ? "Foodie People"
                        : item === 3
                        ? "Drags Component"
                        : "SignUp Form"}
                    </motion.h3>
                    <motion.span
                      className="btn-link"
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={
                          item === 1
                            ? "https://bdcoe.vercel.app/"
                            : item === 2
                            ? "https://github.com/OmYerne17/Food_Express"
                            : item === 3
                            ? "https://github.com/OmYerne17/DRAGS"
                            : "https://github.com/OmYerne17/SignUp"
                        }
                      >
                        View Project
                      </Link>

                      <ion-icon name="arrow-forward"></ion-icon>
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </ViewportWrapper>
      </div>
    </section>
  );
}
