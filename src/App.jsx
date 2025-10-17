import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import  Nav from './Component/Nav'
// import Home from './Home'
import Product from './Component/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>

      <Routes>
         {/* <Route path='/' element = {<Home/>}/> */}
         <Route path='/product' element = {<Product/>}/>
      </Routes>

      
    </>
  )
}

export default App
