import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      // means array from 100 then 50 then 0 
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} 
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;