import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContentDetail = ({ data }) => {
  const { t } = useTranslation();

  const dataTools = data.Tools;
  const dataDownload = data.Downloads;
  return (
    <div>
      <div className="DetailContent">
        {/* image */}
        <img
          src={data.Image}
          className="DetailContent-image"
          alt="detailImage"
        />
        <div className="DetailContent-detail">
          {/* left side */}
          <div className="DetailContent-leftSide">
            {/* Description */}
            <div className="groupDesc">
              <p className="groupDesc-title">{t("Deskripsi")}</p>
              <p className="groupDesc-textarea">{data.Desc}</p>
            </div>

            {/* Date End */}
            <div className="groupDesc">
              <p className="groupDesc-title">{t("TanggalSelesai")}</p>
              <p className="groupDesc-textarea">{data.DateEnd}</p>
            </div>

            {/* Ketegori */}
            <div className="groupDesc">
              <p className="groupDesc-title">{t("Kategori")}</p>
              <p className="groupDesc-textarea">{data.Kategori}</p>
            </div>

            {/* Author */}
            <div className="groupDesc">
              <p className="groupDesc-title">{t("Penulis")}</p>
              <p className="groupDesc-textarea">{data.Author}</p>
            </div>
          </div>

          {/* right side */}
          <div className="DetailContent-rightSide">
            {/* icon tools */}
            <div className="groupDesc">
              <p className="groupDesc-title">{t("Alat")}</p>
              <p className="groupDesc-textarea">
                {dataTools.map((items) => (
                  <img
                    key={items.id}
                    src={items.image}
                    className="w-[32px]"
                    alt="gambar-Detail"
                  />
                ))}
              </p>
            </div>

            {/* icon download */}
            <div className="groupDesc">
              <p className="groupDesc-title">{t("Unduh")}</p>
              <p className="groupDesc-textarea">
                {dataDownload.map((down) => (
                  <Link
                    key={down.id}
                    to={down.link}
                    className="flex flex-col py-2 px-2 border border-primary-tints-400 rounded dark:text-primary-tints-500 dark:hover:text-primary-shades-500  hover:bg-primary-tones-300"
                  >
                    <img
                      src={down.image}
                      className="w-[32px] self-center mb-1 dark:bg-primary-tints-500"
                      alt="DownloadIcon"
                    />
                    <span>{down.category}</span>
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
