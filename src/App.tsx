import React from 'react';
// import { Route, Switch, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

// import { Navigation } from './components/nav/Navigation';
import { Home } from './components/home/Home';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { About } from './components/About';

// import './App.css';
import './styles/styles.css';

function App() {
  // const location = useLocation();
  return (
    <>
      {/* <Navigation /> */}
      <Home />
      <About />
      <Skills />
      <div className="parallax"></div>
      <Projects />
      <Contact />
    </>
  );
}

export default App;
