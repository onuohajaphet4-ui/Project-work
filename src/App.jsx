import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
         
      </Routes>

      <Footer/>
    </>
  )
}

export default App
