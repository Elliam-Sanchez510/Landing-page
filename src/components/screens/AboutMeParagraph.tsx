import React from 'react';
import '../styles/AboutMeParagraph.css';
import foto from '../image/foto.png';

const AboutMeParagraph: React.FC = () => {
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
        </div>
        <div className="image-container">
        <img src={foto} alt="foto" />
        </div>

    </section>
  );
};

export default AboutMeParagraph;
