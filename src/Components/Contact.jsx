import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Nom requis';
    if (!formData.email) errors.email = 'Email requis';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email invalide';
    if (!formData.message) errors.message = 'Message requis';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Envoyer le formulaire
      console.log('Formulaire envoyé', formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Contactez-moi</h2>
        <div className="row">
          <div className="col-md-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {formErrors.name && <p className="error-text">{formErrors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && <p className="error-text">{formErrors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {formErrors.message && <p className="error-text">{formErrors.message}</p>}
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Réseaux sociaux</h3>
              <div className="social-links">
                <a href="https://linkedin.com/in/landry-tido-atikeng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com/Landrytido" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="social-icon" />
                </a>
                <a href="mailto:landrytido727@gmail.com" aria-label="Email">
                  <FaEnvelope className="social-icon" />
                </a>
                <a href="https://wa.me/+32465362609" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp className="social-icon" />
                </a>
              </div>
              <h3>Téléchargement du CV</h3>
              <a href="CV.pdf" className="btn btn-secondary" download aria-label="Télécharger CV">Télécharger CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;