/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { motion } from 'framer-motion';

function Title({ children: title = 'xl', size: className, align = 'text-center' }) {
  return (
    <h1
      className={`${className} ${align} font-poppins font-bold text-gray-800 text-left`}
    >
      {title}
    </h1>
  );
}

function SectionTitle({ children: title, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: false, margin: '-50px' }}
      className="my-12 w-full"
    >
      <h1
        className="text-5xl font-extrabold text-brand-title"
        style={{
          textAlign: align,
        }}
      >
        {title}
      </h1>
    </motion.div>
  );
}

export { Title, SectionTitle };
