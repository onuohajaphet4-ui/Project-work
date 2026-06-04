import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useParams } from "react-router-dom";
import {cards} from "../Page/Product";
import {laptops} from "../Page/Product2";
import {gadgets} from "../Page/Product3";
import './Productdetail.css'
import {Link} from 'react-router-dom'
export default function ProductDetails() {
  const all = [
    ...cards, ...gadgets, ...laptops
  ]
  const { id } = useParams();

  
  
  
  const product = all.find(item => item.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product not found</h2>;
  }


  const form = useRef () 
  
    const sendEmail = (e) => {
      e.preventDefault() ;
  
      emailjs 
      .sendForm(
        'service_f4ymrpo',
        'template_ckwm5wk',
        form.current,
         'yQcrPxg3PWJmvSr8a'
      )
      .then(
        (result) => {
          console.log (result.text)
          alert('Your Meassage has been sent and will be review, expect our reply soon')
        },
        (error) => {
          console.log(error.text)
          alert('Error sending message')
        }
      )
    }

  return (

    <div>
    <div style={{ padding: "20px" , 
                 display:'flex',
                 justifyContent:'center' ,
                 gap:'50px'
        }}

    
        
        className="peak"
    >

      



     <div>
      <h1 style={{ marginBottom: "10px" }}>{product.title}</h1>

      {product.img && (
        <img 
          src={product.img}
          alt={product.title}
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        />
      )}


      {product.price && (
        <p style={{ lineHeight: "1.6", fontSize: "19px", maxWidth: "500px" }}>
          {product.price}
        </p>
       
      )}

      

      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Go Back
      </button>
      </div>

      <div className="detail-con">
         <h1>
            What You Get
         </h1>

         <ul>
            <li className="l1">Reliabe performance for everday use</li>
            <li className="l2 ">Smooth and responsive user experirnce</li>
            <li className="l3">Strong,durable build for long-term use</li>
            <li className="l4">Wide compatibility with multiple devices</li>
            <li className="l5"> Easy setup woth intuitive control</li>
            <li className="l6">Great value at an affordable prive</li>
         </ul>

         <div className="det" >
            <p>
                price
            </p>

            
          {product.price && (
           <p style={{ lineHeight: "1.6", fontSize: "19px", maxWidth: "500px" }}>
          {product.price}
          </p>
          )}
         </div>

        <Link to='/pay'> <button className="booo" >Order Instantly</button></Link>
      </div>

      
       <div className="iconn">
                       <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
                       <hr />
                        <a href="tel:=2348145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
         </div>
    </div>

    <div className="details">

        <div className="decard">
          <h1>
            Delivery Informaton :
          </h1>

          <ul>
            <li>Delivery Within main branch state :1-2 days</li>
            <li>Out side Main branch state: 2-5days</li>
            <li>Payment on delivery: Not available</li>
            <li>Delivery fee: 10$ -30$ deppending on the location</li>
          </ul>

          <div className="quick">
            <p>Need a quick order?</p>
            <a href="https://wa.me/2347074293026" style={{textDecoration:'none' ,color:'inherit'}}>
            <button className="ppks">Chat:+2348145990289</button></a> 
          </div>
        </div>

        <div className="decard">
           <h1>
            Return Policy :
           </h1>

           <ul>
            <li> Returns accepted within 24-48 hours.</li>
            <li>Must be in original packaging.</li>
            <li>refund processed with a week.</li>
           </ul>

           <h1>
            Warranty :
           </h1>

           <ul>
            <li>30-days replacment warranty (if device is defective)</li>
            <li>Not applicable for damage caused by user</li>
           </ul>
        </div>

        <div className="decard">
          <form action="" ref={form} onSubmit={sendEmail} >
            <h1>Delivery Form :</h1>
           <div style={{flexDirection:'column'}}>
            <input type="text" name='name' placeholder="Eter full name" required /> <br /> <br />
            <input type="text" name='phone'placeholder="Enter phone number" required/><br /> <br />
            <input type="text" name='address' placeholder="Enter Deliveryy address" required /><br /> <br />
            <input type="text" name='message' placeholder="Enter name of account used for payment" required /><br /> <br />

            <button type="submit" className="utton">Submit</button>
            </div>
          </form>
        </div>
      </div>

  </div>
  );
}