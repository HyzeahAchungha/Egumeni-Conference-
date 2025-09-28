import React from 'react';

import RegistrationForm from './Pages/Register/Register'
import LoginForm from './Pages/Login/Login'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home/Home';
import ContactForm from "./Pages/Contact-Us/ContactForm";
import AboutUs from "./Pages/About-Us/AboutUs";
import Community from './Pages/Community/community';
import Partners from './Pages/Partners/partners';
import Explore from './Pages/Explore/Explore';

function App() {


  return (
    <>
      <div>

        <Routes>
          {/* redirect root to /register */}
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/community" element={<Community />} />
           <Route path="/partners" element={<Partners />} /> 
           <Route path="/explore" element={<Explore />} />


        </Routes>


      </div>



    </>
  )
}

export default App