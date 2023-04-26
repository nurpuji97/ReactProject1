import React, { useState } from "react";
import Ilustra2 from "../images/ilustrasi2.svg";
import PlaneIcon from "../images/Icon_plane.svg";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    telp: "",
    komentar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };
  return (
    <div id="Contact" className="contact">
      <div className="mb-8"></div>
      <div className="contact-title">{t("kontak")}</div>
      <div className="contact-subTitle">{t("desContact1")}.</div>
      <div className="contact-subTitle mb-[35px]">{t("desContact2")}</div>
      <div className="contact-container">
        <div className="contact-container-form">
          <form onSubmit={handleSubmit}>
            <div className="group-input">
              <label className="group-input-label">{t("nama")}</label>
              <input
                type="text"
                className="group-input-text"
                name="name"
                value={FormData.name}
                onChange={(e) =>
                  setFormData({ ...FormData, name: e.target.value })
                }
                placeholder="John"
              />
            </div>
            <div className="group-input">
              <label className="group-input-label">{t("email")}</label>
              <input
                type="text"
                className="group-input-text"
                name="email"
                value={FormData.email}
                onChange={(e) =>
                  setFormData({ ...FormData, email: e.target.value })
                }
                placeholder="thisis@Email.com.id"
              />
            </div>
            <div className="group-input">
              <label className="group-input-label">{t("tlp")}</label>
              <input
                type="text"
                className="group-input-text"
                name="telp"
                value={FormData.telp}
                onChange={(e) =>
                  setFormData({ ...FormData, telp: e.target.value })
                }
                placeholder="02972341234"
              />
            </div>
            <div className="group-input">
              <label className="group-input-label">{t("komentar")}</label>
              <textarea
                name="komentar"
                onChange={(e) =>
                  setFormData({ ...FormData, komentar: e.target.value })
                }
                value={FormData.komentar}
                className="group-input-text"
                cols="30"
                rows="10"
                placeholder="this is comment"
              ></textarea>
            </div>
            <button type="submit" className="btn-submit bg-primary-default">
              <img src={PlaneIcon} className="self-center" alt="plane_icon" />
              <p>{t("kirim")}</p>
            </button>
          </form>
        </div>
        <div className="contact-container-ilustration">
          <img src={Ilustra2} className="mx-auto" alt="ilustrasi2" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
