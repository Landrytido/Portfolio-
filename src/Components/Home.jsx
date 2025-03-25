// // components/Home.js
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// const Home = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 300);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className={`home-section ${visible ? "visible" : ""}`}>
//       <div className="home-content">
//         <h1>
//           <span className="text-white">CREA</span>
//           <span className="emoji">😎</span>
//           <span className="text-green">TIF</span>
//         </h1>
//         <h2 className="text-green">DÉVELOPPEUR WEB</h2>
//         <p className="home-description">
//           Passionné par la création d'applications web modernes et réactives.
//         </p>
//         <div className="home-actions">
//           <Link to="/contact" className="cv-button">
//             CV
//           </Link>
//           <div className="social-links">
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin className="icon" />
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub className="icon" />
//             </a>
//             <a href="mailto:landrytido727@gmail.com">
//               <FaEnvelope className="icon" />
//             </a>
//             <a
//               href="https://wa.me/32465362609"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaWhatsapp className="icon" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
