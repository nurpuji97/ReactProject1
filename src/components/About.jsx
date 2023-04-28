import React from "react";
import Tabs from "../elements/tabs/Tabs";
import Image from "../images/image.jpg";
import IconWeb from "../images/Icon_Webdesain.svg";
import IconFront from "../images/Icon_Frontend.svg";
import IconBack from "../images/Icon_Backend.svg";

import { useTranslation } from "react-i18next";

const About = (props) => {
  let PendidikanProps = props.JsonData.Pendidikan;

  const { t } = useTranslation();
  return (
    <div className="about" id="about">
      <div className="mb-8"></div>
      <h1 className="about-title">{t("tentang")}</h1>
      <div className="about-content">
        <div className="about-content-profile">
          <img src={Image} alt="about-content-profile-imageProfile" />
          {/* Tabs */}
          <Tabs>
            <div label={t("tentang")}>
              <p className="indent-3 mb-2 text-primary-shades-500 dark:text-primary-tints-400">
                {t("DescAbout1")}
              </p>
              <p className="indent-3 mb-2 text-primary-shades-500 dark:text-primary-tints-400">
                {t("DescAbout2")}
              </p>
            </div>
            <div label={t("pendidikan")}>
              {PendidikanProps.map((data) => (
                <div key={data.id} className="group-education">
                  <p className="group-education-insitusi">{data.Name}</p>
                  <p className="group-education-tahun">
                    {data.DateStart} - {data.DateEnd}
                  </p>
                  <p className="group-education-kejuruan">{data.Jurusan}</p>
                </div>
              ))}
            </div>
          </Tabs>
        </div>
        <div className="about-content-work">
          <p className="about-content-work-title">{t("WhatIdo")}</p>
          <div className="about-content-work-group_card">
            {/* card */}
            <div className="about-content-work-group_card-card">
              <img
                className="w-[42px] mb-[30px] text-center mx-auto"
                src={IconWeb}
                alt="icon-card"
              />
              <p className="mb-2.5 text-[21px] font-medium dark:text-primary-tints-300">
                {t("webDesain")}{" "}
              </p>
              <p className="text-primary-shades-400 text-sm dark:text-primary-tints-500">
                {t("webDesainDesc")}
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
                {t("frontEndnDesc")}
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
                {t("backEndDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
