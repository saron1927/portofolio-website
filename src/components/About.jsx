import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Software Engineering",
      desc: "4th-year student at Dire Dawa University. I spend my days building apps that people actually want to use."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-secondary" />,
      title: "Accounting & Finance",
      desc: "Combining my technical skills with a solid understanding of how the financial side actually works."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#10b981]" />,
      title: "Digital Marketing",
      desc: "I love getting creative with campaigns and finding new ways to help brands grow online."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#f59e0b]" />,
      title: "Problem Solver",
      desc: "I enjoy tackling tricky problems and I'm always looking to learn the next new thing."
    }
  ];

  return (
    <section id="about" className="py-24 w-full px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-2xl font-bold font-heading mb-6 text-white">My Journey & Vision</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Hey there! I'm <strong className="text-white">Saron Welyu</strong>. I kind of have a mixed background—I'm currently in my 4th year studying Software Engineering at Dire Dawa University, but I'm also deeply involved in Accounting and Finance.
              </p>
              <p>
                For me, it's not just about typing out code. I love figuring out how technology, business, and marketing all fit together to solve real-world problems. Whether I'm building a new app or planning a campaign, I always keep the user and the bigger picture in mind.
              </p>
              <p>
                When I'm not studying or working on my latest project, I'm probably experimenting with a new framework or learning something entirely different. I genuinely enjoy what I do and I'm always ready for the next challenge!
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t border-l border-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
