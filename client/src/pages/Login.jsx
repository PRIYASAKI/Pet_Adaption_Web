import React from "react";
import "./styles.css";
import dog from "../assets/dog.webp";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate=useNavigate();
  
  const handleLogin=(event)=>{
    event.preventDefault();
    alert("Logged in successfully");
    navigate("/");
  }
    return (
    <div className="login-container">
      
      <div className="image-section">
        <div className="image-placeholder">
          <img src={dog} alt="Login" className="image-icon" />
        </div>
      </div>
      <div className="login-section">
        <h2 className="login-title">Login form</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">📧</span>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Already not a member? <a href="/signup" className="signup-link ">SignUp</a>
        </p>
        <p className="terms-text">
          By signing up, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
