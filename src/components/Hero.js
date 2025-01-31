'use client'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          className="hero-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
      <img 
        src="./images/Om banner .jpg" 
        width="800" 
        height="864" 
        loading="lazy" 
        alt="Om photos" 
        className="img-cover" 
      />

          <motion.div
            className="elem elem-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="elem-title">1</p>
            <p className="elem-text">Year of Success</p>
          </motion.div>
          <motion.div
            className="elem elem-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="elem-title">5+</p>
            <p className="elem-text">Projects Completed</p>
          </motion.div>
          <motion.div
            className="elem elem-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <ion-icon name="trophy"></ion-icon>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="hero-title">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
              Hello I'm
            </motion.span>
            <motion.strong initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
              Om Yerane
            </motion.strong>{" "}
            Web Developer from Wardha, Maharashtra
          </h2>
          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
             The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.
          </motion.p>
          <motion.div
            className="btn-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary blue">
              Get a Quote
            </a>
            <a href="#about" className="btn">
              About Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .hero-banner {
          position: relative;
        }

        .hero-banner :global(.elem) {
          animation: float 3s ease-in-out infinite;
        }

        .hero-banner :global(.elem-1) {
          animation-delay: 0s;
        }

        .hero-banner :global(.elem-2) {
          animation-delay: 0.5s;
        }

        .hero-banner :global(.elem-3) {
          animation-delay: 1s;
        }

        .hero-title strong {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .hero-title strong:hover {
          transform: scale(1.05);
        }

        .btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  )
}

