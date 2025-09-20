"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code, Star, Filter } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-surface/10 to-transparent">
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
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of data engineering solutions that demonstrate scalability, 
              innovation, and real-world business impact.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === 'all' ? 'btn-primary' : 'btn-glass'
                }`}
              >
                <Filter className="w-4 h-4" />
                All Projects
              </button>
              {['Azure', 'Databricks', 'Python', 'Apache'].map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === tech ? 'btn-primary' : 'btn-glass'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-xs text-accent font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {project.achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                    {project.achievements.length > 2 && (
                      <div className="text-sm text-accent">
                        +{project.achievements.length - 2} more achievements
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300 group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium hover:bg-white/15 transition-all duration-300 group/btn">
                      <Code className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Projects Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-card p-8 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Project Impact
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">50TB+</div>
                <div className="text-sm text-muted-foreground">Data Processed Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">99.9%</div>
                <div className="text-sm text-muted-foreground">System Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">60%</div>
                <div className="text-sm text-muted-foreground">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">End Users Served</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Each project represents a commitment to excellence, innovation, and delivering 
              measurable business value through robust data engineering solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}