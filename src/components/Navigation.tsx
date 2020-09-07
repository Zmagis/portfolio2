import React from 'react';
import { NavLink } from 'react-router-dom';

// import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className="Nav">
      <ul className="Ul">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <NavLink to="skills">SKILLS</NavLink>
        </li>
        <li>
          <NavLink to="projects">PROJECTS</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
