import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {

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
       <div className="contact-us">
          <div className="us-fact">
           <h1>
              Leave us a Message
           </h1>

           <p>
              Send in your inquiries and feedback, and we will respond as soon as possible.
           </p>
           </div>


           <div className="di">
              <form action="" className='formm' ref={form} onSubmit={sendEmail}>
                <div className="d">
                  <label htmlFor="" className='dddd'>Name</label>


                  <label htmlFor="" className='dd'>Email</label>
                </div>
                <div className="diii">
                  
                 <input type="text" name='name' placeholder='Enter Name' required   /> 
                
                   
                  <br /> <br />
                  <input type="email" name='email' placeholder='Enter Email' required /> 
                </div>
                

                <div className="d">
                  <label htmlFor="" className='dddd'>Phone</label>


                  <label htmlFor="" className='ddd'>Address</label>
                </div>

                <div className="diiii">
                
                 <input type="text" name='phone' placeholder='Enter Phone Number'  required  /> 

                 <br /> <br />
                 <input type="text" name='address' placeholder='Enter Addrress' required  /> 
                </div>
                
               
                <div className="mess">
                  <label htmlFor=""> Your Message</label> <br />  <br />
                  <input type="textArea" name='message'   className='message' required />
                </div>

                <h4>
                  By submitting, you agree to our <span>Privacy Policy</span>
                </h4>

                <button type='submit'>
                  Submit
                </button>




              </form>
           </div>
        </div>
    </div>
  )
}

export default Form
