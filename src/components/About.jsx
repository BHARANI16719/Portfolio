import { motion } from 'framer-motion';

const About = () => {
  const infoCards = [
    {
      id: 1,
      icon: 'fas fa-graduation-cap',
      label: 'Degree',
      value: 'Artificial Intelligence and Data Science',
    },
    {
      id: 2,
      icon: 'fas fa-university',
      label: 'College',
      value: 'Kongu Engineering College',
    },
    {
      id: 3,
      icon: 'fas fa-chart-bar',
      label: 'CGPA',
      value: '8.05',
    },
    {
      id: 4,
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Perundurai, Erode',
    },
  ];

  return (
    <motion.section 
      id="about" 
      className="py-20 lg:py-32 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        {/* Section Header */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="flex items-center gap-3 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
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
              <i className="fas fa-user-circle mr-2"></i>About Me
            </motion.h3>
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            About My Journey
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: false }}
          >
            Discover more about my background, skills, and passion for building intelligent systems that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.12 }}
          viewport={{ once: false }}
        >
          {/* Left Side - Detailed Paragraph */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.p 
              className="text-gray-700 text-lg leading-loose font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              Motivated AI&DS undergraduate with a strong interest in software development and intelligent systems. Skilled in Python, C and Java, with hands-on experience building machine learning projects and efficient data-driven applications from concept to deployment.
            </motion.p>

            <motion.p 
              className="text-gray-700 text-lg leading-loose font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: false }}
            >
              Passionate about learning new technologies, solving real-world problems and contributing to innovative AI solutions with clean and scalable code. I love the intersection of theory and practical application.
            </motion.p>

            {/* Key Skills Highlights */}
            <motion.div 
              className="pt-8 space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-bold text-gray-900">Key Skills</h3>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, staggerChildren: 0.08, delay: 0.25 }}
                viewport={{ once: false }}
              >
                {[
                  'Machine Learning',
                  'Data Science',
                  'Python Programming',
                  'Web Development',
                  'C & Java',
                  'Problem Solving',
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + idx * 0.08 }}
                    viewport={{ once: false }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <i className="fas fa-check text-teal-700 text-xs"></i>
                    </motion.div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.button 
              className="group relative px-10 py-3.5 bg-gradient-to-r from-teal-700 to-teal-800 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download"></i>
              <span>Download My Resume</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"
              ></motion.div>
            </motion.button>
          </motion.div>

          {/* Right Side - Info Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {infoCards.map((card, idx) => (
              <motion.div
                key={card.id}
                className="group relative p-7 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl hover:from-teal-50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <motion.div 
                  className="mb-4 p-3 bg-teal-100 rounded-lg w-fit group-hover:bg-teal-700 group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  <i className={`${card.icon} text-2xl text-teal-700 group-hover:text-white`}></i>
                </motion.div>

                {/* Label */}
                <p className="text-sm font-semibold text-gray-600 mb-1 group-hover:text-teal-700 transition-colors">
                  {card.label}
                </p>

                {/* Value */}
                <p className="text-lg font-bold text-gray-900 leading-snug">
                  {card.value}
                </p>

                {/* Accent line on hover */}
                <motion.div 
                  className="h-1 bg-teal-700 mt-3"
                  initial={{ width: 0 }}
                  whileHover={{ width: 32 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
