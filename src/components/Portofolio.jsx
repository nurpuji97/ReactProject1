import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/image_portofolio-1.jpg";
import Image2 from "../images/image_portofolio-2.jpg";
import Image3 from "../images/image_portofolio-3.jpg";

const Portofolio = () => {
  return (
    <div className="portofolio" id="portofolio">
      <div className="mb-8"></div>
      <p className="portofolio-title">Portofolio</p>
      <p className="portofolio-subtitle">Ini adalah karya terbaik aku</p>
      <div className="portofolio-container">
        {/* card portofolio */}
        <div className="portofolio-container-card">
          <img
            src={Image1}
            className="portofolio-container-card-image"
            alt="gambar-portofolio"
          />
          <div className="portofolio-container-card-desc">
            <p className="portofolio-container-card-desc-title">
              Subrek Android
            </p>
            <p className="portofolio-container-card-desc-Subtitle">
              Website untuk mempromosikan aplikasi android dibidang finansial
              agar mempermudah mengatur finansial serta transaksi anda.
            </p>
            <Link to="" className="portofolio-container-card-desc-link">
              Lihat Selengkapnya.....
            </Link>
          </div>
        </div>

        {/* card portofolio */}
        <div className="portofolio-container-card">
          <img
            src={Image2}
            className="portofolio-container-card-image"
            alt="gambar-portofolio"
          />
          <div className="portofolio-container-card-desc">
            <p className="portofolio-container-card-desc-title">Markey</p>
            <p className="portofolio-container-card-desc-Subtitle">
              Podia Podcast adalah aplikasi kumpulan konten audio untuk
              menghibur anda. konten audio podcast terlengkap dari berbagai
              negara.
            </p>
            <Link to="" className="portofolio-container-card-desc-link">
              Lihat Selengkapnya.....
            </Link>
          </div>
        </div>

        {/* card portofolio */}
        <div className="portofolio-container-card">
          <img
            src={Image3}
            className="portofolio-container-card-image"
            alt="gambar-portofolio"
          />
          <div className="portofolio-container-card-desc">
            <p className="portofolio-container-card-desc-title">
              Podia Podcast
            </p>
            <p className="portofolio-container-card-desc-Subtitle">
              Podia Podcast adalah aplikasi kumpulan konten audio untuk
              menghibur anda. konten audio podcast terlengkap dari berbagai
              negara.
            </p>
            <Link to="" className="portofolio-container-card-desc-link">
              Lihat Selengkapnya.....
            </Link>
          </div>
        </div>

        {/* Link Semua Project */}
        <Link to="" className="portofolio-continue">
          Lihat Project Lainnya........
        </Link>
      </div>

      {/* Testimoni */}
      <div className="testimoni"></div>
    </div>
  );
};

export default Portofolio;
