// import React, { useState } from 'react';
// import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
// import '../Styles/Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [formErrors, setFormErrors] = useState({});

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name) errors.name = 'Nom requis';
//     if (!formData.email) errors.email = 'Email requis';
//     if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email invalide';
//     if (!formData.message) errors.message = 'Message requis';
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     if (Object.keys(errors).length === 0) {
//       // Envoyer le formulaire
//       console.log('Formulaire envoyé', formData);
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="container">
//         <h2 className="contact-heading">Contactez-moi</h2>
//         <div className="row">
//           <div className="col-md-6">
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Nom</label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="form-control"
//                   placeholder="Votre nom"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 {formErrors.name && <p className="error-text">{formErrors.name}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="form-control"
//                   placeholder="Votre email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 {formErrors.email && <p className="error-text">{formErrors.email}</p>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   className="form-control"
//                   rows="5"
//                   placeholder="Votre message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//                 {formErrors.message && <p className="error-text">{formErrors.message}</p>}
//               </div>
//               <button type="submit" className="btn btn-primary">Envoyer</button>
//             </form>
//           </div>
//           <div className="col-md-6">
//             <div className="contact-info">
//               <h3>Réseaux sociaux</h3>
//               <div className="social-links">
//                 <a href="https://linkedin.com/in/landry-tido-atikeng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                   <FaLinkedin className="social-icon" />
//                 </a>
//                 <a href="https://github.com/Landrytido" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//                   <FaGithub className="social-icon" />
//                 </a>
//                 <a href="mailto:landrytido727@gmail.com" aria-label="Email">
//                   <FaEnvelope className="social-icon" />
//                 </a>
//                 <a href="https://wa.me/+32465362609" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
//                   <FaWhatsapp className="social-icon" />
//                 </a>
//               </div>
//               <h3>Téléchargement du CV</h3>
//               <a href="CV.pdf" className="btn btn-secondary" download aria-label="Télécharger CV">Télécharger CV</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// components/Contact.js
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaDownload, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pourriez ajouter la logique d'envoi du formulaire vers un backend
        alert('Message envoyé ! (Simulation)');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact-section">
            <h2 className="section-title text-green">Contactez-moi</h2>

            <div className="contact-container">
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Votre nom"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Votre email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Votre message"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="form-submit-btn">ENVOYER</button>
                    </form>
                </div>

                <div className="contact-info">
                    <div className="contact-info-section">
                        <h3 className="text-white">Réseaux sociaux</h3>
                        <div className="social-links-large">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                            <a href="mailto:landrytido727@gmail.com">
                                <FaEnvelope className="icon" />
                            </a>
                            <a href="https://wa.me/32465362609" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="icon" />
                            </a>
                        </div>
                    </div>

                    <div className="contact-info-section">
                        <h3 className="text-white">Téléchargement du CV</h3>
                        <a href="/cv.pdf" download className="cv-download-btn">
                            <FaDownload /> TÉLÉCHARGER CV
                        </a>
                    </div>

                    <div className="contact-details">
                        <p>
                            <FaEnvelope className="contact-icon" /> landrytido727@gmail.com
                        </p>
                        <p>
                            <FaMapMarkerAlt className="contact-icon" /> Bruxelles, Belgique
                        </p>
                        <p>
                            <FaPhone className="contact-icon" /> +32465362609
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;