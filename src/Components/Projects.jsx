import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Projects.css";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      image: "Projects/Projects1/photo1.jpg",
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

  return (
    <div className="projects-container container py-5">
      <div className="projects-carousel position-relative">
        <div className="d-flex justify-content-center align-items-center">
          {getVisibleProjects().map((project, idx) => (
            <div
              key={project.id}
              className={`project-card ${idx === 1 ? 'active' : 'side'}`}
            >
              <div className="project-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="carousel-control prev"
          aria-label="Previous"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="carousel-control next"
          aria-label="Next"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Projects;