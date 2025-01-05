import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css'; // Importez votre fichier CSS personnalisé

const Navbar = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarTransparent ? 'navbar-transparent' : 'navbar-colored'}`}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <span className="navbar-logo">Web</span>
        </a>

        {/* Toggler Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="hero" smooth={true} duration={500}>Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500}>À propos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={500}>Projets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;