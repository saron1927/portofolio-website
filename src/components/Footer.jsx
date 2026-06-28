import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Send, Mail, Phone } from 'lucide-react';
import { Github, Instagram } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/saron1927" },
    { icon: <Send size={20} />, href: "https://t.me/Andu297" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Mail size={20} />, href: "mailto:welyusaron4@gmail.com" },
    { icon: <Phone size={20} />, href: "tel:0915756213" }
  ];

  return (
    <footer className="relative w-full pt-16 pb-8 border-t border-white/10 bg-[#050508] z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo / Name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-heading track-wider text-center md:text-left"
          >
            <span className="text-white">Saron</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">.W</span>
            <p className="text-sm text-gray-400 font-normal mt-2">Software Engineer & Digital Marketer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400"
          >
            <Link to="home" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">About</Link>
            <Link to="projects" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Projects</Link>
            <Link to="services" smooth={true} duration={500} className="hover:text-primary transition-colors cursor-pointer">Services</Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-transparent transition-all duration-300 hover:-translate-y-1"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center pt-8 border-t border-white/10 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>&copy; {currentYear} Saron Welyu. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary font-bold">React</span> & <span className="text-secondary font-bold">Tailwind</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
