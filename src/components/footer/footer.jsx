import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by Grevano | All Rights Reserved.</p>
      </div>
      <div className="footer-socials">
         <a href="https://github.com/Grevano"><i className='bx bxl-github'></i></a>
         <a href="https://www.linkedin.com/in/grevano-geraldo-729a2b2a4/"><i className='bx bxl-linkedin'></i></a>
         <a href="https://www.instagram.com/grvn_gg/"><i className='bx bxl-instagram-alt'></i></a>
      </div>
    </footer>
  );
};

export default Footer;