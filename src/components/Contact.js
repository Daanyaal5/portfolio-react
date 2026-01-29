import React, { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
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

  const contactLinks = [
    { icon: '📧', label: 'Email', href: 'mailto:dn981756@dal.ca' },
    { icon: '💻', label: 'GitHub', href: 'https://github.com/Daanyaal5', target: '_blank' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/daanyaal5/', target: '_blank' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="fade-in">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-intro">
          I'm always open to new opportunities, collaborations, or just a chat about technology. Feel free to reach out!
        </p>
        <div className="contact-links">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="contact-link"
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
