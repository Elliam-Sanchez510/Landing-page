import React from 'react';
import '../styles/AutoEscrito.css'
import WelcomeSection from './Welcome';
import AboutMe from './AboutMe';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <WelcomeSection />
      <AboutMe />
    </>
  );
};

export default Home;