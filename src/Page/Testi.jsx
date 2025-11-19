import React from 'react'
import {motion} from 'framer-motion'
import './Testi.css'
import {  IoPeople} from "react-icons/io5";
const Testi = () => {
      const reviews = [
    {
      id: 1 ,
      name: "Emeka O.",
      review: "Fast delivery and the iPhone I bought was 100% original. Trusted store!",
      rating: 5,
    },
    {
       id: 2 ,
      name: "Aisha M.",
      review: "Great customer service. My laptop came with warranty and works perfectly.",
      rating: 4,
    },
    {
       id: 3 ,
      name: "Umar S.",
      review: "Affordable prices, smooth transaction. I’ll definitely buy again!",
      rating: 5,
    },

  
  ];

  const revview =[
    {
       id: 4 ,
      name: "Aip Q.",
      review: "The speed of thier Customer service is what makes me happy the most.",
      rating: 4,
    },
    { id: 5 ,
      name: "John Vianney.",
      review: " My laptop came safely and it  works perfectly, im so satified.",
      rating: 4,
    },
    {
       id: 6 ,
      name: "Ausss P.",
      review: "Great customer service. ThIer deleveray service is top notch",
      rating: 4,
    },
  ]

  return (

     <motion.div
         initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
    >

    
    <div className="testi-container">
      <p className='japhet'>Testiominial</p>
      <h1>
        Dont take our words for it! <br />
        Hear it from our customers
      </h1>

      
   <div className="word">

    <h2 className="testi-title">Word of praise from others about our good work</h2>
    <div className="row left-row">
      <div className="testi-wrapper">
        {reviews.map((item, index) => (
          <div id= {item.id} key={index} className="testi-card">
            < IoPeople size={40}/>
            <div className="testi-name">{item.name}</div>
            <p className="testi-text">{item.review}</p>
            <div className="testi-stars">
              {"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>
            
          </div>
        ))}

        


      </div>
    </div>


    <div className=" row right-row"  style={{paddingTop:'20px'}} >
      <div className="testi-wrapper">
        {revview.map((item, index) => (
          <div key={'bottom-' + index} className="testi-card">
            < IoPeople size={40}/>
            <div className="testi-name">{item.name}</div>
            <p className="testi-text">{item.review}</p>
            <div className="testi-stars">
              {"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>
            
          </div>
        ))}

         


      </div>
    </div>


    
      </div>

      <h6 className='jjj'>
        jjjjj
      </h6>
    </div>
  


      <div className="iconn">
                       <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
                       <hr />
                        <a href="tel:=08145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
      </div>



          
         
    
        </motion.div>

    
  )
}

export default Testi
