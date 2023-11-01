import React from 'react'
import '../styles/Footer.css'

import whatsapp from '../image/Whatsapp.png';
import telegram from '../image/telegram.png';
import gmail from '../image/gmail.png';
import linkedin from '../image/linkedin.png';
import github from '../image/github.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://web.whatsapp.com/=+50585960195" className="icon">
          </a>
          <a href="https://t.me/Snchez_510" target="_blank" className="icon">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="mailto:elliamsanchez510@gmail.com" target="_blank" className="icon">
            <img src={gmail} alt="gmail" />
          </a>
          <a href="https://www.linkedin.com/in/elliam-s%C3%A1nchez-958aaa269/" target="_blank" className="icon">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/Elliam-Sanchez510" target="_blank" className="icon">
            <img src={github} alt="github" />
          </a>
          <p className="copyright">Copyright &copy; 2023 Creado por Elliam Sánchez Aguirre.</p>
        </div>
      </div>
    </footer>
  )
}
