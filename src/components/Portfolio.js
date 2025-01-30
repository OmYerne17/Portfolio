export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <p className="section-subtitle">Portfolio</p>
        <h2 className="h2 section-title">My Amazing Works</h2>
        <p className="section-text">
          In each of these cases, the pain is reprimanded in pleasure
        </p>
        <ul className="portfolio-list">
          <li>
            <a href="#" className="portfolio-card" style={{ backgroundImage: "url('./images/portfolio-1.jpg')" }}>
              <div className="card-content">
                <p className="card-subtitle">Youtube</p>
                <h3 className="h3 card-title">Web Application for Desiverse</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <ion-icon name="arrow-forward"></ion-icon>
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="portfolio-card" style={{ backgroundImage: "url('./images/portfolio-2.jpg')" }}>
              <div className="card-content">
                <p className="card-subtitle">Vimeo</p>
                <h3 className="h3 card-title">Web Application for Desiverse</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <ion-icon name="arrow-forward"></ion-icon>
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="portfolio-card" style={{ backgroundImage: "url('./images/portfolio-3.jpg')" }}>
              <div className="card-content">
                <p className="card-subtitle">Soundcloud</p>
                <h3 className="h3 card-title">Web Application for Desiverse</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <ion-icon name="arrow-forward"></ion-icon>
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="portfolio-card" style={{ backgroundImage: "url('./images/portfolio-4.jpg')" }}>
              <div className="card-content">
                <p className="card-subtitle">Details</p>
                <h3 className="h3 card-title">Web Application for Desiverse</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <ion-icon name="arrow-forward"></ion-icon>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
} 