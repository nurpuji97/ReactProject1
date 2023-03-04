import React from "react";
import Tabs from "../elements/tabs/Tabs";
import Image from "../images/image.jpg";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-content-profile">
          <img src={Image} alt="about-content-profile-imageProfile" />
          <Tabs>
            <div label="About">
              <p className="mb-2 text-primary-shades-300">
                Nur Puji adalah seorang desainer dan developer pemula yang lulus
                dari Universitas Bhayangkara Jaya pada tahun 2020. Dia memiliki
                kemampuan dalam merancang dan membuat website yang berkualitas,
                serta pengetahuan yang solid di bidang teknologi informasi.
              </p>
              <p className="mb-2 text-primary-shades-300">
                Meskipun baru memulai kariernya, dia membawa energi dan
                antusiasme yang tinggi untuk memulai kariernya di industri ini
                dan selalu siap untuk belajar dan mengembangkan kemampuannya
                lebih lanjut.
              </p>
            </div>
            <div label="Education">Ini Edukasi</div>
          </Tabs>
        </div>
        <div className="aboutContentWork">test</div>
      </div>
    </div>
  );
};

export default About;
