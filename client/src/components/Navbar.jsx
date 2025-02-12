// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/pets" className="navbar-item">Pet Listings</Link>
        <Link to="/contact" className="navbar-item">Contact Us</Link>
        <Link to="/login" className="navbar-item">Login</Link>
        <Link to="/signup" className="navbar-item">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
