import React from 'react'

const Form = () => {
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
              <form action="" className='formm'>
                <div className="d">
                  <label htmlFor="">Name</label>


                  <label htmlFor="" className='dd'>Email</label>
                </div>
                <div className="diii">
                  
                 <input type="text" placeholder='Enter Name' /> 
                
                   
                  <br /> <br />
                  <input type="email" placeholder='Enter Email' /> 
                </div>
                

                <div className="d">
                  <label htmlFor="">Phone</label>


                  <label htmlFor="" className='ddd'>Address</label>
                </div>

                <div className="diiii">
                
                 <input type="text" placeholder='Enter Phone Number' /> 

                 <br /> <br />
                 <input type="text" placeholder='Enter Addrress' /> 
                </div>
                
               
                <div className="mess">
                  <label htmlFor=""> Your Message</label> <br />  <br />
                  <input type="textArea"   className='message'/>
                </div>

                <h4>
                  By submitting, you agree to our <span>Privacy Policy</span>
                </h4>

                <button>
                  Submit
                </button>




              </form>
           </div>
        </div>
    </div>
  )
}

export default Form
