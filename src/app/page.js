import Header from "@/components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import '@/css/style.css'

export default function Home() {
  return (
    <>
      <Header />
      <Hero /> 
      <About /> 
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
