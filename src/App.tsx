import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navigation } from './components/nav/Navigation';
import { Home } from './components/home/Home';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
// import Modal from './components/Modal';

// import './App.css';
import './styles/styles.css';

function App() {
  const location = useLocation();
  console.log(window.location.pathname);
  return (
    <>
      {/* <Navigation /> */}
      <Home />
      <Skills />
      <div className="parallax"></div>
      <Projects />
      <Contact />

      {/* {window.location.pathname === '/' ? null : <Navigation />} */}
      {/* <Modal showModal={showModal} /> */}
      {/* <AnimatePresence
        // exitBeforeEnter
        // onExitComplete={() => setShowModal(false)}
      > */}
      {/* <Switch location={location} key={location.key}>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch> */}
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
