import React from 'react'
import {motion} from 'framer-motion'
import '../Page/Contac.css'
import { i } from 'framer-motion/client'
import img from '../assets/hero img.webp'
import Contactinfo from '../Component/Contactinfo.jsx'
import Branch from '../Component/Branch.jsx'
import Map from '../Component/Map.jsx'
import Form from '../Component/Form.jsx'
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
             <h1 className='contacttt-h1'>We would love to hear  from you.</h1>
           <p className='contactp'>We're always ready to help. Get in touch and let’s assist you every step of the way.</p>
         </div>
         <img src={img} alt="" />
       </div>
    
        <Contactinfo/>


        <Map/>
        <Branch/>
        <Form/>

       



        <div className="iconn">
                       <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
                       <hr />
                        <a href="tel:=2348145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
         </div>

      </motion.div>
       

   </div>
  )
}

export default Testi
