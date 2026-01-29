import React from 'react';
import './Navigation.css';

function Navigation({ activeSection }) {
  const handleClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleClick(e, '#contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
