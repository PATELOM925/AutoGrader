import React from 'react';
import { useState, useEffect } from "react";
import './NavgBar.css';
import myImage from '../Assets/Img/auto_ch.png'
import Signup from '../Pages/Signup'
import { Link } from 'react-router-dom';

function NavgBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    <Signup />;
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <a href="#" className="logo">
          <span><img id='logo_img' src={myImage} alt="My Image" /></span>
      </a>
      <div className="cont">
      <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Scenerio</a></li>
        <li><a href="#">Contact</a></li>
        <li></li>
      </ul>
      </div>

      <div className='main'>
        <Link to='/signup' className='user' onClick={handleClick}>
          <i className='ri-user-fill'></i>Sign In/Log In</Link>
        {/* <a href='#'>Register</a> */}
        {/* <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></div> */}
      </div>
      <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></div>
    </header>
  );
}

export default NavgBar;
