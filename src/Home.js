import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import me from './me.jpeg';

import './styles/Home.css';

const Home = () => {
  const aboutText = 'I transform software into meaningful products that transforms organizations. By using meaningful design to captivate users, I can create engaging applications.';

  return (
    <div className="home-container">
      <div className="flex-container">
        <section className="text-container">
          <h1 className="title">Hello, I'm Natasha.</h1>
          <h2 className="sub-title">I’m a Software Engineer.</h2>
          <p className="text about-text">
            {aboutText}
          </p>
          <button className="scroll-down-link-btn">
            <ArrowDownwardIcon style={{ fontSize: 50 }} className="arrow-icon" />
          </button>
        </section>
        <img className="image" src={me} alt="Photo of Natasha Tullos" aria-label="Natasha Tullos" />
      </div>
    </div>
  )
}

export default Home;