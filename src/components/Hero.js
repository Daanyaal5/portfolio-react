import React from 'react';
import './Hero.css';

function Hero() {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="bg-animation">
        {[...Array(8)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <div className="hero-content">
        <h1>Daanyaal Haroon</h1>
        <p>Computer Science Student & Aspiring Developer</p>
        <a href="#projects" className="cta-button" onClick={handleClick}>
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
