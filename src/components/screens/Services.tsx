import React from 'react';
import '../styles/Services.css';

const services = [
  {
    id: 1,
    title: 'Diseño Web',
    description: 'Diseño y desarrollo de interfaces web atractivas y funcionales, utilizando las últimas tendencias de diseño y tecnologías frontend.'
  },
  {
    id: 2,
    title: 'Desarrollo Frontend',
    description: 'Creación de interfaces de usuario interactivas y responsivas para sitios , utilizando las últimas tecnologías frontend.'
  },
  {
    id: 3,
    title: 'Desarrollo de Aplicaciones Móviles',
    description: 'Desarrollo frontend de aplicaciones móviles para plataformas Android e iOS, enfocándose en la experiencia del usuario y la usabilidad.'
  }
];


const Services: React.FC = (): JSX.Element => {
  return (
    <div className="services-container">
      <h1>Nuestros Servicios</h1>
      {services.map((service) => (
        <div className="service" key={service.id}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
