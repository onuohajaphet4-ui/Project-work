import React from "react";
import "./Payment.css";
import {useNavigate} from 'react-router-dom'

const PaymentModal = () => {
  

    const navigate = useNavigate ()

   const pay = () => {
    const mobile = /Android|iphone|ipad/i.test(navigator.userAgent)

    if (mobile) {
    window.location.href = 'opay://'
    }else {
    
      window.location.href = 'https://www.opaycheckout.com'

    } 
  
  }
  const payment = () => {
    const accountNumber = '8145990289'
  }
  const copyClip = () => {
     const accountNumber = '8145990289'

    navigator.clipboard.writeText(accountNumber)
    .then (() => {
      alert('Copied')
    }).catch(() => {
      alert('Failed to copy')
    })
    
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Complete Your Order</h2>
        <p>
          You’ll be redirected to OPay to complete your payment securely.
        </p>

       <h2  style={{paddingTop:'10px'}}>Account No: <button onClick={copyClip} style={{padding:'4px', fontSize:'15'}}> 8145990289</button> </h2> 
        <h4>Name:Onuoha Japhet </h4>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={() => navigate(-1)} >
            Cancel
          </button>

          <a href="https://paystack.shop/pay/q3pile4504" className="proceed-btn" >
            Proceed to OPay
          </a>
        </div>
      </div>

       <div className="iconn">
                       <a href="https://wa.me/2347074293026"><ion-icon name="logo-whatsApp" style={{color:'black'}}></ion-icon></a>
                       <hr />
                        <a href="tel:=08145990289"><ion-icon name="call-outline" style={{color:'black' }}></ion-icon></a>
         </div>
    </div>
  );
};

export default PaymentModal;