import React from 'react';
import { motion } from 'framer-motion';

import { logos } from './List';

const Skills = () => {
  return (
    <div className="container skills-container">
      <div className="inner-container">
        <h2 style={{ fontSize: '1.8rem', marginBottom: 20 }}>
          Technologies I have worked with:
        </h2>
        <div>
          <h3 style={{ textAlign: 'start' }}>
            const skills <span>{`= {`}</span>
          </h3>
          <div className="skills-box">
            {logos.map((logo) => (
              <motion.div
                key={logo.name}
                className="logo-container"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <img className="logo" src={logo.pic} alt="" />
                <p>{logo.name}</p>
              </motion.div>
            ))}
          </div>
          <h3>
            <span>{`};`}</span>
          </h3>
        </div>
      </div>
      {/* <ul>
        <li>
          React <i className="fab fa-react fa-2x"></i>
          <span>
            <img src={react} alt="/" />
          </span>
        </li>
        <li>
          Redux
          <span>
            <img src={redux} alt="/" />
          </span>
        </li>
        <li>
          JavaScript <i className="fab fa-js-square fa-2x"></i>
        </li>
        <li>
          HTML<i className="fab fa-html5 fa-2x"></i>
        </li>
        <li>
          CSS <i className="fab fa-css3-alt fa-2x"></i>
        </li>
        <li>
          SASS <i className="fab fa-sass fa-2x"></i>
        </li>
        <li>
          Python <i className="fab fa-python fa-2x"></i>
        </li>
        <li>
          Java <i className="fab fa-java fa-2x"></i>
        </li>
        <li>
          Git <i className="fab fa-git-alt fa-2x"></i>
        </li>
      </ul> */}
    </div>
  );
};

export { Skills };
