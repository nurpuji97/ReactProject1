import React, { useState } from "react";
import Ilustra2 from "../images/ilustrasi2.svg";
import PlaneIcon from "../images/Icon_plane.svg";

import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const { t } = useTranslation();
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    telp: "",
    komentar: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    telp: "",
    komentar: "",
  });

  // // hapus Data
  // const clearData = () => {
  //   FormData.name = "";
  //   FormData.email = "";
  //   FormData.telp = "";
  //   FormData.komentar = "";
  // };

  // Validasi Data
  const validate = () => {
    let valid = true;
    const errors = {};

    if (!FormData.name) {
      errors.name = t("NamaKosong");
      valid = false;
    }

    if (!FormData.email) {
      errors.email = t("EmailKosong");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
      errors.email = t("EmailNotValid");
      valid = false;
    }

    if (!FormData.telp) {
      errors.telp = t("TelpKosong");
      valid = false;
    } else if (!/[0-9+]$/.test(FormData.telp)) {
      errors.telp = t("TelpFormat");
      valid = false;
    }

    if (!FormData.komentar) {
      errors.komentar = t("KomentarKosong");
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit Data
      console.log(FormData);
    }
  };
  return (
    <div id="Contact" className="contact">
      <div className="mb-8"></div>
      <Fade>
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
                {formErrors.name && (
                  <span className="errorMessage">{formErrors.name}</span>
                )}
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
                {formErrors.email && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="group-input">
                <label className="group-input-label">{t("tlp")}</label>
                <input
                  type="text"
                  className="group-input-text"
                  name="telp"
                  maxLength={13}
                  value={FormData.telp}
                  onChange={(e) =>
                    setFormData({ ...FormData, telp: e.target.value })
                  }
                  placeholder="02972341234"
                />
                {formErrors.telp && (
                  <span className="errorMessage">{formErrors.telp}</span>
                )}
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
                {formErrors.komentar && (
                  <span className="errorMessage">{formErrors.komentar}</span>
                )}
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
      </Fade>
    </div>
  );
};

export default Contact;
