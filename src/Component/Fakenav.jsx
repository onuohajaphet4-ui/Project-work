import React from 'react'
import './Fakenav.css'
import {Link} from 'react-router-dom'
const Fakenav = () => {
  return (
    <div className='ul'>
       <ul>
         <Link to='/product' style={{color:'inherit' , textDecoration:'none'}}><li>Phones</li> </Link>
         <Link to='/product2'  style={{color:'inherit' , textDecoration:'none'}}><li>Laptops</li></Link>
         <Link to='/product3'  style={{color:'inherit' , textDecoration:'none'}}><li>Accessories</li></Link>
       </ul>
    </div>
  )
}

export default Fakenav
