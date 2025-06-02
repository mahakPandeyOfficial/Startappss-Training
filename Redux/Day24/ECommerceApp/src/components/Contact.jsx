import React from 'react';

function Contact() {
  return (
    <div style={{  minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container" style={{ backgroundColor: '#FFE8CD', borderRadius: '1rem', padding: '3rem' }}>
        <h1 className="mb-4" style={{ color: '#D45D5D' }}>Contact Us</h1>
        <p style={{ fontSize: '1.1rem', color: '#5C3A21' }}>
          Have questions, feedback, or need support? We’re here to help!
          Reach out to us anytime and we’ll get back to you as soon as possible.
        </p>

        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..."></textarea>
          </div>

          <button type="submit" className="btn" style={{ backgroundColor: '#FFD6BA', color: '#5C3A21' }} onClick={alert.bind(null, 'Message sent!')}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
