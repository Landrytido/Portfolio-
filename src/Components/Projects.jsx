import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Projects.css';

const projects = [
  {
    title: "WATER BOTTLE",
    description: "A modern and sleek water bottle design.",
    image: "Projects/Projects1/photo1.jpg"
  },
  {
    title: "OLD CASSETTE",
    description: "A nostalgic look at old cassette tapes.",
    image: "Projects/Projects2/photo2.jpg"
  },
  {
    title: "OMNIS STYLIOUS",
    description: "A stylish and versatile accessory.",
    image: "Projects/Projects3/photo3.jpg"
  },
  {
    title: "MODERN CHAIR",
    description: "A comfortable and modern chair design.",
    image: "Projects/Projects4/photo4.jpg"
  },
  {
    title: "VINTAGE RADIO",
    description: "A vintage radio with a classic look.",
    image: "Projects/Projects5/photo5.jpg"
  },
  {
    title: "SMART WATCH",
    description: "A sleek and modern smart watch.",
    image: "Projects/Projects6/photo6.jpg"
  },
  {
    title: "LAPTOP",
    description: "A high-performance laptop.",
    image: "Projects/Projects7/photo7.jpg"
  },
  {
    title: "HEADPHONES",
    description: "Noise-cancelling headphones.",
    image: "Projects/Projects8/photo8.jpg"
  },
  {
    title: "CAMERA",
    description: "A professional-grade camera.",
    image: "Projects/Projects9/photo9.jpg"
  }
];

const Projects = () => {
  return (
    <Carousel>
      {projects.map((project, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={project.image}
            alt={project.title}
          />
          <Carousel.Caption>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Projects;