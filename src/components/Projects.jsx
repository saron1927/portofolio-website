import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { Github } from './Icons';

const projects = [
  {
    title: "Student Management System",
    desc: "A platform I built for universities to help them ditch the paperwork and easily keep track of student progress and grades.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    tech: ["PHP", "MySQL", "Web"],
    liveUrl: "https://github.com/saron1927",
    githubUrl: "https://github.com/saron1927/student-management-system"
  },
  {
    title: "Anonymous Confession Wall",
    desc: "A fun space where people can leave anonymous confessions. I added an admin panel to keep things moderated.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    tech: ["Web", "Authentication", "Admin"],
    liveUrl: "https://github.com/saron1927",
    githubUrl: "https://github.com/saron1927/Anonymous-confession-wall-with-login-and-Admin"
  },
  {
    title: "Stadium Ticket",
    desc: "A ticketing platform I put together using PHP to handle stadium event bookings and seat reservations.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800",
    tech: ["PHP", "MySQL", "Web"],
    liveUrl: "https://github.com/saron1927",
    githubUrl: "https://github.com/saron1927/Stadium-Ticket"
  },
  {
    title: "Mentor-ship",
    desc: "A neat little platform where mentors and mentees can connect, built entirely with JavaScript.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    tech: ["JavaScript", "Web"],
    liveUrl: "https://github.com/saron1927",
    githubUrl: "https://github.com/saron1927/Mentor-ship"
  },
  {
    title: "Taskify",
    desc: "My take on a to-do app. Built in Java, it helps you organize your daily tasks without the clutter.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tech: ["Java", "Task Management"],
    liveUrl: "https://github.com/saron1927",
    githubUrl: "https://github.com/saron1927/taskify"
  },
  {
    title: "Project Management Course",
    desc: "A collection of resources and assignments I put together to help others learn about project management.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    tech: ["Documentation", "Course"],
    liveUrl: "https://github.com/saron1927",
    githubUrl: "https://github.com/saron1927/project-management-course"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 w-full px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Here are a few things I've built. I love taking an idea and turning it into a real, working product.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                  <a href={project.liveUrl} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-light hover:scale-110 transition-all">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="w-12 h-12 rounded-full bg-[#1a1a24] border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-primary-light transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-primary/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 text-center"
        >
          <a href="https://github.com/saron1927" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 mx-auto glass px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20">
              <Github size={20} />
              View More on GitHub
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
