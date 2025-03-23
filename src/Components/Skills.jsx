// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaGitAlt, FaDatabase, FaBrain, FaEllipsisH } from 'react-icons/fa';
// import '../Styles/Skills.css';

// const Skills = () => {
//   return (
//     <section id="skills" className="skills-section">
//       <div className="container">
//         <h2 className="skills-heading">Compétences</h2>
//         <div className="row">
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaHtml5 className="skill-icon" />
//               <h3 className="skill-title">HTML5</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '85%' }}>85%</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaCss3Alt className="skill-icon" />
//               <h3 className="skill-title">CSS3</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '85%' }}>85%</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaJava className="skill-icon" />
//               <h3 className="skill-title">Java</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '75%' }}>75%</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaReact className="skill-icon" />
//               <h3 className="skill-title">React</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '65%' }}>65%</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaGitAlt className="skill-icon" />
//               <h3 className="skill-title">Git</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '70%' }}>70%</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaDatabase className="skill-icon" />
//               <h3 className="skill-title">Bases de données</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '70%' }}>70%</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaBrain className="skill-icon" />
//               <h3 className="skill-title">I A</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '70%' }}>70%</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="skill-card">
//               <FaEllipsisH className="skill-icon" />
//               <h3 className="skill-title">Autres</h3>
//               <div className="progress">
//                 <div className="progress-bar" style={{ width: '99%' }}>99%</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// components/Skills.js
import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaGitAlt, FaDatabase, FaBrain, FaEllipsisH } from 'react-icons/fa';

const SkillBar = ({ icon, name, percentage }) => {
    const barRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !animated) {
                    setAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => {
            if (barRef.current) {
                observer.unobserve(barRef.current);
            }
        };
    }, [animated]);

    return (
        <div className="skill-card" ref={barRef}>
            {icon}
            <h3 className="text-green">{name}</h3>
            <div className="skill-bar-container">
                <div
                    className={`skill-bar ${animated ? 'animated' : ''}`}
                    style={{ width: animated ? `${percentage}%` : '0%' }}
                >
                    <span className="skill-percentage">{percentage}%</span>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { id: 1, name: 'HTML5', icon: <FaHtml5 className="skill-icon html-icon" />, percentage: 85 },
        { id: 2, name: 'CSS3', icon: <FaCss3Alt className="skill-icon css-icon" />, percentage: 85 },
        { id: 3, name: 'Java', icon: <FaJava className="skill-icon java-icon" />, percentage: 75 },
        { id: 4, name: 'React', icon: <FaReact className="skill-icon react-icon" />, percentage: 65 },
        { id: 5, name: 'Git', icon: <FaGitAlt className="skill-icon git-icon" />, percentage: 70 },
        { id: 6, name: 'Bases de données', icon: <FaDatabase className="skill-icon db-icon" />, percentage: 70 },
        { id: 7, name: 'I.A.', icon: <FaBrain className="skill-icon ai-icon" />, percentage: 70 },
        { id: 8, name: 'Autres', icon: <FaEllipsisH className="skill-icon other-icon" />, percentage: 95 },
    ];

    return (
        <section className="skills-section">
            <h2 className="section-title text-green">Compétences</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <SkillBar
                        key={skill.id}
                        icon={skill.icon}
                        name={skill.name}
                        percentage={skill.percentage}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;