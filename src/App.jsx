import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={loading} />
      
      {!loading && (
        <div className="relative w-full overflow-hidden">
          <CustomCursor />
          <ParticlesBackground />
          <Navbar />
          
          <main className="relative z-10 flex flex-col items-center w-full">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Statistics />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
