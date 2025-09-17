import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import About from './components/about/about.jsx';
import Projects from './components/project/project.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;