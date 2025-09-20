"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, MapPin, Calendar, Building } from 'lucide-react';
import { experience } from '@/lib/data';

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through innovation, growth, and technical excellence in 
              data engineering and cloud architecture.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line" />

            {/* Experience Items */}
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
              >
                {/* Timeline Dot */}
                <div 
                  className="timeline-dot" 
                  style={{ top: '2rem' }}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleExpanded(item.id)}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-2 text-accent font-medium mt-1">
                        <Building className="w-4 h-4" />
                        {item.company}
                      </div>
                    </div>
                    
                    <div className={`flex flex-col gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-accent font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand Button */}
                  <div className="flex items-center justify-center pt-2">
                    <button className="flex items-center gap-2 text-accent hover:text-accent-glow transition-colors">
                      <span className="text-sm font-medium">
                        {expandedItem === item.id ? 'Show Less' : 'View Achievements'}
                      </span>
                      {expandedItem === item.id ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                  </div>

                  {/* Expanded Achievements */}
                  <AnimatePresence>
                    {expandedItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <h4 className="text-lg font-semibold text-gradient mb-4">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achievementIndex * 0.1 }}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Career Growth Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-card p-8 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Career Progression
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From building foundational data pipelines to architecting enterprise-scale 
              cloud solutions, my journey reflects continuous learning, technical growth, 
              and a commitment to delivering exceptional results. Each role has strengthened 
              my expertise while expanding my ability to solve complex data challenges.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}