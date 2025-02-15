import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
   const navigate = useNavigate();
  
      const handleClick = (event) => {
          event.preventDefault();
          alert("Logged Out successfully");
          navigate("/");
      };
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>PET WORLD</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/"><h3>HOME</h3></Link></li>
          <li><Link to="/pets"><h3>PET LIST</h3></Link></li>
          <li><Link to="/petscare"><h3>PET CARE TIPS</h3></Link></li> {/* Fixed the link */}
          <li><Link to="/application"><h3>FORM</h3></Link></li>
        </ul>
      </nav>
      <button className="login-btn" onClick={handleClick}><Link to="/login">LOGOUT</Link></button>
    </header>
  );
};

export default Navbar;
