import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../hooks/useTranslation';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [navbarDark, setNavbarDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();

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
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    return (
        <>
            <nav className={`navbar ${navbarDark ? 'navbar-dark' : 'navbar-transparent'}`}>
                <div className="container">
                    <div className="navbar-brand">
                        <span className="logo-text">Landry.<span className="logo-highlight">T</span></span>
                    </div>
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
                            <span>{t('navbar.home')}</span>
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
                            <span>{t('navbar.about')}</span>
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
                            <span>{t('navbar.projects')}</span>
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
                            <span>{t('navbar.contact')}</span>
                        </Link>
                    </div>
                    <div className="navbar-controls">
                        <ThemeSwitcher />
                        <LanguageSwitcher />
                        <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-container">
                    <div className="mobile-nav-links">
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
                            <span>{t('navbar.home')}</span>
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
                            <span>{t('navbar.about')}</span>
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
                            <span>{t('navbar.projects')}</span>
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
                            <span>{t('navbar.contact')}</span>
                        </Link>
                    </div>
                    <div className="mobile-menu-footer">
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;