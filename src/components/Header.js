'use client';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('Current Scroll Y:', currentScrollY); // Debugging log
      console.log('Last Scroll Y:', lastScrollY); // Debugging log

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log('Header visibility:', visible); // Debugging log
    if (visible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -100 });
    }
  }, [visible, controls]);

  // Don't render anything until mounted
  if (!mounted) {
    return null;
  }

  return (
    <motion.header 
      className="header data-header" 
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
    >
      {/* Rest of your JSX remains the same */}
      <div className="container">
        <a href="#">
          <h1 className="logo !text-[32px] font-bold list-disc hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-900 to-orange-300">
            CodeWithOm.Com
          </h1>
        </a>
        <button
          className="nav-toggle-btn"
          aria-label="Toggle Menu"
          data-nav-toggle-btn
        >
          <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
          <ion-icon name="close-outline" className="close-icon"></ion-icon>
        </button>
        <nav className="navbar container">
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
            <li><a href="#about" className="navbar-link" data-nav-link>About</a></li>
            <li><a href="#portfolio" className="navbar-link" data-nav-link>Portfolio</a></li>
            <li><a href="#skills" className="navbar-link" data-nav-link>Skills</a></li>
            <li><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
            <li>
              <a
                href="https://drive.google.com/file/d/1VhtXIAseO14F4LNRFFISUeVjo-eYnbZr/view?usp=sharing"
                className="btn btn-primary"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}