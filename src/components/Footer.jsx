import React from "react";
import { Link } from "react-router-dom";
import IconEmail from "../images/email.svg";
import IconWhatapps from "../images/Whatapps.svg";
import IconInstagram from "../images/Instagram.svg";
import IconLinkedin from "../images/Linkedin.svg";
import {
  IoLogoInstagram,
  IoMail,
  IoLogoWhatsapp,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="sosmed-footer">
          <a href="mailto:nurpujiyanto1997@gmail.com?subject=Komunikasi%20Awal%20Ke%20Pengembang&body=Hai%20Nurpuji">
            <IoMail />
          </a>
          <Link to="">
            <IoLogoWhatsapp />
          </Link>
          <Link to="">
            <IoLogoInstagram />
          </Link>
          <Link to="https://www.linkedin.com/in/nur-pujiyanto-6743881b3/">
            <IoLogoLinkedin />
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
