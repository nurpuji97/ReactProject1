import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../images/Ilustrasi.png";

const Hero = (props) => {
  let HomeProps = props.JsonData;
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
          <div className="mb-2">{t("titleHero1")} &</div>
          <div>{t("titleHero2")}</div>
        </h1>
        <div className="buttonHero">{t("buttonHero")}</div>

        <div className="projectCount">
          <div className="project">
            <p>{HomeProps.Hero.project}</p>
            <span>{t("project")}</span>
          </div>
          <div className="client">
            <p>{HomeProps.Hero.client}</p>
            <span>{t("client")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
