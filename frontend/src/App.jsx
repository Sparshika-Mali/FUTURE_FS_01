import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internship />
          <Resume />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
