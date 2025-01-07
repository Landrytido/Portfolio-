import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Contactez-moi</h2>
        <div className="row">
          <div className="col-md-6">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" className="form-control" placeholder="Votre nom" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Votre email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" rows="5" placeholder="Votre message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Réseaux sociaux</h3>
              <div className="social-links">
                <a href="https://linkedin.com/in/landry-tido-atikeng" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com/Landrytido" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href="mailto:landrytido727@gmail.com">
                  <FaEnvelope className="social-icon" />
                </a>
                <a href="https://wa.me/+32465362609" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="social-icon" />
                </a>
              </div>
              <h3>Téléchargement du CV</h3>
              <a href="CV.pdf" className="btn btn-secondary" download>Télécharger CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;