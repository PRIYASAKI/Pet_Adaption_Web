import React, { useState } from "react";
import "./styles.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const Application = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    experience: "",
    homeSetup: "",
    lifestyle: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("You must agree to provide proper care before submitting.");
      return;
    }
    alert("Application Submitted Successfully!");
    console.log("Form submitted:", formData);
    navigate("/");
  };

  return (
    <div className="application-container">
      <div className="overlay"></div> 
      <div className="form-box">
        <h2>Pet Adoption Application</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Contact:</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />

          <label>Do you have pet experience?</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />

          <label>Describe your home setup:</label>
          <input type="text" name="homeSetup" value={formData.homeSetup} onChange={handleChange} required />

          <label>Describe your lifestyle:</label>
          <input type="text" name="lifestyle" value={formData.lifestyle} onChange={handleChange} required />

          <div className="checkbox-container">
            <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} />
            <span>I agree to provide proper care for my pet.</span>
          </div>

          <button className="btn-submit" type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Application;
