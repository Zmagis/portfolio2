import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <div className="left">
        <a
          href="https://www.linkedin.com/in/egl%C4%97-gustait%C4%97-5b488a195/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.i
            className="fab fa-linkedin-in"
            initial={{ rotate: -45, opacity: 0, x: '-100px' }}
            animate={{ rotate: 0, opacity: 1, x: 0 }}
            transition={{ type: 'tween', duration: 1.5, delay: 1 }}
            whileHover={{
              scale: 1.5,
              y: [0, -5, 0, -5, 0],
              transition: { duration: 0.3 },
            }}
          ></motion.i>
        </a>
      </div>
      <motion.div
        className="right"
        initial={{ y: 1000 }}
        animate={{ y: 10 }}
        transition={{ type: 'spring', stiffness: 35, delay: 1.5 }}
      >
        <span>eglegustaite@gmail.com</span>
      </motion.div>
    </>
  );
};

export { Contact };
