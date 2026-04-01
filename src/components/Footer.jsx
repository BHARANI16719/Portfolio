import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'More',
      links: [
        { label: 'Education', href: '#education' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Leadership', href: '#leadership' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/BHARANI259', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bharani-k-759597326', icon: 'fab fa-linkedin' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/BHARANIK2007/', icon: 'fas fa-code' },
    { name: 'Email', url: 'mailto:bharanikanagaraj2007@gmail.com', icon: 'fas fa-envelope' },
  ];

  const linkVariants = {
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

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
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
    <footer id="footer" className="bg-gradient-to-b from-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: false }}
        >
          {/* Brand Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.h3 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-3xl font-bold text-white border-2 border-teal-700 px-4 py-2 rounded-lg w-fit hover:border-teal-600 transition-colors"
            >
              BK
            </motion.h3>
            <motion.p 
              className="text-gray-400 text-sm leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              A passionate developer and designer creating digital experiences that make a difference. AI Engineer & Full Stack Developer.
            </motion.p>
            <motion.div 
              className="flex gap-5 pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15, staggerChildren: 0.08 }}
              viewport={{ once: false }}
            >
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.15 + idx * 0.08 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.25, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 flex items-center justify-center transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                  title={social.name}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIdx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + sectionIdx * 0.1 }}
              viewport={{ once: false }}
            >
              <motion.h4 
                className="text-white font-bold mb-6 uppercase tracking-wider text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + sectionIdx * 0.1 + linkIdx * 0.05 }}
                    viewport={{ once: false }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                      whileHover={{ x: 4 }}
                    >
                      <motion.span 
                        className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ scale: [0, 1] }}
                        transition={{ duration: 0.3 }}
                      ></motion.span>
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <motion.h4 
              className="text-white font-bold mb-6 uppercase tracking-wider text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Contact
            </motion.h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <motion.a 
                  href="mailto:bharanikanagaraj2007@gmail.com" 
                  className="hover:text-teal-400 transition-colors font-medium flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <motion.i 
                    className="fas fa-envelope"
                    whileHover={{ rotate: 12 }}
                  ></motion.i>
                  bharanikanagaraj2007@gmail.com
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                viewport={{ once: false }}
              >
                <motion.a 
                  href="tel:+919943121240" 
                  className="hover:text-teal-400 transition-colors font-medium flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <motion.i 
                    className="fas fa-phone"
                    whileHover={{ scale: 1.2 }}
                  ></motion.i>
                  +91 9943121240
                </motion.a>
              </motion.li>
              <motion.li 
                className="text-gray-400 flex items-center gap-2 font-medium"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.40 }}
                viewport={{ once: false }}
              >
                <i className="fas fa-map-marker-alt"></i>
                Perundurai, Erode
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800/50 my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <motion.p 
            className="font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: false }}
          >
            © {currentYear} Bharani K. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.08 }}
            viewport={{ once: false }}
          >
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Sitemap', href: '#' },
            ].map((item) => (
              <motion.a 
                key={item.label}
                href={item.href} 
                className="hover:text-teal-400 transition-colors font-medium"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 2 }}
                viewport={{ once: false }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <motion.i 
              className="fas fa-arrow-up"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.i>
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
