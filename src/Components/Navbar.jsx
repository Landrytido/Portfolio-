// src/Components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [navbarDark, setNavbarDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setNavbarDark(true);
        } else {
            setNavbarDark(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur d'événement
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${navbarDark ? 'navbar-dark' : 'navbar-transparent'}`}>
                <div className="container">
                    <div className="navbar-brand">
                        <span className="logo-text">Landry.<span className="logo-highlight">T</span></span>
                    </div>

                    <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <div className="navbar-links">
                        <Link
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-item"
                            activeClass="active"
                        >
                            <FaHome className="nav-icon" />
                            <span>Accueil</span>
                        </Link>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-item"
                            activeClass="active"
                        >
                            <FaUser className="nav-icon" />
                            <span>À propos</span>
                        </Link>

                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-item"
                            activeClass="active"
                        >
                            <FaCode className="nav-icon" />
                            <span>Projets</span>
                        </Link>

                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-item"
                            activeClass="active"
                        >
                            <FaEnvelope className="nav-icon" />
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Menu mobile */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-container">
                    <Link
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="mobile-nav-item"
                        activeClass="active"
                        onClick={closeMenu}
                    >
                        <FaHome className="mobile-nav-icon" />
                        <span>Accueil</span>
                    </Link>

                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="mobile-nav-item"
                        activeClass="active"
                        onClick={closeMenu}
                    >
                        <FaUser className="mobile-nav-icon" />
                        <span>À propos</span>
                    </Link>

                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="mobile-nav-item"
                        activeClass="active"
                        onClick={closeMenu}
                    >
                        <FaCode className="mobile-nav-icon" />
                        <span>Projets</span>
                    </Link>

                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="mobile-nav-item"
                        activeClass="active"
                        onClick={closeMenu}
                    >
                        <FaEnvelope className="mobile-nav-icon" />
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;