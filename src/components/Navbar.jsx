import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  // Track active section and scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'leadership', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50"
    >
      {/* Navbar background with glassmorphism */}
      <div 
        className={`backdrop-blur-md bg-white/80 border-2 border-gray-200/60 rounded-2xl md:rounded-full transition-all duration-300 ${
          scrollY > 20 ? 'shadow-xl' : 'shadow-lg'
        }`}
      >
        <style>{`
          @keyframes underlineSlide {
            from {
              width: 0;
              left: 0;
            }
            to {
              width: 100%;
              left: 0;
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(13, 110, 94, 0.7);
            }
            50% {
              box-shadow: 0 0 0 8px rgba(13, 110, 94, 0);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes logoFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-3px);
            }
          }

          .nav-item {
            position: relative;
            display: inline-block;
            padding: 0.5rem 0;
          }

          .nav-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2.5px;
            background: linear-gradient(90deg, #0d6e5e, #0a5a4a);
            transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            border-radius: 2px;
          }

          .nav-item.active::after {
            width: 100%;
            animation: underlineSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .nav-item:hover::after {
            width: 100%;
          }

          .nav-item:hover {
            color: rgb(13, 110, 94);
            transition: color 0.3s ease;
          }

          .cta-button {
            position: relative;
            animation: glowPulse 2s infinite;
          }

          .cta-button:hover {
            animation: none;
            box-shadow: 0 12px 24px rgba(13, 110, 94, 0.35);
            transform: translateY(-2px);
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .logo-btn {
            animation: logoFloat 3s ease-in-out infinite;
          }

          .logo-btn:hover {
            animation: none;
            transform: scale(1.08);
            box-shadow: 0 8px 16px rgba(13, 110, 94, 0.2);
            transition: all 0.3s ease;
          }

          .mobile-menu {
            animation: slideDown 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .mobile-nav-item {
            transform-origin: top;
            animation: slideDown 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-2 md:px-5 py-1 md:py-1.5">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={() => scrollToSection('home')}
                className="logo-btn text-sm md:text-xl font-bold text-teal-800 hover:text-teal-700 transition-colors flex items-center gap-1 focus:outline-none border-2 border-teal-800 px-2 md:px-2.5 py-1 rounded-lg hover:border-teal-700"
              >
                BK
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item text-gray-700 text-xs font-semibold hover:text-teal-800 focus:outline-none transition-colors ${
                    activeSection === item.id ? 'active text-teal-800' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="cta-button hidden lg:flex px-5 py-1.5 bg-gradient-to-r from-teal-700 to-teal-800 text-white rounded-full hover:bg-teal-800 transition-all text-xs font-bold focus:outline-none items-center gap-1.5 shadow-md"
              >
                <i className="fas fa-download text-xs"></i>
                Resume
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden text-gray-700 hover:text-teal-800 transition-colors focus:outline-none p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu lg:hidden pb-3 md:pb-5 border-t border-gray-100"
            >
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-item block w-full text-left px-3 py-2 md:py-2.5 text-gray-700 hover:text-teal-800 hover:bg-teal-50/50 transition-all text-xs md:text-sm font-semibold ${
                    activeSection === item.id ? 'text-teal-800 bg-teal-50' : ''
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="px-3 py-2 md:py-2.5 mt-1 md:mt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => scrollToSection('contact')}
                  className="cta-button w-full px-5 py-2 md:py-2.5 bg-gradient-to-r from-teal-700 to-teal-800 text-white rounded-full hover:bg-teal-800 transition-all text-xs md:text-sm font-bold focus:outline-none flex items-center justify-center gap-1.5 shadow-md"
                >
                  <i className="fas fa-download"></i>
                    Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
