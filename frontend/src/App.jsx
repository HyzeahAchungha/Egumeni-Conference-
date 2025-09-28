import React from 'react';  
import './App.css'
 import RegistrationForm from './Pages/Register/Register'
import LoginForm from './Pages/Login/Login'
import {  Routes, Route,Navigate } from "react-router-dom";
import Home from './Pages/Home/Home';
import  ContactForm from "./Pages/Contact-Us/ContactForm"
import AboutUs from "./Pages/About-Us/AboutUs"

function App() {


  return (
    <>
      <div>
    
    <Routes>
      {/* redirect root to /register */}
       <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
         <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/about-us" element={<AboutUs/>} />

 
    </Routes>


      </div>
     
      
     
    </>
  )
}

export default App
