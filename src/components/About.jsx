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
          {/* Tabs */}
          <Tabs>
            <div label="About">
              <p className="indent-3 mb-2 text-primary-shades-300">
                Nur Puji adalah seorang desainer dan developer pemula yang lulus
                dari Universitas Bhayangkara Jaya pada tahun 2020. Dia memiliki
                kemampuan dalam merancang dan membuat website yang berkualitas,
                serta pengetahuan yang solid di bidang teknologi informasi.
              </p>
              <p className="indent-3 mb-2 text-primary-shades-300">
                Meskipun baru memulai kariernya, dia membawa energi dan
                antusiasme yang tinggi untuk memulai kariernya di industri ini
                dan selalu siap untuk belajar dan mengembangkan kemampuannya
                lebih lanjut.
              </p>
            </div>
            <div label="Education">
              <div className="group-education">
                <p className="group-education-insitusi">
                  Universitas Bhayangkara Jaya
                </p>
                <p className="group-education-tahun">
                  16 September 2015 - 16 Agustus 2020
                </p>
                <p className="group-education-kejuruan">Teknik Informatika</p>
              </div>
              <div className="group-education">
                <p className="group-education-insitusi">BPPTIK Bekasi</p>
                <p className="group-education-tahun">
                  05 Agustus - 09 Agustus 2019
                </p>
                <p className="group-education-kejuruan">
                  Junior Web Programmer
                </p>
              </div>
              <div className="group-education">
                <p className="group-education-insitusi">BBPLK Bekasi</p>
                <p className="group-education-tahun">
                  18 Februari - 01 Juli 2019
                </p>
                <p className="group-education-kejuruan">
                  IT Software For Bussines
                </p>
              </div>
            </div>
          </Tabs>
        </div>
        <div className="about-content-work">
          <p>What I Do</p>
        </div>
      </div>
    </div>
  );
};

export default About;
