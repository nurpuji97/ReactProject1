import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoMail, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="sosmed-footer">
          <a href="mailto:nurpujiyanto1997@gmail.com?subject=Komunikasi%20Awal%20Ke%20Pengembang&body=Hai%20Nurpuji">
            <IoMail className="dark:text-primary-tints-400" />
          </a>
          <Link to="https://www.instagram.com/agus_suryanto89/">
            <IoLogoInstagram className="dark:text-primary-tints-400" />
          </Link>
          <Link to="https://www.linkedin.com/in/nur-pujiyanto-6743881b3/">
            <IoLogoLinkedin className="dark:text-primary-tints-400" />
          </Link>
        </div>
        <div className="privasi-footer">
          <Link to="/FAQ" className="link-privasi">
            F.A.Q
          </Link>
          <Link to="/Policy" className="link-privasi">
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
