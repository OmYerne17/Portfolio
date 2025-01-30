export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src="./images/about banner.jpeg" width="800" height="652" loading="lazy" alt="Photo" className="img-cover" />
          <div className="abs-icon abs-icon-1">
            <ion-icon name="logo-css3"></ion-icon>
          </div>
          <div className="abs-icon abs-icon-2">
            <ion-icon name="logo-javascript"></ion-icon>
          </div>
          <div className="abs-icon abs-icon-3">
            <ion-icon name="logo-angular"></ion-icon>
          </div>
        </figure>
        <div className="about-content">
          <p className="section-subtitle">I'm a Developer</p>
          <h2 className="h2 section-title">I Develop Applications that Help People</h2>
          <p className="section-text">
            As a web developer, I craft digital experiences that blend creativity with functionality. Through coding languages like HTML, CSS, and JavaScript, I bring designs to life, ensuring seamless user interactions and intuitive interfaces. With a keen eye for detail and a passion for problem-solving, I strive to create websites that not only meet client needs but also exceed user expectations. Constantly exploring new technologies and staying updated with industry trends, I am dedicated to delivering innovative solutions in the ever-evolving digital landscape.
          </p>
          <a href="#portfolio" className="btn btn-primary blue">View Portfolio</a>
        </div>
      </div>
    </section>
  );
} 