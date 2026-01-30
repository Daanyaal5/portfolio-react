import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

function Projects() {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const projects = [
    {
      title: 'My Tasks - Todo App',
      tags: ['HTML', 'CSS (Tailwind)', 'JavaScript', 'LocalStorage'],
      description: 'A modern, feature-rich todo application with full CRUD functionality, category-based organization, filtering, and local storage persistence. Works completely offline with a clean, responsive, mobile-friendly interface.',
      link: 'https://github.com/Daanyaal5/to-do_app_list/tree/main'
    },/*
    {
      title: 'Weather Dashboard',
      tags: ['JavaScript', 'API', 'HTML/CSS'],
      description: 'Interactive weather dashboard that provides real-time weather data and forecasts using third-party APIs with a responsive design.',
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      tags: ['Node.js', 'MongoDB', 'Express'],
      description: 'Full-stack e-commerce platform with product catalog, shopping cart, and payment integration built from scratch.',
      link: '#'
    },
    {
      title: 'Machine Learning Model',
      tags: ['Python', 'TensorFlow', 'Data Science'],
      description: 'Predictive model for student performance analysis using machine learning algorithms and data visualization techniques.',
      link: '#'
    },
    {
      title: 'Portfolio CMS',
      tags: ['Vue.js', 'REST API', 'MySQL'],
      description: 'Content management system designed specifically for portfolio websites with drag-and-drop functionality.',
      link: '#'
    },
    {
      title: 'Mobile Fitness Tracker',
      tags: ['React Native', 'Redux', 'Mobile'],
      description: 'Cross-platform mobile app for tracking workouts, calories, and fitness goals with social sharing features.',
      link: '#'
    }*/
  ];

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <section id="projects" ref={sectionRef} className="fade-in">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoveredCard(index)}
          >
            <h3>{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
