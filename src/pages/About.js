import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <div>
        <h1 id="about">About</h1>
        <hr />
      </div>
      <div className="container">
        <div className="bioContainer">
          <h2 className="subHeader">I'm <span className="bioHighlights">Nat</span> and I'm a <span className="bioHighlights">Software Engineer</span></h2>
          <h4>
            I'm a student at <a href="https://www.asu.edu/" className="aHighlight">Arizona State University</a> getting my bachelor's degree in Information Technology
          </h4>
          <h4>
            I work full-time as a Software Engineer specializing in consumer facing front-end technology
          </h4>
          <h4>
            I love lifting weights - seeing myself hit new personal records is really energizing for me
          </h4>
          <h4>
            I enjoy spending time with my husband playing video games and drinking boba tea
          </h4>
          <h4>
            I enjoy going to <a href="https://westchinatea.com/" className="aHighlight">West China Tea</a> to drink tea and I could talk about tea for hours
          </h4>
          <h4>
            In my free time, I'm usually trying to improve and grow my code/design skills
          </h4>
        </div>
      </div>
    </div>
  )
}

export default About;