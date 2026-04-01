import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: 'Programming Languages',
      icon: 'fas fa-code',
      color: 'from-blue-100 to-blue-50',
      iconColor: 'text-blue-700',
      badgeColor: 'bg-blue-100 text-blue-700',
      skills: ['Python', 'Java', 'C'],
    },
    {
      id: 2,
      category: 'Web Development',
      icon: 'fas fa-globe',
      color: 'from-purple-100 to-purple-50',
      iconColor: 'text-purple-700',
      badgeColor: 'bg-purple-100 text-purple-700',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js'],
    },
    {
      id: 3,
      category: 'Databases',
      icon: 'fas fa-database',
      color: 'from-green-100 to-green-50',
      iconColor: 'text-green-700',
      badgeColor: 'bg-green-100 text-green-700',
      skills: ['MySQL','MongoDB'],
    },
    {
        id: 4,
        category: 'Data Science/ML/DL',
        icon: 'fas fa-chart-bar',
        color: 'from-teal-100 to-teal-50',
        iconColor: 'text-teal-700',
        badgeColor: 'bg-teal-100 text-teal-700',
        skills: ['TensorFlow/Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-700 to-teal-600 rounded-full"></div>
            <h3 className="text-teal-700 text-base lg:text-lg font-bold tracking-widest uppercase">
              <i className="fas fa-toolbox mr-2"></i>Skills & Expertise
            </h3>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Technical Skills
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            A comprehensive set of technical competencies in programming, web development, and AI/Data Science with proven expertise.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative bg-gradient-to-br ${category.color} p-8 rounded-2xl border-2 border-white/60 shadow-sm hover:shadow-2xl hover:border-teal-200 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm`}
            >
              {/* Premium background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              
              {/* Decorative glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Category */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-3 rounded-xl bg-white/70 shadow-md group-hover:shadow-lg group-hover:bg-white transition-all ${category.iconColor}`}
                  >
                    <i className={`${category.icon} text-2xl`}></i>
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-800 transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: false }}
                      whileHover={{ scale: 1.05 }}
                      className={`${category.badgeColor} px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm hover:shadow-md transition-all backdrop-blur-sm border border-white/40`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover indicator */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-0.5 bg-gradient-to-r from-teal-700 to-transparent transition-all duration-300"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {[
            { icon: 'fas fa-laptop-code', label: 'Programming', value: '3 Languages' },
            { icon: 'fas fa-globe', label: 'Web Tech', value: '5+ Technologies' },
            { icon: 'fas fa-database', label: 'Databases', value: 'SQL, NoSQL' },
            { icon: 'fas fa-brain', label: 'Frameworks', value: '4+ Specialties' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl border-2 border-gray-100/60 shadow-sm hover:border-teal-300 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl text-teal-700 mb-3"
              >
                <i className={stat.icon}></i>
              </motion.div>
              <p className="text-gray-600 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-gray-900 font-bold text-lg">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Recruiter-Friendly Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="p-6 lg:p-8 bg-gradient-to-r from-teal-50 via-teal-25 to-cyan-50 border-2 border-teal-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-300"
        >
          <p className="text-gray-800 text-sm leading-relaxed">
            <i className="fas fa-lightbulb text-teal-700 mr-3 text-lg"></i>
            <span className="font-semibold text-gray-900">Quick Overview:</span> Proficient in Python and Java for backend systems, experienced with SQL databases, strong foundation in web technologies (React, Node.js, Express), and deep passion for AI/ML applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
