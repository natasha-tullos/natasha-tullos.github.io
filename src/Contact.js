import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="title contact-title">Contact</h1>
      <h2 className="text contact-text">Even if I'm not looking for opportunities, feel free to email me so we can connect.</h2>
      <section className="flex-container button-container">
        <a href="https://www.linkedin.com/in/natasha-tullos/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:tullos.natasha@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
        <a href="https://github.com/natasha-tullos" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </section>
      <button className="scroll-up-link-btn">
        <ArrowUpwardIcon style={{ fontSize: 50 }} className="arrow-icon" />
      </button>
    </div>
  );
}

export default Contact;