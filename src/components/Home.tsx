import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id="home" className="container home-container">
      <div
        className="text"
        // initial={{ y: -1000 }}
        // animate={{ y: 0 }}
        // transition={{ type: 'spring', delay: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Eglė Gustaitė
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Front-end software engineer
        </motion.h2>
      </div>
    </div>
  );
};

export { Home };
