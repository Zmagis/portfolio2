import React from 'react';

import { logos } from './List';

import html from '../img/logos/html.png';
import css from '../img/logos/css.png';
import js from '../img/logos/js.png';
import react from '../img/logos/react.png';
import redux from '../img/logos/redux.png';
import gimp from '../img/logos/gimp.png';
import sass from '../img/logos/sass.png';
import python from '../img/logos/python.png';
import sql from '../img/logos/sql.png';

const Skills = () => {
  return (
    <div className="container skills-container">
      <div className="inner-container">
        <h1>Some technologies I have worked with:</h1>
        <div>
          <h2 style={{ textAlign: 'start' }}>
            const skills <span>{`= {`}</span>
          </h2>
          <div className="skills-box">
            {logos.map((logo) => (
              <div key={logo.name} className="logo-container">
                <img className="logo" src={logo.pic} alt="" />
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
          <h2>
            <span>{`};`}</span>
          </h2>
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
