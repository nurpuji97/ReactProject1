import React, { useState } from "react";
import Ilustra2 from "../images/ilustrasi2.svg";
import PlaneIcon from "../images/Icon_plane.svg";

import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate();

  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    noTlp: "",
    komentar: "",
  });
  // const [name, Setname] = useState("");
  // const [email, Setemail] = useState("");
  // const [noTlp, SetNoTlp] = useState("");
  // const [komentar, Setkomentar] = useState("");

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    noTlp: "",
    komentar: "",
  });

  const showToastMessage = () => {
    toast.success(t("tersimpan"), {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "toast-message",
    });
  };

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

    if (!formData.name) {
      errors.name = t("NamaKosong");
      valid = false;
    }

    if (!formData.email) {
      errors.email = t("EmailKosong");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t("EmailNotValid");
      valid = false;
    }

    if (!formData.noTlp) {
      errors.telp = t("TelpKosong");
      valid = false;
    } else if (!/[0-9+]$/.test(formData.noTlp)) {
      errors.telp = t("TelpFormat");
      valid = false;
    }

    if (!formData.komentar) {
      errors.komentar = t("KomentarKosong");
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit Data

      // const formData = new FormData();
      // formData.append("name", name);
      // formData.append("email", email);
      // formData.append("noTlp", noTlp);
      // formData.append("komentar", komentar);

      try {
        axios
          .post("http://localhost:4000/contact/", formData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        showToastMessage();
      } catch (err) {
        console.log(err.message);
      }
    }
    console.log(formData);
  };
  return (
    <div id="Contact" className="contact">
      <div className="mb-8"></div>

      <div className="contact-title">{t("kontak")}</div>
      <div className="contact-subTitle">{t("desContact1")}.</div>
      <div className="contact-subTitle mb-[35px]">{t("desContact2")}</div>
      <div className="contact-container">
        <div className="contact-container-form">
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div className="group-input">
              <label className="group-input-label">{t("nama")}</label>
              <input
                type="text"
                className="group-input-text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
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
                name="noTlp"
                maxLength={13}
                value={formData.noTlp}
                onChange={(e) =>
                  setFormData({ ...formData, noTlp: e.target.value })
                }
                placeholder="02972341234"
              />
              {formErrors.noTlp && (
                <span className="errorMessage">{formErrors.noTlp}</span>
              )}
            </div>
            <div className="group-input">
              <label className="group-input-label">{t("komentar")}</label>
              <textarea
                name="komentar"
                onChange={(e) =>
                  setFormData({ ...formData, komentar: e.target.value })
                }
                value={formData.komentar}
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
    </div>
  );
};

export default Contact;
