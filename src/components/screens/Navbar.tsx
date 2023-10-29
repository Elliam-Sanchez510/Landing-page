import React from 'react';
import { Link, } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../image/foto.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='logo'>
            <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;