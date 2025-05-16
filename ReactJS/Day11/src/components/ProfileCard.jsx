import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const ProfileCard = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [bgColor, setBgColor] = useState('#2c3e50');
  const [companyLogo, setCompanyLogo] = useState('');
  const cardRef = useRef(null);

  const downloadCard = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = `${name.replace(/\s+/g, '_')}_Card.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2>Create Your Business Card</h2>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Job Title"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          style={styles.input}
          type="url"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input
          style={styles.inputLogo}
          type="url"
          placeholder="Company Logo URL"
          value={companyLogo}
          onChange={(e) => setCompanyLogo(e.target.value)}
        />
        <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
          Select Card Color:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            style={{ marginLeft: 10 }}
          />
        </label>
      </div>

      <div ref={cardRef} style={{ ...styles.card, backgroundColor: bgColor }}>
        <div style={styles.left}>
          {imageURL ? (
            <img src={imageURL} alt="Profile" style={styles.image} />
          ) : (
            <div style={styles.placeholderImg}>No Image</div>
          )}
        </div>
        <div style={styles.right}>
          <h2 style={styles.name}>{name || 'Your Name'}</h2>
          <p style={styles.position}>{position || 'Your Job Title'}</p>
          <p style={styles.company}>{company || 'Company Name'}</p>
          {companyLogo && (
            <img src={companyLogo} alt="Company Logo" style={styles.logo} />
          )}
        </div>
      </div>

      <button style={styles.button} onClick={downloadCard}>
        Download Business Card
      </button>
    </div>
  );
};

// Inline Styles
const styles = {
  wrapper: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: 600,
    margin: '40px auto',
    marginLeft: '500px',
    padding: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  input: {
    padding: 10,
    fontSize: 16,
  },
  inputLogo: {
    padding: '10px',
    fontSize: 16,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  card: {
    width: 600,
    height: 250,
    borderRadius: 12,
    display: 'flex',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    margin: 'auto',
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
  },
  left: {
    flex: 1,
    background: 'rgba(255,255,255,0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 2,
    padding: '20px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: 200,
    height: 250,
    objectFit: 'cover',
  },
  placeholderImg: {
    width: 150,
    height: 200,
    backgroundColor: '#ccc',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    
    margin: 10,
  },
  position: {
    fontSize: 18,
    marginLeft: 12,
    margin: '10px 0',
  },
  company: {
    fontSize: 16,
    margin: 10,
    opacity: 0.85,
  },
  logo: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    objectFit: 'contain',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 5,
  },
  button: {
    marginTop: 20,
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: '#3498db',
    border: 'solid white',
    color: 'white',
    borderRadius: 6,
    cursor: 'pointer',
  },
};

export default ProfileCard;
