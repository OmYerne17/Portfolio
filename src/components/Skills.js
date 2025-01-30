export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-subtitle">My Skills</p>
        <h2 className="h2 section-title">I Develop Skills Regularly</h2>
        <p className="section-text">
          In each of these cases, the pain is reprimanded in pleasure
        </p>
        <ul className="skills-list">
          <li className="skills-item">
            <div className="wrapper" style={{ width: '70%' }}>
              <h3 className="skills-title">CSS</h3>
              <data className="skills-data" value="70">70%</data>
            </div>
            <div className="skills-progress-box">
              <div className="skills-progress" style={{ width: '70%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="wrapper" style={{ width: '75%' }}>
              <h3 className="skills-title">React</h3>
              <data className="skills-data" value="60">60%</data>
            </div>
            <div className="skills-progress-box">
              <div className="skills-progress" style={{ width: '60%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="wrapper" style={{ width: '90%' }}>
              <h3 className="skills-title">MongoDB</h3>
              <data className="skills-data" value="50">50%</data>
            </div>
            <div className="skills-progress-box">
              <div className="skills-progress" style={{ width: '50%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="wrapper" style={{ width: '70%' }}>
              <h3 className="skills-title">Python</h3>
              <data className="skills-data" value="75">75%</data>
            </div>
            <div className="skills-progress-box">
              <div className="skills-progress" style={{ width: '75%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="wrapper" style={{ width: '80%' }}>
              <h3 className="skills-title">PHP</h3>
              <data className="skills-data" value="50">50%</data>
            </div>
            <div className="skills-progress-box">
              <div className="skills-progress" style={{ width: '50%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="wrapper" style={{ width: '75%' }}>
              <h3 className="skills-title">JavaScript</h3>
              <data className="skills-data" value="55">55%</data>
            </div>
            <div className="skills-progress-box">
              <div className="skills-progress" style={{ width: '55%' }}></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
} 