import React from 'react';
import '../styles/AboutMeParagraph.css';

const AboutMeParagraph: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="interactive-paragraph">
        <p>
          "¡Hola! Mi nombre es <span className="highlight">Elliam Sánchez</span> soy una persona apasionada por el desarrollo frontend
          y la creación de experiencias web impactantes. Aunque no he tenido experiencia laboral formal,
          he invertido tiempo y esfuerzo en desarrollar mis habilidades y conocimientos en este campo.
        </p>
      </div>

      <div className="interactive-paragraph">
        <p>
          A lo largo de mi trayectoria, he explorado diferentes tecnologías y herramientas relacionadas
          con el desarrollo frontend, como HTML, CSS y JavaScript, así como frameworks populares como React
          y Vue.js. He trabajado en diversos proyectos personales que me han permitido adquirir experiencia
          práctica y mejorar mis habilidades en la creación de interfaces de usuario atractivas y funcionales.
        </p>
      </div>

      <div className="interactive-paragraph">
        <p>
          Soy una persona creativa, curiosa y orientada a los detalles. Me gusta estar al tanto de las últimas
          tendencias y mejores prácticas en desarrollo frontend, y disfruto explorando nuevas técnicas para
          mejorar la calidad y la eficiencia de mi trabajo.
        </p>
      </div>

    </div>
  );
};

export default AboutMeParagraph;
