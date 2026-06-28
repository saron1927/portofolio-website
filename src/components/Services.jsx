import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Globe, Search, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: "Frontend Development",
    desc: "Building beautiful, responsive, and animated user interfaces with React, Vue, and Tailwind CSS."
  },
  {
    icon: <Server className="w-8 h-8 text-secondary" />,
    title: "Full-Stack Development",
    desc: "End-to-end web applications combining robust backend logic with seamless frontend experiences."
  },
  {
    icon: <Database className="w-8 h-8 text-[#10b981]" />,
    title: "Laravel Development",
    desc: "Developing secure, scalable, and complex APIs and web systems using the PHP Laravel framework."
  },
  {
    icon: <Globe className="w-8 h-8 text-[#f59e0b]" />,
    title: "Website Optimization",
    desc: "Enhancing performance, SEO, accessibility, and loading speeds of existing web platforms."
  },
  {
    icon: <Search className="w-8 h-8 text-[#ec4899]" />,
    title: "Digital Marketing",
    desc: "Applying marketing strategies to improve digital presence, user acquisition, and retention."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-[#8b5cf6]" />,
    title: "Technical Consultation",
    desc: "Advising on tech stacks, software architecture, and bridging business requirements with code."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 w-full px-6 lg:px-12 relative z-10 bg-[#07070a]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Offerings</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Leveraging my diverse skill set to deliver comprehensive digital solutions for individuals and businesses.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl group hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Graphic */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
