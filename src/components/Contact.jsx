import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
          if (result.text === 'OK') {
            setResult('Thank you for your message. It has been sent.');
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>GET IN TOUCH</h2>
        <p className="description">If you like what you see and want me editing one of your videos, contact me below and I’ll get back to you.</p>
        <div className="form-section">
          <form ref={form} onSubmit={sendEmail}>
            <div className="group-form">
              <div className="group-form-item">
                <input type="text" name="user_name" placeholder="Your Name" />
              </div>
              <div className="group-form-item">
                <input type="email" name="user_email" placeholder="Your Email"/>
              </div>
            </div>
            <div className="group-form-item">
              <textarea name="message" id="message" cols="30" rows="5" placeholder="Your Message"></textarea>
            </div>
            <input type="submit" value="Send" className="primary-link" />
          </form>
          <div className="result-section">
            <p>{result}</p>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Contact;
