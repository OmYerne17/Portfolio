"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ViewportWrapper from "./ViewportWrapper";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const scriptESM = document.createElement("script");
    scriptESM.type = "module";
    scriptESM.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    document.body.appendChild(scriptESM);

    const scriptNomodule = document.createElement("script");
    scriptNomodule.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    document.body.appendChild(scriptNomodule);

    return () => {
      document.body.removeChild(scriptESM);
      document.body.removeChild(scriptNomodule);
    };
  }, []);

  return (
    <section className="section about" id="about">
      <div className="container">
        <ViewportWrapper>
          <motion.figure
            className="about-banner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/about banner.jpeg"
              width={800}
              height={652}
              loading="lazy"
              alt="Photo"
              className="img-cover"
            />
            <motion.div
              className="abs-icon abs-icon-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <ion-icon name="logo-css3"></ion-icon>
            </motion.div>
            <motion.div
              className="abs-icon abs-icon-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <ion-icon name="logo-javascript"></ion-icon>
            </motion.div>
            <motion.div
              className="abs-icon abs-icon-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <ion-icon name="logo-html5"></ion-icon>
            </motion.div>
          </motion.figure>
        </ViewportWrapper>

        <ViewportWrapper>
          <div className="about-content">
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm a Developer
            </motion.p>
            <motion.h2
              className="h2 section-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I Develop Applications that Help People
            </motion.h2>
            <motion.p
              className="section-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              As a web developer, I craft digital experiences that blend creativity with functionality. Through coding languages like HTML, CSS, and JavaScript, along with modern frameworks and libraries such as Node.js, Next.js, and React.js, I bring designs to life, ensuring seamless user interactions and intuitive interfaces. I also leverage tools like Framer Motion for dynamic animations and ShadCN UI for creating consistent and responsive components. With a keen eye for detail and a passion for problem-solving, I strive to create websites that not only meet client needs but also exceed user expectations. Constantly exploring new technologies and staying updated with industry trends, I am dedicated to delivering innovative solutions in the ever-evolving digital landscape.
            </motion.p>
            <motion.a
              href="#portfolio"
              className="btn btn-primary blue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
          </div>
        </ViewportWrapper>
      </div>
      <style jsx>{`
        .about-banner {
          position: relative;
        }

        .abs-icon {
          position: absolute;
          transition: transform 0.3s ease;
        }

        .abs-icon:hover {
          transform: scale(1.1);
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
  );
}
