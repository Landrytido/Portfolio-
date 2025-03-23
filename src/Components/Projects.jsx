// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const projects = [
//   {
//     id: 1,
//     title: "E-commerce Modern",
//     description: "Une plateforme e-commerce avec une interface utilisateur moderne et intuitive. Notre solution offre une expérience d'achat fluide et personnalisée pour les clients.",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
//     tags: ["React", "Node.js", "MongoDB"],
//     link: "https://example.com/ecommerce"
//   },
//   {
//     id: 2,
//     title: "Application Mobile",
//     description: "Application mobile de suivi de fitness avec des fonctionnalités avancées de tracking et d'analyse des performances personnelles.",
//     image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1600",
//     tags: ["React Native", "Firebase"],
//     link: "https://example.com/fitness-app"
//   },
//   {
//     id: 3,
//     title: "Dashboard Analytics",
//     description: "Tableau de bord analytique pour entreprises permettant de visualiser et d'analyser les données importantes en temps réel.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
//     tags: ["Vue.js", "D3.js", "AWS"],
//     link: "https://example.com/dashboard"
//   },
//   {
//     id: 4,
//     title: "Portfolio Créatif",
//     description: "Site web portfolio moderne mettant en valeur les projets et réalisations avec des animations fluides et une navigation intuitive.",
//     image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1600",
//     tags: ["React", "Three.js", "GSAP"],
//     link: "https://example.com/portfolio"
//   },
//   {
//     id: 5,
//     title: "Application de Réservation",
//     description: "Système de réservation en ligne pour restaurants avec gestion des tables et des commandes en temps réel.",
//     image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600",
//     tags: ["Next.js", "PostgreSQL", "Stripe"],
//     link: "https://example.com/booking"
//   }
// ];

// const ProjectCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentIndex((prev) => (prev + 1) % projects.length);
//       setTimeout(() => setIsTransitioning(false), 500);
//     }
//   };

//   const prevSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//       setTimeout(() => setIsTransitioning(false), 500);
//     }
//   };

//   return (
//     <div className="project-section">
//       <h2 className="section-title text-center mb-5">Mes Projets</h2>
//       <div 
//         className="background-image"
//         style={{
//           backgroundImage: `url(${projects[currentIndex].image})`
//         }}
//       />

//       <div className="content-overlay">
//         <div className="container h-100">
//           <div className="row h-100 align-items-center">
//             <div className="col-lg-8 col-md-10 mx-auto">
//               <div className={`project-content ${!isTransitioning ? 'visible' : ''}`}>
//                 <h2 className="display-4 fw-bold mb-4">{projects[currentIndex].title}</h2>
//                 <p className="lead text-light mb-4">{projects[currentIndex].description}</p>
//                 <div className="d-flex flex-wrap gap-2 mb-4">
//                   {projects[currentIndex].tags.map((tag, index) => (
//                     <span key={index} className="tag">{tag}</span>
//                   ))}
//                 </div>
//                 <a 
//                   href={projects[currentIndex].link} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="btn btn-primary btn-lg"
//                 >
//                   Voir le projet
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="thumbnail-container">
//           <div className="thumbnail-scroll">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="img-fluid"
//                 />
//                 <div className="thumbnail-overlay" />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button onClick={prevSlide} className="nav-arrow prev d-none d-md-flex">
//           <ChevronLeft size={24} />
//         </button>
//         <button onClick={nextSlide} className="nav-arrow next d-none d-md-flex">
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCarousel;

// components/Projects.js
import React, { useState } from 'react';

const projectsData = [
    {
        id: 1,
        title: 'Application de Gestion',
        category: 'web',
        image: '/images/project1.jpg',
        description: 'Application web de gestion des stocks et des commandes développée avec React et Node.js.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://github.com/username/project1'
    },
    {
        id: 2,
        title: 'Portfolio Dynamique',
        category: 'web',
        image: '/images/project2.jpg',
        description: 'Portfolio personnel développé avec React et des animations CSS avancées.',
        technologies: ['React', 'CSS3', 'JavaScript'],
        link: 'https://github.com/username/project2'
    },
    {
        id: 3,
        title: 'Application Mobile de Fitness',
        category: 'mobile',
        image: '/images/project3.jpg',
        description: 'Application mobile permettant de suivre ses entraînements et son alimentation.',
        technologies: ['React Native', 'Firebase', 'Redux'],
        link: 'https://github.com/username/project3'
    },
    {
        id: 4,
        title: 'Chatbot IA',
        category: 'ia',
        image: '/images/project4.jpg',
        description: 'Chatbot intelligent utilisant le traitement du langage naturel pour répondre aux questions des utilisateurs.',
        technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
        link: 'https://github.com/username/project4'
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section className="projects-section">
            <h2 className="section-title text-green">Mes Projets</h2>

            <div className="project-filters">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    Tous
                </button>
                <button
                    className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                    onClick={() => setFilter('web')}
                >
                    Web
                </button>
                <button
                    className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
                    onClick={() => setFilter('mobile')}
                >
                    Mobile
                </button>
                <button
                    className={`filter-btn ${filter === 'ia' ? 'active' : ''}`}
                    onClick={() => setFilter('ia')}
                >
                    IA
                </button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
