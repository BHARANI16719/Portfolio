import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      id: 1,
      type: 'University',
      icon: 'fas fa-university',
      iconBg: 'bg-blue-100 text-blue-700',
      degree: 'Bachelor of Artificial Intelligence and Data Science',
      institution: 'Kongu Engineering College',
      location: 'Perundurai, Erode',
      status: 'Current',
      highlights: [
        { label: 'CGPA', value: '8.05' },
        { label: 'Status', value: 'Pursuing' },
      ],
      description: 'Specializing in AI, Machine Learning, Data Science, and intelligent systems with hands-on project experience.',
    },
    {
      id: 2,
      type: 'School',
      icon: 'fas fa-school',
      iconBg: 'bg-green-100 text-green-700',
      degree: 'SSLC & HSC',
      institution: 'Malar Matriculation Higher Secondary School',
      location: 'Paramathi Velur',
      status: 'Completed',
      highlights: [
        { label: 'SSLC', value: '94.6%' },
        { label: 'HSC', value: '88.5%' },
      ],
      description: 'Strong foundation in mathematics, science, and academics preparing for higher education.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="flex items-center gap-3 mb-3">
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
              <i className="fas fa-book mr-2"></i>Education
            </motion.h3>
          </div>
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Academic Background
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: false }}
          >
            Demonstrated academic excellence and continuous learning across higher and secondary education with strong performance.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          className="space-y-10 lg:space-y-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative group"
              variants={itemVariants}
            >
              {/* Timeline line (hidden on mobile) */}
              {index < education.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute left-20 top-28 w-1 bg-gradient-to-b from-teal-400 to-teal-200"
                  initial={{ height: 0 }}
                  whileInView={{ height: 160 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: false }}
                ></motion.div>
              )}

              {/* Education Card */}
              <div className="flex gap-6 lg:gap-10">
                {/* Icon */}
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className={`${edu.iconBg} p-5 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <i className={`${edu.icon} text-2xl`}></i>
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className="flex-grow"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 lg:p-10 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Top decorative overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 to-transparent rounded-2xl"></div>
                    </div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                        <div>
                          <motion.h3 
                            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: false }}
                          >
                            {edu.degree}
                          </motion.h3>
                          <motion.p 
                            className="text-lg font-semibold text-teal-700"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: false }}
                          >
                            {edu.institution}
                          </motion.p>
                        </div>
                        <motion.div 
                          className="inline-block"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: false }}
                        >
                          <motion.span 
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm"
                          >
                            {edu.status}
                          </motion.span>
                        </motion.div>
                      </div>

                      {/* Location */}
                      <motion.p 
                        className="text-gray-700 text-sm mb-5 flex items-center gap-2 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        viewport={{ once: false }}
                      >
                        <i className="fas fa-map-marker-alt text-teal-700"></i>
                        {edu.location}
                      </motion.p>

                      {/* Description */}
                      <motion.p 
                        className="text-gray-600 text-base leading-relaxed mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false }}
                      >
                        {edu.description}
                      </motion.p>

                      {/* Highlights Grid */}
                      <motion.div 
                        className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        viewport={{ once: false }}
                      >
                        {edu.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 + idx * 0.05 }}
                            viewport={{ once: false }}
                            whileHover={{ y: -4 }}
                            className="p-4 bg-gradient-to-br from-teal-50 to-white rounded-lg border border-teal-100 group-hover:border-teal-300 transition-colors hover:shadow-lg"
                          >
                            <p className="text-gray-600 text-xs font-semibold uppercase mb-1">
                              {highlight.label}
                            </p>
                            <p className="text-2xl lg:text-3xl font-bold text-teal-700">
                              {highlight.value}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Summary */}
        <motion.div 
          className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: false }}
        >
          {[
            { icon: 'fas fa-award', label: 'High Academic Performance', value: '8.05+ CGPA' },
            { icon: 'fas fa-certificate', label: 'Excellence in Academics', value: '90%+ Score' },
            { icon: 'fas fa-graduation-cap', label: 'Current Pursuits', value: 'AI & DS' },
            { icon: 'fas fa-star', label: 'Achievement', value: 'Consistent' },
          ].map((achievement, idx) => (
            <motion.div 
              key={idx} 
              className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-400 hover:shadow-md transition-all"
              variants={achievementVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -4, shadow: 'md' }}
            >
              <motion.div 
                className="text-3xl text-teal-700 mb-2"
                whileHover={{ scale: 1.2, rotate: 8 }}
              >
                <i className={achievement.icon}></i>
              </motion.div>
              <p className="text-xs text-gray-600 font-semibold mb-1">{achievement.label}</p>
              <p className="font-bold text-gray-900 text-sm">{achievement.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

