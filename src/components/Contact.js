export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <p className="card-subtitle">Don't be shy</p>
          <h2 className="h2 section-title">Drop Me a Line</h2>
          <div className="wrapper">
            <form action="" className="contact-form">
              <input type="text" name="name" placeholder="Name" required className="contact-input" />
              <input type="email" name="email" placeholder="Email" required className="contact-input" />
              <textarea name="message" placeholder="Message" required className="contact-input"></textarea>
              <button type="submit" className="btn-submit">Submit Message</button>
            </form>
            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="location"></ion-icon>
                </div>
                <div>
                  <h3 className="contact-item-title">Address</h3>
                  <address className="contact-item-link">Plot No-17, Wardha, India</address>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="mail"></ion-icon>
                </div>
                <div>
                  <h3 className="contact-item-title">Email</h3>
                  <a href="mailto:omyerane2004@gmail.com" className="contact-item-link">omyerane2004@gmail.com</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <ion-icon name="call"></ion-icon>
                </div>
                <div>
                  <h3 className="contact-item-title">Phone</h3>
                  <a href="tel:+919763591376" className="contact-item-link">+919763591376</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 