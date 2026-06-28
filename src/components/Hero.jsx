import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ChevronRight, Briefcase } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const TypewriterText = () => {
  const words = ["Software Engineer", "Finance Student", "Digital Marketer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink(!blink), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, Math.max(isDeleting ? 50 : 100, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary font-semibold">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-white`}>|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center w-full px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full glass border-primary/30 text-sm font-medium text-primary-light self-center lg:self-start w-max"
          >
            Welcome to my portfolio
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight"
          >
            Hi, I'm <br/>
            <span className="text-white">Saron Welyu</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-medium text-gray-300 h-[40px]"
          >
            I am a <TypewriterText />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-lg"
          >
            Bringing together my love for coding, finance, and marketing to create digital experiences that actually mean something to people.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start"
          >
            <Link to="contact" smooth={true} duration={500}>
              <button className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                <Briefcase size={20} />
                Hire Me
              </button>
            </Link>
            
            <Link to="projects" smooth={true} duration={500}>
              <button className="flex items-center gap-2 glass px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20">
                View Projects
                <ChevronRight size={20} />
              </button>
            </Link>

            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-colors group">
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download CV
              </button>
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full glass border border-white/20 p-2 overflow-hidden shadow-2xl">
              {/* Profile Image PlaceHolder */}
              <div className="w-full h-full rounded-full bg-[#1a1a24] overflow-hidden relative">
                <img 
                  src={profileImg} 
                  alt="Saron Welyu" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl flex items-center gap-2 border-white/10"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              <span className="text-sm font-medium">Available for work</span>
            </motion.div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
