 import React from 'react'
 import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
 import '../Component/Contactinfo.css'
 import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
 import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
 import CallRoundedIcon from '@mui/icons-material/CallRounded';
 import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
 import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
 
 
 const Contactinfo = () => {
   return (
     <div className='contacttt'>
        <div className='jin'>
            <div className='cho'>
                <h1>Contact Information</h1>
                <p>Send in your inquiries and feedback, and we will respond as soon as possible.</p>
        </div>
        </div>

         <div className="contact-section">
      {/* Box 1 - Head Office */}
      <div className="box">
        <ApartmentOutlinedIcon className="icon" />
        <h2>Head Office</h2>
        <p>Address: L'acarde, New Owerri, Owerri, Nigeria.</p>
        <a href="#">
          See Other Branches <ArrowForwardOutlinedIcon className="arrow-icon" />
        </a> 
        {/* Box 2 - Opening Hours */}
      <div className="box2">
        <AccessAlarmsRoundedIcon className="icon" />
        <h2>Opening Hours</h2>
        <p>8am - 5pm, every weekday</p>
      </div>

      
      </div>

      {/* Box 3 - Contact Details */}
      <div className="box">
        <CallRoundedIcon className="icon" />
        <h2>Contact Details</h2>
        <div className="contact-info">
          <ContactsRoundedIcon className="small-icon" /> Mobile
        </div>
        <div className='cake'>
        <p>+234 814 599 0289</p> <br /> <br />
        <p>+234 906 935 8552</p> <br /> <br />
        <p>+234 987 474 7472</p> <br /> <br />
        </div>
        {/* Box 4 - WhatsApp Contact */}
      <div className="box">
        <ContactPhoneRoundedIcon className="icon" />
        <div className='icon2'>
        <h1>WhatsApp</h1>
        <p>+234 707 429 3026</p>
        </div>
      </div>

      
      </div>
    </div>
  

        </div>
   )
 }
 
 export default Contactinfo 