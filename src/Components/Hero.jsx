import React from 'react';
import '../Styles/Hero.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importez FontAwesome

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            CREA
            <div className="hero-emoji">
              <span role="img" aria-label="waving">
                🤓
              </span>
            </div>
            <span className="highlight">TIF</span>
          </h1>
          <h2 className="hero-subtitle">
            DÉVELOPPEUR WEB
          </h2>
          <p className="hero-text">
            Passionné par la création d'applications web modernes et réactives.
          </p>
          <div className="hero-buttons d-flex flex-column flex-md-row justify-content-between align-items-center">
            <a href="CV.pdf" className="cv-link mb-3 mb-md-0" download>
              <div className="cv-circle">
                <span className="cv-text">CV</span>
              </div>
            </a>
            <div className="social-links d-flex justify-content-center">
              <a href="https://linkedin.com/in/landry-tido-atikeng" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Landrytido" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:landrytido727@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://wa.me/+32465362609" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;