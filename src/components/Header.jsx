import React, { useState } from 'react';
import '../styles/Header.css';
import Logo from "../assets/images/logo.png"
import Search from "../assets/images/search-logo.png"
import HeaderImg from "../assets/images/header-img.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="navbar">
        <img
          src={Logo}
          alt="Logo"
          className="logo-image-img logo-image"
        />


        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className="active">Find Jobs</li>
            <li>Top Companies</li>
            <li>Job Tracker</li>
            <li>My Calendar</li>
            <li>Documents</li>
            <li>Messages</li>
            <li>Notifications</li>
          </ul>
        </nav>

        <div className={`search-and-button ${menuOpen ? 'open' : ''}`}>
          <div className="search-box">
            <img
              src={Search}
              alt="Search Icon"
              className="search-icon"
            />
            <input type="text" placeholder="Search" />
          </div>
          <button className="resume-btn" onClick={() => alert("Pressed!")}>
            Resume Builder
          </button>
        </div>
        <div className="right-controls">
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <img
          src={HeaderImg}
          alt="Profile"
          className={`profile-icon ${menuOpen ? 'open' : ''}`}
        />
        </div>
      </div>
    </header>
  );
};

export default Header;
