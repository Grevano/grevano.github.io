import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to discussions, collaborations, or simply sharing ideas. 
            Feel free to contact me through this platform. I'll respond as soon as possible!
          </p>
          <div className="info-box">
            <i className='bx bxs-envelope'></i>
            <span>grevano264@gmail.com</span>
          </div>
          <div className="info-box">
            <i className='bx bxs-map'></i>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Bagian Form Diganti Dengan Ini */}
        <div className="contact-actions">
          <h3>Let's Connect</h3>
          <p>Choose the easiest way to connect with me:</p>
          <a href="mailto:grevano264@gmail.com" className="btn action-btn">
            <i className='bx bxs-envelope'></i> E-mail
          </a>
          <a href="https://www.linkedin.com/in/grevano-geraldo-729a2b2a4/" target="_blank" rel="noopener noreferrer" className="btn action-btn linkedin">
            <i className='bx bxl-linkedin-square'></i> LinkedIn
          </a>
          <a href="https://github.com/Grevano" target="_blank" rel="noopener noreferrer" className="btn action-btn github">
            <i className='bx bxl-github'></i>GitHub
          </a>
        </div>
        {/* Akhir Bagian Pengganti Form */}

      </div>
    </section>
  );
};

export default Contact;