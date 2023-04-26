import React from "react";
import { Link } from "react-router-dom";
// import Image1 from "../images/image_portofolio-1.jpg";
// import Image2 from "../images/image_portofolio-2.jpg";
// import Image3 from "../images/image_portofolio-3.jpg";
import imgTesti from "../images/Image2.jpg";
import Star from "../elements/Star";
import { useTranslation } from "react-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper";

const Portofolio = (props) => {
  const { t } = useTranslation();

  // Portofolio
  let PortoProps = props.JsonData.Portofolio;

  // Filter Portofolio
  const FilterData = Object.values(PortoProps).filter(
    (value) => value.Lang === props.translate
  );

  // Testimoni
  let TestiProps = props.JsonData.Testimoni;

  // Filter Testimoni
  const FiltertestiData = Object.values(TestiProps).filter(
    (value) => value.Lang === props.translate
  );

  return (
    <div className="portofolio" id="portofolio">
      <div className="mb-8"></div>
      <p className="portofolio-title">{t("portofolio")}</p>
      <p className="portofolio-subtitle">{t("subTitlePorto")}</p>
      <div className="portofolio-container">
        {FilterData.map((Data) => (
          <div key={Data.Id} className="portofolio-container-card">
            <img
              src={Data.Image}
              className="portofolio-container-card-image"
              alt="gambar-portofolio"
            />
            <div className="portofolio-container-card-desc">
              <p className="portofolio-container-card-desc-title">
                {Data.Name}
              </p>
              <p className="portofolio-container-card-desc-Subtitle">
                {Data.Desc}
              </p>
              <Link to="" className="portofolio-container-card-desc-link">
                {t("linkCardPorto")}
              </Link>
            </div>
          </div>
        ))}

        {/* Link Semua Project */}
        <Link to="" className="portofolio-continue">
          {t("linkPorto")}
        </Link>
      </div>

      {/* Testimoni */}
      <div className="testimoni">
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
                    src={imgTesti}
                    className="testimoni-image"
                    alt="testimoni-gambar"
                  />
                  <div className="testimoni-container-desc">
                    <p className="testimoni-title-desc">{TestiData.Name}</p>
                    <p className="testimoni-subtitle-desc">{TestiData.Title}</p>
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
            {/* <SwiperSlide>
              <div className="testimoni-card">
                <img
                  src={imgTesti}
                  className="testimoni-image"
                  alt="testimoni-gambar"
                />
                <div className="testimoni-container-desc">
                  <p className="testimoni-title-desc">Asmuni Siharahap</p>
                  <p className="testimoni-subtitle-desc">Manager</p>
                  <Star
                    className="mb-[40px] es:max-lg:mb-[20px]"
                    value={3}
                    width={25}
                    height={25}
                    spacing={6}
                  />
                  <p className="testimoni-desc">
                    Website Nurpuji memberikan layanan yang sangat baik dan
                    profesional. Saya sangat puas dengan hasil yang diberikan
                    oleh website Nurpuji. Sangat merekomendasikan website ini
                    kepada siapapun yang membutuhkan layanan pembuatan website
                    dengan kualitas terbaik. Terima kasih Nurpuji!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimoni-card">
                <img
                  src={imgTesti}
                  className="testimoni-image"
                  alt="testimoni-gambar"
                />
                <div className="testimoni-container-desc">
                  <p className="testimoni-title-desc">Asmuni Siharahap</p>
                  <p className="testimoni-subtitle-desc">Manager</p>
                  <Star
                    className="mb-[40px] es:max-lg:mb-[20px]"
                    value={3}
                    width={25}
                    height={25}
                    spacing={6}
                  />
                  <p className="testimoni-desc">
                    Website Nurpuji memberikan layanan yang sangat baik dan
                    profesional. Saya sangat puas dengan hasil yang diberikan
                    oleh website Nurpuji. Sangat merekomendasikan website ini
                    kepada siapapun yang membutuhkan layanan pembuatan website
                    dengan kualitas terbaik. Terima kasih Nurpuji!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimoni-card">
                <img
                  src={imgTesti}
                  className="testimoni-image"
                  alt="testimoni-gambar"
                />
                <div className="testimoni-container-desc">
                  <p className="testimoni-title-desc">Asmuni Siharahap</p>
                  <p className="testimoni-subtitle-desc">Manager</p>
                  <Star
                    className="mb-[40px] es:max-lg:mb-[20px]"
                    value={3}
                    width={25}
                    height={25}
                    spacing={6}
                  />
                  <p className="testimoni-desc">
                    Website Nurpuji memberikan layanan yang sangat baik dan
                    profesional. Saya sangat puas dengan hasil yang diberikan
                    oleh website Nurpuji. Sangat merekomendasikan website ini
                    kepada siapapun yang membutuhkan layanan pembuatan website
                    dengan kualitas terbaik. Terima kasih Nurpuji!
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
