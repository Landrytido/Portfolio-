// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link to="/">
            <span className="logo-text">Web</span>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={location.pathname === "/apropos" ? "active" : ""}>
              <Link to="/apropos">À propos</Link>
            </li>
            <li className={location.pathname === "/projets" ? "active" : ""}>
              <Link to="/projets">Projets</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
