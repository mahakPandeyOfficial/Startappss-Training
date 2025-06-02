import React from 'react';

function About() {
  return (
    <div style={{ backgroundColor: '#FFF2EB', minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container" style={{ backgroundColor: '#FFE8CD', borderRadius: '1rem', padding: '3rem' }}>
        <h1 className="mb-4" style={{ color: '#D45D5D' }}>About ECommerceApp</h1>
        <p style={{ fontSize: '1.1rem', color: '#5C3A21' }}>
          Welcome to <strong>ECommerceApp</strong> – your ultimate online shopping destination!
          We bring the best of products right to your fingertips with an easy-to-use, fast, and secure shopping experience.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#5C3A21' }}>
          Our goal is to provide a seamless shopping experience that saves you time, money, and effort. Whether you’re browsing the latest trends or stocking up on essentials, we’ve got everything you need – all in one place.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#5C3A21' }}>
          We believe that shopping should be fun, inspiring, and worry-free. That’s why we carefully curate our product listings, work with trusted partners, and focus on customer satisfaction from click to delivery.
        </p>
        <div className="mt-4 p-4" style={{ backgroundColor: '#FFD6BA', borderRadius: '0.5rem' }}>
          <h5 style={{ marginBottom: '0.5rem' }}>Our Mission</h5>
          <p style={{ margin: 0 }}>
            To redefine the online shopping experience by combining quality, convenience, and care — every time you shop with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
