"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Code2, Database, BarChart3, Server } from 'lucide-react';
import { skills } from '@/lib/data';

const categoryIcons = {
  "Cloud Platforms": Cloud,
  "Programming Languages": Code2,
  "Big Data Tools": Server,
  "Databases": Database,
  "BI & Analytics": BarChart3
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Cloud Platforms");
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const categories = Object.keys(skills);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-transparent to-surface/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of technologies and frameworks for building 
              modern data solutions at scale.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'btn-primary'
                        : 'btn-glass'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  {/* Skill Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {skill.proficiency}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="skill-bar mb-4">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${skill.proficiency}%` : 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.2,
                        ease: "easeOut" 
                      }}
                    />
                  </div>

                  {/* Experience */}
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{skill.years} year{skill.years > 1 ? 's' : ''} experience</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            i < Math.ceil(skill.proficiency / 20)
                              ? 'bg-gradient-to-r from-primary to-accent'
                              : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-card p-8 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Technology Philosophy
            </h3>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I believe in choosing the right tool for the job while maintaining a balance between 
              cutting-edge innovation and proven stability. My approach focuses on scalable, 
              maintainable solutions that can grow with business needs while ensuring optimal 
              performance and reliability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}