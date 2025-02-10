import React from 'react';
import '../styles/Services.css';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Design and development of attractive and functional web interfaces, using the latest design trends and frontend technologies.'
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Creation of interactive and responsive user interfaces for websites, utilizing the latest frontend technologies.'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Frontend development of mobile applications for Android and iOS platforms, focusing on user experience and usability.'
  }
];

const Services: React.FC = (): JSX.Element => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
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
