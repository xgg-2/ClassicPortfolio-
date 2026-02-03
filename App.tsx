import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen text-ink selection:bg-ink selection:text-paper antialiased">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
      </main>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;