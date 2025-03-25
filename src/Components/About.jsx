import React from 'react';
import { Code, GraduationCap } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/About.css'; // Importez votre fichier CSS personnalisé

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-heading">À Propos</h2>
        <p className="about-description">
          Je suis un étudiant en dernière année de bachelier en informatique de gestion, passionné par le développement d'applications web et mobiles. Mon parcours académique m'a permis de développer des compétences solides en programmation, en analyse de données et en gestion de projets. J'aime relever des défis techniques et concevoir des solutions innovantes, notamment en utilisant des technologies modernes.
        </p>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-card">
              <GraduationCap size={32} className="about-icon" />
              <h3 className="about-card-title">Parcours</h3>
              <ul className="about-list">
                <li className="about-list-item">
                  <strong>2022 - 2025 : Bachelier en informatique de gestion à [nom de ton université]</strong>
                </li>
                <li className="about-list-item">
                  <p>Stage en développement d’applications web, où j'ai pu travailler avec des technologies comme Java, JavaScript et React.</p>
                </li>
                <li className="about-list-item">
                  <p>Participation à divers projets universitaires, incluant la création de sites web et d’applications mobiles pour des clients fictifs.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-card">
              <Code size={32} className="about-icon" />
              <h3 className="about-card-title">Centres d’intérêt</h3>
              <ul className="about-list">
                <li className="about-list-item">
                  <strong>Passionné par les technologies émergentes comme l'intelligence artificielle et le machine learning.</strong>
                </li>
                <li className="about-list-item">
                  <strong>Intérêt pour la musique, en particulier la guitare classique.</strong>
                </li>
                <li className="about-list-item">
                  <strong>Exploration des applications pratiques de l'informatique dans des domaines variés.</strong>
                </li>
                <li className="about-list-item">
                  <strong>Passionné par les jeux vidéo, notamment les jeux qui intègrent des éléments d'innovation technologique.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
