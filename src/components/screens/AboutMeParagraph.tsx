import React from 'react';
import '../styles/AboutMeParagraph.css';
import foto from '../image/foto.png';

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
      </div>

      <div className="image-container">
        <img src={foto} alt="foto" />
      </div>

    </section>
  );
};

export default AboutMeParagraph;
