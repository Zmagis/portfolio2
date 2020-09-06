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
          A year ago I graduated from Vilnius University with Biochemistry
          Bachelor degree. Since I felt miserable working in a
          laboratory, kitchen
          like environment, without actually cooking meals I could taste,
          changing my career path seemed like the only option for me.
        </p>
        <p>
          Somehow I chose to try programming. Even though I didn't even know what was 
          HTML at the time. The more time I spent the harder I found myself to leave 
          my cozy place in front of my computer screen. With no doubt,
          programming is what brings me joy, excitement to know and create more
          every single day.
        </p>
        {/* <p>
          When I'm not in front of a computer screen, I'm probably climbing,
          hiking or dancing lindyhop.
        </p> */}
      </div>
      <div className="image">
        <img src={me} alt="/" />
      </div>
    </div>
  );
};

export { About };
