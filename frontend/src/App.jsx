import React from 'react';

import RegistrationForm from './Pages/Register/Register'
import LoginForm from './Pages/Login/Login'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home/Home';
import ContactForm from "./Pages/Contact-Us/ContactForm";
import AboutUs from "./Pages/About-Us/AboutUs";
import Communities from './Pages/Communities/Communities';
import Partner from './Pages/Partner/Partner';
import Explore from './Pages/Explore/Explore';
import PrivacyPolicy from './Pages/Privacy-Policy/Policy';

function App() {


  return (
    <>
      <div>
        
        <Routes>
          {/* redirect root to /register */}
         <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/community" element={<Communities />} />
           <Route path="/Partner" element={<Partner />} /> 
           <Route path="/explore" element={<Explore />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

        </Routes>


      </div>



    </>
  )
}

export default App