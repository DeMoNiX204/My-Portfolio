import React from 'react';
import './App.css';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DocumentDownloads from './components/DocumentDownloads';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <DocumentDownloads />
      <Contact />
    </div>
  );
}

export default App;
