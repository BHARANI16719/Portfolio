import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const leadershipRoles = [
    {
      id: 1,
      role: 'Executive Member',
      organization: 'Quiz Club',
      location: 'Kongu Engineering College',
      icon: 'fas fa-brain',
      iconBg: 'from-purple-100 to-purple-50',
      iconColor: 'bg-purple-700 text-white',
      description: 'Leading strategic initiatives and organizing competitive quiz events for student engagement.',
      achievements: ['Event Organization', 'Team Leadership', 'Student Engagement'],
    },
    {
      id: 2,
      role: 'Class Representative',
      organization: 'Batch Coordinator',
      location: 'Kongu Engineering College',
      icon: 'fas fa-users',
      iconBg: 'from-blue-100 to-blue-50',
      iconColor: 'bg-blue-700 text-white',
      description: 'Bridging communication between students and faculty, organizing class activities and events.',
      achievements: ['Communication', 'Event Coordination', 'Student Relations'],
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
    <section id="leadership" className="py-20 lg:py-32 bg-gray-50">
      <motion.div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-teal-700 to-teal-600 rounded-full"></div>
            <h3 className="text-teal-700 text-base lg:text-lg font-bold tracking-widest uppercase">
              <i className="fas fa-crown mr-2"></i>Leadership
            </h3>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Leadership & Community Roles
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Demonstrating leadership through strategic initiatives, team coordination, and meaningful community engagement and impact.
          </p>
        </motion.div>

        {/* Leadership Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {leadershipRoles.map((role, idx) => (
            <motion.div
              key={role.id}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Card */}
              <div className={`bg-gradient-to-br ${role.iconBg} border-2 border-gray-100 rounded-2xl p-10 hover:border-teal-300 hover:shadow-2xl transition-all duration-300`}>
                
                {/* Icon */}
                <div className={`${role.iconColor} w-18 h-18 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-120 group-hover:shadow-xl transition-all duration-300`}>
                  <i className={`${role.icon} text-3xl`}></i>
                </div>

                {/* Role Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-teal-800 transition-colors">
                  {role.role}
                </h3>

                {/* Organization & Location */}
                <div className="mb-6 space-y-2">
                  <p className="text-xl font-bold text-teal-700">
                    {role.organization}
                  </p>
                  <p className="text-gray-700 text-base flex items-center gap-2 font-medium">
                    <i className="fas fa-map-marker-alt text-teal-700"></i>
                    {role.location}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-loose mb-8 font-light text-base">
                  {role.description}
                </p>

                {/* Achievements/Skills */}
                <div className="flex flex-wrap gap-3 pt-8 border-t border-gray-200">
                  {role.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full text-xs font-bold bg-opacity-60 border-2 border-gray-200 group-hover:border-teal-400 group-hover:text-teal-700 group-hover:bg-white transition-all shadow-sm"
                    >
                      <i className="fas fa-check-circle text-teal-700"></i>
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Impact Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          {[
            { icon: 'fas fa-trophy', label: 'Leadership Roles', value: '2' },
            { icon: 'fas fa-handshake', label: 'Community Impact', value: 'Strong' },
            { icon: 'fas fa-star', label: 'Event Management', value: 'Active' },
            { icon: 'fas fa-users-alt', label: 'Team Coordination', value: 'Expert' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 lg:p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-teal-300 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
            >
              <motion.div className="text-4xl text-teal-700 mb-3" whileHover={{ scale: 1.2 }}>
                <i className={stat.icon}></i>
              </motion.div>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wide mb-2">{stat.label}</p>
              <p className="font-bold text-gray-900 text-lg">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Leadership;
