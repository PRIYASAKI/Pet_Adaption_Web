import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import dog from "../assets/dog.webp";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      console.log("Signup Successful:", res.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup Error:", error);
      console.log("Server Response:", error.response?.data); // Log exact error message
      alert(error.response?.data?.msg || "Signup failed! Please check your input.");
    }
  };
  
  return (
    <div className="login-container">
      <div className="image-section">
        <div className="image-placeholder">
          <img src={dog} alt="Signup" className="image-icon" />
        </div>
      </div>
      <div className="login-section">
        <h2 className="login-title">Sign Up</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">🧒</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          </div>
          <div className="input-group">
            <span className="icon">📧</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          </div>
          <button className="login-button" type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="signup-text">
          Already a member? <a href="/login" className="login-link">Login</a>
        </p>
        <p className="terms-text">
          By signing up, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
