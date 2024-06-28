import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <p>If you want to add your restaurant to the Ridgeway Plaza website, contact us:</p>
          <a href="mailto:ridgewayplazadirectory@gmail.com" className="email">ridgewayplazadirectory@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
