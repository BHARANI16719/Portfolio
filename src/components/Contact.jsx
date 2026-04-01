import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'bharanikanagaraj2007@gmail.com',
      link: 'mailto:bharanikanagaraj2007@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 9943121240',
      link: 'tel:+919943121240',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Perundurai, Erode',
      link: null,
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bharani-k-759597326', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/BHARANI259', icon: 'fab fa-github' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/BHARANIK2007/', icon: 'fas fa-code' },
    { name: 'Email', url: 'mailto:bharanikanagaraj2007@gmail.com', icon: 'fas fa-envelope' },
  ];

  const contactInfoVariants = {
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

  const socialVariants = {
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

  const formFieldVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="w-1.5 h-8 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: 32 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            ></motion.div>
            <motion.h3 
              className="text-teal-400 text-base lg:text-lg font-bold tracking-widest uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: false }}
            >
              <i className="fas fa-handshake mr-2"></i>Get In Touch
            </motion.h3>
            <motion.div 
              className="w-1.5 h-8 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: 32 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            ></motion.div>
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: false }}
          >
            Have a project idea, question, or just want to say hello? I'd love to hear from you. Reach out anytime and let's build something amazing together!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: false }}
        >
          {/* Contact Information Cards */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.12 }}
            viewport={{ once: false }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">Contact Information</h3>
              <div className="grid grid-cols-1 gap-5">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link || '#'}
                    variants={contactInfoVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: false }}
                    whileHover={{ y: -8 }}
                    className={`group flex items-start gap-5 p-6 lg:p-7 rounded-2xl border-2 border-gray-700 bg-gray-800/30 hover:bg-gray-800/60 hover:border-teal-400 transition-all duration-300 backdrop-blur-sm ${
                      item.link ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <motion.div 
                      className="text-3xl text-teal-400 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                    >
                      <i className={item.icon}></i>
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-2">{item.label}</p>
                      <motion.p 
                        className="text-white font-semibold text-lg hover:text-teal-400 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        {item.value}
                      </motion.p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-bold mb-8">Follow & Connect</h3>
              <div className="grid grid-cols-2 gap-5">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.3 + idx * 0.08 }}
                    viewport={{ once: false }}
                    whileHover={{ y: -8, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-teal-700/30 to-teal-600/20 border-2 border-teal-600/40 hover:border-teal-400 hover:from-teal-700/50 hover:to-teal-600/40 transition-all duration-300"
                    title={social.name}
                  >
                    <motion.i 
                      className={`${social.icon} text-2xl text-teal-400 group-hover:text-teal-300 transition-colors`}
                      whileHover={{ scale: 1.3, rotate: 12 }}
                    ></motion.i>
                    <motion.span 
                      className="text-white font-bold text-sm group-hover:text-teal-300 transition-colors uppercase tracking-wide"
                      whileHover={{ y: -2 }}
                    >
                      {social.name}
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.div
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.label 
                htmlFor="name" 
                className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                whileHover={{ x: 4, color: '#4dd0e1' }}
              >
                Your Name
              </motion.label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(77, 208, 225, 0.3)' }}
                className="w-full px-6 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:bg-gray-800 transition-all duration-300 font-medium"
                placeholder="Your Full Name"
              />
            </motion.div>

            <motion.div
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.25 }}
              viewport={{ once: false }}
            >
              <motion.label 
                htmlFor="email" 
                className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                whileHover={{ x: 4, color: '#4dd0e1' }}
              >
                Your Email
              </motion.label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(77, 208, 225, 0.3)' }}
                className="w-full px-6 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:bg-gray-800 transition-all duration-300 font-medium"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.30 }}
              viewport={{ once: false }}
            >
              <motion.label 
                htmlFor="subject" 
                className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                whileHover={{ x: 4, color: '#4dd0e1' }}
              >
                Subject
              </motion.label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(77, 208, 225, 0.3)' }}
                className="w-full px-6 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:bg-gray-800 transition-all duration-300 font-medium"
                placeholder="Project inquiry / Collaboration"
              />
            </motion.div>

            <motion.div
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.35 }}
              viewport={{ once: false }}
            >
              <motion.label 
                htmlFor="message" 
                className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider"
                whileHover={{ x: 4, color: '#4dd0e1' }}
              >
                Message
              </motion.label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(77, 208, 225, 0.3)' }}
                className="w-full px-6 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:bg-gray-800 transition-all duration-300 resize-none font-medium"
                placeholder="Tell me about your project or inquiry..."
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full px-8 py-4 bg-gradient-to-r from-teal-700 to-teal-800 text-white font-bold rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 text-lg mt-8"
            >
              <motion.i 
                className="fas fa-paper-plane"
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 12 }}
              ></motion.i>
              Send Message
              <motion.i 
                className="fas fa-arrow-right"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              ></motion.i>
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <p className="text-gray-300 mb-2">
              <span className="font-bold text-white">Bharani K</span> | AI Engineer & Full Stack Developer
            </p>
            <p className="text-gray-500 text-sm">
              © 2026 Bharani K. All rights reserved. | Made with <motion.i 
                className="fas fa-heart text-red-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i> and passion
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
