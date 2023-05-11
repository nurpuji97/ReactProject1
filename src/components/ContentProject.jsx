import React from "react";
import { NavLink } from "react-router-dom";
import ImageCard from "../images/image_portofolio-1.jpg";

const ContentProject = () => {
  return (
    <div className="ContentProject">
      <div className="containerCard-Project">
        <div className="cardProject">
          <img src={ImageCard} className="rounded mb-[35px]" alt="ImageCard" />
          <p className="titleCard">Ini Aplikasi</p>
          <p className="descCard">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, earum eos? Delectus possimus soluta dolorem tempore
            aperiam, voluptates vitae minus.
          </p>
          <NavLink to="" className="btnCard">
            Lihat Selanjutnya
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContentProject;
