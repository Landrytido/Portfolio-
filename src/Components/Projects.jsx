import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Projects.css";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      image: "Projects/Projects1/Capture d'écran 2025-02-01 113646.png",
      description: "Description du projet 1"
    },
    {
      id: 2,
      title: "Projet 2",
      image: "Projects/Projects2/photo2.jpg",
      description: "Description du projet 2"
    },
    {
      id: 3,
      title: "Projet 3",
      image: "Projects/Projects3/photo3.jpg",
      description: "Description du projet 3"
    },
    {
      id: 4,
      title: "Projet 4",
      image: "Projects/Projects4/photo4.jpg",
      description: "Description du projet 4"
    },
    {
      id: 5,
      title: "Projet 5",
      image: "Projects/Projects5/photo5.jpg",
      description: "Description du projet 5"
    }
  ];

  const handleKeyNavigation = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    return () => window.removeEventListener('keydown', handleKeyNavigation);
  }, [handleKeyNavigation]);

  const nextSlide = () => {
    setActiveIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const getVisibleProjects = () => {
    const result = [];
    const length = projects.length;
    const prevIndex = activeIndex === 0 ? length - 1 : activeIndex - 1;
    result.push(projects[prevIndex]);
    result.push(projects[activeIndex]);
    const nextIndex = activeIndex === length - 1 ? 0 : activeIndex + 1;
    result.push(projects[nextIndex]);
    return result;
  };

  if (error) {
    return (
      <div className="alert alert-danger m-4">
        Une erreur est survenue : {error}
      </div>
    );
  }

  return (
    <section id="projects" className="projects-section">
    <div className="projects-container container py-5">
      <h2 className="text-center mb-5 projects-title">Mes Projets</h2>
      <div className="projects-carousel position-relative">
        <div className="d-flex justify-content-center align-items-center">
          {getVisibleProjects().map((project, idx) => (
            <div
              key={project.id}
              className={`project-card ${idx === 1 ? 'active' : 'side'}`}
            >
              <div className="project-inner card">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image card-img-top"
                    loading="lazy"
                    onError={(e) => {
                      setError("Erreur de chargement de l'image");
                    }}
                  />
                  <div className="project-info card-img-overlay">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="carousel-control prev"
          aria-label="Projet précédent"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="carousel-control next"
          aria-label="Projet suivant"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
  );
};

export default Projects;