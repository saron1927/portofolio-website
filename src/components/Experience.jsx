import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, TrendingUp, Target, Monitor } from 'lucide-react';

const timelineData = [
  {
    title: "Started Coding Journey",
    subtitle: "The Beginning",
    icon: <Code className="w-5 h-5 text-white" />,
    desc: "Discovered the passion for solving problems through programming and wrote my first lines of code.",
    color: "from-blue-500 to-indigo-500",
    date: "2019"
  },
  {
    title: "Learning Web Development",
    subtitle: "Self-Taught Era",
    icon: <Monitor className="w-5 h-5 text-white" />,
    desc: "Dived deep into HTML, CSS, JavaScript, and eventually mastered modern frameworks like React and Vue.",
    color: "from-teal-400 to-emerald-500",
    date: "2020 - 2021"
  },
  {
    title: "University Education",
    subtitle: "Dire Dawa University",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    desc: "Enrolled in double degree programs: Software Engineering and Accounting & Finance.",
    color: "from-purple-500 to-pink-500",
    date: "2022 - Present"
  },
  {
    title: "Digital Marketing Experience",
    subtitle: "Professional Growth",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    desc: "Applied analytical skills to marketing, managing campaigns and optimizing online brand presence.",
    color: "from-orange-400 to-red-500",
    date: "2023"
  },
  {
    title: "Advanced Software Engineering",
    subtitle: "4th Year Student",
    icon: <Rocket className="w-5 h-5 text-white" />,
    desc: "Developing complex full-stack applications with Laravel, React, and robust SQL databases.",
    color: "from-[#8b5cf6] to-[#0ea5e9]",
    date: "Current"
  },
  {
    title: "Future Career Goals",
    subtitle: "Tech & Finance Leadership",
    icon: <Target className="w-5 h-5 text-white" />,
    desc: "Aiming to lead innovative projects that bridge the gap between financial technology and seamless user experiences.",
    color: "from-amber-300 to-orange-500",
    date: "Future"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 w-full px-6 lg:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row justify-between items-center w-full group">
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#050508] border-4 border-[#8b5cf6] items-center justify-center z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                </div>

                {/* Left Side (Empty for even, Content for odd) */}
                <div className={`w-full md:w-5/12 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:hidden'}`}>
                  {index % 2 === 0 && (
                    <TimelineCard item={item} index={index} align="right" />
                  )}
                </div>

                {/* Right Side (Content for even, Empty for odd) */}
                <div className={`w-full md:w-5/12 flex ${index % 2 !== 0 ? 'md:justify-start' : 'md:hidden'} mt-8 md:mt-0`}>
                  {index % 2 !== 0 && (
                    <TimelineCard item={item} index={index} align="left" />
                  )}
                </div>
                
                {/* Mobile Content Display (Fallback for all since above handled layout) */}
                <div className="md:hidden w-full pl-8 relative mb-8">
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary/30 rounded-full"></div>
                  <div className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(14,165,233,1)]"></div>
                  <TimelineCard item={item} index={index} align="left" isMobile={true} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ item, index, align, isMobile = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 20 : (align === 'right' ? -50 : 50) }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`glass-card p-6 w-full text-left relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
    >
      <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${item.color}`}></div>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}>
          {item.icon}
        </div>
        <div>
          <span className="text-primary-light text-sm font-bold tracking-wider">{item.date}</span>
          <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
        </div>
      </div>
      <h4 className="text-sm text-gray-400 font-medium mb-3 ml-[52px]">{item.subtitle}</h4>
      <p className="text-gray-300 text-sm leading-relaxed ml-[52px]">{item.desc}</p>
    </motion.div>
  );
};

export default Experience;
