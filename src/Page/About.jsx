import React from 'react'
import {motion} from 'framer-motion'
const Testi = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      About us Section

    </motion.div>
  )
}

export default Testi
