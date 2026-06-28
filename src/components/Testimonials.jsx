import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Ahmed Mohammed",
    role: "Professor at Dire Dawa University",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    text: "Saron is one of the most dedicated students I have had the pleasure of teaching. Her ability to blend software engineering concepts with practical business scenarios is truly remarkable."
  },
  {
    name: "Eden Tadesse",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    text: "Working with Saron on the Digital Marketing Dashboard was a fantastic experience. She delivered high-quality code and provided excellent strategic insights that elevated the final product."
  },
  {
    name: "Michael Yohannes",
    role: "Client / Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "I hired Saron for an e-commerce platform, and she completely exceeded my expectations. The modern design and smooth animations she implemented gave my business a premium feel."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 w-full px-6 lg:px-12 relative z-10 bg-[#07070a]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">{testimonial.name}</h4>
                  <span className="text-sm text-primary-light font-medium">{testimonial.role}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed relative z-10 italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
