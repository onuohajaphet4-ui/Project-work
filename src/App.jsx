import { useState } from 'react'

import './App.css'
import {Route,Routes} from 'react-router-dom'
import  Nav from './Component/Nav'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contac'
import Login from './Page/Login'
import Testi from './Page/Testi'
import Logintwo from './Page/Logintwo'
import Product from './Page/Product'
import Footer from './Component/Footer'
import Register from './Component/Register'
import ViewUsers from './Page/ViewUsers'
import CustomerProfile from './Page/CustomerProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>

      <Routes>
         <Route path='/' element = {<Home/>}/>
         <Route path='/log' element = {<Login/>}/>
         <Route path='/login' element ={<Logintwo/>}/>
         <Route path='/about' element = {<About/>}/>
         <Route path='/contact' element = {<Contact/>}/>
         <Route path='/testimonial' element = {<Testi/>}/>
         <Route path='/product' element = {<Product/>} />
          <Route path='/Register' element = {<Register/>} />
          <Route path='/CustomerProfile' element = {<CustomerProfile/>} />
          <Route path="/viewusers/:id" element={<ViewUsers />} />
         
      </Routes>

      <Footer/>
    </>
  )
}

export default App
