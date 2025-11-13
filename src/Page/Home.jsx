import React from 'react'
import {motion} from 'framer-motion'
import './Home.css'
import Hero from'../Component/Hero'
import {Link} from 'react-router-dom'
import phone from '../assets/phone.jpg'
import laptop from '../assets/laptop.jpg'
import smart from '../assets/smart2.jpg'
const Home = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
           <Hero/>

           <div className="free">
                <h3>
                  Claim your free  gift from Jp Gadget
                </h3>
               <div className="free2">
                <p >
                 We are celebrating our amazing customer with exclusive free gifts - our way of saying thanks for being par of jp gadget family
                </p>

                <Link to='/login' style={{textDecoration:'none'}}><button>Click</button></Link>
                </div>
           </div>


           <div className="home-contan">
             <h1>Explore innovation- Your Tech,Your Way</h1>

             <div className="home-card">
                <div className="cardd">
                   <h2>Stay Connected Anywhere with Our Smart Devices</h2>

                   <div className="cardd2">
                     <p>Explore our collection of high-performance smartphones and tablets designed for speed, clarity, and reliability — keeping you connected wherever you go.</p>
                     <img src={phone} alt="" />
                   </div>

                    <Link to='/product'><button>Click to shop</button> </Link>
                </div>

                 <div className="cardd">
                   <h2>Power Meets Productivity with Our Latest Laptops and PCs</h2>

                   <div className="cardd2">
                     <p>From business-ready laptops to high-performance PCs, experience cutting-edge speed, durability, and design — built to keep up with your goals anywhere, anytime.</p>
                     <img src={laptop} alt="" />
                   </div>

                     <Link to='/product'><button>Click to shop</button></Link>
                </div>


                <div className="cardd">
                   <h2>Upgrade Your Lifestyle with Smart Accessories That Do More</h2>

                   <div className="cardd2">
                     <p>Enhance your experience with wireless earbuds, smartwatches, and accessories that bring convenience, style, and innovation to your everyday life activitis.</p>
                     <img src={smart} alt="" />
                   </div>

                    <Link to='/product'><button>Click to shop</button></Link>
                </div>

                 
             </div>
           </div>
              
              <hr  style={{ margin:'50px'}}/>
             <div className="home-end">
               <div className="div1">
                  <h2>From Passion to Progress — Our Tech Story</h2>

                  <p>What started as a passion for modern gadgets has grown into a trusted brand serving customers nationwide. We’re committed to quality, innovation, and building long-lasting relationships through technology.</p>

                 <Link to='/about'> <button>Read our Story</button></Link>
               </div>

               <div className="div2">
                 <h2>Connect with Us Across All Our Branches around the country</h2>

                 <p>We’re closer than you think. Visit any of our branches near you to explore our latest gadgets, get expert advice, or enjoy personalized support. Our team is always ready to assist — wherever you are.</p>

                <Link to='/branch'><button>Find a Branch</button></Link> 
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

export default Home
