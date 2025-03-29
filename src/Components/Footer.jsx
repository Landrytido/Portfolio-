import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>{t('footer.contact')}</h5>
                        <p><FaEnvelope /> <a href="mailto:landrytido727@gmail.com">landrytido727@gmail.com</a></p>
                        <p><FaMapMarkerAlt /> {t('footer.location')}</p>
                        <p><FaPhone /> <a href="tel:+32465362609">+32465362609</a></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>{t('footer.followMe')}</h5>
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
                    </div>
                    <div className="col-md-4 text-md-end">
                        <button className="btn btn-scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p>{t('footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;