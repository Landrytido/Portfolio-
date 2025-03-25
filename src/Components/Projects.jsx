// src/Components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../Styles/Projects.css';

const projects = [
    {
        id: 1,
        title: "E-commerce Modern",
        description: "Une plateforme e-commerce avec une interface utilisateur moderne et intuitive. Notre solution offre une expérience d'achat fluide et personnalisée pour les clients.",
        image: "/Projects/Projects1/Capture1.png", // Utiliser des images locales
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://example.com/ecommerce",
        github: "https://github.com/Landrytido/ecommerce-project"
    },
    {
        id: 2,
        title: "Application Mobile",
        description: "Application mobile de suivi de fitness avec des fonctionnalités avancées de tracking et d'analyse des performances personnelles.",
        image: "/Projects/Projects2/Capture1.png",
        tags: ["React Native", "Firebase"],
        link: "https://example.com/fitness-app",
        github: "https://github.com/Landrytido/fitness-app"
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        description: "Tableau de bord analytique pour entreprises permettant de visualiser et d'analyser les données importantes en temps réel.",
        image: "/Projects/Projects3/Capture1.png",
        tags: ["Vue.js", "D3.js", "AWS"],
        link: "https://example.com/dashboard",
        github: "https://github.com/Landrytido/analytics-dashboard"
    },
    {
        id: 4,
        title: "Portfolio Créatif",
        description: "Site web portfolio moderne mettant en valeur les projets et réalisations avec des animations fluides et une navigation intuitive.",
        image: "/Projects/Projects4/Capture1.png",
        tags: ["React", "Three.js", "GSAP"],
        link: "https://example.com/portfolio",
        github: "https://github.com/Landrytido/portfolio"
    },
    {
        id: 5,
        title: "Application de Réservation",
        description: "Système de réservation en ligne pour restaurants avec gestion des tables et des commandes en temps réel.",
        image: "/Projects/Projects5/Capture1.png",
        tags: ["Next.js", "PostgreSQL", "Stripe"],
        link: "https://example.com/booking",
        github: "https://github.com/Landrytido/booking-app"
    }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

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

    const openProjectDetails = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="project-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">Mes Projets</h2>

                <div className="position-relative project-showcase">
                    {/* Image de fond avec overlay */}
                    <div
                        className="background-image"
                        style={{
                            backgroundImage: `url(${projects[currentIndex].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />

                    <div className="content-overlay">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-8 col-md-10 mx-auto">
                                    <div className={`project-content ${!isTransitioning ? 'visible' : ''}`}>
                                        <h2 className="display-4 fw-bold mb-4">{projects[currentIndex].title}</h2>
                                        <p className="lead text-light mb-4">{projects[currentIndex].description}</p>
                                        <div className="d-flex flex-wrap gap-2 mb-4">
                                            {projects[currentIndex].tags.map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a
                                                href={projects[currentIndex].link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-lg"
                                            >
                                                Voir le projet
                                            </a>
                                            <button
                                                className="btn btn-outline-light btn-lg"
                                                onClick={() => openProjectDetails(projects[currentIndex])}
                                            >
                                                Plus de détails
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation des slides */}
                        <button onClick={prevSlide} className="nav-arrow prev d-none d-md-flex">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className="nav-arrow next d-none d-md-flex">
                            <ChevronRight size={24} />
                        </button>

                        {/* Miniatures de navigation */}
                        <div className="thumbnail-container">
                            <div className="thumbnail-scroll">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="img-fluid"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/100x65?text=Image';
                                            }}
                                        />
                                        <div className="thumbnail-overlay" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de détails du projet */}
            {selectedProject && (
                <div className="project-modal" onClick={closeProjectDetails}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="project-modal-header">
                            <h3>{selectedProject.title}</h3>
                            <button className="close-button" onClick={closeProjectDetails}>&times;</button>
                        </div>
                        <div className="project-modal-body">
                            <div className="project-gallery">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="project-main-image"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/800x400?text=Image+non+disponible';
                                    }}
                                />
                                <div className="project-gallery-thumbs">
                                    {[1, 2, 3, 4].map((num) => (
                                        <img
                                            key={num}
                                            src={`/Projects/Projects${selectedProject.id}/Capture${num}.png`}
                                            alt={`${selectedProject.title} - Vue ${num}`}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/100x100?text=Image';
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="project-info">
                                <p>{selectedProject.description}</p>
                                <div className="project-tags">
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        Voir le site
                                    </a>
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        Code source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;