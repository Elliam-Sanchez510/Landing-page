import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/screens/Navbar';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Work from './components/screens/Work';
import Services from './components/screens/Services';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;