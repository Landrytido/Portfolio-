import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;