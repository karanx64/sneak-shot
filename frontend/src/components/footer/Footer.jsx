import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section-1">
        <div className="logo">SNEAK SHOT</div>
        <div>
          Get in touch with us via e-mail or below mentioned social media
          platforms.
        </div>
        <input type="email" name="email" id="footer-email" />
      </div>
      <div className="footer-section-2"></div>
      <div className="footer-section-3"></div>
    </div>
  );
};

export default Footer;
