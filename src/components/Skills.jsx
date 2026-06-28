import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend & UI",
    color: "from-blue-400 to-indigo-500",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 / CSS3", level: 96 }
    ]
  },
  {
    category: "Backend & Database",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 80 },
      { name: "SQL", level: 90 },
      { name: "MySQL", level: 88 }
    ]
  },
  {
    category: "Professional Skills",
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "Digital Marketing", level: 92 },
      { name: "Financial Analysis", level: 85 },
      { name: "Problem Solving", level: 95 },
      { name: "Team Collaboration", level: 90 },
      { name: "Communication", level: 95 }
    ]
  }
];

const SkillBar = ({ name, level, index, colorGradient }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-bold text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
          className={`h-2.5 rounded-full bg-gradient-to-r ${colorGradient}`}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 w-full px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Proficiency</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A comprehensive overview of my technical toolkit, acquired through academic studies and practical project development.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="glass p-8 rounded-2xl hover:bg-white/[0.04] transition-colors border border-white/5"
            >
              <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></span>
                {category.category}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level} 
                    index={index} 
                    colorGradient={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
