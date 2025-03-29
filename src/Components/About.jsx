import React from 'react';
import { Code, GraduationCap } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from '../hooks/useTranslation';
import '../Styles/About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-heading">{t('about.title')}</h2>
        <p className="about-description">
          {t('about.description')}
        </p>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-card">
              <GraduationCap size={32} className="about-icon" />
              <h3 className="about-card-title">{t('about.career')}</h3>
              <ul className="about-list">
                <li className="about-list-item">
                  <strong>{t('about.education')}</strong>
                </li>
                <li className="about-list-item">
                  <p>{t('about.experience')}</p>
                </li>
                <li className="about-list-item">
                  <p>{t('about.projects')}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-card">
              <Code size={32} className="about-icon" />
              <h3 className="about-card-title">{t('about.interests')}</h3>
              <ul className="about-list">
                {t('about.interestsList').map((interest, index) => (
                  <li key={index} className="about-list-item">
                    <strong>{interest}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;