import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 ${
        isScrolled ? 'py-4 glass border-b-0' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <div className="text-2xl font-bold font-heading track-wider">
            <span className="text-white">Saron</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">.W</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary before:w-full"
              className="relative cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium
                before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 
                before:bg-gradient-to-r before:from-primary before:to-secondary before:transition-all before:duration-300 hover:before:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 text-white font-medium hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all hover:border-transparent hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 glass mt-2 mx-4 rounded-xl overflow-hidden shadow-xl border border-white/10"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
