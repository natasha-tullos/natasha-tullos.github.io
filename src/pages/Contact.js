import React from 'react';

import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1>Get In Touch</h1>
      <div className="contactBlurb">
        <h4>Even if I'm not looking for opportunities, feel free to email me so we can connect.</h4>
        <h4>I'm usually pretty busy with school or work, but I'll try to answer when I can.</h4>
      </div>
      <div className="socialLinks">
        <a className="button b-green">LinkedIn</a>
        <a className="button b-pink contactBtn" href="mailto:tullos.natasha@gmail.com">Contact</a>
        <a className="button b-green">GitHub</a>
      </div>
    </div>
  )
}

export default Contact;