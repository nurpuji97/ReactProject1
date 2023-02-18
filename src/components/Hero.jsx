import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../images/Ilustrasi.png";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      {/* Left Side Hero */}
      <div className="heroLeft">
        <img src={img1} className="imageHero" alt="ilstrasi-hero" />
      </div>

      {/* Right Side Hero */}
      <div className="heroRight">
        <p className="subTitleHero">{t("subTitleHero")}</p>
        <h1 className="titleHero">
          {t("titleHero1")} & <br /> {t("titleHero2")}
        </h1>
        <a className="buttonHero">{t("buttonHero")}</a>

        <div className="projectCount">
          <div className="project">
            <p>20+</p>
            <span>{t("project")}</span>
          </div>
          <div className="client">
            <p>50+</p>
            <span>{t("client")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
