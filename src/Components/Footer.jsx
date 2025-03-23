// import React from 'react';
// import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaPhone, FaWhatsapp} from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/Footer.css'; // Importez votre fichier CSS personnalisé

// const Footer = () => {
//   return (
//     <footer className="footer-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <h5>Contact</h5>
//             <p><FaEnvelope /> <a href="mailto:landrytido727@gmail.com">landrytido727@gmail.com</a></p>
//             <p><FaMapMarkerAlt /> Bruxelles, Belgique</p>
//             <p><FaPhone /> <a href="tel:+1234567890">+32465362609</a></p>
//           </div>
//           <div className="col-md-4 text-center">
//             <h5>Suivez-moi</h5>
//             <div className="social-links">
//               <a href="https://linkedin.com/in/landry-tido-atikeng" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin className="social-icon" />
//               </a>
//               <a href="https://github.com/Landrytido" target="_blank" rel="noopener noreferrer">
//                 <FaGithub className="social-icon" />
//               </a>
//               <a href="mailto:landrytido727@gmail.com">
//                 <FaEnvelope className="social-icon" />
//               </a>
//               <a href="https://wa.me/+32465362609" target="_blank" rel="noopener noreferrer">
//                 <FaWhatsapp className="social-icon" />
//               </a>
//             </div>
//           </div>
//           <div className="col-md-4 text-md-end">
//             <button className="btn btn-scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <FaArrowUp />
//             </button>
//           </div>
//         </div>
//         <div className="row mt-4">
//           <div className="col-12 text-center">
//             <p>&copy; 2025 Landry Tido. Tous droits réservés.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <div className="footer-contact">
                        <h3 className="text-green">Contact</h3>
                        <p>
                            <FaEnvelope className="footer-icon" /> landrytido727@gmail.com
                        </p>
                        <p>
                            <span className="footer-icon">📍</span> Bruxelles, Belgique
                        </p>
                        <p>
                            <span className="footer-icon">📞</span> +32465362609
                        </p>
                    </div>

                    <div className="footer-social">
                        <h3 className="text-green">Suivez-moi</h3>
                        <div className="social-links">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                            <a href="mailto:landrytido727@gmail.com">
                                <FaEnvelope className="icon" />
                            </a>
                            <a href="https://wa.me/32465362609" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>© 2025 Landry Tido. Tous droits réservés.</p>
                </div>
            </div>

            <button className="scroll-top-btn" onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        </footer>
    );
};

export default Footer;