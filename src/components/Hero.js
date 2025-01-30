export default function Hero() {
    return (
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-banner">
            <img src="./images/Om banner .jpg" width="800" height="864" loading="lazy" alt="Om photos" className="img-cover" />
            <div className="elem elem-1">
              <p className="elem-title">5</p>
              <p className="elem-text">Months of Success</p>
            </div>
            <div className="elem elem-2">
              <p className="elem-title">5+</p>
              <p className="elem-text">Projects Completed</p>
            </div>
            <div className="elem elem-3">
              <ion-icon name="trophy"></ion-icon>
            </div>
          </div>
          <div className="hero-content">
            <h2 className="hero-title">
              <span>Hello I'm</span>
              <strong>Om Yerane</strong> Web Developer from Wardha, Maharashtra
            </h2>
            <p className="hero-text">
              The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.
            </p>
            <div className="btn-group">
              <a href="#contact" className="btn btn-primary blue">Get a Quote</a>
              <a href="#about" className="btn">About Me</a>
            </div>
          </div>
        </div>
      </section>
    );
  } 