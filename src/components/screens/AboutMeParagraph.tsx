import React from 'react';
import '../styles/AboutMeParagraph.css';
import foto from '../image/foto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const AboutMeParagraph: React.FC = () => {

  const enlaceGoogleDrive: string = "https://drive.google.com/file/d/1hC_sMRX-Gd3pMQYI1KXa37SI_crvMMBE/view";

  const descargarCV = () => {
    window.open(enlaceGoogleDrive, '_blank');
  };

  const copiarEmail = () => {
    const email = 'elliamsanchez510@gmail.com';
    navigator.clipboard.writeText(email);
    alert('Dirección de correo electrónico copiada: ' + email);
  };

  return (
    <section id="home" className="home">
      <div className="content">
        <h3>Hi, Everyone!</h3>
        <h1>I'm <span>Elliam Sánchez</span></h1>
        <h3>Frontend Developer</h3>

        <p>
          A passionate front-end developer who specializes in translating
          design concepts into simple, interactive web experiences using
          HTML, CSS, Javascript, React, React Native, Nextjs.
        </p>

        <div className='email'>
          <input type="text" value="elliamsanchez510@gmail.com" readOnly />
          <button className='copy-button' onClick={copiarEmail}>Copiar</button>
        </div>

        <button className='button' onClick={descargarCV}>Descargar CV</button>

        <div className="contact-section">
          <a href="https://wa.me/85960195" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
          <a href="https://github.com/Elliam-Sanchez510" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/elliam-s%C3%A1nchez-958aaa269/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="https://www.instagram.com/sanchez.elliam28/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </div>
      </div>

      <div className="image-container">
        <img src={foto} alt="foto" />
      </div>
    </section>
  );
};

export default AboutMeParagraph;
