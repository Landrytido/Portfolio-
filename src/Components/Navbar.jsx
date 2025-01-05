import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importez Bootstrap JavaScript
import '../Styles/Navbar.css'; // Importez votre fichier CSS personnalisé

const Navbar = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuOpen && !event.target.closest('.navbar')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarTransparent ? 'navbar-transparent' : 'navbar-colored'}`}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <span className="navbar-logo">Web</span>
        </a>

        {/* Toggler Button for Mobile */}
        <button className="navbar-toggler" type="button" onClick={handleToggleMenu} aria-controls="navbarNav" aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon ${menuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Menu Items for Large Screens */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="hero" smooth={true} duration={500}>
                Accueil <i className="fas fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500}>
                À propos <i className="fas fa-info-circle"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={500}>
                Projets <i className="fas fa-project-diagram"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>
                Contact <i className="fas fa-envelope"></i>
              </Link>
            </li>
          </ul>
        </div>

        {/* Floating Menu for Mobile */}
        <div className={`floating-menu collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="hero" smooth={true} duration={500} onClick={handleLinkClick}>
                Accueil <i className="fas fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500} onClick={handleLinkClick}>
                À propos <i className="fas fa-info-circle"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={500} onClick={handleLinkClick}>
                Projets <i className="fas fa-project-diagram"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500} onClick={handleLinkClick}>
                Contact <i className="fas fa-envelope"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;