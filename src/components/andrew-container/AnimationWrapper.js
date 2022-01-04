import { Box } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 40 },
};

export const AnimationWrapper = props => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
        <Box>{props.children || ''}</Box>
    </motion.article>
  );
};
