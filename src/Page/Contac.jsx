import React from 'react'
import {motion} from 'framer-motion'
import '../Page/Contac.css'
import { i } from 'framer-motion/client'
import img from '../assets/hero img.webp'
import Contactinfo from '../Component/Contactinfo.jsx'

const Testi = () => {
  return (
   <div>
     <motion.div
         initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
      <div className="container">
         <div className='fact'>
      <h1 className='contact'>We would <br />love to hear <br /> from you.</h1>
      <p className='contactp'>We're always ready to help. Get in touch and let’s <br />assist you every step of the way.</p>
         </div>
         <img src={img} alt="" />
      </div>
    
        </motion.div>
        <Contactinfo/>

   </div>
  )
}

export default Testi
