'use client'
import { motion } from "framer-motion"
import ViewportWrapper from "./ViewportWrapper"

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <ViewportWrapper className="contact-card">
          <div>
            <motion.p className="card-subtitle">
              Don't be shy
            </motion.p>
            <motion.h2 className="h2 section-title">
              Drop Me a Line
            </motion.h2>
            
            <div className="wrapper">
              <ViewportWrapper>
                <form action="" className="contact-form">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="contact-input"
                    whileFocus={{ scale: 1.05 }}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="contact-input"
                    whileFocus={{ scale: 1.05 }}
                  />
                  <motion.textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="contact-input"
                    whileFocus={{ scale: 1.05 }}
                  ></motion.textarea>
                  <motion.button
                    type="submit"
                    className="btn-submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Message
                  </motion.button>
                </form>
              </ViewportWrapper>

              <ViewportWrapper>
                <ul className="contact-list">
                  {["location", "mail", "call"].map((icon, index) => (
                    <motion.li
                      key={icon}
                      className="contact-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                    >
                      <div className="contact-icon">
                        <ion-icon name={icon}></ion-icon>
                      </div>
                      <div>
                        <h3 className="contact-item-title">
                          {icon === "location" ? "Address" : icon === "mail" ? "Email" : "Phone"}
                        </h3>
                        {icon === "location" ? (
                          <address className="contact-item-link"> BDCOE College, Wardha, India</address>
                        ) : icon === "mail" ? (
                          <a href="mailto:omyerane2004@gmail.com" className="contact-item-link">
                            omyerane2004@gmail.com
                          </a>
                        ) : (
                          <a href="tel:+919763591376" className="contact-item-link">
                            +919763591376
                          </a>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </ViewportWrapper>
            </div>
          </div>
        </ViewportWrapper>
      </div>
    </section>
  )
}

