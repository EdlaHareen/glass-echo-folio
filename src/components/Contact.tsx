"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      description: 'Based in'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: `https://${personalInfo.linkedin}`,
      description: 'Connect with me'
    }
  ];

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
    <section id="contact" className="py-24 px-6">
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
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your next data engineering project or explore opportunities? 
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-semibold text-gradient mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborative 
                  projects, or just connecting with fellow data professionals. Whether 
                  you have a specific project in mind or want to explore possibilities, 
                  let's start a conversation.
                </p>

                <div className="space-y-6">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:animate-pulse">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            {method.label}
                          </h4>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                          <p className="text-sm text-accent font-medium">{method.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <button className="btn-primary flex items-center gap-2 flex-1 justify-center">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
                <button className="btn-glass flex items-center gap-2 flex-1 justify-center">
                  <Github className="w-4 h-4" />
                  View GitHub
                </button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gradient mb-6">
                  Send a Message
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-white/10 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Built with React, TypeScript, and Framer Motion. Designed with glassmorphism and modern aesthetics.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Hareen Edla. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}