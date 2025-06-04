import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out!</p>
        <p>Email: <a href="mailto: example@example.com">mail</a>
        </p>
        <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
        <p>Follow us on social media for updates:</p>
        <ul>
            <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        <p>We look forward to hearing from you!</p>
    </div>
  )
}

export default Contact
