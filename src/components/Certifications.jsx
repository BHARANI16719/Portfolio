import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'IBM Certified Generative AI',
      issuer: 'IBM',
      icon: 'fas fa-brain',
      iconBg: 'bg-blue-100 text-blue-700',
      description: 'Expertise in generative AI models, prompt engineering, and applications of large language models for real-world problem-solving.',
    },
    {
      id: 2,
      title: 'NASSCOM Certified Data Processing and Visualization',
      issuer: 'NASSCOM',
      icon: 'fas fa-chart-bar',
      iconBg: 'bg-green-100 text-green-700',
      description: 'Proficiency in data processing techniques, visualization best practices, and creating meaningful insights from complex datasets.',
    },
    {
      id: 3,
      title: 'Infosys Certified JavaScript',
      issuer: 'Infosys',
      icon: 'fas fa-code',
      iconBg: 'bg-orange-100 text-orange-700',
      description: 'Advanced JavaScript skills including ES6+, async programming, DOM manipulation, and modern web development practices.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-gray-50">
      <motion.div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div className="flex items-center gap-3 mb-3">
            <motion.div 
              className="w-1.5 h-8 bg-gradient-to-b from-teal-700 to-teal-600 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: 32 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.h3 
              className="text-teal-700 text-base lg:text-lg font-bold tracking-widest uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: false }}
            >
              <i className="fas fa-certificate mr-2"></i>Certifications
            </motion.h3>
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Industry-Recognized Credentials
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: false }}
          >
            Specialized certifications validating expertise in AI, data processing, and modern web development technologies.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border-t-4 border-teal-700"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon Container */}
              <motion.div 
                className={`${cert.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md transition-all duration-300`}
                whileHover={{ scale: 1.2, rotate: 8 }}
              >
                <i className={`${cert.icon} text-2xl`}></i>
              </motion.div>

              {/* Title and Issuer */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-teal-800 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-bold text-teal-700 mb-4 uppercase tracking-wide">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* CTA Arrow */}
              <motion.div 
                className="flex items-center justify-end pt-6 border-t border-gray-200 mt-6"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <i className="fas fa-arrow-right text-teal-700 text-lg"></i>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
