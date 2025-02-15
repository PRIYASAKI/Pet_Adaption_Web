import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
