import React, { useState } from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section id="projects" className="projects">
      <h2>Projets réalisés</h2>
      <div className="project-list">
        <div className="project-card">Projet 1</div>
        <div className="project-card">Projet 2</div>
        <div className="project-card">Projet 3</div>
        {showMore && (
          <>
            <div className="project-card">Projet 4</div>
            <div className="project-card">Projet 5</div>
          </>
        )}
      </div>
      <button onClick={toggleShowMore}>{showMore ? 'Voir moins' : 'Voir plus'}</button>
    </section>
  );
};

export default Projects;