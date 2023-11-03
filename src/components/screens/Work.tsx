import React from 'react';
import '../styles/Work.css';

const projects = [
  {
    id: 1,
    name: 'Proyecto Uno',
    description: 'Descripción del primer proyecto.',
    technologies: 'HTML, CSS, JavaScript, React',
    imageUrl: 'url_de_la_imagen_del_proyecto',
    status: 'en_desarrollo'
  },
  {
    id: 2,
    name: 'Proyecto Dos',
    description: 'Descripción del segundo proyecto.',
    technologies: 'Python, Django, PostgreSQL',
    imageUrl: 'url_de_la_imagen_del_proyecto',
    status: 'en_desarrollo'
  }
];

const Work: React.FC = (): JSX.Element => {
  return (
    <div className="proyectos-container">
      <h1>Proyectos Actuales</h1>
      {projects.map((project) => (
        <div className="proyecto" key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Tecnologías utilizadas: {project.technologies}</p>
          {project.status === 'en_desarrollo' && <p>Proyecto en desarrollo</p>}
        </div>
      ))}
    </div>
  );
};

export default Work;