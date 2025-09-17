import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hello!, </h1>
        <h1>I'm Grevano</h1>
        <h3>
          And I'm a{' '}
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'Mobile Developer',
              2000
            ]}
            wrapper="span"
            speed={50}
            style={{ color: 'var(--main-color)' }}
            repeat={Infinity}
          />
        </h3>
        <p>Welcome to my creative space. Come explore my projects and expertise.</p>
        <div className="social-media">
          <a href="https://github.com/Grevano"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/grevano-geraldo-729a2b2a4/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://www.instagram.com/grvn_gg/"><i className='bx bxl-instagram-alt'></i></a>
        </div>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
       {/* Animated Shapes */}
      <div className="shapes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;