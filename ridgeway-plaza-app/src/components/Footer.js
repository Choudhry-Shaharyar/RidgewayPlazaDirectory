import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <a href="mailto:ridgewayplazadirectory@gmail.com" className="email">
            ridgewayplazadirectory@gmail.com
          </a>
          <div className="call-to-action">
            <p>Subscribe to our newsletter for the latest updates, deals, and restaurant news.</p>
            <a
              href="https://ridgewayplazaeats.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40ridgewayplazaeats&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true"
              className="cta-button"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
