import React from 'react';
import me from '../img/me.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-container">
      <div className="text">
        <h2>A LITTLE BIT ABOUT ME</h2>
        <p>Hey! My name is Eglė and I'm a web developer.</p>
        <p>
          One year ago I graduated from Vilnius University with a Biochemistry
          Bachelor degree. I felt miserable working in a laboratory, it reminded
          me of a kitchen in which I couldn’t actually taste the meals that I
          cooked, and so the only option seemed to change my career path.
        </p>
        <p>
          I chose to try programming, even though at the time I didn't even know
          what HTML was. The more time I spent learning to code, the harder I
          found it was for me to leave my cozy place in front of my computer
          screen. Without a doubt, programming is what brings me joy and
          excitement to learn and create more every single day.
        </p>
        <p>
          I took many courses online on platforms such as Udemy, Scrimba, 
          FreeCodeCamp. Successfully finished European Digital Bootcamp.
          Experienced what it is like to work with agile team and create
          real-life project while being on Month with IT internship. And
          now my hunger for real-life projects is even bigger.
        </p>
        {/* <p>
          In those rare occasions when I'm not in front of a computer screen,
          I'm probably climbing, hiking or dancing lindyhop.
        </p> */}
      </div>
      <div className="image">
        <img src={me} alt="/" />
      </div>
    </div>
  );
};

export { About };
