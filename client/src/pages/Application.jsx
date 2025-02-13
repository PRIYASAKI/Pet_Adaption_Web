import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

const Application = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    experience: "",
    homeSetup: "",
    lifestyle: "",
    agreement: false,
  });

  const [submitted, setSubmitted] = useState(false);

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

    setSubmitted(true);
    alert("Submitted successfully!");

    console.log("Form Data:", formData);
  };

  return (
    <div className="bg">
    <div className="container">
      <div className="form-container">
        <h2>📝 Adoption Application Form</h2>

        {submitted ? (
          <p className="success-message">✅ Submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>Full Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
              <label>Contact Number:</label>
              <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
            </div>

            <div>
              <label>Address:</label>
              <textarea name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div>
              <label>Do you have experience with pets?</label>
              <select name="experience" value={formData.experience} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Some Experience">Some Experience</option>
              </select>
            </div>

            <div>
              <label>What is your home setup like?</label>
              <input type="text" name="homeSetup" value={formData.homeSetup} onChange={handleChange} required />
            </div>

            <div>
              <label>Describe your daily lifestyle:</label>
              <textarea name="lifestyle" value={formData.lifestyle} onChange={handleChange} required />
            </div>

            <div className="flex items-center">
              <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required />
              <label>I agree to provide proper care for the adopted pet.</label>
            </div>

            <button type="submit">📩 Submit Application</button>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default Application;
