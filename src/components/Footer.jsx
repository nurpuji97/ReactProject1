import React from "react";
import { Link } from "react-router-dom";
import IconEmail from "../images/email.svg";
import IconWhatapps from "../images/Whatapps.svg";
import IconInstagram from "../images/Instagram.svg";
import IconLinkedin from "../images/Linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="sosmed-footer">
          <Link to="">
            <img src={IconEmail} alt="email" />
          </Link>
          <Link to="">
            <img src={IconWhatapps} alt="Whatapps" />
          </Link>
          <Link to="">
            <img src={IconInstagram} alt="Instagram" />
          </Link>
          <Link to="">
            <img src={IconLinkedin} alt="Linkedin" />
          </Link>
        </div>
        <div className="privasi-footer">
          <Link to="" className="link-privasi">
            F.A.Q
          </Link>
          <Link to="" className="link-privasi">
            Privacy Policy
          </Link>
        </div>
      </div>
      <hr className="garis-footer" />
      <p className="copyright">Copyright © 2023</p>
    </div>
  );
};

export default Footer;
