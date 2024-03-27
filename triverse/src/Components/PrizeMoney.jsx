import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PrizeMoney = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5 // Set the threshold to 50% visibility
  });

  return (
    <div className="center-container">
      <div ref={ref} className='PrizeMoney-component-body'>
        <motion.p
          className='pTag'
          initial={{ opacity: 0, y: 20, scale:1.6 }} // Initial opacity and y offset
          animate={{
            opacity: inView ? 1 : 0,
           
            scale: inView ? 1 : 2.3 ,// Fade in when in view
            y: inView ? 0 : 20 // Slide up when in view
          }}
          transition={{
            duration: 0.6, // Dura  tion of animation
            ease: 'easeInOut', // Easing function
            
             // Easing function
          }}
        >
          Get a chance <br /> to win cash <br /> <span className="fancy">prizes worth 30k</span>
        </motion.p>
      </div>
    </div>
  );
}

export default PrizeMoney;
