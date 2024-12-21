import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="foot-panel1">Back to Top</div>
      <div className="foot-panel2">
        <ul>
          <p>Our Services</p> <br />
          <a>Video Counselling</a>
          <a>Chat counselling</a>
          <a>Career Articles</a>
        </ul>
        <ul>
          <p>Contact Us</p> <br />
          <a>Instagram</a>
          <a>Meta</a>
          <a>Twitter</a>
          <a>Whatsapp</a>
        </ul>
        <ul>
          <p>About Us</p> <br />
          <a>Conditions of Use</a>
          <a>Privacy Notice</a>
          <a>Refund and Cancellation Policy</a>
        </ul>
      </div>
    </div>
  )
}

export default Footer
