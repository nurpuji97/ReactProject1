import React from "react";
import Ilustra2 from "../images/ilustrasi2.svg";
import PlaneIcon from "../images/Icon_plane.svg";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <div className="mb-8"></div>
      <div className="contact-title">Contact Me</div>
      <div className="contact-subTitle">
        agar Anda dapat tetap terhubung dan mendapatkan informasi terbaru dari
        kami. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan,
        saran, atau masukan. Kami akan selalu siap untuk membantu Anda.
      </div>
      <div className="contact-subTitle mb-[35px]">
        Anda dapat mengisi form formulir yang tersedia dibawah ini :
      </div>
      <div className="contact-container">
        <div className="contact-container-form">
          <form>
            <div className="group-input">
              <label className="group-input-label">Name</label>
              <input type="text" className="group-input-text" name="name" />
            </div>
            <div className="group-input">
              <label className="group-input-label">Email</label>
              <input type="text" className="group-input-text" name="email" />
            </div>
            <div className="group-input">
              <label className="group-input-label">No Telp</label>
              <input type="text" className="group-input-text" name="telp" />
            </div>
            <div className="group-input">
              <label className="group-input-label">Komentar</label>
              <textarea
                name="komentar"
                className="group-input-text"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit" className="btn-submit bg-primary-default">
              <img src={PlaneIcon} className="self-center" alt="plane_icon" />
              <p>Kirim</p>
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
