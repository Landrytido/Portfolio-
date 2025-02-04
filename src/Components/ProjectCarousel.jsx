import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../Styles/ProjectCarousel.css";

const projects = [
  {
    id: 1,
    title: "E-commerce Modern",
    description: "Une plateforme e-commerce avec une interface utilisateur moderne et intuitive. Notre solution offre une expérience d'achat fluide et personnalisée pour les clients.",
    image: "/Projects/Projects1/Capture1.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/ecommerce"
  },
  {
    id: 2,
    title: "Application Mobile",
    description: "Application mobile de suivi de fitness avec des fonctionnalités avancées de tracking et d'analyse des performances personnelles.",
    image: "/Projects/Projects2/Capture1.png",
    tags: ["React Native", "Firebase"],
    link: "https://example.com/fitness-app"
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Tableau de bord analytique pour entreprises permettant de visualiser et d'analyser les données importantes en temps réel.",
    image: "/Projects/Projects3/Capture1.png",
    tags: ["Vue.js", "D3.js", "AWS"],
    link: "https://example.com/dashboard"
  },
  {
    id: 4,
    title: "Portfolio Créatif",
    description: "Site web portfolio moderne mettant en valeur les projets et réalisations avec des animations fluides et une navigation intuitive.",
    image: "/Projects/Projects4/Capture1.png",
    tags: ["React", "Three.js", "GSAP"],
    link: "https://example.com/portfolio"
  },
  {
    id: 5,
    title: "Application de Réservation",
    description: "Système de réservation en ligne pour restaurants avec gestion des tables et des commandes en temps réel.",
    image: "/Projects/Projects5/Capture1.png",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    link: "https://example.com/booking"
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div id="projects" className="project-section d-flex flex-column">
      <h1 className="projects-title text-center my-4 pt-5">Mes Projets</h1> {/* Adjusted margin */}
      <div className="content-container d-flex">
        <div className="info-container p-5 d-flex flex-column justify-content-center position-relative">
          <div className={`project-content ${!isTransitioning ? 'visible' : ''}`}>
            <h2 className="display-4 fw-bold mb-4">{projects[currentIndex].title}</h2>
            <p className="lead text-light mb-4">{projects[currentIndex].description}</p>
            <div className="d-flex gap-2 mb-4">
              {projects[currentIndex].tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a 
              href={projects[currentIndex].link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg"
            >
              Voir le projet
            </a>
          </div>
          <button onClick={prevSlide} className="nav-arrow prev" aria-label="Projet précédent">
            <ChevronLeft />
          </button>
        </div>

        <div 
          className="background-image position-relative"
          style={{
            backgroundImage: `url(${projects[currentIndex].image})`
          }}
        >
          <button onClick={nextSlide} className="nav-arrow next" aria-label="Projet suivant">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="thumbnail-container d-flex justify-content-center gap-3 mt-1"> {/* Adjusted margin */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setCurrentIndex(index)}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Voir le projet ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid"
              onError={(e) => e.target.src = '/path/to/placeholder-image.png'}
            />
            <div className="thumbnail-overlay" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;