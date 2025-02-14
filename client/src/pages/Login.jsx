import React, { useState } from "react";
import backgroundImage from "../assets/bg.avif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          width: "250px",
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: "24px", fontWeight: "bold" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "210px",
              padding: "6px",
              margin: "15px 0px 8px 8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "20px",
              marginBottom: "40px",
            }}
          />
          <label style={{ fontSize: "24px", fontWeight: "bold" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "210px",
              padding: "6px",
              margin: "15px 0px 8px 8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "20px",
              marginBottom: "40px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "180px",
              padding: "8px",
              background: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              marginLeft: "30px",
              fontSize: "24px",
              borderRadius: "4px",
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: "20px", fontSize: "16px" }}>
          Already not a member? <a href="/signup" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;