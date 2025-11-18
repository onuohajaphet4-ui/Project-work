import React from 'react'
import {motion} from 'framer-motion'
import './About.css'
import Story from '../Component/Story'
import Miles from '../Component/Miles'
import about1 from '../assets/about-con1.svg'
import about2 from '../assets/about-con2.svg'
import {Link} from 'react-router-dom'
import { IoBulb, IoShieldCheckmark, IoLeaf, IoPeople, IoStar, IoHeart } from "react-icons/io5";
const Testi = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="about-hero">

        <div className="hero-sec">
             <h4>
               ABOUT US
            </h4>

            <h1>
              Shaping a world where Tech advancment is within reach
            </h1>
        </div>


      </div>

      <Story/>

       <div className="about-con">
             <div className="con1">
                <h6 className='about-h6'>
                    Our Vision
                </h6>

                <h4 className='about-h44'>To be Africa’s leading Tech development provider.</h4>

                <img src= {about1} alt="" />
             </div>

             <div className="con2">
                <h6  className='about-h6'>
                    Our Mission
                </h6>

                <h4  className='about-h44'>To ensure acces to Tech solution is a universal opportunity.</h4>

                <img src= {about2} alt="" />
             </div>
          </div>

          <hr />


          <div className="identity">
             <h1>Our Identity</h1>
 

             <p className='p'>    
              Built on passion, innovation, and trust — this is what defines Gadget Hero.
             </p>

             <div className="identity-con">
               <div className="identity-card">

              <IoBulb size={40}/>
                 
                 <h2>
                  Innovation
                 </h2>

                 <p>
                   We stay ahead by exploring new ideas and transforming challenges into smarter, simpler tech 
                   solutions that inspire progress.
                 </p>
                  
              </div>

              <div className="identity-card">

               <IoShieldCheckmark size={40}/>
                 
                 <h2>
                  Integrity
                 </h2>

                 <p>  
                    We believe in honesty, transparency, and doing what’s right — building trust with every 
                    product, partnership, and promise.
                 </p>
                  
              </div>

              <div className="identity-card">

                <IoLeaf size={40} />
                 
                 <h2>
                    Excellence
                 </h2>

                 <p>  
                  We’re committed to delivering quality in everything we do, striving to exceed expectations and 
                  set new standards in technology.
                 </p>
                  
              </div>


                

              <div className="identity-card">

                < IoPeople size={40}/>
                 
                 <h2>
                      Collaboration
                 </h2>

                 <p>  
                  We believe success is a team effort — built through open communication,
                  shared ideas, and strong partnerships that drive innovation forward.
                 </p>
                  
              </div>


              <div className="identity-card">
                < IoHeart size={40} />
               
                 
                 <h2>
                      Customer Focus
                 </h2>

                 <p>  
                  Our customers are at the heart of everything we do. Their needs inspire us to innovate, improve, and create experiences that truly matter.
                 </p>
                  
              </div>


              <div className="identity-card">

                 < IoStar size={40} />
                 
                 <h2>
                     Sustainability
                 </h2>

                 <p>  
                 
                 We’re dedicated to creating technology that not only enhances lives but 
                  also protects the environment ,build a smarter, greener future for all.
                 </p>
                  
              </div>

               
             </div>


            
          </div>

        
      
        <Miles/>


        <div className="about-contact">
          <h1 className='coooo'>
            Start your journey to Techonolgy Enjoyment today
          </h1>
           <div className="about-contact-flex">
              <div className="flexx-card">
                <h1>
                  Contact us today
                </h1>

                <p>
                  Have questions about our products? We're here to help.
                </p>

                <button>
                <a href="tel:=2349069358552" style={{textDecoration:'none' , color :'inherit'}}>   Call Now</a>
                </button>
              </div>

              <div className="flexx-card2">
                <h1>
                  Visit our branch today
                </h1>

                <p>
                 Prefer face-to-face chat? Find a branch close to you.
                </p>

                <button>
                 <Link to='/branch' style={{ textDecoration:'none' , color :'inherit'}}>  Locate A Branch </Link>
                </button>
              </div>
           </div>
        </div>



      <div className="iconn">
               <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
               <hr />
                <a href="tel:=2348145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
      </div>

      
    </motion.div>
  )
}

export default Testi
