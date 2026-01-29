import React, { useEffect, useRef } from 'react';
import './About.css';
import profileImage from '../assets/profile.png';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    'Python', 'JavaScript', 'React', 'Node.js',
    'HTML/CSS', 'Java', 'SQL', 'Git'
  ];

  return (
    <section id="about" ref={sectionRef} className="fade-in">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hi! I'm Daanyaal, a computer science student who enjoys turning ideas into efficient and meaningful software solutions.</p>
          <p>My interests include software development and web technologies, and I'm actively learning how to use AI tools to increase productivity and support problem-solving in my projects.</p>
          <p>In my free time, I work on personal projects, improve my coding skills, and keep up with emerging technologies.</p>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img
            src={profileImage}
            alt="Daanyaal profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
