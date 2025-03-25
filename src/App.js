// src/App.js
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Styles/theme.css";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialiser AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
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
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
