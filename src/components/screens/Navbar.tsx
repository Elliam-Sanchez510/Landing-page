import React, { useState } from 'react';
import '../styles/Navbar.css';

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
                    <li><a href="/" className="crive">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
