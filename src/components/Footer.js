import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Socials">
        <h3 className="FooterHead">Contact us</h3>
        <ul className="FooterList links">
          <li>
            <img src="/linkedin.png" alt="Linkedin" />
            <a>Linkedin</a>
          </li>
          <li>
            <img src="/twitter.jpeg" alt="Twitter" />
            <a>Twitter</a>
          </li>
          <li>
            <img src="/facebook.png" alt="Facebook" />
            <a>Facebook</a>
          </li>
          <li>
            <img src="/mail.jpeg" alt="Mail" />
            <a>Mail</a>
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
