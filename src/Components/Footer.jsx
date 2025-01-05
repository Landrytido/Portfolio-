import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css'; // Importez votre fichier CSS personnalisé

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact</h5>
            <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
            <p>Téléphone: <a href="tel:+1234567890">+1234567890</a></p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Suivez-moi</h5>
            <div className="social-links">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="mailto:example@example.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>&copy; 2023 Votre Nom. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;