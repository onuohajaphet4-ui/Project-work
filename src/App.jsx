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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>

      <Routes>
         <Route path='/' element = {<Home/>}/>
         <Route path='/product' element = {<Login/>}/>
         <Route path='/about' element = {<About/>}/>
         <Route path='/contact' element = {<Contact/>}/>
         <Route path='/testimonial' element = {<Testi/>}/>
         
      </Routes>

      
    </>
  )
}

export default App
