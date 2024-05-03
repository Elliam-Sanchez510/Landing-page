import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="Logo">Elliam Sánchez</div>
            <div className="Hamburger" onClick={toggleMenu}>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
            </div>
            <nav className={`nav-bar ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" className="crive">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
