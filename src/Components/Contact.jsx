import React, { useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../hooks/useTranslation';
import '../Styles/Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = t('contact.nameRequired');
        if (!formData.email) errors.email = t('contact.emailRequired');
        if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = t('contact.emailInvalid');
        if (!formData.message) errors.message = t('contact.messageRequired');
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            setSubmitStatus('pending');

            emailjs.sendForm(
                'service_n3hlcr8',
                'template_r98h0nn',
                form.current,
                'ekqY2nzD88f4w5vXZ'
            )
                .then((result) => {
                    console.log('Email envoyé avec succès!', result.text);
                    setFormData({ name: '', email: '', message: '' });
                    setSubmitStatus('success');
                    setTimeout(() => setSubmitStatus(null), 5000);
                })
                .catch((error) => {
                    console.error('Erreur lors de l\'envoi de l\'email:', error.text);
                    setSubmitStatus('error');
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="contact-heading">{t('contact.title')}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">{t('contact.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder={t('contact.namePlaceholder')}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {formErrors.name && <p className="error-text">{formErrors.name}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('contact.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder={t('contact.emailPlaceholder')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {formErrors.email && <p className="error-text">{formErrors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t('contact.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="5"
                                    placeholder={t('contact.messagePlaceholder')}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                {formErrors.message && <p className="error-text">{formErrors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? t('contact.sending') : t('contact.send')}
                            </button>
                            {submitStatus === 'success' && (
                                <div className="alert alert-success mt-3">
                                    {t('contact.successMessage')}
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="alert alert-danger mt-3">
                                    {t('contact.errorMessage')}
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-info">
                            <h3>{t('contact.socialNetworks')}</h3>
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
                            <h3>{t('contact.cvDownload')}</h3>
                            <a href="CV.pdf" className="btn btn-secondary" download aria-label="Télécharger CV">{t('hero.downloadCV')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;