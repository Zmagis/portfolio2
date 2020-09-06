import React from 'react';
import { motion } from 'framer-motion';

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
                <motion.i
                  className="fab fa-github fa-lg"
                  whileHover={{
                    scale: 1.5,
                    // rotate: [0, 45, -45, 45, -45, 0],
                    y: [0, -5, 0, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                ></motion.i>
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <motion.i
                  className="fas fa-external-link-alt fa-lg"
                  whileHover={{
                    scale: 1.5,
                    y: [0, -5, 0, -5, 0],

                    transition: { duration: 0.5 },
                  }}
                ></motion.i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Projects };
