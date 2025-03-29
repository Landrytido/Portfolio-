import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import '../Styles/Projects.css';

const Projects = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = t('projects.projectsList');

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % projects.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [isTransitioning, projects.length]);

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

    const currentProject = projects[currentIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section id="projects" className="project-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">{t('projects.title')}</h2>

                <div className="position-relative project-showcase">
                    <div
                        className="background-image"
                        style={{
                            backgroundImage: `url(${currentProject.image || `/Projects/Projects${currentProject.id}/Capture1.png`})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />

                    <div className="content-overlay">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-8 col-md-10 mx-auto">
                                    <div className={`project-content ${!isTransitioning ? 'visible' : ''}`}>
                                        <h2 className="display-4 fw-bold mb-4">{currentProject.title}</h2>
                                        <p className="lead text-light mb-4">{currentProject.description}</p>
                                        <div className="d-flex flex-wrap gap-2 mb-4">
                                            {currentProject.tags.map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a
                                                href={currentProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary btn-lg"
                                            >
                                                {t('projects.viewProject')}
                                            </a>
                                            <button
                                                className="btn btn-outline-light btn-lg"
                                                onClick={() => openProjectDetails(currentProject)}
                                            >
                                                {t('projects.moreDetails')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button onClick={prevSlide} className="nav-arrow prev d-none d-md-flex">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className="nav-arrow next d-none d-md-flex">
                            <ChevronRight size={24} />
                        </button>

                        <div className="thumbnail-container">
                            <div className="thumbnail-scroll">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                                    >
                                        <img
                                            src={project.image || `/Projects/Projects${project.id}/Capture1.png`}
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

            {
                selectedProject && (
                    <div className="project-modal" onClick={closeProjectDetails}>
                        <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="project-modal-header">
                                <h3>{selectedProject.title}</h3>
                                <button className="close-button" onClick={closeProjectDetails}>&times;</button>
                            </div>
                            <div className="project-modal-body">
                                <div className="project-gallery">
                                    <img
                                        src={selectedProject.image || `/Projects/Projects${selectedProject.id}/Capture1.png`}
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
                                            {t('projects.viewSite')}
                                        </a>
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-secondary"
                                        >
                                            {t('projects.sourceCode')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                )}
        </section >
    );
};

export default Projects;