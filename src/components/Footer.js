import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="Socials">
        <h3 className="FooterHead">Contact us</h3>
        <ul className="FooterList links">
          <li>
            <Link to="/" className="FooterLink">
              <img src="/linkedin.png" alt="Linkedin" />
              Linkedin
            </Link>
          </li>
          <li>
            <Link to="/" className="FooterLink">
              <img src="/twitter.jpeg" alt="Twitter" />
              Twitter
            </Link>
          </li>
          <li>
            <Link to="/" className="FooterLink">
              <img src="/facebook.png" alt="Facebook" />
              Facebook
            </Link>
          </li>
          <li>
            <Link to="/" className="FooterLink">
              <img src="/mail.jpeg" alt="Mail" />
              Mail
            </Link>
          </li>
        </ul>
      </div>
      <div className="Services">
        <h3 className="FooterHead">Our services</h3>
        <ul className="FooterList">
          <li>Delivery</li>
          <li>Financial Advise</li>
          <li>Product Awareness</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
