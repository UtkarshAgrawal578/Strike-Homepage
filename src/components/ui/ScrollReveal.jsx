import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0, yOffset = 30, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.65, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
