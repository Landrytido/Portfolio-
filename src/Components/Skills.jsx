import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaGitAlt, FaDatabase, FaBrain, FaEllipsisH } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import '../Styles/Skills.css';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="skills-heading">{t('skills.title')}</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaHtml5 className="skill-icon" />
                            <h3 className="skill-title">{t('skills.html')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaCss3Alt className="skill-icon" />
                            <h3 className="skill-title">{t('skills.css')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaJava className="skill-icon" />
                            <h3 className="skill-title">{t('skills.java')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '75%' }}>75%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaReact className="skill-icon" />
                            <h3 className="skill-title">{t('skills.react')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '65%' }}>65%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaGitAlt className="skill-icon" />
                            <h3 className="skill-title">{t('skills.git')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaDatabase className="skill-icon" />
                            <h3 className="skill-title">{t('skills.database')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaBrain className="skill-icon" />
                            <h3 className="skill-title">{t('skills.ai')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaEllipsisH className="skill-icon" />
                            <h3 className="skill-title">{t('skills.others')}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '99%' }}>99%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;