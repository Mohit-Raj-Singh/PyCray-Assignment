import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2></h2>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#" className="anchor-tag">Api Docs</a>
        <a href="#" className="anchor-tag">About us</a>
        <a href="#" className="anchor-tag">FAQ</a>
        <a href="#" className="anchor-tag">Terms of Services</a>
        <a href="#" className="highlight">Get Started for Free</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
