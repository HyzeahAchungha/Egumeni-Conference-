import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 bg-[#f5f5f5] border-b border-black/10">
            <div className="mx-auto max-w-[1200px] px-4 h-12 flex items-center gap-4 text-[13px]">
                <Link to="/" className="flex items-center font-extrabold text-[28px] tracking-tight text-[#ff7c3b] leading-none">
                    SHINE
                </Link>
                <nav className="hidden md:flex items-center gap-4 text-gray-800">
                    
                    <Link to="/community" className="hover:underline">Communities | Themes</Link>
                    <Link to="/partners" className="hover:underline">Partners ▾</Link>
                    <Link to="explore" className="hover:underline">Explore ▾</Link>
                    <Link to="/about-us" className="hover:underline">About Us▾</Link>
                    <Link to="/contact-form" className="hover:underline">Contact Us</Link>
                    <button className="ml-2"></button>
                    <a href="#" className="hover:underline">English ▾</a>
                </nav>
                <div className="ml-auto flex items-center gap-4">
                    <Link to="" className="hover:underline">Sign up</Link>
                    <Link to="" className="hover:underline">Log in</Link>
                    <a href="#" className="flex items-center gap-1 hover:underline"><span>Select your language ▾</span></a>
                </div>
            </div>
        </div>

        
    );
}