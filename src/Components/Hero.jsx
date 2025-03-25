// src/Components/Hero.jsx
import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../Styles/Hero.css';

const Hero = () => {
    useEffect(() => {
        // Animation de l'émoji
        const emojiElement = document.querySelector('.hero-emoji');
        if (emojiElement) {
            const animateEmoji = () => {
                emojiElement.classList.add('wave');
                setTimeout(() => {
                    emojiElement.classList.remove('wave');
                }, 1000);
            };

            // Animer toutes les 3 secondes
            animateEmoji();
            const interval = setInterval(animateEmoji, 3000);

            return () => clearInterval(interval);
        }
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles"></div>
            </div>

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
                        <br />
                        <span className="hero-accent">JavaScript | React | Java | UX/UI</span>
                    </p>

                    <div className="hero-buttons">
                        <div className="hero-main-actions">
                            <a href="/CV.pdf" className="cv-link" download aria-label="Télécharger CV">
                                <div className="cv-circle">
                                    <span className="cv-text">CV</span>
                                </div>
                            </a>

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
                        </div>

                        <Link
                            to="projects"
                            smooth={true}
                            duration={800}
                            className="scroll-down-link"
                            aria-label="Naviguer vers les projets"
                        >
                            <div className="scroll-down">
                                <span>Voir mes projets</span>
                                <FaArrowDown className="scroll-icon" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;