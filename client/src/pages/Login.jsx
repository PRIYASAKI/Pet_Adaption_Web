import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import dog from "../assets/dog.webp";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Track login request state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Disable button while login request is in progress

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token); // Store token for authentication
        alert("Logged in successfully");
        navigate("/"); // Redirect to home page
      } else {
        alert("Unexpected response from server");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.response?.data?.msg || "Login failed! Please try again.");
    } finally {
      setLoading(false); // Re-enable login button after request completion
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <div className="image-placeholder">
          <img src={dog} alt="Login" className="image-icon" />
        </div>
      </div>
      <div className="login-section">
        <h2 className="login-title">Login Form</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="login-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="signup-text">
          Not a member? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
        <p className="terms-text">
          By signing up, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
