import { motion } from 'framer-motion';
import React from 'react';
import { staggerContainer } from '../utils/motion';
import { styles } from '../styles';

const SectionWrapper = (Component: unknown, name: string) => {
  return function higherOrderComponent() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={name}>
          &nbsp;
        </span>
      </motion.section>
    );
  };
};

export default SectionWrapper;
