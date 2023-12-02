import React from 'react';
import '../styles/AboutMeParagraph.css';
import foto from '../image/foto.png';

const AboutMeParagraph: React.FC = () => {
  return (
    <div className="about-me-container">

      <div className="content-wrapper">
        <div className="text-content">
          <h2>Hello, I'm</h2>
          <h1>Elliam Sánchez</h1>
          <p>Hello, I'm Elliam Sánchez. A passionate front-end developer who specializes in <br />
            translating design concepts into simple, interactive web experiences using HTML, CSS.</p>

          <button className='download'>Download CV</button>
        </div>

        <div className="foto">
          <img src={foto} alt="foto" />
        </div>
      </div>

    </div>
  );
};

export default AboutMeParagraph;
