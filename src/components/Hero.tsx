"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import heroImage from '@/assets/hero-bg.jpg';

const FloatingShape = ({ delay = 0, duration = 20, size = 100 }) => (
  <motion.div
    className="floating-shape"
    style={{ 
      width: size, 
      height: size,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -100, 50, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.roles;
    const current = roles[currentRole];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [currentRole, displayText, isDeleting]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Data Engineering Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Floating Animated Shapes */}
      <div className="floating-shapes">
        {Array.from({ length: 6 }).map((_, i) => (
          <FloatingShape 
            key={i} 
            delay={i * 3} 
            duration={20 + i * 5} 
            size={60 + i * 20} 
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
      >
        {/* Main Title */}
        <motion.h1 
          className="hero-title mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-2xl md:text-4xl font-light text-muted-foreground">
            I'm a{' '}
          </span>
          <span className="text-2xl md:text-4xl font-semibold text-gradient relative">
            {displayText}
            <motion.span
              className="inline-block w-0.5 h-8 bg-accent ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          </span>
        </motion.div>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-8 rounded-3xl mx-auto max-w-3xl mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm text-accent">
            <span className="flex items-center gap-2">
              📍 {personalInfo.location}
            </span>
            <span className="flex items-center gap-2">
              ⚡ 5.5+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              🚀 Azure Certified
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={scrollToContact}
            className="btn-primary flex items-center gap-2 group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Get In Touch
          </button>
          
          <a
            href="/Hareen_Edla_Resume.pdf"
            download="Hareen_Edla_Resume.pdf"
            className="btn-glass flex items-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors duration-300 group"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}