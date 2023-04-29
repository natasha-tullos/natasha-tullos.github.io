import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import './styles/Projects.css';

const Projects = () => {
  return (
    <div classNam="projects-container" id="projects">
      <h1 className="title project-title">Projects</h1>
      <div>
        {/* <img href={} /> */}
      </div>
      <button className="scroll-down-link-btn">
        <ArrowDownwardIcon style={{ fontSize: 50 }} className="arrow-icon" />
      </button>
    </div>
  );
}

export default Projects;