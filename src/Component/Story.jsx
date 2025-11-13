import React from 'react'
import './Story.css'
import Number from '../Component/Nubers'

const Story = () => {
  return (
    <div>
        <div className="contact-second">
         <h6>
          WHO WE ARE
         </h6>

         <h1>
          We are building Africa's leading Techonolgy Enterprise.
         </h1>

         <p>
          By integrating credit into supply chains and payment flows of our partners, unlocking 
          financial success for individuals and businesses.We are licensed by the Central Bank of 
          Nigeria and have proudly served millions of customers nationwide since 2007.
         </p>
         <div className="stats">
         <div className="stat">
            <h2>
               <Number
               end={2000000}
               duration={1500}
               suffix='+'
               />
            </h2>

            <p>Active Customers </p>
         </div>

         <div className="stat">
            <h2>
               <Number
               
               end={5000000}
               duration={1500}
               suffix='+'
               />
            </h2>

            <p>Customers Satisfied </p>
         </div>
         </div>

         <p>
          We put our customers at the center of what we do. We understand the daily techonology
          needs and pressures of cash-constrained consumers. We continue to work to deliver techonologic
           products that give customers more control and help them to get on with their lives.
         </p>
      </div>

      
    </div>
  )
}

export default Story
