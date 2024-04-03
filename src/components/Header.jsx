import React, { useState } from 'react'
import logo from "../assets/images/logo.png"

import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-white font-bold">AI Groceries
        <img className='w-20 h-16 inline-block ms-2' src={logo} alt="" /></Link>
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <FaBars/>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-4">
            <li><Link to={"/"} className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to={"/about"} className="text-white hover:text-gray-300">About</Link></li>
            <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
            <li><Link to={'/login'} className="text-white hover:text-gray-300">Login</Link></li>
            
          </ul>
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Header
