import React from "react";
import Tabs from "../elements/tabs/Tabs";
import Image from "../images/image.jpg";
import IconWeb from "../images/Icon_Webdesain.svg";
import IconFront from "../images/Icon_Frontend.svg";
import IconBack from "../images/Icon_Backend.svg";

// import { useTranslation } from "react-i18next";

const About = () => {
  // const { t } = useTranslation();
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-content-profile">
          <img src={Image} alt="about-content-profile-imageProfile" />
          {/* Tabs */}
          <Tabs>
            <div label="About">
              <p className="indent-3 mb-2 text-primary-shades-500 dark:text-primary-tints-400">
                Nur Puji adalah seorang desainer dan developer pemula yang lulus
                dari Universitas Bhayangkara Jaya pada tahun 2020. Dia memiliki
                kemampuan dalam merancang dan membuat website yang berkualitas,
                serta pengetahuan yang solid di bidang teknologi informasi.
              </p>
              <p className="indent-3 mb-2 text-primary-shades-500 dark:text-primary-tints-400">
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
          <p className="about-content-work-title">What I Do</p>
          <div className="about-content-work-group_card">
            {/* card */}
            <div className="about-content-work-group_card-card">
              <img
                className="w-[42px] mb-[30px] text-center mx-auto"
                src={IconWeb}
                alt="icon-card"
              />
              <p className="mb-2.5 text-[21px] font-medium dark:text-primary-tints-300">
                Web Desain{" "}
              </p>
              <p className="text-primary-shades-400 text-sm dark:text-primary-tints-500">
                membuat website yang atraktif, efisien, responsif dan
                mobile-friendly untuk meningkatkan pengalaman pengguna.
              </p>
            </div>

            {/* card */}
            <div className="about-content-work-group_card-card">
              <img
                className="w-[64px] mb-[30px] text-center mx-auto"
                src={IconFront}
                alt="icon-card"
              />
              <p className="mb-2.5 text-[21px] font-medium dark:text-primary-tints-300">
                Frond End{" "}
              </p>
              <p className="text-primary-shades-400 text-sm dark:text-primary-tints-500">
                Pengetahuan tentang HTML, CSS, dan JavaScript. dapat
                mengaplikasikan prinsip-prinsip desain responsif
              </p>
            </div>

            {/* card */}
            <div className="about-content-work-group_card-card">
              <img
                className="w-[60px] mb-[30px] text-center mx-auto"
                src={IconBack}
                alt="icon-card"
              />
              <p className="mb-2.5 text-[21px] font-medium dark:text-primary-tints-300">
                Back End{" "}
              </p>
              <p className="text-primary-shades-400 text-sm dark:text-primary-tints-500">
                Memahami bahasa pemrograman PHP dan MySQL , mengkonfigurasi
                server serta mengelola basis data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
