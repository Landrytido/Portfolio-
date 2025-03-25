import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaGitAlt, FaDatabase, FaBrain, FaEllipsisH } from 'react-icons/fa';
import '../Styles/Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="skills-heading">Compétences</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaHtml5 className="skill-icon" />
                            <h3 className="skill-title">HTML5</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaCss3Alt className="skill-icon" />
                            <h3 className="skill-title">CSS3</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaJava className="skill-icon" />
                            <h3 className="skill-title">Java</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '75%' }}>75%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaReact className="skill-icon" />
                            <h3 className="skill-title">React</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '65%' }}>65%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaGitAlt className="skill-icon" />
                            <h3 className="skill-title">Git</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaDatabase className="skill-icon" />
                            <h3 className="skill-title">Bases de données</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaBrain className="skill-icon" />
                            <h3 className="skill-title">I A</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="skill-card">
                            <FaEllipsisH className="skill-icon" />
                            <h3 className="skill-title">Autres</h3>
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
