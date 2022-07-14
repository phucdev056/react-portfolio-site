import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <section className="contact-section">
      <div className="container">
        <h2>GET IN TOUCH</h2>
        <p className="description">If you like what you see and want me editing one of your videos, contact me below and I’ll get back to you.</p>
        <div className="form-section">
          <div className="group-form">
            <div className="group-form-item">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} />
            </div>
            <div className="group-form-item">
              <input type="email" name="email" placeholder="Your Email"/>
            </div>
          </div>
          <div className="group-form-item">
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button className="primary-link">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
