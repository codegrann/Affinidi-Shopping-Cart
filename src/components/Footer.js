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
            <Link to="/">
              <img src="/linkedin.png" alt="Linkedin" />
              <a href="#">Linkedin</a>
            </Link>
          </li>
          <li>
            <img src="/twitter.jpeg" alt="Twitter" />
            <a href="#">Twitter</a>
          </li>
          <li>
            <img src="/facebook.png" alt="Facebook" />
            <a href="#">Facebook</a>
          </li>
          <li>
            <img src="/mail.jpeg" alt="Mail" />
            <a href="#">Mail</a>
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
