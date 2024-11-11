import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/"> Home </Link>
          
        </div>

        <div className="contact-content">
         
        </div>

        <div className="contact-content">
          
          <Link to="mailto:tamilarasanselvam1701@gmail.com" target="_blank">
            Contact
          </Link>
          <Link to="/"> Tel: 9894410978 </Link>
        </div>

        <div className="contact-content">
         
        </div>
      </div>

      
      <div class="last">
        <p>@ 2024 AR-Website | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
