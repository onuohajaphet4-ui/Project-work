import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='div'>
        <h1>Lorommm</h1>
       
       <div className="di">
         <Link to = '/'><li>Home</li></Link>
        <Link to = '/product'> <li>Product</li></Link>
       </div>
    </div>
  )
}

export default Nav
