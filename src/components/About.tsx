"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, MapPin, Calendar } from 'lucide-react';
import { personalInfo, certifications, education } from '@/lib/data';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
    <section id="about" className="py-24 px-6">
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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about transforming raw data into actionable insights and building 
              scalable data infrastructure that drives business decisions.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey in data engineering began with a fascination for how data can tell 
                  stories and drive meaningful change. With over 5.5 years of experience, I've 
                  had the privilege of working with some of the most cutting-edge technologies 
                  in the cloud and big data ecosystem.
                </p>
                <p>
                  Currently serving as an Azure Data Engineer at Task Tech Recruiters, I focus 
                  on designing and implementing robust data pipelines that handle petabytes of 
                  data while maintaining high performance and reliability standards.
                </p>
                <p>
                  I'm particularly passionate about cloud-native architectures, real-time 
                  analytics, and helping organizations unlock the full potential of their data assets.
                </p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">5.5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">10TB+</div>
                <div className="text-sm text-muted-foreground">Daily Data Processed</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient flex items-center justify-center gap-2">
              <Award className="w-6 h-6" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:animate-pulse">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-accent font-medium">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient flex items-center justify-center gap-2">
              <BookOpen className="w-6 h-6" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center group-hover:animate-pulse">
                      <BookOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-accent font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}