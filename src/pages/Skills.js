import React from 'react';
import { Progress } from 'reactstrap';

import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skContainer">
      <h1 id="skills">Skills</h1>
      <hr />
      <div className="legend">
        <h5>I really enjoy working with the skills highlighted in purple</h5>
        <h5>I enjoy working with the skills highlighted in blue</h5>
      </div>
      <div className="skillContainer">
        <div className="skill">
          <h4>React.js</h4>
          <Progress className="react" animated value={90}>90%</Progress>
        </div>
        <div className="skill">
          <h4>React Native</h4>
          <Progress className="reactNative" animated value={80}>80%</Progress>
        </div>
        <div className="skill">
          <h4>Next.js</h4>
          <Progress className="next" animated value={85}>85%</Progress>
        </div>
        <div className="skill">
          <h4>Contentful (Content Management System)</h4>
          <Progress className="contentful" animated value={80}>80%</Progress>
        </div>
        <div className="skill">
          <h4>Storybook</h4>
          <Progress className="storybook" animated value={75}>75%</Progress>
        </div>
        <div className="skill">
          <h4>JavaScript</h4>
          <Progress className="javascript" animated value={95}>95%</Progress>
        </div>
        <div className="skill">
          <h4>C#</h4>
          <Progress className="see-sharp" animated value={80}>80%</Progress>
        </div>
        <div className="skill">
          <h4>Python</h4>
          <Progress className="python" animated value={70}>70%</Progress>
        </div>
        <div className="skill">
          <h4>MongoDB</h4>
          <Progress className="mongo" animated value={75}>75%</Progress>
        </div>
        <div className="skill">
          <h4>SQL</h4>
          <Progress className="sql" animated value={70}>70%</Progress>
        </div>
      </div>
    </div>
  );
}

export default Skills;