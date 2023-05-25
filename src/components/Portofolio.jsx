import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Star from "../elements/Star";
import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper";
import axios from "axios";

const Portofolio = (props) => {
  const { t } = useTranslation();

  const [portofolio, setPortofolio] = useState([]);
  const [testimoni, setTestimoni] = useState([]);

  const getPortofolio = async () => {
    const response = await axios.get("http://localhost:4000/portofolio");

    setPortofolio(response.data.response);
  };

  // Filter Portofolio
  const FilterData = Object.values(portofolio).filter(
    (value) => value.Language === props.translate
  );

  // Testimoni
  // let TestiProps = props.JsonData.Testimoni;
  const getTestimoni = async () => {
    const resultTestimoni = await axios.get("http://localhost:4000/testimoni");

    setTestimoni(resultTestimoni.data.response);
  };

  // Filter Testimoni
  const FiltertestiData = Object.values(testimoni).filter(
    (value) => value.language === props.translate
  );

  useEffect(() => {
    getPortofolio();
    getTestimoni();
  }, []);

  return (
    <div className="portofolio" id="portofolio">
      <div className="mb-8"></div>
      <p className="portofolio-title">{t("portofolio")}</p>
      <p className="portofolio-subtitle">{t("subTitlePorto")}</p>

      {/* portofolio */}
      <div className="portofolio-container">
        {FilterData.slice(0, 2).map((Data) => (
          <div key={Data.id} className="portofolio-container-card">
            <img
              src={Data.imageUrl}
              className="portofolio-container-card-image"
              alt="gambar-portofolio"
            />
            <div className="portofolio-container-card-desc">
              <p className="portofolio-container-card-desc-title">
                {Data.name}
              </p>
              <p className="portofolio-container-card-desc-Subtitle">
                {Data.Description}
              </p>
              <Link
                to={`Project/${Data.id}`}
                className="portofolio-container-card-desc-link"
              >
                {t("linkCardPorto")}
              </Link>
            </div>
          </div>
        ))}

        {/* Link Semua Project */}
        <Link to="/project" className="portofolio-continue">
          {t("linkPorto")}
        </Link>
      </div>

      {/* Testimoni */}
      <div
        className={`testimoni ${
          FiltertestiData.length < 3 ? "hidden" : "block"
        }`}
      >
        <p className="testimoni-title">{t("testiPorto")}</p>

        {/* testimoni card */}
        <div className="testimoni-container-card">
          <Swiper
            pagination={{
              clickable: true,
            }}
            style={{
              "--swiper-pagination-color": "#778FD0",
              "--swiper-pagination-bullet-inactive-color": "#778FD0",
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay, Pagination]}
            className="mySwiper"
          >
            {FiltertestiData.map((TestiData) => (
              <SwiperSlide key={TestiData.id}>
                <div className="testimoni-card">
                  <img
                    src={TestiData.imageUrl}
                    className="testimoni-image"
                    alt="testimoni-gambar"
                  />
                  <div className="testimoni-container-desc">
                    <p className="testimoni-title-desc">{TestiData.name}</p>
                    <p className="testimoni-subtitle-desc">
                      {TestiData.jabatan}
                    </p>
                    <Star
                      className="mb-[40px] es:max-lg:mb-[20px]"
                      value={TestiData.rating}
                      width={25}
                      height={25}
                      spacing={6}
                    />
                    <p className="testimoni-desc">{TestiData.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
