// src/App.js - Version améliorée
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen"; // Nouveau composant à créer
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialiser les animations AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Simuler un temps de chargement pour montrer l'écran de chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="app">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
