import React from 'react'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
 import '../Component/Contactinfo.css'
 import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
 import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
 import CallRoundedIcon from '@mui/icons-material/CallRounded';
 import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
 import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
 import {Link} from 'react-router-dom'

const Contactinfo = () => {
  return (

    <div className="main">
         <h1 className='main-h1'>Contact Information</h1>

         <p className='main-p'>
            
            Send in your inquiries and feedback, and we will respond as soon as possible.

         </p> 
    <div className="conta">
            <div className="conta1">
                 <div className="con-info">
                    <ApartmentOutlinedIcon className="icon" />
                    <h2 className='con-info-h2'>Head Office</h2>
                    <p className='con-info-p'>B49, L'Arcade Mall, Area L, World Bank 14C Okohia Layout, New Owerri, Owerri, Nigeria.</p>

                   <Link to='/branch' style={{textDecoration:'none'}}> <h6 className='con-info-h6'> See Other Branches<ArrowForwardOutlinedIcon className="arrow-icon" /></h6></Link>
                 </div>

                 <div className="con-inf">

                   <AccessAlarmsRoundedIcon className="icon"/>
                    <h2 className='con-info-h2'>Opening Hours</h2>

                    <p className='con-info-p'>8am - 5pm, every weekday</p>
                 </div>
            </div>

            <div className="conta2">
              <a href="#"><ion-icon name="call-outline" style={{color:'lightblue' , fontSize: '30px' , paddingLeft:'15px' }}></ion-icon></a>
                <h2 className='con-info-h'>Contact Details</h2>
               <div className="grey">
               <a href="tel:=2348145990289" style={{textDecoration:'none'}}>
                  <div className="icon" style={{display:'flex'}}>
                  <ContactPhoneRoundedIcon  className='icono'/>
                   < h5 className='con-info-h5'>Mobile</h5>
                  </div>
                </a>
                 <h6 className='con-info-9'>  08145990289</h6>
                 <h6 className='con-info-9'>0289883838383</h6>
                 <h6 className='con-info-9'>09069358553</h6>
                 <a href="https://wa.me/2347074293026" style={{textDecoration:'none'}}>
                    <div className="icon" style={{display:'flex'}}>
                   <a href="#"><ion-icon name="logo-whatsApp" style={{color:'lightblue'}}></ion-icon></a>
                   < h5 className='con-info-h5'>Whatsapp</h5>
                   </div>
                  </a>
                   
                   <h6 className='con-info-9'>+2347074293026</h6>
                 
               </div>


            </div>
      </div>
    </div>
  )
}

export default Contactinfo
