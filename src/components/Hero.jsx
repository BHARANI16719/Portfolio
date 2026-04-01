import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-teal-800 via-teal-750 to-teal-700 overflow-hidden pt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] pt-8 lg:pt-12">
          {/* Left Content */}
          <motion.div 
            className="text-white z-10 space-y-7 lg:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Outlined Greeting */}
            <motion.div variants={itemVariants} className="inline-block">
              <motion.h2 
                whileHover={{ scale: 1.05 }}
                className="text-base lg:text-lg font-light tracking-widest mb-0 border-2 border-white/40 rounded-xl px-5 py-3 bg-white/5 backdrop-blur-sm hover:border-white/60 transition-all duration-300 inline-block"
              >
                HELLO I AM
              </motion.h2>
            </motion.div>

            {/* Name and Role */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-4 lg:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Bharani K
              </motion.h1>
              <motion.p 
                className="text-2xl lg:text-4xl font-light text-teal-100 mb-8 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                AI Engineer
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-100 text-base lg:text-lg leading-relaxed max-w-xl font-light tracking-wide"
            >
              I am an AI & Data Science undergraduate passionate about intelligent systems, software development, and data-driven applications. Building practical solutions through machine learning and clean problem-solving approaches.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button 
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-3.5 bg-white text-teal-800 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl"
              >
                <i className="fas fa-briefcase text-lg"></i>
                <span>View Projects</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-envelope text-lg"></i>
                <span>Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Status Badge */}
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-teal-200 rounded-full"
                ></motion.span>
                <p className="text-sm text-white/95 font-medium">Available for opportunities</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image & Floating Card */}
          <motion.div 
            className="relative h-96 lg:h-full flex items-center justify-center perspective min-h-96"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Large Circular Image Frame */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              {/* Outer Circle Border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-white/25 shadow-2xl"
              ></motion.div>
              
              {/* Profile Image Circle */}
              <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm border-4 border-white/50 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/Bharani.jpg" 
                    alt="Bharani K" 
                    className="w-full h-full object-cover rounded-full filter saturate-110 brightness-95 transition-all duration-300 hover:scale-105 hover:brightness-100"
                  />
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.12, y: -25 }}
                className="absolute bottom-12 left-0 bg-white rounded-2xl shadow-2xl p-7 max-w-xs backdrop-blur-sm border border-white/60 hover:shadow-3xl transition-all"
              >
                <div className="flex items-center gap-5">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="w-14 h-14 bg-gradient-to-br from-teal-700 to-teal-800 rounded-xl flex items-center justify-center text-white shadow-lg"
                  >
                    <i className="fas fa-code text-xl"></i>
                  </motion.div>
                  <div>
                    <p className="text-gray-900 font-bold text-2xl">5+</p>
                    <p className="text-gray-600 text-sm font-medium">Projects Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L60,74.7C120,85,240,107,360,112C480,117,600,107,720,106.7C840,107,960,117,1080,116C1200,115,1320,107,1380,101.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
