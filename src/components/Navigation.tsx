"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#hero' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Code, label: 'Skills', href: '#skills' },
  { icon: Briefcase, label: 'Experience', href: '#experience' },
  { icon: Mail, label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`glass-nav transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-white/15' : ''
        }`}
      >
        <div className="flex items-center space-x-6">
          {navItems.map(({ icon: Icon, label, href }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-foreground hover:bg-white/10 transition-all duration-200 hover:text-accent group"
            >
              <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium hidden md:inline">{label}</span>
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden glass-card w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:bg-white/15 transition-all duration-200"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
          <div className="relative flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map(({ icon: Icon, label, href }, index) => (
              <motion.button
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(href)}
                className="flex items-center space-x-4 px-8 py-4 glass-card rounded-full text-lg font-medium text-foreground hover:bg-white/15 transition-all duration-200"
              >
                <Icon className="w-6 h-6" />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}