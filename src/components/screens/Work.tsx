import React from 'react';
import '../styles/Work.css';

const projects = [
  {
    id: 1,
    name: 'Project One',
    description: 'Description of the first project.',
    technologies: 'HTML, CSS, JavaScript, React',
    imageUrl: 'url_de_la_imagen_del_proyecto',
    status: 'en_desarrollo'
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'Description of the second project.',
    technologies: 'Python, Django, PostgreSQL',
    imageUrl: 'url_de_la_imagen_del_proyecto',
    status: 'en_desarrollo'
  }
];

const Work: React.FC = (): JSX.Element => {
  return (
    <div className="proyectos-container">
      <h1>Current Projects</h1>
      {projects.map((project) => (
        <div className="proyecto" key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Technologies used: {project.technologies}</p>
          {project.status === 'en_desarrollo' && <p>Project in development</p>}
        </div>
      ))}
    </div>
  );
};

export default Work;
