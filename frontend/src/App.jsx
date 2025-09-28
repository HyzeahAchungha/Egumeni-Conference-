import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ContactForm from "./Pages/Contact-Us/ContactForm";
import AboutUs from "./Pages/About-Us/AboutUs";



export default function App() {
  return (
    <div className="min-h-dvh bg-[#f2f2f2] text-gray-900">
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    
    </div>
  );
}