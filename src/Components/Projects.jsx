import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../Styles/Projects.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      image: "Projects/Projects2/Capture d'écran 2025-02-01 115521.png",
      description: "Description du projet 2"
    },
    {
      id: 3,
      title: "Projet 3",
      image: "Projects/Projects3/Capture d'écran 2025-02-01 121609.png",
      description: "Description du projet 3"
    },
    {
      id: 4,
      title: "Projet 4",
      image: "Projects/Projects4/Capture d'écran 2025-02-01 123754.png",
      description: "Description du projet 4"
    },
    {
      id: 5,
      title: "Projet 5",
      image: "Projects/Projects5/Capture d'écran 2025-02-01 132049.png",
      description: "Description du projet 5"
    }
  ];

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(null);
  };

  const handleKeyNavigation = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    
    // Auto-rotation
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Simuler un chargement des images
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener('keydown', handleKeyNavigation);
      clearInterval(interval);
    };
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

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  if (error) {
    return (
      <div className="alert alert-danger m-4">
        Une erreur est survenue : {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container container py-5">
        <h2 className="text-center mb-5 projects-title">Mes Projets</h2>
        <div 
          className="projects-carousel position-relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="d-flex justify-content-center align-items-center">
            {getVisibleProjects().map((project, idx) => (
              <div
                key={project.id}
                className={`project-card ${idx === 1 ? 'active' : 'side'}`}
                onClick={() => handleCardClick(project)}
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

          <div className="carousel-indicators mt-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-indicator ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Aller au projet ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={selectedProject.image} alt={selectedProject.title} className="img-fluid mb-3 modal-image" />
            <p>{selectedProject.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fermer
            </Button>
            <Button variant="primary" onClick={() => window.open(selectedProject.image, '_blank')}>
              Voir plus
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Projects;