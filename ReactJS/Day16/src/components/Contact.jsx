import React, { useState } from 'react';
import './contact.css';
import { FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  // This function is used to handle the change in the input fields, update the state with new variablre
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // This function is used to handle the form submission, prevent the default behavior and show an alert with the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted:', form);      //right now it is only showing the alert ,later on this data wiill sent to server
  };

  return (
    <div className="contact-container">
      <h1 className="title">Contact Us</h1>
      <p className="subtitle">Contact us for a quote, help or to join the team.</p>

      <div className="contact-info"> 
        <div className="info-item">
          <FiMapPin />
          <p>Startappss System, Heerabagh colony, Indore M.P</p>
        </div>
        <div className="info-item highlight">
          <FiPhone />
          <p>+91 1234567890</p>
        </div>
        <div className="info-item">
          <FiMail />
          <p>startappss.com</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-left">
          <label>
            Your Name
            <div className="input-icon">
              <FiUser />
              {/*By setting input field required it has a power that without filling this user can't submit the form */}
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            </div>
          </label>
          <label>
            Mail
            <div className="input-icon">
              <FiMail />
              <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>
          </label>
          <label>
            Phone
            <div className="input-icon">
              <FiPhone />
              <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            </div>
          </label>
        </div>
        <div className="form-right">
          <label>
            Message
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
