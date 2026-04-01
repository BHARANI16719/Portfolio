import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Student Mentor',
      icon: 'fas fa-brain',
      iconColor: 'from-blue-100 to-blue-50',
      iconBg: 'bg-blue-700 text-white',
      description: [
        'Designed and developed an AI-based student mentoring system for academic guidance and career support',
        'Implemented personalized learning recommendations, doubt clarification, and study planning',
        'Analyzed student inputs to provide topic suggestions, resources, and performance insights',
        'Gained understanding of AI concepts, NLP basics, and decision-making systems',
      ],
      tech: ['Python', 'Machine Learning', 'NLP (Basics)'],
      github: 'https://github.com/BHARANI259',
    },
    {
      id: 2,
      title: 'Circular Playlist with Looping',
      icon: 'fas fa-music',
      iconColor: 'from-purple-100 to-purple-50',
      iconBg: 'bg-purple-700 text-white',
      description: [
        'Designed and implemented a circular playlist system that allows continuous looping of songs without interruption',
        'Used circular linked list / queue data structure for next and previous track navigation',
        'Implemented looping logic to return to the first song after the last track',
      ],
      tech: ['Java', 'Python', 'Data Structures'],
      github: 'https://github.com/BHARANI259',
    },
    {
      id: 3,
      title: 'Cattle Breed Prediction',
      icon: 'fas fa-image',
      iconColor: 'from-green-100 to-green-50',
      iconBg: 'bg-green-700 text-white',
      description: [
        'Designed and developed a deep learning-based cattle breed prediction system using CNN to classify breeds from images',
        'Applied image augmentation, preprocessing, and feature extraction to improve model accuracy',
        'Trained and evaluated the model using computer vision techniques',
      ],
      tech: ['Image Augmentation', 'TensorFlow/Keras', 'OpenCV'],
      github: 'https://github.com/BHARANI259',
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
    <section id="projects" className="py-20 lg:py-32 bg-gray-50">
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
              <i className="fas fa-project-diagram mr-2"></i>Featured Projects
            </h3>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            My Projects
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            A showcase of technical projects demonstrating expertise in AI, Data Structures, and Machine Learning with real-world applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border-2 border-white/60 hover:border-teal-200"
            >
              {/* Premium gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"></div>

              {/* Top Color Strip */}
              <motion.div 
                initial={{ height: 2 }}
                whileHover={{ height: 3 }}
                className={`bg-gradient-to-r ${project.iconColor} transition-all duration-300`}
              ></motion.div>

              {/* Card Content */}
              <div className="p-8 space-y-5 relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className={`p-3.5 rounded-xl ${project.iconBg} flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all`}
                  >
                    <i className={`${project.icon} text-2xl`}></i>
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description - Bulleted List */}
                <ul className="space-y-3 ml-1">
                  {project.description.map((point, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: false }}
                      className="flex gap-3 text-gray-700 text-sm leading-relaxed font-light"
                    >
                      <span className="text-teal-700 font-bold mt-1 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-5 border-t border-gray-100">
                  <p className="text-xs uppercase font-semibold text-gray-600 mb-3 tracking-wider">
                    <i className="fas fa-code mr-2"></i>Tech Stack
                  </p>
                  <motion.div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold group-hover:bg-teal-100 group-hover:text-teal-700 transition-all shadow-sm border border-gray-200/60"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* GitHub Link */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: false }}
                  className="pt-2"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-teal-700 to-teal-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 shadow-md"
                  >
                    <i className="fab fa-github"></i>
                    View on GitHub
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-gray-600 text-lg mb-6">Interested in exploring more?</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 bg-gradient-to-r from-teal-700 to-teal-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 shadow-md"
          >
            <i className="fas fa-external-link-alt"></i>
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
