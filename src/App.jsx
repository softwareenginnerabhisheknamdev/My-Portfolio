 import React from 'react'
import Navbar from './Conponents/Navbar/Navbar'
import Hero from './Conponents/Hero/Hero'
import About from './Conponents/About/About'
import Services from './Conponents/Services/Services'
import MyWork from './Conponents/MyWork/MyWork'
import Contact from './Conponents/Contact/Contact'
import Footer from './Conponents/Footer/Footer'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
// import Link from './page/Age'
import Age from './page/Age'
// import { ToastContainer } from 'react-toastify'
// import './app.css'

 
 function App() {
   return (
     <div  >
       <Navbar />
       <Hero />
       <About />
       <Services />
       <MyWork />
       <Contact />
       <Footer />
       
       <Routes>
        <Route path='/age' element={<Age></Age>}></Route>
       </Routes>
     </div>
   );
 }
 
 export default App
 