import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Star from "../elements/Star";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

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

  const getPortofolio = async () => {
    const response = await axios.get("http://localhost:4000/portofolio");

    setPortofolio(response.data.response);
  };

  useEffect(() => {
    getPortofolio();
  }, []);

  // Filter Portofolio
  const FilterData = Object.values(portofolio).filter(
    (value) => value.Language === props.translate
  );

  // console.log(FilterData);

  // Testimoni
  let TestiProps = props.JsonData.Testimoni;

  // Filter Testimoni
  const FiltertestiData = Object.values(TestiProps).filter(
    (value) => value.Lang === props.translate
  );

  return (
    <div className="portofolio" id="portofolio">
      <div className="mb-8"></div>
      <Fade>
        <p className="portofolio-title">{t("portofolio")}</p>
        <p className="portofolio-subtitle">{t("subTitlePorto")}</p>

        <div className="portofolio-container">
          {FilterData.slice(0, 2).map((Data) => (
            <Fade>
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
            </Fade>
          ))}

          {/* Link Semua Project */}
          <Link to="/project" className="portofolio-continue">
            {t("linkPorto")}
          </Link>
        </div>

        {/* Testimoni */}
        <div
          className={`testimoni ${FiltertestiData <= 0 ? "hidden" : "block"}`}
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
                <SwiperSlide key={TestiData.Id}>
                  <div className="testimoni-card">
                    <img
                      src={TestiData.Image}
                      className="testimoni-image"
                      alt="testimoni-gambar"
                    />
                    <div className="testimoni-container-desc">
                      <p className="testimoni-title-desc">{TestiData.Name}</p>
                      <p className="testimoni-subtitle-desc">
                        {TestiData.Title}
                      </p>
                      <Star
                        className="mb-[40px] es:max-lg:mb-[20px]"
                        value={TestiData.Rating}
                        width={25}
                        height={25}
                        spacing={6}
                      />
                      <p className="testimoni-desc">{TestiData.Desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Portofolio;
