import React from 'react'
import { motion } from 'framer-motion'
const Solutions = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      Solutions
    </motion.div>
  );
}

export default Solutions