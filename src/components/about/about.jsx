import React from 'react';
import './about.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Web & Mobile Developer</h3>
          <p>
           I'm a web and mobile developer passionate about creating intuitive and responsive digital experiences. My core expertise lies in modern web development with React and cross-platform mobile apps with Flutter.
          </p>
        </div>
        <div className="about-skills">
          <h3>My Skills</h3>
          <div className="skills-grid">
            <div className="skill-item"><i className='bx bxl-html5'></i><span>HTML</span></div>
            <div className="skill-item"><i className='bx bxl-css3'></i><span>CSS</span></div>
            <div className="skill-item"><i className='bx bxl-javascript'></i><span>JavaScript</span></div>
            <div className="skill-item"><i className='bx bxl-react'></i><span>React.js</span></div>
            <div className="skill-item"><i className='bx bxl-flutter'></i><span>Flutter</span></div>
            <div className="skill-item"><i className='bx bxl-nodejs'></i><span>Node.js</span></div>
            <div className="skill-item"><i className='bx bxl-firebase'></i><span>Firebase</span></div>
            <div className="skill-item"><i className='bx bxl-mongodb'></i><span>MongoDB</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;