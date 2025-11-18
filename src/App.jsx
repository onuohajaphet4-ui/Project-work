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
import Product2 from './Page/Product2'
import Product3 from './Page/Product3'
import ProductD from './Page/Productdetail'
import Footer from './Component/Footer'
import Sign from './Component/Register'
import Register from './Component/Register'
import ViewUsers from './Page/ViewUsers'
import CustomerProfile from './Page/CustomerProfile'
import Pay from './Page/Payment'
import Branch from './Component/Branch'
import {motion} from 'framer-motion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>

      <motion.div
               initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
      >

      <Routes>
         <Route path='/' element = {<Home/>}/>
         <Route path='/log' element = {<Login/>}/>
         <Route path='/login' element ={<Logintwo/>}/>
         <Route path='/about' element = {<About/>}/>
         <Route path='/sign' element = {<Sign/>}/>
         <Route path='/contact' element = {<Contact/>}/>
         <Route path='/pay' element = {<Pay/>}/>
         <Route path='/testimonial' element = {<Testi/>}/>
         <Route path='/branch' element = {<Branch/>}/>
         <Route path='/product' element = {<Product/>} />
         <Route path='/product2' element = {<Product2/>} />
         <Route path='/product3' element = {<Product3/>} />
         <Route path='/product/:id' element = {<ProductD/>} />
          <Route path='/Register' element = {<Register/>} />
          <Route path='/CustomerProfile' element = {<CustomerProfile/>} />
          <Route path="/viewusers/:id" element={<ViewUsers />} />
         
      </Routes>

      <Footer/>

      </motion.div>
    </>
  )
}

export default App
