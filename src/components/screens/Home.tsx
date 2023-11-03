import React from 'react';
import '../styles/AutoEscrito.css'
import AboutMe from './AboutMeParagraph';
import Footer from './Footer';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <AboutMe />
      <Footer/>
    </>
  );
};

export default Home;