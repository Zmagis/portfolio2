import React from 'react';

import { list } from './List';

const Projects = () => {
  return (
    <div className="container project-container">
      <div className="inner-container">
        <h1>Projects</h1>
        {list.map((item) => (
          <div key={item.id} className="project">
            <div className="image">
              <img src={item.img} alt="/" />
            </div>
            <div className="info">
              <h2>{item.name}</h2>
              <p className="dsc">{item.description}</p>
              <p className="tech">{item.tech}</p>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt fa-lg"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Projects };
