import React from "react";
import Image from "../images/image.jpg";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-content-profile">
          <img src={Image} alt="about-content-profile-imageProfile" />
          <div className="about-content-profile-description">
            {/* tabs */} test
          </div>
        </div>
        <div className="aboutContentWork">test</div>
      </div>
    </div>
  );
};

export default About;
