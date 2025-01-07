import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Projects.css'; 

const ProjectCards = () => {
  const projects = [
    { id: 1, title: 'WATER BOTTLE', description: 'Click to see the details of this project', image: 'image1.jpg' },
    { id: 2, title: 'OLD CASSETTE', description: 'Click to see the details of this project', image: 'image2.jpg' },
    { id: 3, title: 'OMNIS STYLIOUS', description: 'Click to see the details of this project', image: 'image3.jpg' },
  ];

  return (
    <section className="projects-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">Selected Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mt-4">SEE ALL</button>
      </div>
    </section>
  );
};

export default ProjectCards;


