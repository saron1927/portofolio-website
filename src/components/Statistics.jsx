import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function outQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, from, duration]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Technologies Learned", value: 24, suffix: "" },
  { label: "Problem Solving Challenges", value: 100, suffix: "+" },
  { label: "Years of Study", value: 4, suffix: "+" }
];

const Statistics = () => {
  return (
    <section className="py-20 w-full px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-10 md:p-14 relative overflow-hidden border-t border-l border-white/20">
          {/* Animated Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 animate-pulse" style={{ animationDuration: '5s' }}></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center justify-center text-center ${index > 1 ? 'pt-8 md:pt-0' : (index === 1 ? 'pt-0' : '')} ${index !== 0 && index !== 2 ? 'md:px-4' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    <AnimatedCounter to={stat.value} />
                  </span>
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium font-heading">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
